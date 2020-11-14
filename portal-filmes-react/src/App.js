import './App.css';
import Header from './components/header';
import Lancamentos from './components/lancamentos';
import Destaque from './components/destaque';
import Avaliacoes from './components/avaliacoes';
import Entrevistas from './components/entrevistas';
import Novidades from './components/novidades';

// import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App" /* style={style} */>
      <Header />
      <Lancamentos />
      <Destaque />
      <Avaliacoes />
      <Entrevistas />
      <Novidades />
    </div>
  );
}

export default App;
