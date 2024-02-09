document.getElementById("reservationButton").onclick = function () {
        location.href = "reservation.html";
  }


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
  
          if (targetElement) {
              const offset = document.querySelector('.header').offsetHeight; // Höhe des Headers
              const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
  
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });


  function scrolltoReservation() {
      var reservationSection = document.getElementById("reservation");
      reservationSection.scrollIntoView({ behavior: "smooth" });
  }

  //Leaflet Map Integration
  var map = L.map('map').setView([49.01096392558526, 8.416113100935961], 16);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([49.01096392558526, 8.416113100935961]).addTo(map);

//Submit Message
let messageForm = document.getElementById("messageForm");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let fullname = document.getElementById("fullname");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  if (fullname.value == "" || email.value == "" || message.value == "") {
    alert("Ensure you fill out all fields!");
  } else {
    // perform operation with form input
    alert("Thank you for your message! We will reach out to you as soon as possible");
    console.log(
      `This form was submitted with the fullname ${fullname.value}, email ${email.value} and message ${email.value}`
    );

    fullname.value = "";
    email.value = "";
    message.value ="";
  }
});

// Leaflet Map Integration
var map = L.map('map').setView([49.01096392558526, 8.416113100935961], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([49.01096392558526, 8.416113100935961]).addTo(map);


//Image Slider
