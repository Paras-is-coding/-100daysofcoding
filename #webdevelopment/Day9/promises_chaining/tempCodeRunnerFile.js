let race = Promise.race([p5,p6]);
race.then(value=>{
    console.log(value);
})