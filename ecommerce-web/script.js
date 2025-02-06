// Sample JavaScript to handle product display and cart functionality
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'border p-4';
        productItem.innerHTML = `
            <h3 class="text-lg">${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button class="bg-blue-500 text-white px-4 py-2 mt-2" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    alert('Product ' + productId + ' added to cart!');
}

document.addEventListener('DOMContentLoaded', displayProducts);
