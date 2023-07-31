import validator from './validator.js';

// Função para validar o formulário
function validar(event) {
  event.preventDefault();
  const ccNumberInput = document.getElementById('creditCardNumber');
  const validationResult = document.getElementById('validationResult');

  const ccNumber = ccNumberInput.value.trim();
  const isValid = validator.isValid(ccNumber);

  if (!ccNumber) {
    validationResult.textContent = 'Por favor, preencha o número do cartão.';
  } else if (isValid) {
    validationResult.textContent = 'Parabéns, cartão validado!';
  } else {
    validationResult.textContent = 'Cartão inválido.';
  }

  // Atualizar o espelho do cartão usando a função maskify do validator.js
  document.querySelector('.card-number-box').innerText = validator.maskify(ccNumber);
}
const form = document.getElementById('creditCardForm');
form.addEventListener('submit', validar);

// Função para ocultar os números do cartão, exibindo apenas os últimos 4 dígitos
function maskify(creditCardNumber) {
  const digitosVisiveis = 4;
  const mascaraCaracteres = creditCardNumber.length - digitosVisiveis;
  return '#'.repeat(mascaraCaracteres) + creditCardNumber.slice(-digitosVisiveis);
}

// Espelho do cartão
document.querySelector('.form-control').oninput = () => {
  const ccNumber = document.querySelector('.form-control').value;
  const maskedNumber = maskify(ccNumber);
  document.querySelector('.card-number-box').innerText = maskedNumber;
}
document.querySelector('.Nome-input').oninput = () => {
  document.querySelector('.card-holder-name').innerText = document.querySelector('.Nome-input').value;

}
document.querySelector('.meses-input').oninput = () => {
  document.querySelector('.exp-month').innerText = document.querySelector('.meses-input').value;
}
document.querySelector('.Ano').oninput = () => {
  document.querySelector('.exp-year').innerText = document.querySelector('.Ano').value;
}
document.querySelector('.cvc-input').onmouseenter = () => {
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(180deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}
document.querySelector('.cvc-input').onmouseleave = () => {
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}
document.querySelector('.cvc-input').oninput = () => {
  document.querySelector('.cvc-box').innerText = document.querySelector('.cvc-input').value;
};
