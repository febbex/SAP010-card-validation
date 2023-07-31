const validator = {
  isValid: function (creditCardNumber) {
    let soma = 0;
    let dobrar = false;
    // 'for' = a loop
    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(creditCardNumber.charAt(i));

      if (dobrar) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      soma += digit;
      dobrar = !dobrar;
    }

    return soma % 10 === 0; // Após o loop se a soma for divisível por 10 sem deixar resto o número do cartão é válido.
    // Se a soma não for divisível por 10 sem deixar resto, o retorno será false automaticamente
  },
  //função pra mascarar os digítos do cartão no espelho
  maskify: function (creditCardNumber) {
    const digitosVisiveis = 4;
    const mascaraCaracteres = Math.max(creditCardNumber.length - digitosVisiveis, 0);
    return '#'.repeat(mascaraCaracteres) + creditCardNumber.slice(-digitosVisiveis);
  }
};
export default validator;
