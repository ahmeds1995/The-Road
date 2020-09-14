// select the container item 

const container = document.querySelector('.container');

// display the navbar screen

document.querySelector('.container .open-navbar-icon').addEventListener('click', (e) =>{

    e.stopPropagation();
   container.classList.add('change'); 
});

// hide the navbar screen

document.querySelector('.container .close-navbar-icon').addEventListener('click', (e) =>{

    e.stopPropagation();
    container.classList.remove('change'); 
 });


// navbar links background-color
const navLinkColor = ['#03a9f4', '#4caf50', '#9e9e9e', '#ffa07a', '#f08080'];

let i =0;

let navLinks = Array.from(document.querySelectorAll('.nav-list .nav-link'));

navLinks.forEach((link) => {
    link.style.cssText = `background-color: ${navLinkColor[i++]}`
});


// make an array of navigation buttons (founded in the prices section)
let navBtn = Array.from(document.querySelectorAll('.card .navigation-btn'));

navBtn.forEach(btn => {

    btn.onclick = () =>{

        btn.parentElement.parentElement.classList.toggle('flip');
    };
});