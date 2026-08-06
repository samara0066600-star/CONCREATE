/* =====================================
   CONCREATE Portal
   script.js
===================================== */

/* -------------------------------
   Плавная прокрутка
-------------------------------- */

const links = document.querySelectorAll('nav a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const id = this.getAttribute('href');

        const target = document.querySelector(id);

        if(target){

            target.scrollIntoView({

                behavior:'smooth',

                block:'start'

            });

        }

    });

});


/* -------------------------------
   Появление карточек
-------------------------------- */

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    observer.observe(card);

});
/* ==========================
   Animation
========================== */

.card.show{

opacity:1;

transform:translateY(0);

}
