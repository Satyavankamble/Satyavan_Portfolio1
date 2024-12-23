// Initialize EmailJS
emailjs.init("-Hk75A5yOuEwIuQZl"); // Replace with your EmailJS Public Key

// Form submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Collect form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Provide feedback to the user
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Sending your message...";
    statusMessage.style.color = "blue";

    // EmailJS send method
    emailjs
        .send("service_c4g2bl5", "template_twjritu", {
            name: name,
            email: email,
            message: message,
        })
        .then(
            (response) => {
                console.log("Email sent successfully!", response);
                statusMessage.textContent = "Your message has been sent successfully!";
                statusMessage.style.color = "green";
                contactForm.reset(); // Reset the form after successful submission
            },
            (error) => {
                console.error("Email sending failed:", error);
                statusMessage.textContent = `Failed to send the message: ${error.text || "Unknown error"}`;
                statusMessage.style.color = "red";
            }
        );
});
