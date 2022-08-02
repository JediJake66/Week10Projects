function validate() {
  let fname = document.forms.contactForm.fname.value;
  let lname = document.forms.contactForm.lname.value;
  let email = document.forms.contactForm.email.value;
  let mobNum = document.forms.contactForm.mobNum.value;

  let emailVal = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  let phoneVal = /^\d{10}$/;
  
  if (fname == "" || lname == "") {
    alert("You did not enter your full name");
    return false;
  }

  if (email == "" || !emailVal.test(email)) {
    alert("This is not a valid email address");
    return false;
  }
  if (mobNum == "" || !phoneVal.test(mobNum)) {
    alert("This is not a valid Phone Number");
    return false;
  }
  alert(
    "Thank you for you feedback, " +
      fname +
      " " +
      lname +
      "! Someone will be in touch soon."
  );
}
