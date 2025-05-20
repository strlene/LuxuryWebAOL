// validation.js - Form validation for event registration page

// Validation rules
const validationRules = {
    fullName: {
        minLength: 5,
        errorMessage: 'Name must be at least 5 characters long'
    },
    email: {
        pattern: /^[^\s@]+@(gmail\.com|yahoo\.com)$/,
        errorMessage: 'Email must end with gmail.com or yahoo.com'
    },
    dateOfBirth: {
        required: true,
        errorMessage: 'Date of birth is required'
    },
    gender: {
        required: true,
        errorMessage: 'Please select a gender option'
    },
    termsAgree: {
        required: true,
        errorMessage: 'You must agree to the terms and conditions'
    }
};

// Show error message for an input
function showError(inputElement, message) {
    // Find the error message element
    const errorElement = inputElement.parentElement.querySelector('.error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    // Add error class to input
    inputElement.classList.add('input-error');
}

// Clear error message for an input
function clearError(inputElement) {
    // Find the error message element
    const errorElement = inputElement.parentElement.querySelector('.error');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
    
    // Remove error class from input
    inputElement.classList.remove('input-error');
}

// Validate a single input field
function validateField(inputElement) {
    const fieldName = inputElement.name;
    const value = inputElement.value.trim();
    
    // Check if this field has validation rules
    if (!validationRules[fieldName]) return true;
    
    const rules = validationRules[fieldName];
    
    // Check for required fields
    if (rules.required && value === '') {
        showError(inputElement, rules.errorMessage);
        return false;
    }
    
    // Check for minimum length
    if (rules.minLength && value.length < rules.minLength) {
        showError(inputElement, rules.errorMessage);
        return false;
    }
    
    // Check for pattern match
    if (rules.pattern && !rules.pattern.test(value)) {
        showError(inputElement, rules.errorMessage);
        return false;
    }
    
    // If we get here, validation passed
    clearError(inputElement);
    return true;
}

// Validate radio button groups
function validateRadioGroup(name) {
    const radioButtons = document.querySelectorAll(`input[name="${name}"]`);
    if (!radioButtons.length) return true;
    
    // Get the first radio button to reference the group
    const firstRadio = radioButtons[0];
    
    // Check if any radio button is checked
    const isChecked = Array.from(radioButtons).some(radio => radio.checked);
    
    if (!isChecked && validationRules[name] && validationRules[name].required) {
        // Show error on the container
        showError(firstRadio, validationRules[name].errorMessage);
        return false;
    }
    
    clearError(firstRadio);
    return true;
}

// Validate checkbox
function validateCheckbox(name) {
    const checkbox = document.querySelector(`input[name="${name}"]`);
    if (!checkbox) return true;
    
    if (!checkbox.checked && validationRules[name] && validationRules[name].required) {
        showError(checkbox, validationRules[name].errorMessage);
        return false;
    }
    
    clearError(checkbox);
    return true;
}

// Validate the entire form
function validateForm(formElement) {
    let isValid = true;
    
    // Validate text inputs
    const textInputs = formElement.querySelectorAll('input[type="text"], input[type="email"], input[type="date"]');
    textInputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    // Validate radio groups
    if (!validateRadioGroup('gender')) {
        isValid = false;
    }
    
    // Validate checkbox
    if (!validateCheckbox('termsAgree')) {
        isValid = false;
    }
    
    return isValid;
}

// Initialize form validation
function initFormValidation() {
    const form = document.getElementById('event-registration-form');
    if (!form) return;
    
    // Add submit event listener
    form.addEventListener('submit', function(e) {
        // Prevent default form submission
        e.preventDefault();
        
        // Validate the form
        if (validateForm(form)) {
            // Form is valid, you can submit it or process the data
            alert('Registration successful! Thank you for registering.');
            form.reset();
        }
    });
    
    // Add input event listeners for real-time validation
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="date"]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear errors when user starts typing again
            clearError(this);
        });
    });
    
    // Add change event listener to radio buttons
    const radioButtons = form.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            validateRadioGroup(this.name);
        });
    });
    
    // Add change event listener to checkbox
    const checkbox = form.querySelector('input[type="checkbox"]');
    if (checkbox) {
        checkbox.addEventListener('change', function() {
            validateCheckbox(this.name);
        });
    }
}

document.addEventListener('DOMContentLoaded', initFormValidation);