// Miguel Melendez Portfolio JavaScript

// Copy Email Functionality
function copyEmail() {
  const email = "mamt88@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    showToast("Email address copied to clipboard!");
  }).catch(() => {
    showToast("Email: mamt88@gmail.com");
  });
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Navbar shadow & backdrop enhancement on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".glass-card, .timeline-item, .contact-box").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
  });
});
