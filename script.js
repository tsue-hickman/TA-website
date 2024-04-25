// Script to update header links based on current page
const homeLink = document.getElementById('home-link');
const meetLink = document.getElementById('meet-link');
const aboutLink = document.getElementById('about-link');
const currentPage = window.location.pathname.split('/').pop();

if (currentPage === 'index.html') {
  homeLink.style.display = 'none';
} else if (currentPage === 'meet.html') {
  meetLink.style.display = 'none';
} else if (currentPage === 'about.html') {
  aboutLink.style.display = 'none';
}

// set up a time to meet page javascript, ensures that the page will
// send me an email to hic22009@byui.edu every time this
// page has the user hit the submit button including the
// information that they entered there
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the form data
  const userEmail = document.getElementById('email').value;
  const personalInfo = document.getElementById('personal-info').value;

  // Construct the email body with the user's information
  const emailBody = `User Email: ${userEmail}\nPersonal Information: ${personalInfo}`;

  // Construct the email subject
  const emailSubject = 'New Meeting Request';

  // Construct the email parameters
  const emailParams = `mailto:hic22009@byui.edu?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Open the user's default email client
  window.open(emailParams);

  // Reset the form
  form.reset();
});

// Added CSS styles
const style = document.createElement('style');
style.textContent = '#name { max-width: 500px; margin: 0 auto; }';
document.head.appendChild(style);