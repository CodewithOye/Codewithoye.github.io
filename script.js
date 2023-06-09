var isWindows = navigator.platform.indexOf("Win") > -1;

const navToggle =document.querySelector('.nav-toggle')

const navLinks =document.querySelectorAll('.nav__link')

navToggle.addEventListener('click',() =>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // Dark mode is enabled
} else {
  // Light mode is enabled
}





  
  

  
