const validator = {
  isValid: function (creditCardNumber) {
    let somar = 0;
    let dobrar = false;
    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(creditCardNumber.charAt(i));

      if (dobrar) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      somar += digit;
      dobrar = !dobrar;
    }

    return somar % 10 === 0;
  },

  //maskify: function (creditCardNumber) {
   // if (creditCardNumber.length <= 4) {
   //   return creditCardNumber;
   // }

   // const lastFourDigits = creditCardNumber.slice(-4);
   // const maskedDigits = creditCardNumber.slice(0, -4).replace(/\d/g, '#');
   // const maskedNumber = maskedDigits + lastFourDigits;

   // return maskedNumber;
  //},
};

export default validator;
