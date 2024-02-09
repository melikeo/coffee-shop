
//Submit Reservation Request

let reservationForm = document.getElementById("reservationForm");

reservationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let guestnr = document.getElementById("guestnr");
  let datepicker = document.getElementById("datepicker");
  let timepicker = document.getElementById("timepicker");  
  let guestname = document.getElementById("guestname");
  let emailaddress = document.getElementById("emailaddress");

  if (guestnr.value == "" || datepicker.value == "" || timepicker.value == "" || guestname.value == "" || emailaddress.value == "") {
    alert("Ensure you fill out all fields!");
  } else {
    // perform operation with form input
    alert("Thank you for your reservation request! We will reach out to you as soon as possible");
    console.log(
      `This form was submitted with number of guests ${guestnr.value}, date ${datepicker.value}, time ${timepicker.value}, name ${guestname.value} and email ${emailaddress.value}`
    );

    guestnr.value = "";
    datepicker.value = "";
    timepicker.value ="";
    guestname.value = "";
    emailaddress.value ="";
  }
});