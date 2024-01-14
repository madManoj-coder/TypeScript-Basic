// const cl = console.log;

// // Admin
// // Candidate
// // SuperAdmin


// // Enum :- 
// // 1} Enum Example :-

// enum UserRoleEnum {
//     ADMIN = "ADMIN",
//     SUPER_ADMIN = "SUPER_ADMIN",
//     CANDIDATE = "CANDIDATE"
// }

// cl(UserRoleEnum.ADMIN)
// cl(UserRoleEnum.SUPER_ADMIN)
// cl(UserRoleEnum.CANDIDATE)

// type UserRoleType = {
//     fname: string;
//     lname: string;
//     email: string;
//     userRole: UserRoleEnum;
// }

// let user: UserRoleType = {
//     fname: "Jhon",
//     lname: "Doe",
//     email: "jd@gmail.com",
//     userRole: UserRoleEnum.ADMIN
// }


// if (user.userRole === "ADMIN") {
//     cl(`User is a Admin`)
// }

// if (user.userRole === "SUPER_ADMIN") {
//     cl(`User is a Super Admin`)
// }

// if (user.userRole === "CANDIDATE") {
//     cl(`User is a Candidate`)
// }


// // 2} Enum Example :-

// enum proEnum {
//     shipping = "shipping",
//     Dispatched = "Dispatched",
//     Reached = "Reached",
//     Delivered = "Delivered"
// }

// type ProType = {
//     model : string;
//     price : string;
//     color : string;
//     state : proEnum;
// }

// let prod = {
//     model : "Ip 15pro",
//     price : "100000",
//     color : "black",
//     state : proEnum.Reached
// }

// if(prod.state === "Reached"){
//     cl(`your order is successfully Reached`)
// }

