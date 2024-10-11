// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 100,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 100,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// Get the dark mode toggle button

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle.querySelector('i');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change the icon based on the current mode
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // Attach the event listener to the button after the DOM has loaded
  var submitBtn = document.getElementById("submitBtn"); 
  submitBtn.addEventListener("click", sendMail);

  function sendMail() {
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const number = document.querySelector("#number").value;
      const message = document.querySelector("#msg").value;
    
      // Prepare the template parameters for EmailJS
      const templateParams = {
          name: name,
          email: email,
          number: number,
          message: message,
      };
    
      // Send the email using EmailJS
      emailjs.send('service_gjz56v5', 'template_jcllt8l', templateParams)
          .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              alert("Email sent successfully!");

              // Reset the form fields
              document.querySelector("#name").value = '';
              document.querySelector("#email").value = '';
              document.querySelector("#number").value = '';
              document.querySelector("#msg").value = '';
          }, function(error) {
              console.log('FAILED...', error);
              alert("Failed to send email. Please try again.");
          });
  }
});
