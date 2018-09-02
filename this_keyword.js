// Regular function call: The this keyword points at the global object
// the window object in the browser
// method call the this variable point to the object that is calling the method
// the this keyword is not assigned a value until a function where it is  defined is actuall called


var shaun  = {
  name: 'shaun',
  lastname: 'mendez',
  yearOfBirth: 1990,
  salaryInDollars: 1000,
  financialStatus: function(){
    if (this.salaryInDollars > 900){
      console.log('Bloody rich');
    }
    else{
      console.log('Fucking beggar')
    }
  }
}

shaun.financialStatus()
