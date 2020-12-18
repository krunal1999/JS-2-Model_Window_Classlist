'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    console.log('button clicked ' + i);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  btnCloseModel.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  overlay.addEventListener
}
