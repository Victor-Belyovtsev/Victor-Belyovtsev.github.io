// let no = document.querySelector('.no');

// function onClick() {
//     no.classList.toggle('fallen');
// }

// no.addEventListener('click', onClick);

var elemLeft, elemTop, maxElemLeft, maxElemTop, elem;

elem = document.getElementById('no');

maxElemLeft = document.documentElement.clientWidth - elem.offsetWidth;
maxElemTop = document.documentElement.clientHeight - elem.offsetHeight;

elem.onmousemove = handler;

function handler() {
  elemLeft = Math.random() * maxElemLeft;
  elem.style.left = elemLeft + 'px';
  elemTop = Math.random() * maxElemTop;
  elem.style.top = elemTop + 'px';
  //console.log(elemLeft+' - '+elemTop);
}