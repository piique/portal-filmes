// import { Link } from 'react-router-dom'


import panteraImg from '../../img/noticias/pantera.jpg';
import madonaImg from '../../img/noticias/madona.jpg';
import batmanImg from '../../img/noticias/batman.jpg';

import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


function Novidades() {

  const lateralMargin = {
    marginRight: '20px',
  }

  function openLink(link) {
    window.open(link);
  }

  return (
    <div id="novidades">

      <div className="novidades">
        <h2>Novidades</h2>
        <div className="materia-container">

          <div className="materia-item materia-item1">
            <img src={panteraImg} alt="" width="100%" />
            <div className="materia-texto">
              <h5>Pantera Negra morre aos 43 anos</h5>
              <p>
                Ator lutava contra câncer de cólon desde 2016 e morreu em sua casa, nos Estados Unidos.
                <br />
                <a
                  href="https://g1.globo.com/pop-arte/cinema/noticia/2020/08/28/chadwick-boseman-morre-apos-lutar-contra-cancer.ghtml">
                  Saiba mais
                </a>
              </p>
            </div>
          </div>

          <div className="divisoria"></div>

          <div className="materia-item materia-item3">
            <img src={madonaImg} alt="" width="100%" />
            <div className="materia-texto">
              <h5>Madonna vai dirigir filme sobre sua vida</h5>
              <p>
                'O foco sempre será a música' - Diz a cantora em entrevista.
                <br />
                <a
                  href="https://g1.globo.com/pop-arte/cinema/noticia/2020/09/16/madonna-vai-dirigir-filme-sobre-sua-vida-o-foco-sempre-sera-a-musica.ghtml">
                  Saiba mais
                </a>
              </p>
            </div>
          </div>

          <div className="divisoria"></div>

          <div className="materia-item materia-item2">
            <img src={batmanImg} alt="" width="100%" />
            <h5>Batman Pega Covid-19</h5>
            <div className="materia-texto">
              <p>
                Robert Pattinson foi liberado após se recuperar do novo coronavírus e as gravações de "The
                Batman" vão recomeçar, de acordo com o site da revista "Variety".
                <br />
                <a
                  href="https://g1.globo.com/pop-arte/cinema/noticia/2020/09/17/the-batman-robert-pattinson-e-liberado-apos-covid-19-e-gravacoes-recomecam-diz-revista.ghtml">
                  Saiba mais
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="sobre">
        <h2>Sobre</h2>
        <p>
          Site criado como um portal para filmes. O intuito é promover, divulgar e incentivar pessoas a
          assistirem filmes através da amostragem de lançamentos e da apresentação de sinopses. Além disso conta
          como avaliações de pessoas que já assistiram o filme, que podem relatar suas experiencias.
        </p>
      </div>

      <div className="editorial">
        <h2>Editorial</h2>
        <div>
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-fill" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
              d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg>
          <b> Redação: </b> Pedro Vilaça
          <br />
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
            <path fillRule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
          </svg>
          <b> Pesquisa: </b> Pedro Valverde
          <br />
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-camera-reels" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
              d="M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z" />
            <path fillRule="evenodd" d="M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path fillRule="evenodd" d="M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <b> Gerente Geral: </b> Pedro "Piique"
          <br />
          <h4>Redes sociais:</h4>
          <IconButton
            color="inherit"
            onClick={() => openLink('https://www.facebook.com/phvilaca')}
            style={lateralMargin}>
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => openLink('https://twitter.com/phvilaca1999')}
            style={lateralMargin}>
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => openLink('https://www.instagram.com/phvilaca/')}
            style={lateralMargin}>
            <InstagramIcon />
          </IconButton>
        </div>
      </div>

    </div >
  );
}

export default Novidades;
