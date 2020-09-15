clearInput = function () {
  document.getElementById('input-search').value = '';
}

destaqueOnChange = function () {
  if (document.getElementById('select-destaque').value == '0') {
    document.getElementsByClassName('destaque-item1')[0].src = 'img/destaques/destaque.jpg';
    document.getElementsByClassName('destaque-item2')[0].src = 'img/destaques/destaque1.jpg';
    document.getElementsByClassName('destaque-item3')[0].src = 'img/destaques/destaque2.jpg';
    document.getElementsByClassName('destaque-item4')[0].src = 'img/destaques/destaque3.jpg';
  } else if (document.getElementById('select-destaque').value == '1') {
    document.getElementsByClassName('destaque-item1')[0].src = 'img/destaques/destaque4.jpg';
    document.getElementsByClassName('destaque-item2')[0].src = 'img/destaques/destaque5.jpg';
    document.getElementsByClassName('destaque-item3')[0].src = 'img/destaques/destaque6.jpg';
    document.getElementsByClassName('destaque-item4')[0].src = 'img/destaques/destaque7.jpg';
  } else if (document.getElementById('select-destaque').value == '2') {
    document.getElementsByClassName('destaque-item1')[0].src = 'img/destaques/destaque8.jpg';
    document.getElementsByClassName('destaque-item2')[0].src = 'img/destaques/destaque9.jpg';
    document.getElementsByClassName('destaque-item3')[0].src = 'img/destaques/destaque10.jpg';
    document.getElementsByClassName('destaque-item4')[0].src = 'img/destaques/destaque11.jpg';
  } else if (document.getElementById('select-destaque').value == '3') {
    document.getElementsByClassName('destaque-item1')[0].src = 'img/destaques/destaque12.jpg';
    document.getElementsByClassName('destaque-item2')[0].src = 'img/destaques/destaque13.jpg';
    document.getElementsByClassName('destaque-item3')[0].src = 'img/destaques/destaque14.jpg';
    document.getElementsByClassName('destaque-item4')[0].src = 'img/destaques/destaque15.jpg';
  }
}

maisAvaliacoes = function () {
  document.getElementsByClassName("avaliacoes-item4")[0].style.transition = 'all 1s';
  document.getElementsByClassName("avaliacoes-item5")[0].style.transition = 'all 1s';
  document.getElementsByClassName("avaliacoes-item6")[0].style.transition = 'all 1s';
  if (document.getElementsByClassName("avaliacoes-item4")[0].style.display == '') {
    document.getElementsByClassName("avaliacoes-item4")[0].style.display = 'grid';
    document.getElementsByClassName("avaliacoes-item5")[0].style.display = 'grid';
    document.getElementsByClassName("avaliacoes-item6")[0].style.display = 'grid';
    document.getElementsByClassName('btn btn-secondary avaliacoes')[0].innerText = '- Menos avaliações';
    document.getElementsByClassName("btn btn-secondary avaliacoes")[0].style["grid-row"] = 7;
  } else {
    document.getElementsByClassName("avaliacoes-item4")[0].style.display = '';
    document.getElementsByClassName("avaliacoes-item5")[0].style.display = '';
    document.getElementsByClassName("avaliacoes-item6")[0].style.display = '';
    document.getElementsByClassName('btn btn-secondary avaliacoes')[0].innerText = '+ Mais avaliações';
    document.getElementsByClassName("btn btn-secondary avaliacoes")[0].style["grid-row"] = 4;
  }
}