// 'use strict'
// function name() {
//     var name = 'masai'
//     console.log(this.name);
// }
// function greet() {
//     console.log('hello')
// }
// var arr = [{name: 'N'}, {name: 'Am'}, {name: 'Al'}];

// for(var i =0; i < arr.length; i++){
//     setTimeout(name.bind(arr[i]), 0)
//     setTimeout(greet(), 0);
// }

// const arr = [10, 12, 15, 21];
// for(var i =0; i , arr.length; i++)
// {
//     setTimeout(() => {
//         console.log("Index:" + i + ", element: "+ arr[i]);
//     }, 10);
// }

// var x = 100;
// function alpha(){
//     var x = 200;
//     function beta(){
//         console.log(x)
//     }
//     return beta;
// }
// var game = alpha()
// game()


// var arr = ["a", "b", "c", "d", "e"];
// const fun =([f, ...r]) => r.reduce((a,c)=>a+c)+f

// console.log(fun(arr))

// function val(b) {
//   const a = 100
//   a =b
//   return a  
// }
// console.log(value(100))

// print("abc");
// var print;

// function print(name) {
//     console.log("hey", name);
// }
// print = function(name){
//     console.log("hey", name)
// }

// var name = "Ajay"
// function print(){
//     console.log(this.name)
// }
// var person= {
//     name: "Haren",
//     print: print()
// }
// person.print()

function fname(params) {
    var name = "masai"
    console.log(this.name)
}
var name = "abc"
fname()

// var str = "masai"
// var{length} = str
// console.log(length)

// typeof[1, 1, 1] === typeof({val:1, })

