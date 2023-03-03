// У нас есть объект salaries с зарплатами

// Создайте функцию topSalary(salaries), которая возвращает 
// имя самого высокооплачиваемого сотрудника.

//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть 
//     любого из них.

// P.S. Используйте Object.entries и деструктурирование, чтобы 
// перебрать пары ключ/значение.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function topSalary(salaries) {
    let maxSal = 0;
    let maxName = null;
    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSal < salary) {
            maxSal = salary;
            maxName = name;
        }
    }
    return maxName;
};

alert(topSalary(salaries))