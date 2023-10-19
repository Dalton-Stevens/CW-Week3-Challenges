const validatePin = (pin) => /^(\d{4}|\d{6})$/.test(pin);

console.log(validatePin("1"));
console.log(validatePin("1234"));
console.log(validatePin("12345"));
console.log(validatePin("123456"));
