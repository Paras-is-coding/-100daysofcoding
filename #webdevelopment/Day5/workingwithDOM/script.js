  //DOM tree have basically three typesof nodes
//Element , comment and text

console.log(document.body)
console.log(document.documentElement)
console.log(document.head)

//child elements
console.log(document.firstChild)
console.log(document.lastChild)
console.log(document.body.firstChild)//will return the first child node
console.log(document.body.firstElementChild)//will return the first element child



console.log(document.body.childNodes)//will return node list  of all child nodes* note nodelist not array use Array.from() to convert it to array
console.log(document.body.children)// will return children elements only

//siblings and parent

let box3 = document.getElementById("box3");
console.log(box3.innerHTML);

console.log(box3.nextElementSibling)
console.log(box3.previousElementSibling)
console.log(box3.parentElement)
console.log(box3.parentNode)

console.log(document.documentElement.parentElement)
console.log(document.documentElement.parentNode)

//selecting elements from Html document
//there are several ways
console.log(document.getElementById("box2"))
console.log(document.getElementsByClassName("box"))
console.log(document.getElementsByName("paras"))
console.log(document.getElementsByTagName("li"))
console.log(document.querySelector("#box1"))
console.log(document.querySelectorAll(".box"))


//matches, closest and contains methods to check the css

//matches is used to check if the element matches the specified css
console.log(box3.matches(".box"))

//closest is used to check closest ancistor including itself with speci. css
console.log(box3.closest(".box"))
console.log(box2.closest(".container"))

//contain is used to check if any element is contained inside that element
let box4 = document.getElementById("box4")
console.log(box3.contains(box4))



