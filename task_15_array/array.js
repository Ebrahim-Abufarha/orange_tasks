console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
[ 1,7 , 9 , 45 ]

["Str", "alex","moh" ,"the","fox", "over", "lazy", "dog"]

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits = ["Tomato", "Banana", "Watermelon"];

console.log(fruits.indexOf("Tomato"));
console.log(fruits.indexOf("Banana"));

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let favorites = {
    food: ["Pizza", "Sushi", "Pasta", "Burgers", "Tacos"],
    sport: ["Football", "Basketball", "Tennis"],
    movie: ["Inception", "The Matrix", "The Dark Knight", "Interstellar"]
  };
  
  console.log(favorites);
  

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arr ){

    console.log(arr[0])
    }
    arr=[1,4,5];
    firstOfArray(arr);
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr){
    console.log(arr[arr.length-1])

}
let arr=[1,4,5];
lastOfArray(arr)

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
// Initial array
var array = [0, 5, 7, 9];

array.unshift(1);

array.push(3); 
array.push(4); 
array.push(6); 
array.push(8); 
array.push(10);

array.shift();

array.pop();

console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
let ayman=[5,5,5,5,5];
ayman.shift();
ayman.unshift(5);
ayman.pop();
ayman.pop();
ayman.pop();
ayman.pop();
ayman.push(9);
ayman.push(-7);
ayman.push(3.5);

console.log(ayman);






/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr) {
    const length = arr.length;
  
    if (length % 2 !== 0) {
      return arr[Math.floor(length / 2)];
    } else {
      const middle1 = arr[length / 2 - 1];
      const middle2 = arr[length / 2];
      return `${middle1} and ${middle2}`;
    }
  }
  
  console.log(middleOfArray([1, 4, 5])); 
  console.log(middleOfArray(["t", "u", "g", "x"]));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
animals[0] = 'zebra';
animals.pop();
animals[1] = 'elephant';
console.log(animals);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var arr= [1,2,3,8,9];

function indexOfArray(arr, index) {
    console.log( arr[index]);
}
indexOfArray(arr,3);
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr){
    arr.pop();
    console.log(arr)
    // for (let i = 0; i < arr.length-2; i++) {
    //     console.log(arr[i]);
    // }
    
    }
    arr=[1,2,3,8,9];
    arrayExceptLast(arr);

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(arr, value) {
    arr.pop();
    arr.push(value);
 }
 let  arr= [1,2,3,8,9];
 let value =55;
 addToEnd(arr,value);
 console.log(arr)

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let sum = 0;

function sumArray(arr){
    for(i=0;i<arr.length;i++){
sum += arr[i];

    }
}
    let arr= [1,2,3,8,9];

sumArray(arr);
    console.log(sum);
// ............

let sum = 0;
let i=0;
function sumArray(arr){
    while(i<arr.length){
sum += arr[i];
i++
    }
}
    let arr= [1,2,3,8,9];

sumArray(arr);
    console.log(sum);
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function minInArray(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min; 
}

let arr = [2, 1, 3, 8, 9];
console.log(minInArray(arr));
// ............

function minInArray(arr) {
    let min = arr[0];
let i = 1;
    while ( i < arr.length) {
       if (arr[i] < min) {
            min = arr[i];
        }  
       i++ 

    }

    return min; 
}

let arr = [2, 5, 3, 8, 9];
console.log(minInArray(arr));





/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray(arr,num){
    for(i=0;i<arr.length;i++)
        {
            if(arr[i]==[num]){
              arr.splice(i,1)
            }

        }            

}
let num=8;
let arr=[1,2,3,8,9];
removeFromArray(arr,num);
console.log(arr);

i=0;
// ..............
function removeFromArray(arr,num){
    while(i<arr.length)
        {
            if(arr[i]==[num]){
              arr.splice(i,1)
            }
            i++
        }            

}
let num=8;
let arr=[1,2,3,8,9];
removeFromArray(arr,num);
console.log(arr);

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr){

    for(i=0;i<arr.length;i++){
        if(arr[i] %2==0){
            arr.splice(i,1);
            i--;
        }
    }
    }
    let arr =[1,2,3,8,9,8,8,6,5,6,4,2];
    oddArray(arr);
    console.log(arr);
    
    //  .............
    
    function oddArray(arr){
    i=0;
    while(i<arr.length){
        if(arr[i] %2==0){
            arr.splice(i,1);
            i--;
        }
     i++
       
    }
    }
    let arr =[1,2,3,8,9,8,8,6,5,6,4,2];
    oddArray(arr);
    console.log(arr);
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr){
    let sum=0;
        for(i=0;i<arr.length;i++){
            sum+=arr[i];
    
    
        }
    let ave=sum/arr.length;
    return ave;
    }
    let arr=[1,2,3,8,9,77];
    console.log(aveArray(arr));
    
    // ........
    function aveArray(arr){
    let sum=0;
    i=0;
        while(i<arr.length ){
            sum+=arr[i];
    
    i++
    
        }
    let ave=sum/arr.length;
    return ave;
    }
    let arr=[1,2,3,8,9,77];
    console.log(aveArray(arr));


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(arr){
    let short =arr[0]; 



for(i=0;i<arr.length;i++){
    if(arr[i].length<short.length){
        short=arr[i];
    }
}
return short
}
let arr =["alex","mercer","aa","madrasa","b","rashed2","emad","hala"];
shorterInArray(arr);
console.log(shorterInArray(arr))


// ..........


function shorterInArray(arr){
    let short =arr[0]; 
i=0;


while(i<arr.length){
    if(arr[i].length<short.length){
        short=arr[i];
    }
    i++
}
return short
}
let arr =["alex","mercer","aa","madrasa","b","rashed2","emad","hala"];
shorterInArray(arr);
console.log(shorterInArray(arr))


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function repeatCharInWord( word, char) {
    let count = 0; 

        for (let i = 0; i < word.length; i++) {
            if (word[i] == char) {
                count++;
            }
        }
    

    return count;
}

var word= "alex mercer madrasa rashed2 emad hala"
console.log(repeatCharInWord( "madrasa", "a"));  
console.log(repeatCharInWord( "emad", "e"));    
console.log(repeatCharInWord( "hala", "h"));     
console.log(repeatCharInWord( "alex", "z"));     


// ........



function repeatCharInWord( word, char) {
    let count = 0; 
let i = 0
        while ( i < word.length) {
            if (word[i] == char) {
                count++;
            }
            i++
        }
    

    return count;
}

var word= "alex mercer madrasa rashed2 emad hala"
console.log(repeatCharInWord( "madrasa", "a"));  
console.log(repeatCharInWord( "emad", "e"));    
console.log(repeatCharInWord( "hala", "h"));     
console.log(repeatCharInWord( "alex", "z"));     


    
    
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(arr){
    let nn = [];
    for(i=0;i<arr.length;i++){
        if(arr[i].length %2!=0 && i %2 ==0){
             nn.push(arr[i]);
    
        }
    }
        return nn;
    
    }
    let arr=["alex","mercer","madrasa","rashed2","emad","hala"];
    console.log(evenIndexOddLength(arr));
    
    
    
    // ............
    
    function evenIndexOddLength(arr){
    let nn = [];
    i=0;
    while(i<arr.length){
        if(arr[i].length %2!=0 && i %2 ==0){
             nn.push(arr[i]);
    
        }
        i++
    }
        return nn;
    
    }
    let arr=["alex","mercer","madrasa","rashed2","emad","hala"];
    console.log(evenIndexOddLength(arr));
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(arr){
    
    for(i=0;i<arr.length;i++){
        arr[i]= arr[i]**i;
    }
return arr;
}
let arr = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(arr));

// .......


function powerElementIndex(arr){
    i=0;
    while(i<arr.length){
        arr[i]= arr[i]**i;
        i++;
    }
return arr;
}
let arr = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(arr));

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(arr){
    let newarr=[];
    for(i=0;i<arr.length;i++){
    if(arr[i] %2==0 && i %2==0){
        newarr.push(arr[i]);
    }
    
    }
    return newarr;
    
    
    }
    arr=[5,2,2,1,8,66,55,77,34,9,55,1];
    console.log(evenNumberEvenIndex(arr));
        
    
    // ........
    
    
    
    function evenNumberEvenIndex(arr){
    
        i=0;
    let newarr=[];
    while(i<arr.length){
    if(arr[i] %2==0 && i %2==0){
        newarr.push(arr[i]);
    }
    i++
    }
    return newarr;
    
    
    }
    arr=[5,2,2,1,8,66,55,77,34,9,55,1];
    console.log(evenNumberEvenIndex(arr));