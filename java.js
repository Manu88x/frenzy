console.log(9*8)
console.log("hurray")
console.log("happy happy")
console.log(9==9)
console.log((7+8)==(7+9))
console.log((88+99)&&(88+99))
let name="mike"
let number= 888
number=99
console.log( typeof(number) )
console.log( typeof(name) )
console.log(name)
console.log(name + number)
console.log(number)
console.log(name)
const age = 77
const school= 'Moringa school'
console.log( typeof(school) )
console.log("My name is okoth im "+age+" years and i study in "+school)
console.log(`My name is okoth im ${age} years`)

//works well going up

function display_welcome(){
   console.log("welcome to nova pioneer")
}
display_welcome()

function add(){
   const d=99
   const e=88
   console.log( "Result", d+e)
}
add()

function add(k,p){
   console.log(k+p)
}
add(100,76)
add(77,99)

//works well going up.

function find_even_or_odd(a){
   if( typeof (a) != "number"){
      console.log( "please enter a number.")
   }
   else if(a % 2==0){
      console.log(a + " is an even number")
   }
   else if( a % 2 !==0 ){
      console.log(a+ " is an odd number")
   }
 }
 find_even_or_odd(12000)
 find_even_or_odd(888)
 find_even_or_odd("i want candy")
 find_even_or_odd(777)
 
 // works well going up

 const combine =  function (m,l){
   return m+l
}
console.log(  combine(12, 9) )


const subtract =  function (v,s){
   return v-s
}
console.log(subtract(99,88))

const addNumbers = (a,b) => console.log(a+b)

addNumbers(90,78)

function together ( num1, num2, callback){
  let result =num1+num2
  callback(result)
}
function displayResult(result){
  console.log(result)
}
together(12, 89, displayResult)

let Marks= 10

if(Marks>0 && Marks<40) //important part.-condition. put resonable limits using &&
{
console.log("Grade E")
}
// if the condtion was correct ingechagua if


else if(Marks>=40 && Marks<60)
{
console.log("Grade C+")
}

else{
  console.log(  "Marks out of range.")
   
}

// from here.

let day= 1

switch(day){
  case 1:
     console.log("Monday")
     break;
  case 2:
     console.log("Tuesday") 
     break;
  case 3:
     console.log("Wednesday")      
     
     default: // if everything is wrong.
        console.log("The day is out of range.")
}
// ans= Monday.

// problem
 
 let x=1
 
 while(x<5){
 console.log(x)
 x++ // if not there will print zero forever.
 }
 
 do{
   console.log(x)
   } while(x<5) // if this was false it would do it then stop unlike while which would ignore it.
   


   //destructuring a string
let full_name="komiko akane"
const[l,t]=full_name.split(" ") //you can put anything in""like"+"
console.log(l)
//ans=komiko
