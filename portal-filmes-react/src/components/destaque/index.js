import React from 'react';
import { Link } from 'react-router-dom'
import api from '../api';

class Destaque extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      destaques: [],
    }
    this.buscaDestaques = this.buscaDestaques.bind(this);
    this.destaqueOnChange = this.destaqueOnChange.bind(this);
  }

  getCategoryName(id) {
    switch (id) {
      case 28:
        return 'Ação'
      case 10749:
        return 'Romance'
      case 35:
        return 'Comedia'
      case 12:
        return 'Aventura'
      default:
        return ''
    }
  }

  buscaDestaques(page = 1, generId = 28) {
    // busca filmes em destaque filtrando pelo genero (gennerId)
    api.get(`discover/movie?api_key=${api.apiKey}&language=pt-BR&sort_by=release_date.asc&include_adult=false&include_video=true&page=${page}&primary_release_year=2020&vote_average.gte=7`)
      .then(({ data }) => {
        let destaques = data.results.filter(((e) => {
          return e.poster_path && e.genre_ids.includes(generId) && e.overview !== '';
        })).map((e) => {
          const data = new Date(e.release_date)
          e.release_date = (
            (data.getDay() < 10 ? '0' + data.getDay() : data.getDay()) + '/'
            + (data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1) + '/'
            + data.getFullYear()
          )
          return e;
        });

        // setta estado dos destaques recebidos da api
        destaques.forEach((e) => {
          if (this.state.destaques.length < 4) {
            e.category = this.getCategoryName(generId);
            this.setState({
              destaques: this.state.destaques.concat(e)
            })
          }
        });

        // chamada recursiva caso não tenha atingido 4 elementos
        if (this.state.destaques.length < 4)
          this.buscaDestaques(page + 1, generId)

      }).catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.buscaDestaques();
  }

  destaqueOnChange(event) {
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
          return <Link
            to={{
              pathname: "/sobre",
              search: `?filme=${e.original_title}`,
              // hash: "#the-hash",
              state: { filme: this.state.destaques[index] }
            }}
          >
            <img className={`destaque-item destaque-item${index + 1}`} src={'https://image.tmdb.org/t/p/w500/' + e.poster_path} href="#avaliacoes" alt="" />
          </Link>
        })}
      </div>
    );

  }

}

export default Destaque;

// category ids correlation
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