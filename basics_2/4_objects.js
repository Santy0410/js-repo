const tinderUser = { }
tinderUser.id = "1234"
tinderUser.name = "sammy"

const regularUser = {
    email: "santy@gmail.com",
    fullname: {
        userfullname: {
            firstname: "santy",
            lastname: "t"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.lastname);
const obj_1 = {  1:"a",2:"b"}
const obj_2 = {  5:"a",4:"b"}

// const obj_3 = Object.assign({},obj_1,obj_2);

const obj_3 = {...obj_1,...obj_2}; 
console.log(obj_3);

console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("id"));

const course = {
    courseName: " js ",
    price: " 1000",
    instructor: "hitesh"
}
// destructure

const {instructor: tutor} = course
console.log(tutor)

// api

// {
//     name : "santy"
//     DOB : "4.10.2002"

// }

