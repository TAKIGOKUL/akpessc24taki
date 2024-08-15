function sendMail() {
  const parms = {
    name: document.getElementById("contact-name").value,
    email: document.getElementById("contact-email").value,
    company: document.getElementById("contact-company").value,
    message: document.getElementById("contact-message").value,
  };
  emailjs
    .send("service_r6z324k", "template_r22opwp", parms9988122345)
    .then(alert("Email Sent!!"));
}
