// scripts.js

const toggleBtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');

        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', function () {
      var loadingContainer = document.getElementById('loadingContainer');
      loadingContainer.style.display = 'none';
    });

    function topPage() {
        window.location.href = "https://si-kuma.f5.si/"
    }


    
      