// 1- Write a program to declare two numbers. If both numbers are greater than 10, 
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".

let x=10;
let y=11;
if(x > 10 && y >10){
    console.log("Both numbers are greater than 10");

}else{
    console.log("At least one number is not greater than 10");
};
       

// 2- Write a program to declare a username and a password. 
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".

const correctUsername = "admin";
const correctPassword = "12345";

let enteredUsername = "admin"; 
let enteredPassword = "12345"; 

if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
  console.log("Access granted"); 
} else {
  console.log("Access denied"); 
}


// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".

if( 10<= x && x<= 20){
    console.log("The number is between 10 and 20")
}else{
console.log("The number is not between 10 and 20")
    };


// 4- Write a program that to declare age and whether they have a driver's license (yes or no). 
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".

age=20;
license="yes";

if(age>=18 && license=="yes"){
    console.log("You can drive")

}else{
    console.log("You cannot drive")
}

// 5- Write a program to declare a number. 
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".

if(x>10 || x<0){
    console.log("Invalid number")

}else{
    console.log("Valid number")
};

// 6- Write a programto declare a number. 
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid". 
//Otherwise, print "The number is not valid".
if(x>=20 && x<=25){
console.log("inclusive")

}else{console.log("The number is valid")};


// 7- to declare a password. If the password is "secret" or "password", print "Access granted". 
//Otherwise, print "Access denied".

let pas= 'password';
    if(pas=== "password" || pas==="secret"){
        console.log("Access granted")


    }else{
console.log("Access denied") 
    };

// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even, 
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
let z=2;
if(z>0 && z<=100 && z % 2==0){
    console.log("The number is even and between 0 and 100")

}else{
    console.log("The number is not even and/or not between 0 and 100")

}



// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative". 
//Otherwise, print "Both numbers are positive".
let p = 5;
let o = 6;
if(p<0 || o<0){
console.log("At least one number is negative")

}else{
    console.log("Both numbers are positive")
}


// 10- Write a program to declare age and whether they are a student (yes or no). 
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".

if (age < 18 || isStudent === "yes") {
    console.log("You qualify for a discount"); 
  } else {
    console.log("You do not qualify for a discount"); 
  };
