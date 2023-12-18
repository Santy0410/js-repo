
/***array */

const myArr = [0,"1",2,3,4]

const myVillian = ["thanos","ghor","madhara"]

const myArr_2 = new Array(1,2,3,4);
console.log(typeof myArr[4]);

// arraymethods

// myArr.push(5)
// myArr.push(7)
// myArr.pop()
// myArr.pop()
// console.log(myArr);

// myArr.unshift(0);
// console.log(myArr.includes(100));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);


// slice , splice 

console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);
console.log("c",myArr);


