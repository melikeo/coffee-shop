let currentIndex = 0;
let slideshowInterval;
let images = ['images/barista_payment_cashier.jpg', 'images/coffee-machine.jpg'];
let pause = false;


//Automatic Slide Carousel

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
}

function updateSlide() {
    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function startSlideshow() {
  slideshowInterval = setInterval(showNextImage, 3500); // Change image every 2 seconds
}

function pauseSlideshow() {
  let state = document.querySelector(".pause");
  if (state.innerHTML == "pause") {
    state.innerHTML = "play_arrow";
    pause = true;
  } else {
    state.innerHTML = "pause";
    pause = false;
  }
}

// Start slideshow automatically when the page loads
window.addEventListener('load', startSlideshow);


//Reservation Button automatic scroll
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


function showNextImage() {
    const items = document.querySelectorAll('.item');
    items[currentIndex].classList.remove('active'); // Vorheriges Bild ausblenden
    currentIndex = (currentIndex + 1) % items.length; // Aktualisieren des Index für das nächste Bild
    items[currentIndex].classList.add('active'); // Aktuelles Bild anzeigen
}

function showPrevImage() {
    const items = document.querySelectorAll('.item');
    items[currentIndex].classList.remove('active'); // Aktuelles Bild ausblenden
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Aktualisieren des Index für das vorherige Bild
    items[currentIndex].classList.add('active'); // Vorheriges Bild anzeigen
}

function pauseSlideshow() {
    // Hier können Sie die Logik zum Anhalten der Diashow implementieren, falls erforderlich
}

// Eventlistener für die Buttons hinzufügen
document.querySelector('.navbutton.prev').addEventListener('click', showPrevImage);
document.querySelector('.navbutton.next').addEventListener('click', showNextImage);



//Mobile Menu
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

//Close Mobile Menu when clicked outside
document.onclick = function(e){
  if (!menu_icon.contains(e.target) && !mobile-menu.contains(e.target) ) {
      menu_icon.classList.remove("active");
      mobile-menu.classList.remove("active_box");
  }
}