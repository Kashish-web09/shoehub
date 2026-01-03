const nameEl=document.getElementById("fullname");
const emailEl=document.getElementById("email");
const phoneEl=document.getElementById("phone");
const addEl=document.getElementById("address");
const btn=document.getElementById("submit-btn");
const usererrorEl=document.getElementById("userError");
const emailErrorEl=document.getElementById("emailError");

const formEl=document.getElementById("profile-form");

formEl.addEventListener('input',(e)=>{
e.preventDefault();

if(nameEl.value.trim()==""){
usererrorEl.textContent="Enter the full name...";
usererrorEl.style.color="red";
usererrorEl.classList.add("error-input");
return;
}

if(emailEl.value.trim()==""){
emailErrorEl.textContent="Enter the email id...";
emailErrorEl.style.color="red";
emailErrorEl.classList.add("error-input");
return;
}
});