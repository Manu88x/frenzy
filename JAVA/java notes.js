           //JAVASCRIPT GUIDE.
            //CONSOLE.LOG
          console.log()
          console.log('')

//  OPERATORS.
//e.g * and / + and -
//vitu ka x na divide
//%- modulus use it to find remeinder.
//**- power  

// COMPARISON.
// == eqaulity
   ==
 //=== strict equality
   ===
// &&- it shows if both actions are true
    $$
// ||- slightly
    ||
// !- negates the truth.
    !=

// console.log("")- words normal words
//console.log()- numbers and their proceeses and  declared variables.
// e.g console.log("mike") console.log(9*7) console.log(number)
// if u wanna use this just type log.
//console.log(variable)- works anywhere.



          //VARIABLES.
// a variable name should start with a small letter and also no starting numbers.
//you can also use camel case e.g:myname or myschool.
// can also use underscore e.g my_school.
// string its anything in quotes e.g "kenya"

   // TYPES OF VARIABLES.
   //let -let name="mike"
   let name="mike"
   //const- const name="mike"
   //var- var name="mike"
   //auto- myname="mike"

    // DIFFERENCES IN VARIABLES.
   // let- can't be redeclared but can be reassigned
   // const- can't be redeclared or reaasigned.
   // auto and var are the same and both can be redeclared and reassigned.
   //redeclaring and reaasigning:
   //redeclare:
       //var num
       //var num
    //reassign:
      //let num
      // num
      //NB- both immediatly come after usieke pali pengine.



      //DATATYPES.
      // strings- quotes e.g "bike"
      //boolean- true
      //number- float-88.88 interger-83 or 83.0
      //array- collection of data e.g 
      let fruits=["oranges", "mangoes", "e.t.c"]
      //object- collection of items

     // HOW TO CHECK DATA TYPES: 
     // use: console.log(typeof(variable name) )  also this come immediately after.
     console.log( type() )

      // COMBINING DATA: within console dot log.
      //string concatination(+)- "He is"+name
      console.log("He is"+ age)
      //string interpolation(${})`My name is okoth im ${age} years` use back ticks not speech marks top left (`)
      console.log(`My name is okoth im ${age} years. `)

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



// CONDITIONAL STATEMENTS.
//if or //switch( they work the same way.)
//else if
//else

//if:
let park_name= "Azure land"

if( park_name=="Azure land") // this is the condition.
{
console.log("The student name is " + park_name)
}
// if if's condition is wrong like wrong itaenda kwa else if.
//scenario:
let dog_name= "Azure land"

if( dog_name=="Azures land") //important part.
{
console.log("The park name is " + dog_name)
}
// if this was correct ingechagua if


else if( dog_name=="Azure land")
{
console.log("The park name is " + dog_name)
}
// when limiting somethig in if while grading use logical operators use $$
//scenario:
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
// so if everything is false use it'll go to else.
else{
   console.log("Marks out of range.")
}
//switch:
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


//LOOPS:

//for:
//for- loops through a block of code a number of times:
 // (number, difference, range)
 //done using variables.

//Way 1:
for(let i=0; i+2; i<10 ){
     console.log(i)
}
//Way 2: u can put even numbers.
for(let i=0; i<10; i+1 ){
   if( i%2===0){
      console.log(i)
   }
   
}
//while
let x =0

while(x<5){
console.log(x)
 x++ // if not there will print zero forever.
}
//OR

while(x<5){
   if(i%2===0){
      console.log(x)
   }
}
//do while
do{
console.log(x)
} while(x<5) // if this was false it would do it then stop unlike while which would ignore it.


//array
let players=( "Ronaldo", "Messi" ,'Arsen', "Harry", "Kennedy")// always put a comma
// to access individual players:
console.log(players[0])
console.log( players[1])

//for of
//Way1: shows items in an array
for(let players of players){
   console.log(players)
}
//for in
//Way1:
// shows indexes in an array
for(let players in players){
   console.log(players)
}
// Way2:
//it can also show all objects.
for(let players_index in players){
   console.log(players[players_index])
}

//way3: take indiviual aspects
for(let player_index in players){
   if(player_index==3 || fruit_index==4)
   console.log(players[players_index])
}


//ARRAY.
// an array takes all types of data types.
//each item is indexed and starts at zero
//how to access index console.log(name[index])
let array1=["milk", "school", "ku", "Naironi uni", "Potatoes", ["iman", "peter"]]
console.log(array1[1])

// how to index of an item.
console.log(index0f("ku"))
//ans= 2

for(item of array1){
   console.log(items)
}
// it will show all items.

for(item of array1){
   if(typeof iten=="string"){
      console.log(item)
   }
}
//it will the type of iem given in the condition.

for(index in array){
   console.log(index)
}

// how to acess an item in a an array within aan array
console.log(array1[5][1])
   //ans= peter.
 
//how to acess an array within an array:
for(item of array1[5]){
   console.log(item)
}

//sorts item in an orderly manner.
console.log(array1.sort())

//reverses items in an array
console.log(array1.reverse())

//it checks the length of an array
console.log( array1.length )

// how to know postion of objects in an array
console.log(array1[ array1.lenghth -1])
//ans- iman and peter since index starts at 0

//for iman only:
console.log(array1[ array1.lenghth -1 ] [0])   

//ARRAY METHODS.
//Push- it will add an item at the end of an array.
array1.push(890)

//unshift- will an item at the begining af an array
array1.unshift("peep")

//pop- will remove the last item in an array
array1.push()
//nb i want to remove peter form the array within an array:
array1[5].pop() // its its own array.
//you can also remove a specific item
array1.pop("ku") //-uliza leo it didn't work
//it will print for you an item you removed.
console.log(array1.pop())

//shift- removes the first item in an array
array1.shift()
//same thing here if you to get rid of iman
array1[5].shift()

//splice- temporalily adds or removes items from a certain index
array1.splice(index, number_of_items_to_be removed, items-to_be_added)// number of items is optional
console.log(array1.splice(2))
//milk and school will be removed but the rest will stay.
console.log(array1,splice(-2))
// it will remove the 2 last items
console.log(array.splice(2,2, "goku", "vegeta"))
// index 2 and its next neighbour will be removed and will be replaced by goku and vegeta

//slice
array.slice(start,end)
//start-begining, end-limit
console.log(array.slice(1,3))// it won't affect the array
let x=array1.slice(1,3)
console.log(x)
// it will now affect it by creating a seperate variable.
console.log(array1.slice(-2))
// it will slice out the last 2 items


//Array iterations:
// loop through items or performs modifications
//map
let names= array1.map(function(y){
   return y*y
})
console.log(names)

//OR
const new_names=array1.map((elemtn,index)=>{
   //perform your operations with console,log
})

//reduce
//filter
//find

//foreach
array1.foreach((i)=>{
   //i is a representative of what is in an array it can be any name.
   console.log("My name is ", i, " and the length of my name is ",i.length)
})
// this is an arrow function with no name an anonymous function.



//Objects
// it is a collection of named items
// const obj{key:value}
//how to make an object
const object{name:"dickson", age=34, school:"Moringa school"}
//an object:
{name:"dickson", age=34, school:"Moringa school"}
// to make it an array
const object[{name:"dickson", age=34, school:"Moringa school"}]

// how to access items in an object
console.log(objecy["key e.g name"])
//or 
console.log(object.name)

//iterating throughitems in an objects:
for(let i in object) // i can be any letter
{
   console.log(object[i])
}
// OR
for(let i in object) // i can be any letter
{
   console.log( i+" "+object[i]) // zitashikana so ongeza space
}

// How to access the key alone:
for(let i in object) // i can be any letter
{
   console.log(i)
}
//OR
// in built function:
object.keys(object) // the one in the brackets is the name

//how to acess the value
for(let i in object) // i can be any letter
{
   console.log(object[i])
}
//OR
//in built function:
object.value(object) // the one in the brackets is the name


// an array of ojects:
const students=[
   {name:"dickson", age=34, school:"Moringa school"}
   {name:"Mary", age=34, school:"Moringa school"}
   {name:"Lily", age=34, school:"Moringa school"}
]
// how to access items:
console.log(students[1])

//access a specific person:
for(let y in students[2])
{
   console.log(students[2] [y]) // y is to acess values inside an array.
}
//OR
for(let y in students[2])
{
   console.log(students[2].y)
}


// to acess each item inside a specific obejct
// use map
const x=students.map((student)=>{
   return student.name
})
console.log(x)

//u can also string cont:
const x=students.map((student)=>{
   return student.name+"is"+student.age+" studying at "+student.school
})
console.log(x)

// using filter used for a search functionality
const Y= student.filter((student) {
   return student.age=22
})
console.log(y)

// find can be used to find items:
const u= student.find((student) {
   return student.age=22
})
console.log(y)

//CODE WARS:

// split
// it converts a string to an array
Split()
// example
let fullname="komiko akane"
let array7=full_name split(" ") //you can put anything in""like"+"
console.log(array7) // u can put index to get each part of the name
//it will show individual letters.

// another way.
return string.split

//anotherway
let full_name="komiko akane"
const[l,t]=full_name split(" ") //you can put anything in""like"+"
console.log(l)
//ans=komiko

//destructuring.-unpack info from an array into a distinct variable.
let["avocado", "apple", "juice"]
let[a,b,c] =["avocado", "apple", "juice"]
console.log(a) //ans-avocado

//array within an array
let["avocado", "apple", "juice" ["mama","dada"]]
let[a,b,c,parents]=["avocado", "apple", "juice" ["mama","dada"]]

//destructuring a string
let full_name="komiko akane"
const[l,t]=full_name split(" ") //you can put anything in""like"+"
console.log(l)
//ans=komiko

//destructuring an object:
const_pupil={name:"Lily", age=34, school:"Moringa school",adress{county:"kakamega", postal_code:"999"}}
const{name,age,school}=student
console.log(name)
// it will give u lily
//an oject within an object
console.log(adress.county) //ans-kakamega

console.log(parents[1])
//ans-dada
//to split indivudal numbers
let matches = ["3:1","2:2","0:1"]

for(let match of matches){
   let
   console.log(matches.split(":"))
}

//OR
let matches = ["3:1","2:2","0:1"]
let total_points=0
for(let match of matches){
   let
   let[x,y]=matches.split(":").map(number)

}
console.log(x) // it will show all values of x


// question in code wars:
let matches = ["3:1","2:2","0:1"]
let total_points=0
for(let match of matches){
   let
   let[x,y]=matches.split(":").map(number)

   if(x>y){
      total_points=total_points+3
   }

   else if(x==y){
      total_points=total_points+1
   }
}
// invert numbers to show all values





      






