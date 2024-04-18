////Importanto uma unica variavel
//import { apikey } from "./util.js";
//console.log(apikey);


////IMportanto mais de uma variavel
//import { apikey, abc } from "./util.js";
//console.log(apikey);
//console.log(abc);


////Importa TODAS as variavies
//import * as util from "./util.js";
//console.log(util.segunda);


////Atribuir apelidos para variaveis caso queira
//import { apikey, abc as content } from "./util.js";
//console.log(apikey);
//console.log(content);

////Basic function
//function cretaeGreeting(userName, message = "Hello!") {
//    return "Hi, I am " + userName + ". " + message;
//}

//const greeting1 = cretaeGreeting("Max");
//console.log(greeting1);

//const greeting2 = cretaeGreeting("Manuel", "Hello, what's up?");
//console.log(greeting2);


// const user = {
//     name: "Max",
//     age: 30,
//     greet() {
//         console.log("Hello!");
//         console.log(this.age);
//     }
// };

// console.log(user.name);
// user.greet();


// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log("Hi!");
//     }
// };

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();


// const hobbies = ["Sports", "Cooking", "Reding"];
// console.log(hobbies[0]);

// hobbies.push("Woking");
// console.log(hobbies);

// //const index = hobbies.findIndex((item) => {
// //    return item === "Sports";
// //});
// const index = hobbies.findIndex((item) => item === "Sports");
// console.log(index);



////MAP
////Serve para adicional algo dentro de uma matriz, seja altera-lo ou modificalo, ate mesmo transforma-lo
////Concatenando o valor
//const editedHobbies = hobbies.map((item) => item + "!");
//console.log(editedHobbies);
/*print: 'Sports!', 'Cooking!', 'Reding!', 'Woking!'*/

//Transformando em objeto
// const editedHobbies = hobbies.map((item) => ({text: item}));
// console.log(editedHobbies);
/*print: Criou uma lista com 4 objetos*/

//const userNameDate = ["Gabriel", "Florindo"];
//const firstName = userNameDate[0];
//const lastName = userNameDate[1];

// const [firstName, lastName] = ["Gabriel", "Florindo"];
// console.log(firstName);
// console.log(lastName);


// const user = {
//     name: "Max",
//     age: 34
// }

// const {name: userName, age} = {
//     name: "Max",
//     age: 34
// }
// console.log(userName);
// console.log(age);


//Operador especial de propagação (The Spread Operator)
// ... serve para fazer o merge de dois itens sepradados por ","

//Exemplo com lista
//const hobbies = ["Sports", "Cooking"];
//const newHobbies = ["Reading"];
////aqui usando ... para pega os valores das listas acima e colocar dentro de outra lista como possiçoes e nao como dois arrays
//const mergedHobbies = [...hobbies, ...newHobbies];
//console.log(mergedHobbies);
/*print:  ['Sports', 'Cooking', 'Reading']*/

//Exemplo com objeto
//const user = {name: "Max", age: 34}
//const extendedUser = {isAdmin: true, ...user}
//console.log(extendedUser);
/*print: {isAdmin: true, name: 'Max', age: 34}*/


//If conditions
// const password = prompt('Your Password');
// if (password === "Hello") {
//     console.log("Hello works!");
// } else if (password === "hello") {
//     console.log("hello works!");
// } else {
//     console.log("Access not granted.");
// }

//For exemplo
//const hobbies = ["Sports", "Cooking", "blabla"];
// for (const hooby of hobbies) {
//     console.log(hooby);   
// }

//hobbies.map((hooby) => console.log(hooby));