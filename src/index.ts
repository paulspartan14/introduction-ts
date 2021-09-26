// -- declare dataTypes --

let myBoolean:boolean;               // declare boolean (true or false)

let myNumber:number;                 // declare number (12, 13.5, ...)

let myString:string;                 // declare string ('hi', 'name')

let myArray:(string | number) []     // declare array for strings or numbers (also you can try with 'any')

let arrayDef:string[] = ['hi', 'welcome']  // declare array defined with strings contained

let myTuple:[string, number];        // declare tuple for specific dates

enum AnimalTypes {                   // declare enum, (this is simily to object datatype)
  NAME = 'ALEXANDER',
  DATANUMBER = 24
}                      
//- console.log(AnimalTypes.NAME)

// Functions
function Salude():void{              // funcion type void is undefined
  console.log("hi dude!");
}
// console.log(Salude())

// -- type assertions -- 

let value:any = "hi, i string"
let result:number = (<string> value).length;  // se convierte para poder acceder a las prop de 'value'
let result2: number = (value as string).length // se convierte value

// -- Array Destructuring --

let fruits:string[] = ['apple', 'grape', 'pineapple']
let [item1, item2] = fruits
let [,,item3] = fruits
// console.log(item3)                // print only fruits[1] value

// -- Object Destructuring --

let person = {
  Pname: ['paul', 'mena'],
  age: 24,
  gender: 'male',
  interest: ['music', 'reading']
}

let {Pname:nombre, age, gender, interest} = person;
 console.log(`${nombre[0]}, have ${age}`)

