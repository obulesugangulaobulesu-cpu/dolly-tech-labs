function calculateEMI(){

let loan=document.getElementById("loanAmount").value;

let rate=document.getElementById("interestRate").value;

let years=document.getElementById("loanYears").value;

let monthlyRate=(rate/100)/12;

let months=years*12;

let emi=(loan*monthlyRate*Math.pow(1+monthlyRate,months))/(Math.pow(1+monthlyRate,months)-1);

if(isNaN(emi)){

document.getElementById("emiResult").innerHTML="Please enter valid details.";

}else{

document.getElementById("emiResult").innerHTML="Monthly EMI : ₹ "+emi.toFixed(2);

}

}
const chatBtn=document.getElementById("chatBtn");

const chatWidget=document.getElementById("chatWidget");

const closeChat=document.getElementById("closeChat");

chatBtn.onclick=function(e){

e.preventDefault();

chatWidget.style.display="block";

}

closeChat.onclick=function(){

chatWidget.style.display="none";

}