
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.buy-1');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const clearCartButton = document.querySelector('.clear-cart'); // Assuming you have a clear cart button

    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            const li = document.createElement('li');
            li.innerText = `${name} - $${price}`;
            li.classList.add('cart-item');
            
            // Add remove button to each cart item
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Remove';
            removeButton.classList.add('remove-item');
            li.appendChild(removeButton);

            cartItems.appendChild(li);

            total += price;
            cartTotal.innerText = total.toFixed(1);
        });
    });

    // Functionality to remove an item when its remove button is clicked
    cartItems.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const itemToRemove = event.target.parentElement;
            const priceToRemove = parseFloat(itemToRemove.innerText.split('- $')[1]);
            
            total -= priceToRemove;
            cartTotal.innerText = total.toFixed(1);
            
            itemToRemove.remove();
        }
    });

    // Functionality to clear the entire cart
    clearCartButton.addEventListener('click', () => {
        while (cartItems.firstChild) {
            cartItems.removeChild(cartItems.firstChild);
        }
        total = 0;
        cartTotal.innerText = total.toFixed(1);
    });
});