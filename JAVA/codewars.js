//CODE WARS:

// split
// it converts a string to an array
Split()
// example
let fullname="komiko akane"
let array7=full_name.split(" ") //you can put anything in""like"+"
console.log(array7) // u can put index to get each part of the name
//it will show individual letters.

// another way.
return string.split

//anotherway
let full_name="komiko akane"
const[l,t]=full_name.split(" ") //you can put anything in""like"+"
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
const[l,t]=full_name.split(" ") //you can put anything in""like"+"
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
// invert numbers to show all val