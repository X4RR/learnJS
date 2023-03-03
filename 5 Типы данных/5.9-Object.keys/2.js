// Напишите функцию count(obj), которая возвращает количество свойств объекта.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

let user = {
  name: 'John',
  age: 30
};

function countProps(obj) {
    return Object.keys(obj).length;
}

alert( countProps(user) ); // 2
