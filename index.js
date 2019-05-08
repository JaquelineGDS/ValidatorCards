function digitValidateCard(sumDigits) {
  const roundNumber = Math.ceil(sumDigits / 10.0) * 10;
  return roundNumber - sumDigits;
}
function sumDigits(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}
function multiplyDigits(arrayPartiallNumbers) {
  const result = arrayPartiallNumbers.map(function(number, index) {
    if (index % 2 === 0) {
      let multiplyNumbers = number * 2;
      return multiplyNumbers > 9 ? multiplyNumbers - 9 : multiplyNumbers;
    } else return number;
  });
  return result;
}
function mapCardNumbers(strCardNumbers) {
  return strCardNumbers.map(Number);
}
function repeatedNumbers(strCardNumbers) {
  const cardNumbersInArray = mapCardNumbers(strCardNumbers);
  return cardNumbersInArray.every((elem) => (elem === cardNumbersInArray[0]));
}
function checkSize(cardNumbers) {
  return (cardNumbers.length >= 14 && cardNumbers.length <= 16);
}
function checkType(cardNumberS) {
  const regexCard = RegExp(/^([0-9]{16})|([0-9]{14})|([0-9]{15})/g);
  cardNumberS.match(regexCard);
  return cardNumberS ? true : false;
}
function validator(cardNumbers, strCardNumber) {
  if (checkType(strCardNumber) === true && checkSize(cardNumbers) === true) {
    if (!repeatedNumbers(cardNumbers)) {
      const arrayPartialNumbers = mapCardNumbers(cardNumbers);
      const sumNumbers = multiplyDigits(arrayPartialNumbers);
      const sumOfAllDigits = sumDigits(sumNumbers);
      return ((digitValidateCard(sumOfAllDigits)) === parseInt(strCardNumber.charAt(15)));
    }
  } return false;
}
function subString(cardNumbers, penultimateDigit) {
  return cardNumbers.substring(0, penultimateDigit).split('');
}
function cardValidator(strCardNumber) {
  const cardNumbers = subString(strCardNumber, strCardNumber.length - 1);
  const cardNumbersReverse = cardNumbers.reverse();
  return validator(cardNumbersReverse, strCardNumber);
}
module.exports.cardValidator = cardValidator;