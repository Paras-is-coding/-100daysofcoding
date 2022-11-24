//closure is the combination of function and reference of its environment(lexical environment) 
//in other words closure gives you access to outer function's scope from inner function

function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();




function init2() {
    let name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init2();

function init3() {
    let name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName();//function is returned before displayName() is executed but the closure bundeled function with references in init function and returned
}
let z = init();

