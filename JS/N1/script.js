document.write("hello world")

// camelCase -> firstClassRecoding - variable, method, function
// PascalCase -> FirstClassRecording - class/interface
// snake_case -> SNAKE_CASE - constant variable 

//primitiuli tipebi
var name = "beka"; // string
var age = 37; //number
var rame = null; //null
var cvladi; //undefined
var symbol = Symbol('id') //symbol
var check = true; //or false - boolean true = 1 false = 0 

var num1 = 23;
var num2 = 13;

num1 += 1;

var address = 'eristavi';
var addressNum = 9;



var sentence = ` ${name + ' ' +age }`

console.log(typeof sentence)

console.log(num1 + num2)

//referrence type

var student = {
    name : 'Beka',
    age : 37,
    uni : 'gpi'
}// type = objects
 console.log(student)
var studentsArr = ['luka', 'lazare','beka', 'eka']; //type = object
// console.log(typeof studentsArr)
var studentArrFirst = studentsArr[0];
console.log(studentArrFirst)

var matrix = [1, 2, 3, 4, [6, 7]]

console.log(matrix[4][0])

var student = {
    name : 'beka',
    age : 37,
    faculty : {
            name : 'macs',
            capacity: 50
    },
    calendar : ['mon', 'wed', 'tue']

}
var result





//  for(let i = raionebi.length - 1; i < 0; i--){
//      console.log(raionebi[i])
//  }
var raionebi = ['Tbilisi', 'kutaisi', 'Batumi', 'poti', 'xaragauli', 'gurjaan']
let i = 0;
while(i < raionebi.length){
    console.log(raionebi[i])
    i++;
}