// Animasi Timeline
document.addEventListener('DOMContentLoaded', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  function checkScroll() {
    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < window.innerHeight - 100) {
        item.classList.add('visible');
      }
    });
  }

  // Jalankan saat load dan scroll
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});