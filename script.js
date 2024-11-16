let element = document.getElementById('name');

function colorValue(){
  return Math.floor(Math.random() * 256)
}

function colorChange() {
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  element.style.color = randomColor;
}

element.addEventListener('click', colorChange);
