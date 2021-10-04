import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */


// export default function createDreamTeam(members) {
//   if (!Array.isArray(members)) {
//     return false;
//   }

//   if (members.length != null && 0 < members.length) {
//     for (let i=  0; i < members.length; i++)
//     {
//       if (typeof members[i] == 'string' && members[i] != null){str += members[i].replace(/\s/g, '').slice(0,1);
//       }
//     }
//     // return str.split('').sort().join('').toUpperCase().split('').sort().join('').toUpperCase();
//     return members.map(item => item[0]).sort().join('').toUpperCase();
//     }
//   else {
//     return false;
//   }
// }

export default function createDreamTeam(members) {
  let teamName = '';
  // Проверяем, является ли массивом
  if (!Array.isArray(members)) {
    return false;
  }
  // Проверяем, равен ли массив нулю, пустой ли он
  if (members.length != null && 0 < members.length) {
    for (let i =  0; i < members.length; i++) {
      // Проверяем, соответствуют ли строки массива условиям
      if (typeof members[i] == 'string' && members[i] != null) {
        // Удаляем пробелы с RegEx и добавляем в teamName первую букву строки
        teamName = teamName + members[i].replace(/\s/g, '').slice(0, 1);
      }
    }
    return teamName.toUpperCase().split('').sort().join('');
    } else {
    return false;
  }
}