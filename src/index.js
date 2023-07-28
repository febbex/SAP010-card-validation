import validator from './validator.js';

// Função para validar o formulários
function validar(event) {
  event.preventDefault();
  const ccNumberInput = document.getElementById('creditCardNumber');
  const validationResult = document.getElementById('validationResult');

  const ccNumber = ccNumberInput.value.trim();
  const isValid = validator.isValid(ccNumber);
  //const maskedNumber = validator.maskify(creditCardNumber);
  //ccNumberInput.value = maskedNumber;

  if (!ccNumber) {
    validationResult.textContent = 'Por favor, preencha o número do cartão.';
  } else if (isValid) {
    validationResult.textContent = 'Parabéns, cartão validado!';
  } else {
    validationResult.textContent = 'Cartão inválido.';
  }
};

// Obter o form do formulário
const form = document.getElementById('creditCardForm');

// ao clicar enviar chama as funções de cima
form.addEventListener('submit', validar);
