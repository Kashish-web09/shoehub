const menutoggleEl=document.getElementById("menuToggle");
const navmenu=document.getElementById("navMenu");
menutoggleEl.addEventListener('click',()=>{
    navmenu.classList.toggle("active");
});

const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  let currentIndex = 0;

  setInterval(() => {
    currentIndex++;

    if (currentIndex === totalSlides) {
      currentIndex = 0;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 3000);

  const currentYear=document.getElementById("currentYear");
  currentYear.innerHTML=new Date().getFullYear();

  const searchEl=document.getElementById("search-icon");
  const searchBox=document.querySelector(".search-box");

  searchEl.addEventListener('click',()=>{
    if(searchBox.querySelector("input"))
      return;
    const createInput=document.createElement("input");
    createInput.classList.add("search-input");
    createInput.type="text";
    createInput.placeholder="Search...";
        searchEl.style.display="none";

    searchBox.appendChild(createInput);
    createInput.focus();

    createInput.addEventListener('blur',()=>{
      createInput.remove();
      searchEl.style.display="inline-block";
    })
  });

  const arrowbtnEl=document.getElementById("arrow-btn");
  const signupemailEl=document.getElementById("signup-email");

  arrowbtnEl.addEventListener('click',(e)=>{


    if(signupemailEl.value.trim()===""){
      alert("Enter the email address");
    }else{
      alert("Login Successfully!");
    }
  })
