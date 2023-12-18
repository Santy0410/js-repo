// object 

// syntax 
const mysym = Symbol("key1")
const jsuser = {
    name : "santy",
    "age" : 21,
    email : "santy@gamil.com",
    isloggedin : false,
    lastLoggedindays : ["monday","wednesday"],
    [mysym] : "key1"

}
console.log(jsuser)

// accesing the obj value

console.log(jsuser.name);
console.log(jsuser["age"]);

// changes in the object values

jsuser.age = 28

// Object.freeze(jsuser)  *************************

jsuser.age = 40

console.log(jsuser);