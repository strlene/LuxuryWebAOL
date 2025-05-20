// components.js - Component-based architecture for products

// Sample product data - In a real application, this would come from a backend

const products = [
  {
    id: 'p001',
    name: 'Sculpted Grace',
    price: 'Rp 1.299.000',
    image: 'https://www.prada.com/content/dam/pradabkg_products/1/1U0/1U001O/054F0005/1U001O_054_F0005_F_045_SLR.jpg',
    category: 'Boots',
    colors: ['navy', 'red', 'brown'],
    description: 'A gracefully contoured heel boot crafted from sustainable leather with timeless silhouette.',
    code: 'SG-320A',
    materials: 'Eco-tanned leather, rubber sole',
    details: 'Water-resistant, 2-inch heel, side zipper'
  },
  {
    id: 'p002',
    name: 'Velare Setto',
    price: 'Rp 2.899.000',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSilWQkAusEJ0Uo94PB54gZXIvo7LllYUUOjX4qGsge0IeWDTPymQt1vZYyzbq_ol2uhDPD4KLXtaFomS42F9xNCP9wKKICJAwTJzcNWZPoz4NJxSfPSXcK',
    category: 'Heels',
    colors: ['black', 'beige', 'maroon'],
    description: 'Elegant heel crafted with soft sustainable satin and a memory foam sole for lasting allure.',
    code: 'VS-101C',
    materials: 'Recycled satin, memory foam insole',
    details: '3.5-inch heel, anti-slip sole, open back'
  },
  {
    id: 'p003',
    name: 'Aeris Flow',
    price: 'Rp 3.899.000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjNTKOY7v6GWgnTp3zMPxqQ2Kum6BNWf4iA&s',
    category: 'Sneakers',
    colors: ['white', 'silver', 'black'],
    description: 'An ultra-light sneaker engineered for motion and elegance in every form.',
    code: 'AF-404F',
    materials: 'Recycled mesh-leather, air-cushion sole',
    details: 'Breathable, lace closure, embossed logo'
  },
  {
    id: 'p004',
    name: 'Lunaria Drapé',
    price: 'Rp 4.299.000',
    image: 'https://assets.christiandior.com/is/image/diorprod/541R79A6396X0842_E01?$r2x3_default_s85$&crop=697,149,606,1571&wid=1334&hei=2000&scale=0.85&bfc=on&qlt=85',
    category: 'Dress',
    colors: ['ivory', 'gold', 'silver'],
    description: 'A flowing evening gown designed with recycled silk and a hand-draped silhouette.',
    code: 'LD-722G',
    materials: 'Recycled silk, organic cotton lining',
    details: 'Floor-length, fitted waist, side slit'
  },
  
];


let displayProducts = products;
if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
    displayProducts = products.slice(0, 4);
}


// Create a product card component
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = product.id;
    
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    
    const productName = document.createElement('h3');
    productName.textContent = product.name;
    
    const productPrice = document.createElement('div');
    productPrice.className = 'price';
    productPrice.textContent = product.price;
    
    const viewButton = document.createElement('a');
    viewButton.className = 'btn';
    viewButton.textContent = 'View Details';
    viewButton.href = `/productdetail/index.html?id=${product.id}`;
    
    // Append elements to card
    card.appendChild(productImage);
    card.appendChild(productName);
    card.appendChild(productPrice);
    card.appendChild(viewButton);
    
    // Add click event to the entire card
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn')) {
            e.preventDefault();
            window.location.href = `/productdetail/index.html?id=${product.id}`;
        }
    });
    
    return card;
}

// Function to render product cards to a container
function renderProductCards(containerId, filterCategory = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let productsToShow = products;
    

    // Clear the container
    container.innerHTML = '';
    
    // Add all product cards
    productsToShow.forEach(product => {
        container.appendChild(createProductCard(product));
    });
}

// Function to get URL parameters
function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Function to load product detail
function loadProductDetail() {
    const productId = getUrlParameter('id');
    if (!productId) return;
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found');
        return;
    }
    
    // Update page elements with product details
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-code').textContent = product.code;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
    
    // Set color options
    const colorContainer = document.getElementById('color-options');
    if (colorContainer) {
        colorContainer.innerHTML = '';
        product.colors.forEach(color => {
            const colorOption = document.createElement('div');
            colorOption.className = 'color-option';
            colorOption.style.backgroundColor = color;
            colorOption.dataset.color = color;
            colorOption.addEventListener('click', () => {
                // Remove active class from all options
                document.querySelectorAll('.color-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                // Add active class to selected option
                colorOption.classList.add('active');
            });
            colorContainer.appendChild(colorOption);
        });
        
        // Set first color as active by default
        if (colorContainer.firstChild) {
            colorContainer.firstChild.classList.add('active');
        }
    }
    
    // Set materials and details if they exist in the DOM
    if (document.getElementById('product-materials')) {
        document.getElementById('product-materials').textContent = product.materials;
    }
    
    if (document.getElementById('product-details')) {
        document.getElementById('product-details').textContent = product.details;
    }
    
    if (document.getElementById('product-description')) {
        document.getElementById('product-description').textContent = product.description;
    }
}

// Initialize quantity controls for product detail page
function initQuantityControls() {
    const minusBtn = document.getElementById('quantity-minus');
    const plusBtn = document.getElementById('quantity-plus');
    const quantityInput = document.getElementById('quantity-input');
    
    if (!minusBtn || !plusBtn || !quantityInput) return;
    
    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value) || 1;
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value) || 1;
        quantityInput.value = currentValue + 1;
    });
}

// Document ready function
document.addEventListener('DOMContentLoaded', () => {
    // Check what page we're on and initialize accordingly
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('product/') && !currentPath.includes('productdetail/')) {
        // Product listing page
        renderProductCards('product-grid');
    } else if (currentPath.includes('productdetail/')) {
        // Product detail page
        loadProductDetail();
        initQuantityControls();
    } else if (currentPath === '/' || currentPath.includes('index.html')) {
        // Home page - maybe show featured products
        renderProductCards('featured-products');
    }
});
function initCartButtons() {
    const addToCartBtn = document.getElementById('add-to-cart');
    const buyNowBtn = document.getElementById('order-now');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            alert("✅ Successfully added to cart!");
        });
    }

    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => {
            alert("🚀 Order placed successfully!");
        });
    }
}

