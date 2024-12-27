/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(jobTitle, geographicLocation, partnerName, numberOfChildren) {
  const fortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
  
  console.log(fortune);
}
let jobTitle= prompt("please inter jobTitle ");
let geographicLocation= prompt("please inter geographicLocation ");
let partnerName= prompt("please inter partnerName ");
let numberOfChildren= prompt("please inter numberOfChildren ");





let fortune= tellFortune(jobTitle, geographicLocation, partnerName, numberOfChildren);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age){
  return `Your doggie is ${age * 7} years old in dog years!`

}
console.log(calculateDogAge(3))





/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(agee,amount){
  return`"You will need ${agee * 365 * (100-agee)} to last you until the ripe old age of 100`


}
console.log(calculateSupply(30,3))

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
  return `Hello ${name}`; 
}

console.log(greet("adam")); 

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
 */ 
function double(x) {
  return 2 * x;
}


// function double(7) {
//   return 2 * 7;
// }
function double(x) {
     return 2 * x;
   }



// function double('7') {
//   return 2 * 'x';
// }
function double(x) {
     return 2 * x;
  }



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
*/
function double1(x) {
  return 2 * x ;}


// functiondouble2 x)
// return 2 * x;
// }

function double2 (x){
 return 2 * x;
 }


// function (x) double3 {
//   return 2 * x;

function double3 (x)  {
  return 2 * x;}


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(x){
  return x**3;

}
console.log(cube(4));



/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(x,y){
  return x*y


}
console.log(multiply(3,4))

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"
*/
function canIGetADrivingLicense(age){

    
  if (age>=20)
  {
    return "yes you can"
  }else{
    return `please come back after ${20-age} years to get one`
  }
  
  }
  let age= prompt ("please enter your age")
  age = Number(age); 
  console.log(canIGetADrivingLicense(age))
  
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(x,y){
  if(length.x==length.y){
    return "true"
  }else {return "false"}

}
let x = prompt("inter x")
let y = prompt("inter y")
console.log(sameLength(x,y))

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNumber(num1, num2) {

  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
num1 = prompt("inter num1");
num2 = prompt("inter num2");

num1=Number(num1);
num2=Number(num2);


console.log(largerNumber(num1, num2));
 


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNumber(num1, num2, num3) {
  // مقارنة الأرقام الثلاثة لإيجاد الأصغر
  if (num1 <= num2 && num1 <= num3) {
    return num1;
  } else if (num2 <= num1 && num2 <= num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(smallerNumber(5, 3, 8)); 
console.log(smallerNumber(10, 15, 7));
console.log(smallerNumber(2, 2, 3));
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(num1,num2,num3,num4,num5){
  if(num1.length<num2.length &&num1.length<num3.length &&num1.length<num4.length &&num1.length<num5.length){
    return `num1 is ${num1}` 
  }else if(num2.length<num1.length &&num2.length<num3.length &&num2.length<num4.length &&num2.length<num5.length){
    return `num2 is ${num2}`
  }else if(num3.length<num1.length &&num3.length<num2.length &&num3.length<num4.length &&num3.length<num5.length){
    return `num3 is ${num3}`
  }else if(num4.length<num1.length &&num4.length<num2.length &&num4.length<num3.length &&num4.length<num5.length){
    return `num4 is ${num4}`
  }else {return `num5 is ${num5}`}

}
num1=prompt("inter num1")
num2=prompt("inter num2")
num3=prompt("inter num3")
num4=prompt("inter num4")
num5=prompt("inter num5")
console.log(shorterString(num1,num2,num3,num4,num5))



/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(num1,num2,num3,num4,num5){
  if(num1.length>num2.length &&num1.length>num3.length &&num1.length>num4.length &&num1.length>num5.length){
    return `num1 is ${num1}` 
  }else if(num2.length>num1.length &&num2.length>num3.length &&num2.length>num4.length &&num2.length>num5.length){
    return `num2 is ${num2}`
  }else if(num3.length>num1.length &&num3.length>num2.length &&num3.length>num4.length &&num3.length>num5.length){
    return `num3 is ${num3}`
  }else if(num4.length>num1.length &&num4.length>num2.length &&num4.length>num3.length &&num4.length>num5.length){
    return `num4 is ${num4}`
  }else {return `num5 is ${num5}`}

}
num1=prompt("inter num1")
num2=prompt("inter num2")
num3=prompt("inter num3")
num4=prompt("inter num4")
num5=prompt("inter num5")
console.log(longerString(num1,num2,num3,num4,num5))
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(x){
  if(x>0 && x %2 == 0){
    return "true"
  }else{
    return "fulse"
  }

}
let x =prompt("inter even number")
x=Number(x);
console.log(isEven(x))

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(x){
  if(x>0 && x %2 !== 0){
    return "true"
  }else{
    return "fulse"
  }

}
let x =prompt("inter odd number")
x=Number(x);
console.log(isOdd(x))


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(x){
  if(x>0){
    return x;

  }else{ return x * -1} 

}
let x =prompt("inter the number")
x=Number(x);
console.log(positive(x))


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(x,y){
  return `${x} ${y} `

}
x = prompt("inter first name");
y = prompt("inter last name");
console.log(fullName(x,y))

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(...numbers) {
  let sum = numbers.reduce((acc, num) => acc + num, 0);

  let avg = sum / numbers.length;

  return avg;
}

console.log(average(10, 20, 30, 40, 50)); 
console.log(average(5, 15, 25, 37, 45, 55));
console.log(average(1, 2, 3)); 


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
  return Math.random();
}

console.log(randomNumber());

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(randomBetweenNumbers(5, 10));
console.log(randomBetweenNumbers(20, 50)); 
console.log(randomBetweenNumbers(100, 200));


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(x){
if(x>=95 && x<=100){
  return "A"
}else 
  if(x>=85 && x<=94){
    return "B"
}else 
if(x>=70 && x<=84){
  return "C"
}else 
if(x>=50 && x<=69){
  return "D"
}else 
if(x>=0 && x<=49){
  return "f"
}
}
let x = prompt("inter your score");
 x = Number(x);
console.log(scoreInUniversty(x));


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
function counter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let myCounter = counter(); 

console.log(myCounter());  
console.log(myCounter()); 
console.log(myCounter());
console.log(myCounter()); 


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function counter() {
  let count = 0; 

  function increment() {
    return count++;
  }

  function reset() {
    let previousCount = count;
    count = 0;  
    return `${previousCount} - The counter has been reset`; 
  }

  return {
    increment,
    reset
  };
}

let myCounter = counter();

console.log(myCounter.increment());
console.log(myCounter.increment()); 
console.log(myCounter.increment());  
console.log(myCounter.reset());   
console.log(myCounter.increment()); 
