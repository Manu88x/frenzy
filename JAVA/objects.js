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