import {updatedStudents} from "./day3.js";
let user = {
    name:"abhilash",
    age:23,
    city:"hyderabad",
    address:{street:"sr nagar",pincode:500038}
};
let user1 = {
    name:"abhilash",
    age:23,
    address:{street:"sr nagar",pincode:500038}
};
let user3 = {
    name:"abhilash",
    age:25,
    address:{street:"sr nagar",pincode:500038}
};
let {name,city}=user;
let {street,pincode}=user.address;
console.log(name);
console.log(city);
console.log(street);
console.log(pincode);
let {name:username,age:userage}=user;
console.log(username);
let {country="India"}=user;
console.log(country);
function displayuser({name,age,city="unknown"}){
    console.log(name,age,city);
}
displayuser(user);
displayuser(user1);
let user2 = {...user};
let user4 = {...user1,...user3};
console.log(user1);
console.log(user4);
let user5 = {name:"raju",age:30};
console.log(user5.address?.city??"N/A");
console.log(updatedStudents);
updatedStudents.map(({name,marks,grade})=>{
    console.log(`${name} scored ${marks} and got a ${grade}`);
});

