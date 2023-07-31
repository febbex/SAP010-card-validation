import validator from './validator.js';

// Função para validar o formulários
function validar(event) {
  event.preventDefault(); //'event.preventDefault' evita enviar o formuário antes de validar 
  const ccNumberInput = document.getElementById('creditCardNumber');
  const validationResult = document.getElementById('validationResult');

  const ccNumber = ccNumberInput.value.trim(); //trim() barrar se tiver espaços em branco
  const isValid = validator.isValid(ccNumber);

  if (!ccNumber) { // if verifica se é verdadeiro '!'verifica se está vazio o campo número
    validationResult.textContent = 'Por favor, preencha o número do cartão.';
  } else if (isValid) {
    validationResult.textContent = 'Parabéns, cartão validado!'; // se a condição anterior for falso o bloco de código dentro do else if será executado
  } else {
    validationResult.textContent = 'Cartão inválido.'; // se isValid for falso o bloco else final será executado
  }
}

// Ref do formulário
const form = document.getElementById('creditCardForm');


// ao clicar enviar chama as funções de cima
form.addEventListener('submit', validar);

//Espelho do cartão
document.querySelector('.form-control').oninput = () =>{
  document.querySelector('.card-number-box').innerText = document.querySelector('.form-control').value;
}
  document.querySelector('.Nome-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.Nome-input').value;

}
document.querySelector('.meses-input').oninput = () =>{
  document.querySelector('.exp-month').innerText = document.querySelector('.meses-input').value;
}
document.querySelector('.Ano').oninput = () =>{
  document.querySelector('.exp-year').innerText = document.querySelector('.Ano').value;
}
document.querySelector('.cvc-input').onmouseenter = () =>{
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(180deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}
document.querySelector('.cvc-input').onmouseleave = () =>{
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}
document.querySelector('.cvc-input').oninput = () =>{
  document.querySelector('.cvc-box').innerText = document.querySelector('.cvc-input').value;
};
