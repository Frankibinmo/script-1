


function add (a,b) {
    console.log(a+b)
    
 }
 add(3,4)
 add(2,9)
 
 function age (myAge) {
    console.log(myAge + 20)
 }
 age (20)
 
 
 
 function myloop(x) {
    for (let i = 0; i < x; i++) {
       if (i === 0) {
          console.log(i + 'is an even number');
       }
       else if (i % 2 === 0) {
          console.log(i +'is an even number');
       }
       else {
 console.log(i + 'is an odd number');
       } m
    }
 }
 myloop(10)
 
 
 
 function add(a,b,c,d) {
    return a+b+c,d;
 }
 let number1 = parseFloat(prompt("Enter first number: "));
 let number2 = parseFloat(prompt("Enter second number: "));
 let number3 = parseFloat(prompt("Enter third number: "));
 let number4 = parseFloat(prompt("Enter fourth number: "));
 let number5 = parseFloat(prompt("Enter fifth number: "));
 
 let result = add(number1,number2,number3);
 console.log("The sum is " + result);
 
 
 let a = "hello";
 function greet() {
    a = 3;
 }
 console.log(a);
 greet();
 console.log(a); 
 
 function stringLenght(str) {
    
     console.log(str.lenght);
 }
 stringLenght("Hello, world!");
 
 
 assignment1
 
 function highestNumber(num6, num8, num11) {
    return Math.max(num6,num8,num11);
 }
 console.log( highestNumber(80,90,55));
 
 // this is assignment No2
 
   function man(text) {
     console.log(text.length);
  }
   man("Beautiful,world!");
 after return, the stringlenght is 16
 
 
 
 
 Assignment3
 
 function subjects(html, css, javascript) {
    let f = 18, m =18, n =25
    if(f > n) {
       console.log("it is true");
    }
    else if(f >= n && f <= n) {
       console.log("girls should take html and javascript");
    }
    else if(m === 18) {
       console.log("boys should offer javascript");
    }
    else {
       console.log("other students take other thinkgs");
    }
 }
    subjects("others should take other things")
 
 
 const age = 13; 
 const ownsCar = true; 
 if (age >= 18 && ownsCar) {  
     console.log("Jerry is old enough to drive and has his own car."); 
 } else { 
    console.log("Jerry does not drive."); 
 }
 
 
//  @param {number} percentage
//  @param {number} originalValue
//  @param {number} 
 
//  n0 ONE ASSIGNMENT
 
 function percentageCalculation(percentage, originalValue) {
     if (typeof percentage !=='number'|| typeof originalValue !=='number') {
         throw new Error('Both arguments must be numberS.');
     }
     return (percentage / 100) * originalValue;
 }
 let percentage = 10;
 let originalValue = 100;
 let result = percentageCalculation(percentage, originalValue);
 console.log(`The ${percentage}% of ${originalValue} is ${result}.`);
 
 
 
//  NO 2 ASSIGNMENT
 
 function generatingRandomNumber() {
     let randomNumber = Math.floor(Math.random() * 51);
     if (randomNumber < 10) {
         console.log("you are a child and can not take the program, but you can try scratch");
     
     } else if (randomNumber >= 10 && randomNumber < 25) {
         console.log("you are ripe for the program, please download the curriculum");
     } else if (randomNumber >= 25 && randomNumber < 35) {
         console.log("By now you should be a senior developer.");
     } else {
         console.log("you are too old, please try consulting.");
     }
 }
 
   generatingRandomNumber(15);
 
 
 
   let remainder = 0
 
   function Compare() {
        let randomNumber = Math.floor(Math.random() * 59) + 2;
     console.log(`Generated RandomNumber:${randomNumber}`);
  
 
     if(randomNumber === 36) {
         remainder = 100 - remainder;
         console.log(`remainder: ${remainder}`);
 
         let squerRoot = Math.sgrt(remainder);
         console.log(`Square Root of Remaindr: ${squerRoot}`);
     }
     
   }
 
     Compare();