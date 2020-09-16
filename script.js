let showTelephoneBtn = document.querySelector('button');
let telephone = document.querySelector('.hidden');

showTelephoneBtn.addEventListener('click', () => {
  telephone.classList.remove('hidden');
  showTelephoneBtn.disabled = true;
});