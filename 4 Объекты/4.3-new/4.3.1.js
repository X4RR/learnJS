// Возможно ли создать функции A и B, чтобы new A() == new B()?

// Если да – приведите пример вашего кода.

let ab={};

function A() {
    return ab;
 }
function B() {
    return ab;
 }

let a = new A();
let b = new B();

alert( a == b ); // true