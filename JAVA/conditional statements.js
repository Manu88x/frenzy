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