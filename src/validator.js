const validator = {
  isValid: function (creditCardNumber) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(creditCardNumber.charAt(i));

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
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
