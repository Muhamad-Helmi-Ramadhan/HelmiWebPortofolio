function openLightbox(imgElement) {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImage");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

function closeLightbox() {
  document.getElementById("lightboxModal").style.display = "none";
}

function openVideoModal(videoSrc) {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  modal.style.display = "block";
  modalVideo.src = videoSrc;
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
}

function openModal() {
  document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Efek Fade-in saat scroll
const fadeIns = document.querySelectorAll('.fade-in');

function handleScroll() {
  fadeIns.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Modal video jika kamu pakai fungsinya
function openVideoModal(src) {
  const videoModal = document.getElementById("videoModal");
  const video = videoModal.querySelector("video");
  video.src = src;
  videoModal.style.display = "block";
}

function closeVideoModal() {
  const videoModal = document.getElementById("videoModal");
  const video = videoModal.querySelector("video");
  video.pause();
  video.currentTime = 0;
  videoModal.style.display = "none";
}
