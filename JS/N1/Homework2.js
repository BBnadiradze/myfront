//taks 1
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
        
    }console.log(`Min value is  ${minarr} & and Max value is  ${maxarr}`)
}

let newarr3 = [2,14,25,75,11,6]
let result3 = minMax(newarr3)

//task 4

