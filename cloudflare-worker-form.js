/**
 * Cloudflare Worker để xử lý Contact Form
 * Deploy này lên Cloudflare Workers và map với route /api/contact
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // CORS Headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://hbw.vn',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  // Only accept POST requests
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders 
    })
  }

  try {
    // Parse form data
    const formData = await request.json()
    
    // Validate required fields
    const required = ['fullName', 'email', 'service', 'message']
    for (const field of required) {
      if (!formData[field] || formData[field].trim() === '') {
        return new Response(JSON.stringify({
          success: false,
          error: `Missing required field: ${field}`
        }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        })
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid email address'
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Prepare email content
    const emailContent = `
      New Contact Form Submission from HBW.vn
      
      Name: ${formData.fullName}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Company: ${formData.company || 'Not provided'}
      Service: ${formData.service}
      Budget: ${formData.budget || 'Not specified'}
      Timeline: ${formData.timeline || 'Not specified'}
      
      Message:
      ${formData.message}
      
      Consultation Requested: ${formData.requestConsultation ? 'Yes' : 'No'}
      
      Submitted at: ${new Date().toISOString()}
    `

    // Send email using Cloudflare Email API or external service
    // Option 1: Use Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_RESEND_API_KEY', // Add your Resend API key
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@hbw.vn',
        to: ['hello@hbw.vn', 'contact@hbw.vn'], // Your email addresses
        subject: `New Contact Form: ${formData.service} - ${formData.fullName}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>')
      })
    })

    if (!emailResponse.ok) {
      throw new Error('Failed to send email')
    }

    // Log submission (optional - store in KV or analytics)
    console.log('Form submission:', {
      timestamp: new Date().toISOString(),
      email: formData.email,
      service: formData.service
    })

    // Return success response
    return new Response(JSON.stringify({
      success: true,
      message: 'Thank you for your message. We\'ll get back to you within 24 hours!'
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Form processing error:', error)
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Internal server error. Please try again later.'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
}