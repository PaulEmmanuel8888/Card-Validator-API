export function isValidCardNumber(cardNumber: string): boolean {
  const normalizedCardNumber = cardNumber.replace(/\s+/g, "");

  //Remove space in string
  if (!/^\d+$/.test(normalizedCardNumber)) {
    return false;
  }

  if (normalizedCardNumber.length < 13 || normalizedCardNumber.length > 19) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  for (let i = normalizedCardNumber.length - 1; i >= 0; i--) {
    let digit = Number(normalizedCardNumber[i]);

    if (shouldDouble) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}
