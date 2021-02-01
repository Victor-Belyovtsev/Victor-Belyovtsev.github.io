const openForm = document.querySelector('.open__form'),
        callBack = document.querySelector('.callback');
        closeElem = document.querySelector('.contacts__close');
        closeElem2 = document.querySelector('.contacts__overlay');

openForm.addEventListener('click', () => {
    callBack.classList.add('active');
})

closeElem.addEventListener('click', () => {
    callBack.classList.remove('active');
});

closeElem2.addEventListener('click', () => {
  callBack.classList.remove('active');
});
