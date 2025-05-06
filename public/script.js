// Smooth scrolling for navigation links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});



// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// 
    // Load unemployment stats dynamically


const scrollContainer = document.querySelector('.project-grid');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});


const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message })
        });
  
        const data = await res.json();
        alert(data.message || "Message sent!");
      } catch (err) {
        alert("Failed to send message.");
        console.error(err);
      }
    });
  });
  