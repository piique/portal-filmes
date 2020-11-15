import React from 'react'
import './App.css'
import Header from './components/header'
import Lancamentos from './components/lancamentos'
import Destaque from './components/destaque'
import Avaliacoes from './components/avaliacoes'
import Entrevistas from './components/entrevistas'
import Novidades from './components/novidades'

// import api from './components/api'

// import { Link } from 'react-router-dom'

class App extends React.Component {
  // const apiKey = 'cf2c3634ed88cbfe8f8472ad68c511e6' // chave do themoviedb


  render() {
    return (
      <div className="App" /* style={style} */>
        <Header />
        <Lancamentos />
        <Destaque />
        <Avaliacoes />
        <Entrevistas />
        <Novidades />
      </div>
    )
  }
}

export default App
