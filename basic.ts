// const cl = console.log;

// // typescript is a superst of javascript

// // const num1 = document.getElementById("num1")! as HTMLInputElement
// // const num2 = document.getElementById("num2")! as HTMLInputElement
// // const addBtn = document.getElementById("addBtn") as HTMLButtonElement
// // // const addBtn = <HTMLButtonElement>document.getElementById("addBtn") >> for another way to select object

// // const add = (n1: number, n2: number) => {
// //     cl(n1 + n2)
// // }

// // // ? >> nullchecker
// // addBtn?.addEventListener("click", () => {
// //     add(+num1.value, +num2.value) // + is taken bacause we will given in addtion 
// // })


// // showresult ? cl : return 
// function add(n1: number, n2: number, showresult: boolean, phrase: string) {
//     if (showresult) {
//         cl(phrase + (n1 + n2))
//     } else {
//         return (phrase + (n1 + n2))
//     }
//     // return showresult ? cl(phrase + (n1 + n2)) : phrase + (n1 + n2)
// }

// add(10, 10, true, "the addition is ")
// let r1 = add(10, 20, false, "the addition is ")
// cl(r1)


// let x = 100; // Type inference
// // x = "str" >> it will through error because its type is number

// interface PerType { fname: string; lname: string; age: number; }

// let person: PerType = {
//     fname: "Jhon",
//     lname: "Doe",
//     age: 12
// }

// cl(person)