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