const navBar = document.querySelector('.header .navbar');
const menuBtn = document.querySelector('.header .menu');
menuBtn.addEventListener('click',()=>{
    navBar.classList.toggle('show');
    menuBtn.classList.toggle('fa-close');
    menuBtn.classList.toggle('fa-bars');
});
document.onscroll = () =>{
    navBar.classList.remove('show');
    menuBtn.classList.remove('fa-close');
    menuBtn.classList.add('fa-bars')
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
};
document.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
};

// window.addEventListener('load', ()=>{
//     // preloader Js
//     function loader(){
// 		const preloader = document.querySelector('.preloder');
//     	preloader.classList.add('fade-out');
// 	}
// 	function fadeOut(){
// 		setInterval(loader, 1000);
// 	}
// 	fadeOut();
//  });

window.addEventListener('load', ()=>{
    // preloader Js
    const preloader = document.querySelector('.preloder');
    preloader.classList.add('fade-out');
 
    setTimeout(() => {
        preloader.style.display = 'none'; 
        // animate on scfroll
        AOS.init(); 
    },1000);
 
    
    // animate on scfroll
    // AOS.init();
 });

 //==================================> SCROLL TO TOP BUTTON <================================
//Scroll To Top Button
// Get the button:
const btnScrolltoTop = document.querySelector("#btnScrolltoTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(){
    scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrolltoTop.style.display = "block";
  } else {
    btnScrolltoTop.style.display = "none";
  }
}

