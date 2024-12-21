//destructuring assignment syntax is a javascript expression that makes it possible to unpack values from arrays , or properties from object , into distinct varibles.

const numbers=[1,2,3,4,5];
// const num1=number[0];
// const num2=numbeer[1];
// const [a,b,c,d]=number;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

const[x,y,...num]=numbers;
console.log(x);
console.log(y);
console.log(num);
let name="string";
const [ name1 ,name2]=name;
console.log(name1);
console.log(name2);

// const person={
//     name:"jhon doe",
//     age:24,
//     city:"new york"
// }

//old ways
// const name=person.name;
// const age=person.age;
// const city=person.city;

//object
// const {name, age, city}=person;

