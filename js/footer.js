
function createFooter() {
    // Create the footer element
    const footer = document.createElement('footer');
    
    // Footer content
    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';
    
    // Contact Info
    const contactInfo = document.createElement('div');
    contactInfo.className = 'footer-info';
    
    const contactTitle = document.createElement('h3');
    contactTitle.textContent = 'We love to hear from you!';
    
    const contactEmail = document.createElement('p');
    contactEmail.innerHTML = 'Email: ChristianWijaya@agency.com';
    
    const contactPhone = document.createElement('p');
    contactPhone.innerHTML = 'Phone: +65 688 278 5503';
    
    const contactAddress = document.createElement('p');
    contactAddress.innerHTML = '677 Apple St, Orchard Rd Blvd, Singapore';
    
    contactInfo.appendChild(contactTitle);
    contactInfo.appendChild(contactEmail);
    contactInfo.appendChild(contactPhone);
    contactInfo.appendChild(contactAddress);
    
    // Copyright
    const footerBottom = document.createElement('div');
    footerBottom.className = 'footer-bottom';
    
    const copyright = document.createElement('p');
    const currentYear = new Date().getFullYear();
    copyright.textContent = `© ${currentYear} Christian Wijaya. All rights reserved.`;
    
    footerBottom.appendChild(copyright);
    
    // Append all elements to footer
    footerContent.appendChild(contactInfo);
    footer.appendChild(footerContent);
    footer.appendChild(footerBottom);
    
    return footer;
}

// Insert footer to the page
document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.appendChild(createFooter());
    }
});