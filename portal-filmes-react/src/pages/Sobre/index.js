import '../../App.css';
import './index.css'
import Header from '../../components/header'

function App(props) {


    console.log("Propriedades: ")
    console.log(props.location)


    return (
        <div className="App">
            <Header showMenu={false} />
            <div className="container">
                <div className="row">
                    <img src={'https://image.tmdb.org/t/p/w500/' + props.location.state.filme.poster_path} alt="" />
                </div>
                <h1>{props.location.state.filme.title}</h1>
                <p>{props.location.state.filme.overview}</p>
                <p> <b>Categoria: </b> {props.location.state.filme.category}</p>
                <p> <b>Datade Lançamento:</b> {props.location.state.filme.release_date}</p>
                <p> <b>Popularidade</b> {props.location.state.filme.popularity.toFixed(2) + ' %'}</p>
                <p> <b>Avaliação</b> {props.location.state.filme.vote_average + ' / 10'}</p>

            </div>
        </div>
    );
}

export default App;
