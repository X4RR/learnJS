// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }

let quection = confirm('Вы согласны?')

const ask = (quection) ?
() => alert("Вы согласились.") :
() => alert("Вы отменили выполнение.")

ask()