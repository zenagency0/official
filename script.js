// JavaScript for scroll-triggered animations
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');

  const observeSections = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
          }
      });
  });

  sections.forEach(section => {
      observeSections.observe(section);
  });
});
