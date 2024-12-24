// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for (i = 1; i <= 10; i++) {
    console.log(i);
}

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
for (i = 1; i <= 10; i++) {
    if(i % 2==0){
       console.log(i); 
    }
    
}

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
let i =1;
while(i<=10){
    if(i %2 !==0)
    {
        console.log(i)
    }

i++;

};



// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

const number = parseInt(prompt("Enter a number to print its multiplication table:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.

let sum = 0; 
let m = 1;  

while (m <= 100) { 
  sum += m; 
  m++;     
}
console.log(`The sum of numbers from 1 to 100 is: ${sum}`); // طباعة النتيجة
// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
const numberr = parseInt(prompt("Enter a number to print its multiplication table:"));
if (numberr < 0) {
    console.log("Factorial is not defined for negative numbers.");
  } else {
    let factorial = 1;
    for (let i = 1; i <= numberr; i++) { 
      factorial *= i; 
    }
    console.log(`The factorial of ${numberr} is: ${factorial}`);
  }
// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.

const number = parseInt(prompt("Enter a number to calculate its factorial:"));

const limit = parseInt(prompt("Enter a number to generate the Fibonacci series up to that number:"));


if (limit < 0) {
  console.log("Please enter a positive number.");
} else {
  let a = 0; 
  let b = 1;
  console.log(a);
  if (limit > 0) {
    console.log(b);
  }

  let next = a + b;
  while (next <= limit) {
    console.log(next);
    a = b; 
    b = next; 
    next = a + b;
  }
}
// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

let t = [5 , 10 , 15 , 20];
let w = t.length -1;
while(i>0){
        console.log(t[w])

    w--;
}
