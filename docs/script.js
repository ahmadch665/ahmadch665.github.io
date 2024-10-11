
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



document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle.querySelector('i');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    
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
 
  var submitBtn = document.getElementById("submitBtn"); 
  submitBtn.addEventListener("click", sendMail);

  function sendMail() {
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const number = document.querySelector("#number").value;
      const message = document.querySelector("#msg").value;
    
      
      const templateParams = {
          name: name,
          email: email,
          number: number,
          message: message,
      };
    
     
      emailjs.send('service_gjz56v5', 'template_jcllt8l', templateParams)
          .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              alert("Email sent successfully!");

              
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
