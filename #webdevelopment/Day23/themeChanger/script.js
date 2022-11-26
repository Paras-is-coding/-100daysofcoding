document.documentElement.className = "green";

let themes = document.getElementsByClassName("theme-colors");

let setTheme = ()=>{
    Array.from(themes).forEach(element => {
        element.addEventListener("click",()=>{
            localStorage.setItem("theme",element.id);
            document.documentElement.className = element.id;
        })
    });
    document.documentElement.className = localStorage.getItem("theme");
}


document.onload = setTheme();