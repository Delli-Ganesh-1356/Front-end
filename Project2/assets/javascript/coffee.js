var Search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    Search.classList.toggle('active');
    navbar.classList.remove('active');
}
var navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    Search.classList.remove('active');
}

window.onscroll = () => {
    Search.classList.remove('active');
    navbar.classList.remove('active');
}


var header = document.querySelector('header');
window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow' , window.scrollY) > 0;
})