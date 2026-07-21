const modal = document.getElementById("appointmentModal");

const openBtn = document.getElementById("openForm");

const closeBtn = document.querySelector(".close");

openBtn.onclick = () => {
    modal.style.display = "flex";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
}

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    alert("✅ Appointment Request Submitted Successfully!");

    modal.style.display="none";
});