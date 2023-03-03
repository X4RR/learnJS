// Есть объект salaries с произвольным количеством свойств, 
// содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает 
// сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function sumSalaries(salaries) {
    return Object.values(salaries).reduce((sum, v) => sum + v, 0)
}

alert( sumSalaries(salaries) ); // 650