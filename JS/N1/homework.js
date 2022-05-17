//Task 1
let sister = {
    age : 28,
    name : 'Ana'
}
let broAge = {
    age : 21,
    name : 'Levani'
}

let compareAge = sister.age - broAge.age;
let firstp = 'ანა ლევანზე'
let secondp = 'წლით უფროსია'
console.log(firstp, compareAge, secondp);

//Task 2

let students = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
// let studentLengt = Math.floor (students.length / 2);
let midStudent = students[Math.floor (students.length / 2)]

console.log (midStudent)

//Task 3

let student2 = {
    firstname : 'Beka',
    lastname : 'Nadiradze',
    age : 37,
    subjects : [ 'mat', 'geometry', 'history', 'phisics', 'chemistry'],
    roommates : {
        rname : 'John',
        age : 37
    }
}
let fullname = student2.firstname + ' ' + student2.lastname;
let resultRoommates = student2.roommates.rname + ' ' + student2.roommates.age;
let result = fullname + ' ' + student2.age + ' ' + resultRoommates;
console.log(result)
for (let i = 0; i < student2.subjects.length; i++){
console.log(student2.subjects[i])
}

//task 4

let newarr = ["Banana", "Orange", "Apple", "Mango",2,12]
let i = 0;
while( i < newarr.length ){ 
    console.log(newarr[i])
       i++; 
    if ((newarr[i] * 1) == newarr[i]) {
        break;
    } 
     
   
}

//task 5

let newarr5 = [12,23,43,11,9,2,121,90]
let textEven = 'Element is greater than provided value and is EVEN'
let textOdd = 'Element is less than provided value and is ODD'
// ტექსტი როგორ დავლოგო ერთხელ ODD-ის შემთხვევაში
for(let i5 = 0; i5 < newarr5.length; i5++ ){
    if (newarr5[i5] > 31 && newarr5[i5]%2 == 0){
        console.log(textEven + ' ' + newarr5[i5])
} else if(newarr5[i5] < 32 && newarr5[i5]%2 == 1){
    console.log(textOdd, newarr5[i5])
}
}

//Task 6



function arrayBreaker (breakValue, newarr6 ){
    
    for (let i6 = 0; i6 < newarr6.length; i6++){
        
        if(newarr6[i6] == breakValue){
            
            break;
        }
       console.log(newarr6[i6]) 
    }
    
}
var x = arrayBreaker (12, [41,31,81,9,2,12,71,21,32] )



