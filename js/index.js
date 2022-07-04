
// our navbar toggle js code

const nav_header = document.querySelector(".navbar");

const mobile_nav = document.querySelector(".mobile-nav-icon");


const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}



mobile_nav.addEventListener("click", () => toggleNavbar());




// owl carou sel



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1440:{
            items:3
        }
        
    }
})


// filter image gallery

$(document).ready(function(){
    $('.f-btn').click(function(){
         const value = $(this).attr('data-filter');
         if(value == 'all'){
            $('.itemBox').show('2000');
         }
         else{
            $('.itemBox').not('.'+value).hide('2000');
            $('.itemBox').filter('.'+value).show('2000');

         }
    })

    // active
    $('.f-btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})

// scroll top

const heroSection = document.querySelector(".hero-sec");
const scrollTop = document.querySelector(".scroll-top");

const smoothScroll = () => {

    heroSection.scrollIntoView({behavior: "smooth"});
}

scrollTop.addEventListener("click", () => smoothScroll());


// video play pause

const video = document.querySelector(".video");

const closeBtn =  document.querySelector(".close-icon");

const playBtn = document.querySelector(".pause-btn");




const closeVideo = () => {
    video.style.display= "none";
}

closeBtn.addEventListener("click", () => closeVideo());


const playVideo = () => {

    video.style.display="block";
    
}

playBtn.addEventListener("click", () => playVideo());



// sticky navbar 

 // sticky Navbar 
 const heroSec = document.querySelector(".hero-sec");
 const observer = new IntersectionObserver((entries) => {
    const ent = entries[0];
    !ent.isIntersecting ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
   
  },
    {
      root: null,
      threshold: 0,
    });
 
  observer.observe(heroSec);


//   aos
AOS.init({
    offset: 160,
    duration: 1000,
});