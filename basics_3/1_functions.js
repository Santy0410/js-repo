// function sayMyname() {
//     console.log("santy")

// }

// sayMyname()

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}

function addTwoNumbers(number1,number2){
    
    // let result = number1 + number2;
    // return result;
    return number1+number2
}
const result = addTwoNumbers(9,5)
addTwoNumbers(3,1001010);

// console.log(`result =  ${result}`);

function loginUserMessage(username){
    // if(username == undefined)
    if(!username){
        console.log("please enter ur usrename");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage());


// dont know how many arguments are there 

function calculateCartPrice(...num1){
          return num1
}

// console.log(calculateCartPrice(200,900,3000));
const user = {
    username: " santy",
    price: 400
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username}`);
}
// handleObject(user)
handleObject({
    username: "altman",
    price: 100000
})

// passing array 

const myNewarray = [200,900,8000]

function returnecondvalue(getarray) {
    return getarray[1]
    
}

console.log(returnecondvalue(myNewarray))