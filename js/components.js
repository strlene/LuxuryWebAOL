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
  {
    id: 'p005',
    name: 'Marée Élégante',
    price: 'Rp 3.799.000',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqMbcRWzUDzYWcLYjIL9mc7ER0TQIIaxI7Ugnq1-TplNk5kBCmJOWhYDbAX4xpPocacnE5Y6phfsF4fDtcB08ZNiIoExN3Za6D0psaOSzTnekM2RIgJpaB',
    category: 'Dress',
    colors: ['black', 'navy', 'emerald'],
    description: 'Sustainable satin cocktail dress with a minimalist neckline and timeless charm.',
    code: 'ME-914T',
    materials: 'Eco-satin, bamboo fiber lining',
    details: 'Above knee, sleeveless, zip back'
  },
  {
    id: 'p006',
    name: 'Solace Slip',
    price: 'Rp 3.499.000',
    image: 'https://cdna.lystit.com/300/375/tr/photos/farfetch/b80542af/saint-laurent-pink-Silk-Maxi-Dress.jpeg',
    category: 'Dress',
    colors: ['rose', 'champagne', 'moss'],
    description: 'A fluid, airy slip dress inspired by sunset silhouettes and slow fashion.',
    code: 'SS-018L',
    materials: 'Tencel silk blend',
    details: 'Bias-cut, mid-length, adjustable straps'
  },
  {
    id: 'p007',
    name: 'Aria Satchel',
    price: 'Rp 2.850.000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NXVM3P8zqPyp5tOUC0--RJ4ntSzrH3_H7w&s',
    category: 'Bag',
    colors: ['nude', 'burgundy', 'black'],
    description: 'Classic satchel reinvented with recycled grain leather and a structured silhouette.',
    code: 'AS-315B',
    materials: 'Recycled leather, canvas lining',
    details: 'Top handle, magnetic closure, inner pocket'
  },
  {
    id: 'p008',
    name: 'Noir Loop Bag',
    price: 'Rp 3.299.000',
    image: 'data:image/jpeg;base64,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',
    category: 'Bag',
    colors: ['ebony', 'taupe', 'dust'],
    description: 'Minimalist shoulder bag with seamless finish and fully vegan materials.',
    code: 'NL-772V',
    materials: 'Vegan leather, recycled nylon',
    details: 'Curved flap, magnetic clasp, soft strap'
  },
  {
    id: 'p009',
    name: 'Halo Frame',
    price: 'Rp 1.499.000',
    image: 'https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_790/01/nm_4557707_100106_m',
    category: 'Sunglasses',
    colors: ['gold', 'rose', 'black'],
    description: 'Sleek oversized frame sunglasses crafted with biodegradable acetate.',
    code: 'HF-001A',
    materials: 'Bio-acetate, UV400 lenses',
    details: 'Gradient lens, metal bridge, soft case'
  },
  {
    id: 'p010',
    name: 'Éclipse Round',
    price: 'Rp 1.799.000',
    image: 'https://www.otticazzurrocapri.com/cdn/shop/files/celine-celine-cl40235-triomphe-metal-occhiale-da-sole-ottica-azzurro-capri-133913.jpg?v=1717683695',
    category: 'Sunglasses',
    colors: ['black', 'champagne', 'honey'],
    description: 'Timeless circular sunglasses that fuse retro elegance with conscious materials.',
    code: 'ER-214B',
    materials: 'Recycled acetate, polarized lens',
    details: 'Anti-glare, scratch resistant, travel pouch'
  }
];

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
        // Prevent default only if the click wasn't on the view button
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
    
    // Apply filter if provided
    if (filterCategory) {
        productsToShow = products.filter(product => product.category === filterCategory);
    }
    
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

let displayProducts = products;
if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
    displayProducts = products.slice(0, 4);
}