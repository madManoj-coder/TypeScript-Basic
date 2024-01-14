// const cl = console.log;

// // type inference 
// let a; // a: any

// a = 100;
// a = true;


// // type
// let b: number; // it wil check datatype
// b = 20;
// b = 12;

// // 1} Number :-

// const ages1: number[] = [10, 20, 30, 40]
// const ages2: Array<number> = [10, 20, 30, 40]

// // ages.push("string")
// ages1.push(25)


// // ages1.forEach(ele => {
// //     ele.// number methods suggestions
// // })



// // 2} string :-
// let skillsets: Array<string>

// skillsets = ["HTML", "CSS", "JS", "TS"]

// // skillsets.forEach(ele => {
// //     ele.// string methods suggestions
// // })


// type PersonType = {
//     fname: string,
//     lname: string,
//     age: number,
//     email: string | null, // | >> it maybe string or null we can add
//     child?: { // ? >> it is non mandatory
//         fname: string,
//         lname: string,
//     },
//     player: Array<string>
// }


// let person1: PersonType = {
//     fname: "Jhon",
//     lname: "Doe",
//     age: 12,
//     email: null,
//     child: {
//         fname: "May",
//         lname: "Doe"
//     },
//     player: [] // empty array >> by default string
// }


// let person2: PersonType = {
//     fname: "James",
//     lname: "James",
//     age: 8,
//     email: null,
//     child: {
//         fname: "Jen",
//         lname: "Doe"
//     },
//     player: []
// }

// cl(person1)
// cl(person2)


// const perData : PersonType[] = [
//     {
//         fname: "Jhon",
//         lname: "Doe",
//         age: 12,
//         email: null,
//         child: {
//             fname: "May",
//             lname: "Doe"
//         },
//         player: [] // by default string
//     },
//     {
//         fname: "James",
//         lname: "James",
//         age: 8,
//         email: "james@gmail.com",
//         player: []
//     }
// ]