// Functions As Values
// Functions don’t even require names at all, as when they’re assigned to array elements:
var a = [function(x) { return x*x; }, 20]; // An array literal
console.log(a[0](a[1]));
console.log(a.length);
console.log(a[0](90), a[1])



var y = (function() { // mymodule function rewritten as an unnamed expression
// Module code goes here.
  var list = ['sachin', 'saurav', 'dravid'] ;
  var upper = [];
  var count ;
  for (count = 0; count < list.length;)
  {
    upper.push(list[count]+'_CricketPlayer');
    count += 1;
  }
  return upper;
}()); // end the function literal and invoke it now.

console.log(y)

///Like most modern programming languages, JavaScript uses lexical scoping. This means
//that functions are executed using the variable scope that was in effect when they were
//defined, not the variable scope that is in effect when they are invoked. In order to
//implement lexical scoping, the internal state of a JavaScript function object must include
//not only the code of the function but also a reference to the current scope chain.
//(Before reading the rest of this section, you may want to review the material on variable
//scope and the scope chain in §3.10 and §3.10.3.) This combination of a function object
//and a scope (a set of variable bindings) in which the function’s variables are resolved
//is called a closure in the computer science literature.4
//Technically, all JavaScript functions are closures: they are objects, and they have a scope
//chain associated with them. Most functions are invoked using the same scope chain
//that was in effect when the function was defined, and it doesn’t really matter that there
//is a closure involved. Closures become interesting when they are invoked under a
//4. This is an old term that refers to the fact that the function’s variables have bindings in the scope chain
// and that therefore the function is “closed over” its variables.

var scope = "global scope"; // A global variable
function checkscope() {
var scope = "local scope"; // A local variable
function f() { return console.log(scope); } // Return the value in scope here
return f;
}
checkscope()() // What does this return?

//closure example
var pistol = {'Type': 'handgun',
              'Bullets': '6',
              'Model': 'colt',
              'Mode': 'manual'
            };


function Modifier(objectPassed){
    console.log('Outer object: ', objectPassed);
    var result = addlicense(objectPassed)
    function addlicense(objectPassed){
      //return console.log( 'Inner object:', this.objectPassed);
      if (objectPassed.Type == 'handgun' && objectPassed.Bullets <= '6' && objectPassed.Mode == 'manual'){
         console.log('This is not an Automatic Armoury');
         objectPassed.License = 'Issued';
         return objectPassed;
      }
      else{
        console.log('This is an Automatic Riffle');
        objectPassed.License = 'Revoked';
        return  objectPassed;
      }
    }
    console.log('Inner object:', result);
}

Modifier(pistol);
