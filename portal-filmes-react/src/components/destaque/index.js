// import './App.css';
// import { Link } from 'react-router-dom'

import React, { useState } from 'react';

import destaque from '../../img/destaques/destaque.jpg';
import destaque1 from '../../img/destaques/destaque1.jpg';
import destaque2 from '../../img/destaques/destaque2.jpg';
import destaque3 from '../../img/destaques/destaque3.jpg';
import destaque4 from '../../img/destaques/destaque4.jpg';
import destaque5 from '../../img/destaques/destaque5.jpg';
import destaque6 from '../../img/destaques/destaque6.jpg';
import destaque7 from '../../img/destaques/destaque7.jpg';
import destaque8 from '../../img/destaques/destaque8.jpg';
import destaque9 from '../../img/destaques/destaque9.jpg';
import destaque10 from '../../img/destaques/destaque10.jpg';
import destaque11 from '../../img/destaques/destaque11.jpg';
import destaque12 from '../../img/destaques/destaque12.jpg';
import destaque13 from '../../img/destaques/destaque13.jpg';
import destaque14 from '../../img/destaques/destaque14.jpg';
import destaque15 from '../../img/destaques/destaque15.jpg';

function Destaque() {

  // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [img1, setImg1] = useState(destaque);
  const [img2, setImg2] = useState(destaque1);
  const [img3, setImg3] = useState(destaque2);
  const [img4, setImg4] = useState(destaque3);

  function destaqueOnChange(event) {
    // fazer logica para alternar imagens
    console.log(event.target.value);
    if (event.target.value === '0') {
      setImg1(destaque);
      setImg2(destaque1);
      setImg3(destaque2);
      setImg4(destaque3);
    } else if (event.target.value === '1') {
      setImg1(destaque4);
      setImg2(destaque5);
      setImg3(destaque6);
      setImg4(destaque7);
    } else if (event.target.value === '2') {
      setImg1(destaque8);
      setImg2(destaque9);
      setImg3(destaque10);
      setImg4(destaque11);
    } else if (event.target.value === '3') {
      setImg1(destaque12);
      setImg2(destaque13);
      setImg3(destaque14);
      setImg4(destaque15);
    }
  }
  return (
    <div id="destaque">
      <h2 class="destaque-item">Em destaque</h2>
      <select id="select-destaque" class="destaque-item custom-select custom-select-sm" onChange={destaqueOnChange}>
        <option value="0" selected>Ação</option>
        <option value="1">Romance</option>
        <option value="2">Comedia</option>
        <option value="3">Aventura</option>
      </select>
      <img class="destaque-item destaque-item1" src={img1} href="#avaliacoes" alt="" />
      <img class="destaque-item destaque-item2" src={img2} alt="" />
      <img class="destaque-item destaque-item3" src={img3} alt="" />
      <img class="destaque-item destaque-item4" src={img4} alt="" />
    </div>
  );
}

export default Destaque;
