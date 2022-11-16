// localStorage is a web storage object which are not sent to server 
//with each request 
//This data survives a full page refresh and even a full browser restart


//  methods provided by local storage are 
//setIteam(key , value) 
//getIteam(key) 
//clear()
//key(index)
//length

// we can get and set values like object 
//localstorage.one = "hello"
// delete localstorage.one



//session storage 
// same as local storage but exists only within the current browser tab 
//data survives page refresh ,bur not closing /opening 


//Storage event
//when the data gets updated in local storage or session storage

//we can listen the onstorage event of window which is triggered when
//updates are made to the same storage from other documents
