5)Существует массив с несколькими числами. Все числа равны, кроме одного. Попробуйте найти его!
ссылка на кату: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

Гарантируется, что массив содержит как минимум 3 числа.

function findUniq(arr) {
  ...ваш код
  }

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
findUniq([ 2, 1, 1, 1, 1, 1 ]) === 2
findUniq([ 0, 0, 0, 0, 0.55 ]) === 0.55



function findUniq(arr) {
  return arr.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))[0]
}