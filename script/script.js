const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        // skills.style.background ='black'
        // skills.style.color ='white'
    }else{
        body.style.background = '#061a10';
        body.style.color = 'white';
        body.style.transition = '1s';
    }
});





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



//form 


var btn = document.getElementById('btn');
var formToReset = document.getElementById('form');
var paragraphMessage = document.getElementById('paragraphMessage')


btn.addEventListener('click',(e) => {
    message => btn.innerText = 'Sending....'
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'name: '+name +'<br/> email: ' + email +'<br/> subject: ' +subject + '<br/> message: '+ message;
    if (name == '' || email==''||subject=='' ||message==''){
        alert("Please fill all the fields");
        return false;
    }



    Email.send({
        SecureToken : "5bfc486a-8ea2-4e9b-acdf-751aa0ed5aa1",
        To : 'oyelakinakintunde04@gmail.com',
        From : "oyelakinakintunde04@gmail.com",
        Subject : "Contact Form",
        Body : body
    }).then(
        message => btn.innerText = 'Sending....',
         setTimeout(()=>{
            btn.innerText='Message Sent',
            btn.style.backgroundColor ='Green'
            paragraphMessage.innerText ='We will contact you shortly';

        },5000),
    formToReset.reset()

    );
    setTimeout("location.reload(true);", 10000);

})


const scrollBtn = document.getElementById('scroll-btn');



scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener('scroll', (e) => {
    if(document.documentElement.scrollTop > 20){
        scrollBtn.style.display ="block";
    }else {
        scrollBtn.style.display='none';
    }

});


const swiper = new Swiper('.swiper', {
    autoplay:{
      delay:3000,
      disableOnInteraction: false ,

    },
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });