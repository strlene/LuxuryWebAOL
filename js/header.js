function createHeader() {
  const header = document.createElement('header');

  // Logo
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logo';

  const logoLink = document.createElement('a');
  logoLink.href = '/index.html';

  const logoImg = document.createElement('img');
  logoImg.src = '/assets/logo.svg';
  logoImg.alt = 'Christian Wijaya';

  logoLink.appendChild(logoImg);
  logoDiv.appendChild(logoLink);

  // Hamburger Button
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label', 'Toggle navigation');
  hamburger.innerHTML = '&#9776;'; // hamburger symbol

  // Navigation
  const nav = document.createElement('nav');
  const navList = document.createElement('ul');

  const navItems = [
    { text: 'Home', url: '/index.html' },
    { text: 'Product', url: '/product/index.html' },
    { text: 'Event', url: '/event/index.html' },
    { text: 'About us', url: '/about-us/index.html' }
  ];

  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.text;
    a.href = item.url;

    const currentPath = window.location.pathname;
    if (
      (currentPath === '/' && item.url === '/index.html') ||
      (currentPath.includes(item.text.toLowerCase()) && item.text !== 'Home')
    ) {
      a.classList.add('active');
    }

    li.appendChild(a);
    navList.appendChild(li);
  });

  nav.appendChild(navList);
  header.appendChild(logoDiv);
  header.appendChild(hamburger);
  header.appendChild(nav);

  // Add toggle functionality
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
  });

  return header;
}

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.appendChild(createHeader());
  }
});
