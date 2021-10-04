import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */

export default {
  // объявляем пустой объект
  chain: [],
  // возвращаем число - длину цепи
  getLength() {
    return this.chain.length;
  },
  // добавляем звено в конец цепи
  addLink(value = '( )') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  // удаляем звено цепи из обозначенной позиции
  removeLink(position) {
    // Проверка not a number, or a fractional number, or corresponding to a nonexistent link
    if (isNaN(position) || position < 1 || position > this.chain.length) {
      this.chain.length = 0;
      throw new Error ("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  // Меняем порядок звеньев цепи
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  // заканчиваем цепь и возвращаем результат
  finishChain() {
    const finishedChain = this.chain.join('~~');
    this.chain.length = 0;
    return finishedChain;
  }
};
