// import './App.css';
// import { Link } from 'react-router-dom'

function Entrevistas() {

  return (
    <div id="entrevistas">
      <h2>Entrevistas & Making of</h2>
      <div className="entrevistas-container">
        <div className="entrevistas-item entrevistas-item1">
          <iframe title="HomemDeFerro" className="entrevistas-video" width="100%" height="250"
            src="https://www.youtube.com/embed/k6efx7A7gho" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <p className="entrevistas-nome-filme">
            <b>Filme: </b>Homem de Ferro 3
          </p>
          <p>
            <b>Diretor: </b> Shane Black
                    <br />
            <b>Rotreito: </b> Nome do roteirista
                    <br />
            <b>Estreia:</b>2013
          </p>
        </div>
        <div className="entrevistas-item entrevistas-item2">
          <iframe title="PlanetaMacacos" className="entrevistas-video" width="100%" height="250"
            src="https://www.youtube.com/embed/4NU9ikjqjC0" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <p className="entrevistas-nome-filme">
            <b>Filme: </b>Planeta dos Macacos: O Confronto
          </p>
          <p>
            <b>Diretor: </b> Matt Reeves
                    <br />
            <b>Rotreito: </b> Rick Jaffa
                    <br />
            <b>Estreia:</b>2014
          </p>
        </div>
        <div className="entrevistas-item entrevistas-item3">
          <iframe title="outroHomemDeFerro" className="entrevistas-video" width="100%" height="250"
            src="https://www.youtube.com/embed/k6efx7A7gho" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <p className="entrevistas-nome-filme">
            <b>Filme: </b>Homem de Ferro 3
          </p>
          <p>
            <b>Diretor: </b> Shane Black
                    <br />
            <b>Rotreito: </b> Nome do roteirista
                    <br />
            <b>Estreia:</b>2020
          </p>
        </div>

      </div>
    </div>
  );
}

export default Entrevistas;
