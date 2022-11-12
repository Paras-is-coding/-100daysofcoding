let rain = true;
let sun = false;

if(rain == true && sun == true){
    console.log("It's rainy and sunny")
}
else if(rain == true && sun != true){
    console.log("It's just rainy")
}
else if(rain != true && sun == true){
    console.log("It's just sunny")
}
else{
    console.log("It's neither sunny nor rainy")
}

let a = 8 ;
switch(a){
    case 1: console.log("It's 1");
    break;

    case 8: console.log("I'ts 8");
    break;
}

