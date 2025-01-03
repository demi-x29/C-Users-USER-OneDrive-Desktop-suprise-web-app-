document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side validation
    if (username === '' || password === '') {
      errorMessage.textContent = 'Please fill in all fields.';
      return;
    }

    // Simulate a login process (replace with actual logic)
    if (username === 'user' && password === 'password') {
      errorMessage.textContent = 'Login successful!';
      // Redirect to the portfolio form page
      window.location.href = 'portfolioForm.html';
    } else {
      errorMessage.textContent = 'Invalid username or password.';
    }
  });
});