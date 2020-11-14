// import './App.css';
// import { Link } from 'react-router-dom'

import logo from '../../img/logo-branco.png';

function Header() {
  return (
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
            <a href="https://www.google.com/search?sxsrf=ALeKk02xCB1Y9pTT4wDIVLcWhpycBiyzDg%3A1599930426255&ei=OgBdX4mTD-7G5OUP8OCnuAY&q=lan%C3%A7amento+de+filmes&oq=lan%C3%A7amento+de+filmes&gs_lcp=CgZwc3ktYWIQAzICCAAyBQgAELEDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BAgAEENQoBpY5yVgwCZoAHACeACAAYIBiAHDCJIBAzAuOZgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwiJmOOljeTrAhVuI7kGHXDwCWcQ4dUDCA0&uact=5"
              target="_blank" rel="noreferrer">
              Entrevistas & Makingof
              </a>
          </li>
        </ul>
      </nav>
      <form className="form-inline">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input className="input-search" id="input-search" type="text" placeholder="Pesquisar filme" aria-label="Search" />
      </form>
    </header>
  );
}

export default Header;
