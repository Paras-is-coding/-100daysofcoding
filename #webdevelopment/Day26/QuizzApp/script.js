let start = document.getElementById("start");
let next = document.getElementById("next");
let questionWrapper = document.getElementById("question-wrapper");
let question = document.getElementById("question");
let optionsDiv = document.getElementById("options");
let body = document.getElementsByTagName("body")[0];


let questionsArray = [
    {
        question : "Brass gets discoloured in air because of the presence of which of the following gases in air?",
        options : ['Oxygen','Hydrogen sulphide','Carbon dioxide','Nitrogen'],
        correct : 1
    },
    {
        question : "Which of the following is a non metal that remains liquid at room temperature?",
        options : ['Phosphorous','Bromine','Chlorine','Helium'],
        correct : 1
    },
    {
        question : "What is part of a database that holds only one type of information?",
        options : ['Report','Field','Record','File'],
        correct : 1
    },
    {
        question : `'.MOV' extension refers usually to what kind of file?`,
        options : ['Image file','Audio file','Animation/movie file','MS Office document'],
        correct : 2
    }
]

let checkAnswer = (r)=>{
    let optionBoxes = document.getElementsByClassName("option-box");
    Array.from(optionBoxes).forEach(ele=>{
        ele.addEventListener("click",()=>{
            if(questionsArray[r].options[questionsArray[r].correct] !== ele.innerHTML){
                body.className = "";
                ele.className = "";
                body.classList.add("wrong-option-bgcolor");
                ele.classList.add("option-box");
                ele.classList.add("wrong-option-bgcolor")
            }
            else{
                ele.className = "";
                body.className = "";
                body.classList.add("correct-option-bgcolor");
                ele.classList.add("option-box");
                ele.classList.add("correct-option-bgcolor");
            }
        })
    })
    
}

let addQuestion=()=>{
    var random = Math.floor(Math.random()*questionsArray.length);
    questionWrapper.classList.remove("hidden");
    questionWrapper.classList.add("flex-col-center");
    question.innerHTML = questionsArray[random].question;
    questionsArray[random].options.forEach(element => {
        let opt = document.createElement("div");
        opt.innerHTML = element;
        opt.classList.add("normal-bgcolor");
        opt.classList.add("option-box");
        optionsDiv.append(opt);
    });
    checkAnswer(random);
}


let clearPrevOptions = ()=>{
    optionsDiv.innerHTML = "";
}

start.addEventListener("click",()=>{
    start.classList.add("hidden");
    next.classList.remove("hidden");
    addQuestion();

})

next.addEventListener("click",()=>{
    clearPrevOptions();
    body.className = "";
    body.classList.add("normal-bgcolor");
    addQuestion();
})






