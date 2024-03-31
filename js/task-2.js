// 1. Создать массив, содержащий элементы первого и второго масивов
// 2. Сделать проверку:
//    Если кол-во элементов нового массива > maxLength, вернуть копию массива с длиной maxLength
//    В другом случае вернуть весь новый массив

function makeArray(firstArray, secondArray, maxLength) {
  const resultArray = [...firstArray, ...secondArray];

  return resultArray.length > maxLength
    ? resultArray.slice(0, maxLength)
    : resultArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
