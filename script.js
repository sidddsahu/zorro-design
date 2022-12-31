var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


  const overlay = document.querySelector(".overlay")
  const menu = document.querySelector(".menu")
  const cross = document.querySelector(".cross")

  menu.addEventListener("click", function(){
    overlay.style.transform = "translateY(-0%)"
  })
  cross.addEventListener("click", function(){
    overlay.style.transform = "translateY(-100%)"
  })

  


//   let card1 =document.querySelector(".page2-bottom-left h1")

  
// page2.addEventListener("mouseover",function(){
//   h1.style.color = "black"
//   p.style.color = "black"
// })
