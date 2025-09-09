// //primitive data type

// //number
// let a=10;
// console.log(a);
// console.log(typeof a);

// //number
// let b=10.12;
// console.log(b);
// console.log(typeof b);

// //string
// let str="Hello";
// console.log(str);
// console.log(typeof str);

// //boolean
// let e=true;
// console.log(e);
// console.log(typeof e);

// //undefind
// let s;
// console.log(s);
// console.log(typeof s);

// //null
// let n=null;
// console.log(n);
// console.log(typeof n);

// //array
// let ar=[10,45.12,"FCo",'T'];
// console.log(ar);
// console.log(typeof ar);

// //object
// let emp={
//     id:101,
//     name:"Abhishek",
//     Post:"SDE",
//     loc:"Pune"
// }
// console.log(emp);
// console.table(emp);
// console.log(Object.keys(emp));
// console.log(Object.values(emp));


// //function :-a block of code which perform perticular task
// //code reusability
// function hello(){
//     var st =10;
//     console.log("im a function")
// }
// hello();
// var st=10;
// console.log(st);

// function sqr(n){
//     let ns;
//     ns=n*n;
//     return console.log(ns);
// }
// sqr(5);

//types of function

// named function
// function sqr(n){
//     let ns;
//     ns=n*n;
//     return console.log(ns);
// }
// sqr(5);

// // Ananomous Function
// function (n){
//     let ns;
//     ns=n*n;
//     return console.log(ns);
// }
// (5);


//IIF Function
// (function (n){
//     let ns;
//     ns=n*n;
//     return console.log(ns);
// }
// (5))


// //Function with Expression
// let mul=function (p,q){
//     console.log(p*q);
    
// }
// mul(4,5)


// //Arrow function
// let div=((a,b)=>{
//     console.log(a/b);
// })
// div(5,5);

//nested Function
// function gradp(){
//     console.log("im gp");
//     function parent() {
//         console.log("im parent");
        
//         function child() {
//             console.log("im Child");
//         }child();
//     }parent();
    
// }
// gradp();


// function gradp(){
//     console.log("im gp");
//     function parent() {
//         console.log("im parent");
        
//         function child() {
//             console.log("im Child");
//             return child;
//         }
//         return parent;
//     }
//     return gradp;
// }
// gradp()()();


//Sting Methods
let a="Fortune Cloud";
console.log(a);
console.log(typeof a);

let b=a.charCodeAt(4);
console.log(b);

