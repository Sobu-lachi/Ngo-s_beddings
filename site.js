const body = document.querySelector('body');
const products = document.querySelectorAll('.product');
const buttons = document.querySelectorAll('.selection-button');
const form = document.querySelector('.contact-form');

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});

products.forEach(product => {
    if (!product.classList.contains("pillow")) {
        product.classList.add("hidden");
    }else {
        product.classList.remove("hidden");
    }
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.target;    
        products.forEach(product => {
            if (product.classList.contains(target)) {
                product.classList.remove("hidden");
            } 
            else {
                product.classList.add("hidden");
            }
    })})});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = form.querySelector('input[name="email"]').value;
    const name = form.querySelector('input[name="name"]').value;

    if (!email || !name) {
        alert("Please fill in both your name and email address.");
        return;
    }
    window.location.href = `mailto:sobula07@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=Email: ${encodeURIComponent(email)}`;
});