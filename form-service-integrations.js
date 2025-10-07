/**
 * Alternative Form Processing Solutions cho Static Sites
 * Choose one of these services instead of Cloudflare Workers
 */

// =====================================
// 1. FORMSPREE (Easiest - Recommended for beginners)
// =====================================
function setupFormspree() {
  const form = document.getElementById('contactForm')
  
  // Update form action to Formspree endpoint
  form.action = 'https://formspree.io/f/YOUR_FORM_ID' // Get from formspree.io
  form.method = 'POST'
  
  // Add hidden fields
  const hiddenFields = `
    <input type="hidden" name="_replyto" value="">
    <input type="hidden" name="_subject" value="New HBW Contact Form Submission">
    <input type="hidden" name="_next" value="https://hbw.vn/contact?success=true">
    <input type="hidden" name="_cc" value="backup@hbw.vn">
  `
  form.insertAdjacentHTML('beforeend', hiddenFields)
  
  console.log('✅ Formspree integration ready')
}

// =====================================
// 2. NETLIFY FORMS (If hosting on Netlify)
// =====================================
function setupNetlifyForms() {
  const form = document.getElementById('contactForm')
  
  // Add Netlify form attributes
  form.setAttribute('netlify', '')
  form.setAttribute('name', 'contact')
  
  // Add honeypot for spam protection
  const honeypot = '<p class="hidden"><label>Don\'t fill this out: <input name="bot-field"></label></p>'
  form.insertAdjacentHTML('afterbegin', honeypot)
  
  console.log('✅ Netlify Forms integration ready')
}

// =====================================
// 3. EMAILJS (Client-side email sending)
// =====================================
async function setupEmailJS() {
  // Include EmailJS script
  if (!window.emailjs) {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
    document.head.appendChild(script)
    
    await new Promise(resolve => {
      script.onload = resolve
    })
  }
  
  // Initialize EmailJS
  emailjs.init('YOUR_PUBLIC_KEY') // Get from emailjs.com
  
  const form = document.getElementById('contactForm')
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault()
    
    try {
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]')
      const originalText = submitBtn.innerHTML
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...'
      submitBtn.disabled = true
      
      // Send email via EmailJS
      const response = await emailjs.sendForm(
        'YOUR_SERVICE_ID',    // EmailJS service ID
        'YOUR_TEMPLATE_ID',   // EmailJS template ID  
        form,
        'YOUR_PUBLIC_KEY'     // EmailJS public key
      )
      
      console.log('✅ Email sent successfully:', response)
      
      // Show success message
      showSuccessMessage()
      form.reset()
      
    } catch (error) {
      console.error('❌ Email sending failed:', error)
      
      // Show error message
      showErrorMessage('Failed to send message. Please try again or contact us directly.')
      
    } finally {
      // Reset button
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }
  })
  
  console.log('✅ EmailJS integration ready')
}

// =====================================
// 4. GETFORM (Simple form backend)
// =====================================
function setupGetform() {
  const form = document.getElementById('contactForm')
  
  // Update form action
  form.action = 'https://getform.io/f/YOUR_FORM_ID' // Get from getform.io
  form.method = 'POST'
  
  // Add custom fields
  const customFields = `
    <input type="hidden" name="_gotcha" style="display:none">
    <input type="hidden" name="_redirect" value="https://hbw.vn/contact?success=true">
  `
  form.insertAdjacentHTML('beforeend', customFields)
  
  console.log('✅ Getform integration ready')
}

// =====================================
// 5. WEB3FORMS (Free form backend)
// =====================================
function setupWeb3Forms() {
  const form = document.getElementById('contactForm')
  
  form.action = 'https://api.web3forms.com/submit'
  form.method = 'POST'
  
  // Add access key
  const accessKey = '<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">' // Get from web3forms.com
  const customFields = `
    ${accessKey}
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_template" value="table">
    <input type="hidden" name="_redirect" value="https://hbw.vn/contact?success=true">
  `
  form.insertAdjacentHTML('beforeend', customFields)
  
  console.log('✅ Web3Forms integration ready')
}

// =====================================
// UTILITY FUNCTIONS
// =====================================

function showSuccessMessage() {
  const successMessage = document.getElementById('successMessage')
  const form = document.getElementById('contactForm')
  
  form.style.display = 'none'
  successMessage.classList.remove('hidden')
  
  // Auto hide after 5 seconds
  setTimeout(() => {
    form.style.display = 'block'
    successMessage.classList.add('hidden')
  }, 5000)
}

function showErrorMessage(message) {
  // Create error message if doesn't exist
  let errorDiv = document.getElementById('errorMessage')
  if (!errorDiv) {
    errorDiv = document.createElement('div')
    errorDiv.id = 'errorMessage'
    errorDiv.className = 'mt-6 p-4 bg-red-50 border border-red-200 rounded-lg'
    errorDiv.innerHTML = `
      <div class="flex items-center">
        <i class="fas fa-exclamation-triangle text-red-500 text-xl mr-3"></i>
        <div>
          <h4 class="font-semibold text-red-800">Error</h4>
          <p class="text-red-700 text-sm" id="errorText">${message}</p>
        </div>
      </div>
    `
    document.getElementById('contactForm').parentNode.appendChild(errorDiv)
  } else {
    document.getElementById('errorText').textContent = message
    errorDiv.classList.remove('hidden')
  }
  
  // Auto hide after 5 seconds
  setTimeout(() => {
    errorDiv.classList.add('hidden')
  }, 5000)
}

// =====================================
// EXPORT FUNCTIONS
// =====================================
window.FormServices = {
  setupFormspree,
  setupNetlifyForms,
  setupEmailJS,
  setupGetform,
  setupWeb3Forms
}