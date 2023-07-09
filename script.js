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


// for form


const btn = document.getElementsByClassName('.send-button');
btn.addEventListener('click',(e) => {

  e.preventDefault();

  let name = document.getElementsByClassName('.name').value;
  let email = document.getElementsByClassName('.email').value;
  let message = document.getElementsByClassName('.message').value;
  let subject = document.getElementsByClassName('.subject').value;
  let body ='name: ' + name + '<br/> email: ' + email + '<br/> subject:' + subject + '<br/> message: ' + message;
  document.getElementsByClassName('send-button').innerHTML = 'Thank You';


            Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : body
    }).then(
      message => alert(message)
);

});



