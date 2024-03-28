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