/*  01 - Hacer un programa que calcule e imprima la suma de 3
    calificaciones
*/ 
function sumTotal(n1:number, n2:number, n3:number ):number{  
   return n1 + n2 + n3;
}
// - console.log(sumTotal(10, 12, 1));


/* 02 - hacer un programa que calcule e imprima el salario
   semanal de un empleado apartir de sus horas semanales trabajadas
   y de su salario por hora
*/
function semanalSalary(dailyHours:number, hourSalary:number):number{
   let totalTime:number = dailyHours * 7
   let salary:number = totalTime * hourSalary
   return salary
}
// enviar horas que trabaja diario, y salario por hora
// - console.log(semanalSalary(8, 100))

