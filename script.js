// SCROLL TO PRODUCTS (Home page)
function scrollToProducts() {
  const products = document.getElementById('products');
  if(products) products.scrollIntoView({ behavior: 'smooth' });
}

// CART FUNCTIONS
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(product.name + ' added to cart!');
}

// RENDER PRODUCTS (Products page)
function renderProducts(products) {
  const container = document.querySelector('.product-list');
  if(!container) return;
  container.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// ON CART PAGE
function loadCart() {
  const container = document.getElementById('cart-items');
  if(!container) return;
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  container.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const div = document.createElement('div');
    div.innerHTML = `<span>${item.name}</span> <span>$${item.price}</span>`;
    container.appendChild(div);
  });
  const totalDiv = document.createElement('div');
  totalDiv.innerHTML = `<strong>Total:</strong> $${total.toFixed(2)}`;
  container.appendChild(totalDiv);
}
