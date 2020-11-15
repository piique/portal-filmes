// import './App.css';
// import { Link } from 'react-router-dom'

import React from 'react';
import api from '../api';

class Lancamentos extends React.Component {
  // const apiKey = 'cf2c3634ed88cbfe8f8472ad68c511e6' // chave do themoviedb
  constructor(props) {
    super(props)
    this.state = {
      lancamentos: [],
    }
  }

  buscaLancamentos(page = 1) {
    api.get(`discover/movie?api_key=cf2c3634ed88cbfe8f8472ad68c511e6&language=pt-BR&sort_by=release_date.asc&include_adult=false&include_video=true&page=${page}&primary_release_year=2020&vote_average.gte=7`)
      .then(({ data }) => {
        let count = 0
        // pega 3 lançamentos que possuem overview
        this.setState({
          lancamentos: data.results.filter(((e) => {
            return e.overview !== "" && count++ <= 3 && e.poster_path
          })).map((e) => {
            console.log(e.release_date)
            const data = new Date(e.release_date)
            e.release_date = (
              (data.getDay() < 10 ? '0' + data.getDay() : data.getDay()) + '/'
              + (data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1) + '/'
              + data.getFullYear()
            )
            return e;
          })
        })
        if (this.state.lancamentos.length < 3)
          this.buscaLancamentos(page + 1)
        console.log('chamou a requisiçao')
        console.log(this.state.lancamentos);
      }).catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    // lançamentos
    this.buscaLancamentos()
  }

  render() {
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
              <img src={(this.state.lancamentos.length !== 0 ? 'https://image.tmdb.org/t/p/w500' + this.state.lancamentos[0].poster_path : '')} alt="" />
              <div class="carrousel-description">

                <h2>
                  {this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[0].title
                    : ''}
                </h2>
                <p>
                  <b>Sinopse: </b>
                  {this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[0].overview
                    : ''}
                </p>
                <p>
                  <b>Data de Lançamento: </b>
                  {(this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[0].release_date
                    : '')}
                  <br />
                  <br />
                  <b>Título Original: </b>
                  {(this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[0].original_title
                    : '')}
                  <br />
                  <br />
                  <b>Avaliação: </b>
                  {(this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[0].vote_average
                    : '') + ' /  10 '}
                </p>

              </div>
            </div>
            <div class="carousel-item">
              <img src={(this.state.lancamentos.length !== 0 ? 'https://image.tmdb.org/t/p/w500' + this.state.lancamentos[1].poster_path : '')} alt="" />
              <div class="carrousel-description">

                <h2>
                  {this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[1].title
                    : ''}
                </h2>
                <p>
                  <b>Sinopse: </b>
                  {this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[1].overview
                    : ''}
                </p>
                <p>
                  <b>Data de Lançamento: </b>
                  {(this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[1].release_date
                    : '')}
                  <br />
                  <br />
                  <b>Título Original: </b>
                  {(this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[1].original_title
                    : '')}
                  <br />
                  <br />
                  <b>Avaliação: </b>
                  {(this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[1].vote_average
                    : '') + ' /  10 '}
                </p>

              </div>
            </div>
            <div class="carousel-item">
              <img src={(this.state.lancamentos.length !== 0
                ? 'https://image.tmdb.org/t/p/w500' + this.state.lancamentos[3].poster_path
                : '')} alt="" />
              <div class="carrousel-description">

                <h2>
                  {this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[3].title
                    : ''}
                </h2>
                <p>
                  <b>Sinopse: </b>
                  {this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[3].overview
                    : ''}
                </p>
                <p>
                  <b>Data de Lançamento: </b>
                  {(this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[3].release_date
                    : '')}
                  <br />
                  <br />
                  <b>Título Original: </b>
                  {(this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[3].original_title
                    : '')}
                  <br />
                  <br />
                  <b>Avaliação: </b>
                  {(this.state.lancamentos.length !== 0
                    ? this.state.lancamentos[3].vote_average
                    : '') + ' /  10 '}
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
    )
  }

}
export default Lancamentos;
