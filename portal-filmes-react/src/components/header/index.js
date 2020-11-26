// import './App.css';
// import { Link } from 'react-router-dom'
import React, { Fragment } from "react";
import logo from '../../img/logo-branco.png';
import api from '../api';
import './searchResult.css';
import { Link } from "react-scroll";

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



class Header extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      estilo: {
        display: 'none'
      },
      hasSearch: false,
      filme: [],
      searchInput: '',
      menu: [
        { name: 'Lançamentos', link: 'lancamento' },
        { name: 'Em Destaque', link: 'destaque' },
        { name: 'Avaliações', link: 'avaliacoes' },
        { name: 'Entrevistas & Makingof', link: 'entrevistas' },
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchInput: e.target.value })
  }

  handleClick(e) {
    e.preventDefault();

    if (this.state.searchInput) {
      console.log('chamar nova pagina com as informações')
      this.setState({
        estilo: {
          display: 'flex',
        },
        hasSearch: true,
      });
      this.buscaFilme();
    } else {
      console.log('recarregar mesma pagina')
      this.setState({
        estilo: {
          display: 'none',
        },
        hasSearch: false,
      });
    }
  }

  buscaFilme() {
    // api.get(`discover/movie?api_key=cf2c3634ed88cbfe8f8472ad68c511e6&language=pt-BR&sort_by=release_date.asc&include_adult=false&include_video=true&page=${page}&primary_release_year=2020&vote_average.gte=7`)
    api.get(`https://api.themoviedb.org/3/search/movie?api_key=${api.apiKey}&language=pt-BR&query=${this.state.searchInput}&page=1&include_adult=false`)
      .then(({ data }) => {
        if (data.length === 0) {

        }
        let count = 0
        // pega 3 lançamentos que possuem overview
        this.setState({
          filme: data.results.filter(((e) => {
            return e.overview !== "" && count++ < 4 && e.poster_path
          })).map((e) => {
            if (!e.release_date) return e;
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
    const classes = {
      root: {
        padding: '2px 4px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
      },
      input: {
        paddingLeft: '13px',
        // backgroundColor: 'blue',
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
    };

    return (
      <Fragment>

        <header className="header">
          <img className="logo" src={logo} alt="Logo" height="90%" />
          <nav id="menu">
            <ul className="menu-list">
              {this.state.menu.map((e, index) => {
                return <Fragment>
                  <li>
                    <Link
                      activeClass="active"
                      className="link"
                      to={e.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      {e.name}
                    </Link>
                  </li>
                  {/* adiciona | apenas entre os itens do menu */}
                  {index !== this.state.menu.length - 1
                    ? <li style={{ color: 'white' }}>
                      |
                    </li>
                    : ''
                  }
                </Fragment>
              })}
            </ul>
          </nav>
          <Paper className="form-inline" component="form" style={classes.root} onSubmit={(e) => { this.handleClick(e) }}>
            <InputBase
              style={classes.input}
              placeholder="Pesquisar Filme"
              inputProps={{ 'aria-label': 'search google maps' }}
              onChange={this.handleChange}
            />
            <IconButton type="submit" styles={classes.iconButton} aria-label="search" onClick={(e) => { this.handleClick(e) }}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </header>

        <div className="searchResult" style={this.state.estilo}>
          {this.state.filme.length > 0
            ? this.state.filme.map((e, index) => {
              return <div key={index} className="searchResult-item">
                <a href={`http://www.google.com/search?q=${e.title}`} target="_blank" rel="noreferrer">
                  <img
                    src={e ? ('https://image.tmdb.org/t/p/w500/' + e.poster_path) : ''}
                    alt="" />
                </a>
                <p>
                  <b>{e.title}</b>
                  <br />
                  {e.overview}
                  <br />
                  <br />
                  <b>Data de Lançamento: </b> {e.release_date}
                  <br />
                  <br />
                  <b>Avaliação: </b> {e.vote_average + ' / 10'}
                </p>
              </div>
            })
            : <div className="notFound">Nenhum resultado encontrado para busca! </div>}
          {/* <img src={this.state.filme[0] ? ('https://image.tmdb.org/t/p/w500/' + this.state.filme[0].poster_path) : ''} alt="" /> */}
        </div>

      </Fragment >
    );
  }
}

export default Header;
