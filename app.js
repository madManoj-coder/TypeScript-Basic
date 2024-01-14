var cl = console.log;
// unknown :-
// let userDetails : any;
var userDetails;
var userName;
userDetails = 1111;
userDetails = "string";
// userDetails = true;
// userDetails = {};
// userName = userDetails;
// cl(userName)
if (typeof userDetails === "string") {
    userName = userDetails;
    cl(userName);
}
