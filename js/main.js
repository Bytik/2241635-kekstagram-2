function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если строка проходит по длине, и false — если не проходит
function checkStringLength (string, length) {
  return string.length <= length;
}
