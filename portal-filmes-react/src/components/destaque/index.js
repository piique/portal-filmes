// import './App.css';
// import { Link } from 'react-router-dom'

import React from 'react';

import destaque from '../../img/destaques/destaque.jpg';
import destaque1 from '../../img/destaques/destaque1.jpg';
import destaque2 from '../../img/destaques/destaque2.jpg';
import destaque3 from '../../img/destaques/destaque3.jpg';
// import destaque4 from '../../img/destaques/destaque4.jpg';
// import destaque5 from '../../img/destaques/destaque5.jpg';
// import destaque6 from '../../img/destaques/destaque6.jpg';
// import destaque7 from '../../img/destaques/destaque7.jpg';
// import destaque8 from '../../img/destaques/destaque8.jpg';
// import destaque9 from '../../img/destaques/destaque9.jpg';
// import destaque10 from '../../img/destaques/destaque10.jpg';
// import destaque11 from '../../img/destaques/destaque11.jpg';
// import destaque12 from '../../img/destaques/destaque12.jpg';
// import destaque13 from '../../img/destaques/destaque13.jpg';
// import destaque14 from '../../img/destaques/destaque14.jpg';
// import destaque15 from '../../img/destaques/destaque15.jpg';
import api from '../api';


class Destaque extends React.Component {

  // Declarar uma nova variável de state, na qual chamaremos de "count"

  constructor(props) {
    super(props)
    this.state = {
      estilo: {
        display: 'none'
      },
      hasSearch: false,
      filme: [],
      searchInput: '',
      img1: destaque,
      img2: destaque1,
      img3: destaque2,
      img4: destaque3,
      destaques: [],
    }
    this.buscaDestaques = this.buscaDestaques.bind(this);
    this.destaqueOnChange = this.destaqueOnChange.bind(this);
  }

  buscaDestaques(page = 1, generId) {
    console.log("Chamou destaques: pagina: " + page);

    api.get(`discover/movie?api_key=${api.apiKey}&language=pt-BR&sort_by=release_date.asc&include_adult=false&include_video=true&page=${page}&primary_release_year=2020&vote_average.gte=7`)
      .then(({ data }) => {
        // let count = this.state.destaques.length;
        let destaques = data.results.filter(((e) => {
          return e.poster_path && e.genre_ids.includes(generId);
          return e.genre_ids.includes(generId);
        })).map((e) => {
          console.log(e.release_date)
          const data = new Date(e.release_date)
          e.release_date = (
            (data.getDay() < 10 ? '0' + data.getDay() : data.getDay()) + '/'
            + (data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1) + '/'
            + data.getFullYear()
          )
          return e;
        });

        console.log('chegou aqui caralho porra cuzao');

        destaques.forEach((e) => {
          this.setState({
            destaques: this.state.destaques.concat(e)
          })
        });

        console.log("Tamanho array: " + this.state.destaques.length);
        if (this.state.destaques.length < 4) {
          this.buscaDestaques(page + 1, generId)
        }
      }).catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    // 28 = action moovie
    this.buscaDestaques(1, 28);
  }

  destaqueOnChange(event) {
    console.log(event.target.value);
    this.setState({
      destaques: []
    })
    if (event.target.value === '0') {
      this.buscaDestaques(1, 28);
    } else if (event.target.value === '1') {
      this.buscaDestaques(1, 10749);
    } else if (event.target.value === '2') {
      this.buscaDestaques(1, 35);
    } else if (event.target.value === '3') {
      this.buscaDestaques(1, 12);
    }
  }

  render() {

    return (
      <div id="destaque">
        <h2 className="destaque-item">Em destaque</h2>
        <select id="select-destaque" className="destaque-item custom-select custom-select-sm" onChange={this.destaqueOnChange}>
          <option value="0" defaultValue>Ação</option>
          <option value="1">Romance</option>
          <option value="2">Comedia</option>
          <option value="3">Aventura</option>
        </select>

        {this.state.destaques.map((e, index) => {
          return <img className={`destaque-item destaque-item${index + 1}`} src={'https://image.tmdb.org/t/p/w500/' + e.poster_path} href="#avaliacoes" alt="" />
          // return <b> {e.title} </b>
        })}
        {/* <img className="destaque-item destaque-item1" src={this.state.img1} href="#avaliacoes" alt="" />
        <img className="destaque-item destaque-item2" src={this.state.img2} alt="" />
        <img className="destaque-item destaque-item3" src={this.state.img3} alt="" />
        <img className="destaque-item destaque-item4" src={this.state.img4} alt="" /> */}
      </div>
    );

  }

}



export default Destaque;

// "genres": [
//   {
//     "id": 28,
//     "name": "Action"
//   },
//   {
//     "id": 12,
//     "name": "Adventure"
//   },
//   {
//     "id": 16,
//     "name": "Animation"
//   },
//   {
//     "id": 35,
//     "name": "Comedy"
//   },
//   {
//     "id": 80,
//     "name": "Crime"
//   },
//   {
//     "id": 99,
//     "name": "Documentary"
//   },
//   {
//     "id": 18,
//     "name": "Drama"
//   },
//   {
//     "id": 10751,
//     "name": "Family"
//   },
//   {
//     "id": 14,
//     "name": "Fantasy"
//   },
//   {
//     "id": 36,
//     "name": "History"
//   },
//   {
//     "id": 27,
//     "name": "Horror"
//   },
//   {
//     "id": 10402,
//     "name": "Music"
//   },
//   {
//     "id": 9648,
//     "name": "Mystery"
//   },
//   {
//     "id": 10749,
//     "name": "Romance"
//   },
//   {
//     "id": 878,
//     "name": "Science Fiction"
//   },
//   {
//     "id": 10770,
//     "name": "TV Movie"
//   },
//   {
//     "id": 53,
//     "name": "Thriller"
//   },
//   {
//     "id": 10752,
//     "name": "War"
//   },
//   {
//     "id": 37,
//     "name": "Western"
//   }
// ]