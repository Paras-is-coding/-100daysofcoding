let categorie1 = document.getElementById("categorie1");
let categorie2 = document.getElementById("categorie2");
let categorie3 = document.getElementById("categorie3");
let categorie4 = document.getElementById("categorie4");


let api = fetch("https://fakestoreapi.com/products");
api.then((res) => res.json()).then((json) =>{ 
console.log(json);
json.forEach(element => {
    if(element.category === "men's clothing"){
        categorie1.innerHTML = categorie1.innerHTML + `<div class="box">
        <div class="image" style = "background-image :url(${element.image})"></div>
        <div class="title">${element.title}</div>
        <div class="description">${element.description}</div>
        <div class="price">$${element.price}</div>
        <div class="add-remove">
        <button id="add">ADD TO CART</button>
        <button id="remove">REMOVE</button>
        </div>
        </div>`
    }
    else if(element.category === "jewelery"){
        categorie2.innerHTML = categorie2.innerHTML + `<div class="box">
        <div class="image" style = "background-image :url(${element.image})"></div>
        <div class="title">${element.title}</div>
        <div class="description">${element.description}</div>
        <div class="price">$${element.price}</div>
        <div class="add-remove">
        <button id="add">ADD TO CART</button>
        <button id="remove">Remove</button>
        </div>
        </div>`
    }
    else if(element.category === "electronics"){
        categorie3.innerHTML = categorie3.innerHTML + `<div class="box">
        <div class="image" style = "background-image :url(${element.image})"></div>
        <div class="title">${element.title}</div>
        <div class="description">${element.description}</div>
        <div class="price">$${element.price}</div>
        <div class="add-remove">
        <button id="add">ADD TO CART</button>
        <button id="remove">REMOVE</button>
        </div>
        </div>`
    }
    else if(element.category === "women's clothing"){
        categorie4.innerHTML = categorie4.innerHTML + `<div class="box">
        <div class="image" style = "background-image :url(${element.image})"></div>
        <div class="title">${element.title}</div>
        <div class="description">${element.description}</div>
        <div class="price">$${element.price}</div>
        <div class="add-remove">
        <button id="add">ADD TO CART</button>
        <button id="remove">REMOVE</button>
        </div>
        </div>`
    }
})});




