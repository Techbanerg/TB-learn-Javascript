// contents
//1. if else statement
//2. switch Case statement

// While writing a program, there may be a situation when you need to adopt one
// out of a given set of paths. In such cases, you need to use conditional
// statements that allow your program to make correct decisions and perform right
// actions.
// JavaScript supports conditional statements which are used to perform different
// actions based on different conditions. Here we will explain the
// if..else statement.

var string1 = 'Superman';
var string2 = 'Batman';
var string3 = 'Podman';

function checksuperpower (string){
  if (string == 'Superman'){
    console.log('This guy is Superman');
  }
  else if (string == 'Batman') {
    console.log('This guy is batman');
  }
  else{
    console.log('This is Gudmaraniman');
  }
}

checksuperpower(string1)
checksuperpower(string2)
checksuperpower(string3)


//You can use multiple if...else…if statements, as in the previous chapter, to
//perform a multiway branch. However, this is not always the best solution,
//especially when all of the branches depend on the value of a single variable.
//Starting with JavaScript 1.2, you can use a switch statement which handles
//exactly this situation, and it does so more efficiently than repeated if...else
//if statements.
//var e = 'Movie';

function entertain (entertainment){
  switch(entertainment)
  {
    case 'Blog': console.log('Entertainment is Blog');
          break;
    case 'Movie': console.info('Entertainment is Movie');
          break;
    case 'Song':  console.info('Entertainment is Song');
          break;
  }
}

entertain('Song');
