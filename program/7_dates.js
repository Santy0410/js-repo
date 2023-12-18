let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let timeStamp = new Date.now();
// console.log(timeStamp);


/* To give date by our input 
*/
// let myCreatedDate = new Date(2023,0,30);
//  let myCreatedDate = new Date(2023,0,30,10,5);
//  console.log(myCreatedDate.toLocaleString())



let newDate = new Date("01-12-2023") // here the month start frm 01
console.log(newDate.toDateString());

// thus date is an object we can use .get 

// like .getTime
//      .getMonth() like that//

/* now hence we know date are here in milliseconds starts from 1st jan 1970
so we can also convert the milliseconds in to second*/
console.log(Date.now())
console.log(Math.floor(Date.now()/1000));
