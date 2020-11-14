// import './App.css';
// import { Link } from 'react-router-dom'


import avaliador1 from '../../img/avaliadores/avaliador1.jpg';
import avaliador2 from '../../img/avaliadores/avaliador2.jpg';
import avaliador3 from '../../img/avaliadores/avaliador3.jpg';
import avaliador4 from '../../img/avaliadores/avaliador4.jpg';
import avaliador5 from '../../img/avaliadores/avaliador5.jpg';
import avaliador6 from '../../img/avaliadores/avaliador6.jpg';

function Avaliacoes() {

  function maisAvaliacoes() {
    console.log("Mostrar mais avaliações");
  }

  return (
    <div id="avaliacoes">
      <h2>Últimas avaliações</h2>
      <div className="avaliacoes-container">
        <div className="avaliacoes-item avaliacoes-item1">
          <img src={avaliador1} alt="" />
          <b>Anna</b>
          <p>  O filme Como Eu Era Antes de Você é simplesmente incrível! Recomento para todas as
          pessoas, não
          apenas as apaixonadas! Obrigada pela recomendação.
                    <br />
            <br />
          </p>
          <div className="avaliacores-nota"> Nota: <b>4.8/5</b> - 12/09/2020</div>
        </div>
        <div className="avaliacoes-item avaliacoes-item2">
          <img src={avaliador2} alt="" />
          <b>Maicon Gomes</b>
          <p>Estou animado com esse novo lançamento, Adú parece um filme muito comovente. Volto para
          avaliar
                    depois que assistir.</p>
          <div className="avaliacores-nota"> Nota: <b> 4.3</b> - 07/09/2020</div>
        </div>
        <div className="avaliacoes-item avaliacoes-item3">
          <img src={avaliador3} alt="" />
          <b>João Pedro</b>
          <p>Gostando bastante do site, sempre atualizado com os melhores filmes do momento. Poderia
                    colocar mais filmes de comédia como Aprendiz de Espiã. Filme é demais! </p>
          <div className="avaliacores-nota"> Nota: <b>4.7/5</b> - 31/08/2020</div>
        </div>
        <div className="avaliacoes-item avaliacoes-item4">
          <img src={avaliador4} alt="" />
          <b>Ana Maria</b>
          <p>Esse Jogos Vorazes em destaque é muito envolvente! O filme tem ação, drama, emoção e
          romance tudo ao
          mesmo tempo, realmente gostei muito e recomento.
          </p>
          <div className="avaliacores-nota"> Nota: <b>4.8/5</b> - 22/08/2020</div>
        </div>
        <div className="avaliacoes-item avaliacoes-item5">
          <img src={avaliador5} alt="" />
          <b>Paulo Henrique</b>
          <p> O filme Cobra não deveria estar nessa lista. Não gostei muito do filme, parece meio lento.
                    Além disso apresenta um enredo pouco evolvente</p>
          <div className="avaliacores-nota"> Nota: <b>2.4/5</b> - 14/09/2020</div>
        </div>
        <div className="avaliacoes-item avaliacoes-item6">
          <img src={avaliador6} alt="" />
          <b>Matheus Xavier</b>
          <p>Acompanho o site a algum tempo e estou gostando das atualizações feitas. Recomento colocar
          sinopses
                    de mais filmes.</p>
          <div className="avaliacores-nota"> Nota: <b>-/-</b> - 11/11/2019</div>
        </div>
      </div>
      <div className="avaliacoes-button">
        <button type="button" className="btn btn-secondary avaliacoes" onClick={maisAvaliacoes}>
          + Mais avaliações
        </button>
      </div>
    </div>
  );
}

export default Avaliacoes;
