document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const contactForm = document.getElementById('contact-form');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    contactForm.addEventListener('submit', handleFormSubmit);
});

function addToCart(event) {
    const product = event.target.closest('.product');
    const productName = product.querySelector('h3').textContent;
    alert(`Has agregado ${productName} al carrito.`);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Gracias por tu mensaje, ${name}. Nos pondremos en contacto contigo a través de ${email}.`);

    document.getElementById('contact-form').reset();
}


