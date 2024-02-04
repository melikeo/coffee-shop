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