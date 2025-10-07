// HBW Contact Form Handler
// Form validation, submission, and user experience enhancements

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== FORM ELEMENTS ==========
    const contactForm = document.querySelector('#contact form');
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    // ========== FORM VALIDATION ==========
    
    // Real-time validation rules
    const validationRules = {
        name: {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
            message: 'Vui lòng nhập họ tên hợp lệ (tối thiểu 2 ký tự)'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Vui lòng nhập email hợp lệ'
        },
        phone: {
            required: false,
            pattern: /^[\+]?[0-9]{8,15}$/,
            message: 'Vui lòng nhập số điện thoại hợp lệ (8-15 số)'
        },
        message: {
            required: true,
            minLength: 10,
            maxLength: 1000,
            message: 'Vui lòng mô tả dự án (10-1000 ký tự)'
        }
    };
    
    // Validate individual field
    function validateField(field) {
        const fieldName = field.name || field.placeholder.toLowerCase().replace(/[^a-z]/g, '');
        const value = field.value.trim();
        const rules = validationRules[fieldName];
        
        if (!rules) return true;
        
        // Clear previous error states
        clearFieldError(field);
        
        // Required field check
        if (rules.required && !value) {
            showFieldError(field, `${field.placeholder} là bắt buộc`);
            return false;
        }
        
        if (value) {
            // Pattern validation
            if (rules.pattern && !rules.pattern.test(value)) {
                showFieldError(field, rules.message);
                return false;
            }
            
            // Length validation
            if (rules.minLength && value.length < rules.minLength) {
                showFieldError(field, rules.message);
                return false;
            }
            
            if (rules.maxLength && value.length > rules.maxLength) {
                showFieldError(field, rules.message);
                return false;
            }
        }
        
        // Field is valid
        showFieldSuccess(field);
        return true;
    }
    
    // Show field error
    function showFieldError(field, message) {
        field.classList.add('border-red-500', 'bg-red-50/20');
        field.classList.remove('border-white/30', 'border-green-500', 'bg-green-50/20');
        
        // Create or update error message
        let errorElement = field.parentElement.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message text-red-300 text-sm mt-1 flex items-center';
            field.parentElement.appendChild(errorElement);
        }
        
        errorElement.innerHTML = `<i class="fas fa-exclamation-circle mr-1"></i> ${message}`;
    }
    
    // Show field success
    function showFieldSuccess(field) {
        field.classList.add('border-green-500', 'bg-green-50/20');
        field.classList.remove('border-white/30', 'border-red-500', 'bg-red-50/20');
        
        // Remove error message
        clearFieldError(field);
    }
    
    // Clear field error
    function clearFieldError(field) {
        field.classList.remove('border-red-500', 'bg-red-50/20', 'border-green-500', 'bg-green-50/20');
        field.classList.add('border-white/30');
        
        const errorElement = field.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    // ========== REAL-TIME VALIDATION ==========
    
    formInputs.forEach(field => {
        // Validate on blur
        field.addEventListener('blur', function() {
            validateField(this);
        });
        
        // Clear errors on focus
        field.addEventListener('focus', function() {
            if (this.classList.contains('border-red-500')) {
                clearFieldError(this);
            }
        });
        
        // Real-time validation for specific fields
        if (field.type === 'email') {
            field.addEventListener('input', debounce(function() {
                if (this.value.trim()) {
                    validateField(this);
                }
            }, 500));
        }
    });
    
    // ========== FORM SUBMISSION ==========
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate all fields
        let isFormValid = true;
        const requiredFields = contactForm.querySelectorAll('input[required], textarea[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });
        
        // Validate optional fields if they have values
        const optionalFields = contactForm.querySelectorAll('input:not([required]), select, textarea:not([required])');
        optionalFields.forEach(field => {
            if (field.value.trim()) {
                if (!validateField(field)) {
                    isFormValid = false;
                }
            }
        });
        
        if (!isFormValid) {
            showFormMessage('Vui lòng kiểm tra lại thông tin đã nhập', 'error');
            return;
        }
        
        // Prepare form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name') || contactForm.querySelector('input[placeholder*="tên"]').value,
            email: formData.get('email') || contactForm.querySelector('input[type="email"]').value,
            phone: formData.get('phone') || contactForm.querySelector('input[type="tel"]').value,
            service: formData.get('service') || contactForm.querySelector('select').value,
            budget: formData.get('budget') || contactForm.querySelectorAll('select')[1].value,
            message: formData.get('message') || contactForm.querySelector('textarea').value,
            timestamp: new Date().toISOString(),
            source: window.location.href,
            userAgent: navigator.userAgent
        };
        
        // Show loading state
        setSubmitButtonLoading(true);
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await submitContactForm(data);
            
            // Show success message
            showFormMessage('Cảm ơn bạn! Chúng tôi sẽ liên hệ trong vòng 2 giờ.', 'success');
            
            // Reset form
            contactForm.reset();
            formInputs.forEach(field => clearFieldError(field));
            
            // Track conversion (if analytics is set up)
            trackFormSubmission(data);
            
        } catch (error) {
            console.error('Form submission error:', error);
            showFormMessage('Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua Telegram/WhatsApp.', 'error');
        } finally {
            setSubmitButtonLoading(false);
        }
    });
    
    // ========== FORM SUBMISSION FUNCTION ==========
    
    async function submitContactForm(data) {
        // This is where you would integrate with your backend
        // For demo purposes, we'll simulate an API call
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate random success/failure for demo
                if (Math.random() > 0.1) { // 90% success rate
                    // console.log('Form data submitted:', data);
                    resolve({ success: true, message: 'Form submitted successfully' });
                } else {
                    reject(new Error('Simulated network error'));
                }
            }, 2000); // Simulate 2-second delay
        });
        
        // Real implementation would look like:
        /*
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
        */
    }
    
    // ========== UI FEEDBACK FUNCTIONS ==========
    
    function setSubmitButtonLoading(isLoading) {
        if (isLoading) {
            submitButton.disabled = true;
            submitButton.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Đang gửi...
            `;
            submitButton.classList.add('opacity-75');
        } else {
            submitButton.disabled = false;
            submitButton.innerHTML = `
                <i class="fas fa-paper-plane mr-3"></i>
                Gửi Yêu Cầu Tư Vấn
            `;
            submitButton.classList.remove('opacity-75');
        }
    }
    
    function showFormMessage(message, type) {
        // Remove existing message
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = `form-message p-4 rounded-lg mb-4 flex items-center ${
            type === 'success' 
                ? 'bg-green-500/20 border border-green-400 text-green-100' 
                : 'bg-red-500/20 border border-red-400 text-red-100'
        }`;
        
        messageElement.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'} mr-3"></i>
            ${message}
        `;
        
        // Insert before form
        contactForm.parentElement.insertBefore(messageElement, contactForm);
        
        // Auto-remove success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                messageElement.remove();
            }, 5000);
        }
    }
    
    // ========== ANALYTICS TRACKING ==========
    
    function trackFormSubmission(data) {
        // Track with Google Analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                event_category: 'contact',
                event_label: data.service || 'general_inquiry',
                value: getBudgetValue(data.budget)
            });
        }
        
        // Track with Facebook Pixel if available
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Contact', {
                content_name: 'Contact Form',
                content_category: data.service || 'general'
            });
        }
        
        // console.log('Form submission tracked:', {
        //     service: data.service,
        //     budget: data.budget,
        //     timestamp: data.timestamp
        // });
    }
    
    function getBudgetValue(budget) {
        const budgetMap = {
            '1k-5k': 3000,
            '5k-15k': 10000,
            '15k-50k': 32500,
            '50k+': 75000
        };
        return budgetMap[budget] || 0;
    }
    
    // ========== ENHANCED UX FEATURES ==========
    
    // Auto-focus first field when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    const firstInput = contactForm.querySelector('input');
                    if (firstInput && !document.querySelector('input:focus')) {
                        firstInput.focus();
                    }
                }, 500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(contactForm);
    
    // Character counter for textarea
    const textarea = contactForm.querySelector('textarea');
    if (textarea) {
        const maxLength = 1000;
        
        // Create character counter
        const counter = document.createElement('div');
        counter.className = 'text-xs text-blue-200 mt-1 text-right';
        textarea.parentElement.appendChild(counter);
        
        function updateCounter() {
            const remaining = maxLength - textarea.value.length;
            counter.textContent = `${remaining} ký tự còn lại`;
            
            if (remaining < 50) {
                counter.classList.add('text-yellow-300');
                counter.classList.remove('text-blue-200');
            } else {
                counter.classList.add('text-blue-200');
                counter.classList.remove('text-yellow-300');
            }
        }
        
        textarea.addEventListener('input', updateCounter);
        updateCounter(); // Initialize
    }
    
});

// ========== UTILITY FUNCTIONS ==========

// Debounce function for input validation
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}