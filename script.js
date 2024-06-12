document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order--button');
    const cartCounter = document.getElementById('cart-counter');
    let itemCount = parseInt(cartCounter.textContent, 10);

    orderButton.addEventListener('click', () => {
        itemCount++;
        cartCounter.textContent = itemCount;

        orderButton.textContent = 'Перейти в корзину';

        orderButton.onclick = () => {
            window.location.href = 'cart.html'; 
        };
    });
});