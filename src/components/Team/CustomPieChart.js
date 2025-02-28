import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import '../../css/main.css';

const CustomPieChart = ({ data, title, colors = ['#FF0000', '#00FF00', '#0000FF'], width = 400, height = 400 }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Ordina i dati per percentuale decrescente e assegna i colori
  const sortedData = [...data].sort((a, b) => b.value - a.value);
  const assignedColors = sortedData.map((_, index) => colors[index] || colors[colors.length - 1]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="piechart-payload">
          {`${payload[0].name} - ${payload[0].value}%`}
        </div>
      );
    }
    return null;
  };

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="legend-container">
        {payload.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className="legend-item"
            style={{
              opacity: activeIndex === null || activeIndex === index ? 1 : 0.4,
            }}
          >
            <div
              className="legend-color-box"
              style={{ backgroundColor: entry.color }}
            />
            <span className="legend-text">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = value < 10 ? outerRadius + 20 : innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    let fontSize = value > 10 ? 12 : 10;
    fontSize = value < 3 ? 0 : fontSize;

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontSize: `${fontSize}px`,
        }}
      >
      </text>
    );
  };

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div>
      <div className="pie-title">{title}</div>
      <div className="pie-container">
        <div className="pie-content">
          <PieChart width={width} height={height}>
            <Pie
              data={sortedData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
            >
              {sortedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={assignedColors[index]}
                  opacity={activeIndex === null || activeIndex === index ? 1 : 0.4}
                  style={{
                    transform: `scale(${activeIndex === index ? 1.005 : 1})`,
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={renderLegend} verticalAlign="top" />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default CustomPieChart;