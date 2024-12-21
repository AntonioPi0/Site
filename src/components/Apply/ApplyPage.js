import React from "react";
import '../../css/main.css';

const ApplyPage = () => {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfBa4Jo_jN1BNf3HRZGnC5JyPGT_sfu1EGAc7V6rkDczt3CXQ/viewform"; // Sostituisci con il link del tuo modulo

  return (
    <div className="apply-container">
      <h2 className="apply-title">Apply</h2>
      <div className="apply-content">
        <p>
        Sei interessato a unirti al nostro team? È possibile candidarsi per una delle posizioni aperte per il team.
        </p>
        
        <h3>Come candidarsi</h3>
        <p>Per candidarti compila il modulo con tutte le informazioni richieste e i membri del nostro team si occuperanno
          di valutarlo e comunicarti le successive fasi.
        </p>

        <h3>Il processo di selezione</h3>
        <p>
        Dopo aver inviato la tua candidatura, il nostro team di reclutamento esaminerà il tuo profilo.
        Se ritenuto idoneo, verrai contattato per un colloquio.
        </p>

        <h3>Come si svolge il colloquio</h3> 
        <p>Il processo di selezione è caratterizzato da due colloqui: un primo incontro durante il quale discuteremo le tue competenze, esperienze e motivazioni.  Sarà anche un'opportunità per fare domande sul nostro team e sui progetti in essere. Una volta superata questa prima fase, ti inviteremo a completare una task connessa all'area di tuo interesse.
          </p>
        <p>
          Non vediamo l'ora di conoscerti e scoprire come puoi contribuire al successo del nostro team!
        </p>
      </div>
      <div className="apply-button-container">
        <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="apply-button">
          APPLY
        </a>
      </div>
    </div>
  );
};

export default ApplyPage;
