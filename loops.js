//contents
// 1. while
// 2. do while
// 3. for
// 4. for in

// While writing a program, you may encounter a situation where you need to
// perform an action over and over again. In such situations, you would need to
// write loop statements to reduce the number of lines.
// JavaScript supports all the necessary loops to ease down the pressure of
// programming.
// while looops

var count = 0 ;
while(count<10){
  count++;
  console.log("Current Count:" + count);
}
console.log('LoopStopped')

var list_sample = ['Sachin', 'Sourav', 'Dravid'];
var i = 0
while(i < list_sample.length){
  console.log('Player comming to Bat : '+ list_sample[i]);
  i++;
}
console.log('all Done');

//The syntax for do-while loop in JavaScript is as follows:
//Do while loops
var j = 0;
do{
  console.log('Current Count:'+ (j*40));
  j++;
} while (j<5);
console.log('stoploop')

// The for Loop
// The ‘for’ loop is the most compact form of looping. It includes the following
// three important parts:
// The loop initialization where we initialize our counter to a starting
// value. The initialization statement is executed before the loop begins.
//  The test statement which will test if a given condition is true or not. If
// the condition is true, then the code given inside the loop will be executed,
// otherwise the control will come out of the loop.
// The iteration statement where you can increase or decrease your
// counter.
// You can put all the three parts in a single line separated by semicolons.
var count ;
for(count = 0; count < 10; count++){
    console.log("Current Count : " + count );
    console.log("break");
}
console.log("Loop stopped!");

var friends = ['gudmarani', 'podmarani', 'chudmarani']

for(i = 0; i < friends.length; i++){
  console.log("Friend Name: "+ friends[i])
}
console.log("LoopOver")

// The for...in loop is used to loop through an object's properties. As we have not
// discussed Objects yet, you may not feel comfortable with this loop. But once you
// understand how objects behave in JavaScript, you will find this loop very useful
var object1 = {carname:"Maserati", type:"Fiat", model:"500", color:"white"};
var carname
for (carname in object1){
  console.log("Carname :"+ object1.carname)
}
console.log("Carname: Null");

//break and continue statements

var x = 199;
console.log("Entering the loop");
while (x < 295){
if (x == 300){
break; // breaks out of loop completely
}
x = x + 1;
console.log( x );
}



var y = 50
while (y < 100){
 y = y+5;
 if(y == 75){
   continue;

 }
console.log(y)
}
