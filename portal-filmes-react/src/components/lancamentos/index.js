// import './App.css';
// import { Link } from 'react-router-dom'


function Lancamentos() {

  return (
    <div id="lancamentos">
      <h1>Lançamentos</h1>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <iframe title="Adú" class="carousel-video" width="100%" height="360"
              src="https://www.youtube.com/embed/EJZiy9fG8oQ?autoplay=0" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;showinfo"
              allowFullScreen></iframe>
            <div class="carrousel-description">
              <h2>Adú</h2>
              <p>
                <b>Sinopse: </b>
                            Em uma reserva de Mbouma no Senegal, um
                            consultor externo chamado Gonzalo deve impedir a matança de elefantes por caçadores ilegais,
                            mas falha ao
                            tentar salvar o mais importante da reserva. Com isso, o jovem Alika e seu irmão mais novo
                            Adu são forçados
                            a fugir de sua pequena cidade em Mbouma e precisam lidar com a perseguição por testemunharem
                            acidentamente
                            o assassinato.
                        </p>
              <p>
                <b>Diretor: </b> Salvador Calvo
                            <b> Roteiro: </b> Álvaro Augustín
                            <b> Estreia: </b>
                            2020
                        </p>
              <p>
                <b>Elenco: </b>
                            Anna Castillo | Álvaro Cervantes | Jesús Carroza | Miquel Fernández | Luis Tosar
                        </p>
              <p>
                <b>Avaliação: </b>
                            4.5 / 5.0
                        </p>
            </div>
          </div>
          <div class="carousel-item">
            <iframe title="Superman" class="carousel-video" width="100%" height="360"
              src="https://www.youtube.com/embed/Jgj4UocZlno" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            <div class="carrousel-description">
              <h2>Superman: Red Son</h2>
              <p>
                <b>Sinopse: </b>
                            O filme apresena uma história vivida na paranoia da Guerra Fria, que revela como uma nave
                            carregando um recém nascido, que seria conhecido depois como Superman, cai na União
                            Soviética nos anos
                            1950. Criado em um coletivo, o rapaz cresce e se torna um símbolo do povo soviético, o que
                            muda o mundo
                            completamente, já que isso faz com que o Superman entre em conflito com o Batman. Lex Luthor
                            e muitos
                            outros.
                        </p>
              <p>
                <b>Diretor: </b> Sam Liu
                            <b> Roteiro: </b> Mark Millar
                            <b> Estreia: </b>
                            2020
                        </p>
              <p>
                <b>Elenco: </b>
                            Jason Isaacs | Sasha Roiz | Amy Acker | Diedrich Bader
                        </p>
              <p>
                <b>Avaliação: </b>
                            3.6 / 5.0
                        </p>
            </div>
          </div>
          <div class="carousel-item">
            <iframe title="Sonic" class="carousel-video" width="100%" height="360"
              src="https://www.youtube.com/embed/zQEjE_M2Esw" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
            <div class="carrousel-description">
              <h2>Sonic - O Filme</h2>
              <p>
                <b>Sinopse: </b>
                            Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para
                            derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o
                            Doutor Robotnik,
                            responsável por aprisionar animais inocentes em robôs.
                        </p>
              <p>
                <b>Diretor: </b> Jeff Fowler
                            <b> Roteiro: </b> Toru Nakahara
                            <b> Estreia: </b>
                            2020
                        </p>
              <p>
                <b>Elenco: </b>
                            Jim Carrey | Ben Schwartz | James Marsden | Tika Sumpter
                        </p>
              <p>
                <b>Avaliação: </b>
                            4.7 / 5.0
                        </p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Lancamentos;
