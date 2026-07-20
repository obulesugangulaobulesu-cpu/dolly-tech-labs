const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const chatBtn = document.getElementById("chatBtn");
const chatWidget = document.querySelector(".chat-widget");
const closeChat = document.getElementById("closeChat");

chatBtn.addEventListener("click", function(e){
    e.preventDefault();
    chatWidget.style.display = "block";
});

closeChat.addEventListener("click", function(){
    chatWidget.style.display = "none";
});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }

    };

    updateCounter();

});