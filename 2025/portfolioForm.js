document.addEventListener('DOMContentLoaded', function() {
  const portfolioForm = document.getElementById('portfolioForm');
  const errorMessage = document.getElementById('errorMessage');

  portfolioForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const lineOfWork = document.getElementById('lineOfWork').value;

    // Simple client-side validation
    if (name === '' || lineOfWork === '') {
      errorMessage.textContent = 'Please fill in all fields.';
      return;
    }

    // Simulate a portfolio generation process (replace with actual logic)
    errorMessage.textContent = 'Portfolio generated successfully!';
    // Redirect or perform further actions here
  });
});