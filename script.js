document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll
  document.querySelectorAll('.nav-vertical a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').substring(1);
      const target = document.getElementById(id);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    });
  });

  // Testimonial Carousel
  let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

// opsional: autoplay
let autoplay = setInterval(nextTestimonial, 420000); // 2 menit

const testimonialContainer = document.querySelector('#testimonials');

testimonialContainer.addEventListener('mouseenter', () => {
  clearInterval(autoplay);
});

testimonialContainer.addEventListener('mouseleave', () => {
  autoplay = setInterval(nextTestimonial, 1420000);
});


});
