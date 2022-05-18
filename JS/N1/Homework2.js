//taks 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/
function funHW1 (x1){
    for(let i1 = 0; i1 < x1.arrayHM1.length; i1++){
        if(x1.isIterable == 0){
            console.log(x1.arrayHM1[i1])
        }
        else{
            console.log("provided array isn't itarable")
        }
    }    
}
let objectHM1 =  {
    isIterable : false,
    arrayHM1 : [12,63,21,34,98,57]
}
funHW1(objectHM1);


//task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/

function checkPythagoras (x,y,z){
    if(x*x + y*y == z*z || x*x + z*z == y*y || y*y + z*z == x*x){
        return true;
    }
    else{
        return false;
    }
}
let result = checkPythagoras(5,3,4)
console.log(result)


//task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/

function minMax(arr3){
    let maxarr = arr3 [0]
    let minarr = arr3 [0]
    for (let i3 = 0; i3 < arr3.length; i3++){
        if(arr3[i3] > maxarr){
            maxarr = arr3 [i3]
        }
        if(arr3[i3] < minarr){
            minarr = arr3[i3]
        }
        
    }console.log(`Min value is  ${minarr}  and Max value is  ${maxarr}`)
}

let newarr3 = [2,14,25,75,11,6]
let result3 = minMax(newarr3)

//task 4
/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

function angletype(angle){
    if (angle >= 0 && angle < 90){
        console.log('Acute angle')
    }    
    if( angle == 90 ){
        console.log ('Right angle')
    }
    if( angle > 90 && angle < 180){
        console.log('Obtuse angle') 
    }
    if(angle == 180){
        console.log('Straight angle') 
    }
}

let angle4 = angletype(100)

//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]
*/
function checkStudentGrade (studGrade){

}
