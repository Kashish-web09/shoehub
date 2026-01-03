const form = document.getElementById("bill-form");
const btn = document.getElementById("bill-btn");


form.addEventListener("submit",(e)=>{
    e.preventDefault();

  const name = document.getElementById("name").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const address = document.getElementById("address").value.trim();
    const town = document.getElementById("town").value.trim();
    const number = document.getElementById("number").value.trim();
if(!name || !lname||!address||!town||!number){
alert("Please fill all the fields!");
return;
}
alert(`Payment successfully!\nThank You, ${name} ${lname}. Your order will be deliverd soon.`);

})