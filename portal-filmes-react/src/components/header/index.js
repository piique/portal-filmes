// import './App.css';
// import { Link } from 'react-router-dom'
import React, { Fragment } from "react";
import logo from '../../img/logo-branco.png';
import api from '../api';

class Header extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      estilo: {
        display: 'none'
      },
      hasSearch: false,
      filme: []
    }
  }


  handleClick(e) {
    e.preventDefault();

    console.log(e);
    console.log("filmes: ")
    console.log(this.state.filme)
    console.log(e.target.children[1].value)
    if (e.target.children[1].value) {
      console.log('chamar nova pagina com as informações')
      this.setState({
        estilo: {
          display: 'flex',
        },
        hasSearch: true,
      });
      this.buscaFilme(e.target.children[1].value);
    } else {
      console.log('recarregar mesma pagina')
      // estilo.display = 'none';
      this.setState({
        estilo: {
          display: 'none',
        },
        hasSearch: false,
      });
    }
  }

  buscaFilme(filmName) {
    // api.get(`discover/movie?api_key=cf2c3634ed88cbfe8f8472ad68c511e6&language=pt-BR&sort_by=release_date.asc&include_adult=false&include_video=true&page=${page}&primary_release_year=2020&vote_average.gte=7`)
    api.get(`https://api.themoviedb.org/3/search/movie?api_key=cf2c3634ed88cbfe8f8472ad68c511e6&language=pt-BR&query=${filmName}&page=1&include_adult=false`)
      .then(({ data }) => {
        if (data.length === 0) {

        }
        let count = 0
        // pega 3 lançamentos que possuem overview
        this.setState({
          filme: data.results.filter(((e) => {
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

        console.log('chamou a requisiçao para pegar 1 filme')
        console.log(this.state.filme);
      }).catch((err) => {
        console.log(err)
      })
  }

  render() {


    return (
      <Fragment>
        <header className="header">
          <img className="logo" src={logo} alt="Logo" height="90%" />
          <nav id="menu">
            <ul className="menu-list">
              <li>
                <a href="#lancamentos">
                  Lançamentos
            </a>
              </li>
              <li>
                |
          </li>
              <li>
                <a href="#destaque">
                  Em Destaque
            </a>
              </li>
              <li>
                |
          </li>
              <li>
                <a href="#avaliacoes">
                  Avaliações
          </a>
              </li>
              <li>
                |
          </li>
              <li>
                <a href="#entrevistas">
                  Entrevistas & Makingof
              </a>
              </li>
            </ul>
          </nav>
          <form className="form-inline" onSubmit={(e) => { this.handleClick(e) }}>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input className="input-search" id="input-search" type="text" placeholder="Pesquisar filme" aria-label="Search" />
          </form>
        </header>
        <div className="searchResult" style={this.state.estilo}>
          {'mostrar que nenhum filme com o nome blablabla foi encontrado'}
          {this.state.filme.length > 0
            ? this.state.filme.map((e) => {
              return <h7>{e.title}</h7>
            })
            : false}
          {this.state.filme[0] ? ('https://image.tmdb.org/t/p/w500/' + this.state.filme[0].poster_path) : ''}
          <img src={this.state.filme[0] ? ('https://image.tmdb.org/t/p/w500/' + this.state.filme[0].poster_path) : ''} alt="" />
        </div>

      </Fragment >
    );
  }
}

export default Header;
