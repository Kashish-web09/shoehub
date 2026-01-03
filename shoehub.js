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
