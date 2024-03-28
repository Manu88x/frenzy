 //FUNCTIONS.
      //for reusability.
      //you can create a function for login when a person wants to log in or arithmetic operations llike grading.

      //TYPES OF FUNCTIONS.
 //Named function:
   //Way 1: words
   function display welcome() // D.welcome-name of the function ()-parameters
   {
      console.log(//" where u pass a message")
   }
   //call- wrtite function name
      display welcome()//- written more than once it will appear more than once.
   
 //way2: const and numbers
   function add(){
      const x=4
      const y=8
      console.log("Result", x+y)// si a must uweke result
   }
   add()
   //answer=12

//Way 3: we use parameters. arithmetic
   function add(o,p){
      console.log(o+p)
   }
   add(10,34)
   //ans=44
   //NB: way 3 and way 2 cannot be used at the same time in one file ita kuonysha NAN.
   // if u want 12+77=89 kwa terminal use:￼￼
   console.log(`${a}+${b} =` ,a+b) // only applicable in way 3

 //Way4: differentiating stuff same as way 3
function find_even_or_odd(a){
   if( typeof (a) != "number")
   {
      console.log( "please enter a number.")
   }
   else if(a % 2==0){
      console.log(a + "is an even number")
   }
   else if( a % 2 !==0 ){
      console.log(a+ "is an odd number")
   }
}
find_even_or_odd(12000) 
//answer= 12000 is an even number.


//Anonymous- lack a name but a variable can be equated to it:    
// Way 1 arithmetic:
const add =  function (a,b){
   return a+b
}
console.log(add(33,88))

//OR

const add =  function (a,b){
   console.log(a+b)
}
add(33,88)

//NB= You cannot use thesame function name again it will glitch so use a different one but the process is the one thats important.

//Arrow: its like anonymus but on one line.
//Way1:
const addNumbers = (a,b) => console.log(a+b)

addNumbers(90,78)

//OR

const merge =( a,b) => {
console.log(a+b)
}
merge(888,999)
// use this if you have a lot of codes.

//call back- functions passed to other functions as a parameter.Kelvin alicombine two name functions one ya add the other ya result built kaa ya add.
//Way1:
function together ( num1, num2, callback){
let result =num1+num2
callback(result)
}
function displayResult(result){
console.log(result)
}
together(12, 89, displayResult)
//display result stayed the same through out.
//you may get an error just run it again.

//OR

function together ( num1, num2, callback){
let result =num1+num2
displayResult(result)
}
function displayResult(result){
console.log(result)
}
together(12, 89)

//Recursive-you can use a function in another function.
function x(){
x()
}