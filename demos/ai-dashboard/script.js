// AI Assistant Demo

const askButton = document.getElementById("askAI");
const input = document.getElementById("aiInput");
const result = document.getElementById("aiResult");


askButton.addEventListener("click",()=>{

    let question = input.value;

    if(question === ""){
        result.innerHTML = "⚠️ Please ask something.";
        return;
    }


    result.innerHTML = "🤖 AI is analyzing your business data...";


    setTimeout(()=>{

        result.innerHTML =
        "✅ AI Insight: Your business growth is positive. Focus on customer retention and new projects.";

    },1500);


});



// Dark Mode Button

const themeBtn = document.getElementById("themeBtn");


themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");


    if(document.body.classList.contains("light-mode")){

        themeBtn.innerHTML="🌙 Dark Mode";

    }
    else{

        themeBtn.innerHTML="☀️ Light Mode";

    }

});



// Card Animation

const cards = document.querySelectorAll(".stat-card");


cards.forEach((card,index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(30px)";


    setTimeout(()=>{

        card.style.transition="0.6s";
        card.style.opacity="1";
        card.style.transform="translateY(0)";


    },index*200);


});