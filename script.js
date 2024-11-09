// Toggle between Login and Signup forms
function toggleForm(formType) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const title = document.getElementById('form-title');
    const subtitle = document.getElementById('form-subtitle');
  
    if (formType === 'login') {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      loginBtn.classList.add('active');
      signupBtn.classList.remove('active');
      title.textContent = 'Login';
      subtitle.textContent = 'Please enter your details to log in';
    } else {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      loginBtn.classList.remove('active');
      signupBtn.classList.add('active');
      title.textContent = 'Sign Up';
      subtitle.textContent = 'Create an account to get started';
    }
  }
  
  // Slideshow for images
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === currentSlide) {
        slide.classList.add('active');
      }
    });
    currentSlide = (currentSlide + 1) % slides.length;
  }
  
  setInterval(showSlide, 3000); // Change image every 3 seconds
  