clearInput = function () {
  document.getElementById('input-search').value = '';
}

destaqueOnChange = function () {
  console.log(document.getElementById('select-destaque').value);
  if (document.getElementById('select-destaque').value == '0') {
    document.getElementsByClassName('destaque-item1')[0].src = 'img/logo.png';
    document.getElementsByClassName('destaque-item2')[0].src = 'img/logo.png';
    document.getElementsByClassName('destaque-item3')[0].src = 'img/logo.png';
    document.getElementsByClassName('destaque-item4')[0].src = 'img/logo.png';
  } else if (document.getElementById('select-destaque').value == '1') {
    document.getElementsByClassName('destaque-item1')[0].src = 'img/logo2.png';
    document.getElementsByClassName('destaque-item2')[0].src = 'img/logo2.png';
    document.getElementsByClassName('destaque-item3')[0].src = 'img/logo2.png';
    document.getElementsByClassName('destaque-item4')[0].src = 'img/logo2.png';
  } else if (document.getElementById('select-destaque').value == '2') {
    document.getElementsByClassName('destaque-item1')[0].src = 'img/logo3.png';
    document.getElementsByClassName('destaque-item2')[0].src = 'img/logo3.png';
    document.getElementsByClassName('destaque-item3')[0].src = 'img/logo3.png';
    document.getElementsByClassName('destaque-item4')[0].src = 'img/logo3.png';
  } else if (document.getElementById('select-destaque').value == '3') {
    document.getElementsByClassName('destaque-item1')[0].src = 'img/logo4.png';
    document.getElementsByClassName('destaque-item2')[0].src = 'img/logo4.png';
    document.getElementsByClassName('destaque-item3')[0].src = 'img/logo4.png';
    document.getElementsByClassName('destaque-item4')[0].src = 'img/logo4.png';

  }
}