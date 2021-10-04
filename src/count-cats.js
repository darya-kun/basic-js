import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  // Методом flat() возвращам новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
  let arr = matrix.flat();
  let catsCounter = 0;
  // Перебираем массив в поиске строки '^^' и складываем их в счетчик catsCounter
  for (let i = 0; i < arr.length; i++){
    if (arr[i]=='^^'){
      catsCounter++;
    }
  }
  return catsCounter;
}
