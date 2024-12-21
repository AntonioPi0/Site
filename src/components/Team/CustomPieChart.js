import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import '../../css/main.css';

const CustomPieChart = ({ data, title, width = 400, height = 400 }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const COLORS = [
    '#FF6B6B', '#4ECDC4', '#FFCE67', '#A29BFE', '#74B9FF', '#00B894', 
    '#FAB1A0', '#E17055', '#6C5CE7', '#0984E3'
  ];

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
                opacity: activeIndex === null || activeIndex === index ? 1 : 0.4 
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
    index 
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = value < 10 ? outerRadius + 20 : innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    let fontSize = value > 10 ? 12 : 10;
    fontSize = value < 3 ? 0 : fontSize;

    // Nascondi la percentuale per la fetta attiva
    if (activeIndex === index) {
      return (
        <text 
          x={x} 
          y={y} 
          fill="white" 
          textAnchor="middle" 
          dominantBaseline="middle"
          style={{
            transition: 'all 0.2s ease',
            fontSize: '14px', // Label grande per fetta attiva
            fontWeight: 'bold'
          }}
        >
          {`${data[index].name}: ${data[index].value}%`}
        </text>
      );
    }

    if (fontSize > 0) {
      return (
        <text 
          x={x} 
          y={y} 
          fill="white" 
          textAnchor="middle" 
          dominantBaseline="middle"
          style={{
            transition: 'all 0.1s ease',
            fontSize: `${fontSize}px`,
          }}
        >
          {`${value}%`}
        </text>
      );
    }

    return null;
  };

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="pie-container">
      <h2 className="pie-title">{title}</h2>
      <div className="pie-content">
        <PieChart width={width} height={height}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine = {false}
            label={renderCustomLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
                opacity={activeIndex === null || activeIndex === index ? 1 : 0.4}
                style={{
                  transform: `scale(${activeIndex === index ? 1.007 : 1})`,
                }}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
              content={renderLegend} 
              verticalAlign='top'
              width={100}
              height={2}
              />
        </PieChart>
      </div>
    </div>
  );
};

export default CustomPieChart;
