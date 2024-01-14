// const cl = console.log;

// // type literal :- value or data as a datatype
// const a = 10; // datatype and value of a both are 10(type number)
// let b = 20; // type inference


// // type literal union :- value or data as a datatype
// type prodSta = "In_process" | "pending" | "ready_for_Dispatched" | "Delivered"


// type prod = {
//     pname: string;
//     color: string;
//     prodStatus: prodSta;
// }


// let products: prod = {
//     pname: "Watch",
//     color: "black",
//     prodStatus: "ready_for_Dispatched"
// }

// cl(products)



// type combinable = string | number;

// function combine(n1: combinable, n2: combinable, returnType: "as-string" | "as-number") {
//     let result;
//     if (typeof n1 === "number" && typeof n2 === "number") {
//         result = n1 + n2
//     } else {
//         result = n1.toString() + n2
//     }

//     if (returnType === "as-string") {
//         return result.toString()
//     }

//     if (returnType === "as-number") {
//         return +result
//     }

// }

// cl(combine(10, 10, "as-string")) // number >> string
// cl(combine("20", 10, "as-number")) // string >> number




// // n1 n2                 result
// // "number" + "number"   number
// // "string" + "number"   string