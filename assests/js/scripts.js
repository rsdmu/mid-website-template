// assets/js/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navUl = document.querySelector('header nav ul');

    toggleButton.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });
});
