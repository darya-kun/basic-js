import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  // Разбиваем строку на массив с разделителем '@'
  let arrStr = email.split('@');
  // Возвращаем последний элемент массива - доменное имя
  return arrStr[arrStr.length - 1];
}
