const Marvel_heroes = ["Thor","Spiderman","IronMan"]
const Dc_heroes = ["SuperMan","BatMan","Flash"]

// Marvel_heroes.push(Dc_heroes);
// console.log(Marvel_heroes)

// const allHeroes = Marvel_heroes.concat(Dc_heroes)
// console.log(allHeroes);

// const allHeroes = [...Marvel_heroes,...Dc_heroes]

// console.log(allHeroes)

// methods in array
//isArray
console.log(Array.isArray("santy"))
// .From
console.log(Array.from("santy"));
// .of
let score1 = 100
let score2 = 500
let score3 = 700

console.log(Array.of(score1,score2,score3));

// flat

const messedUpArray = [1,2,[3,4],[5,6,[7,8]]]

const cleaRedArray = messedUpArray.flat(Infinity);

console.log(cleaRedArray);