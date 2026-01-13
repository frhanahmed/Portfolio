// function for mobile-views
  function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");

  }
const html = document.documentElement;
const slider = document.getElementById("toggleSlider");

  // Code for dark-light mode
  function toggleTheme(el) {
    if (el.checked) {
      html.classList.add("dark");
      slider.classList.add("translate-x-7");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      slider.classList.remove("translate-x-7");
      localStorage.setItem("theme", "light");
    }
  }

  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    slider.classList.add("translate-x-7");
    document.querySelector("input[type='checkbox']").checked = true;
  }


  // Code for sending form details
  document.addEventListener("DOMContentLoaded", function () {
  (function () {
    emailjs.init("6vI5Vj_yMf4mUG6J-"); // public_key
  })();

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_00y5twi",
          "template_qky509z",
          this
        )
        .then(
          () => {
            alert("Message sent successfully!");
            this.reset();
          },
          (error) => {
            alert("Failed to send message. Please try again.");
            console.error(error);
          }
        );
    });
  })

  // For copyright year count
  document.getElementById("year").innerText =
    new Date().getFullYear();