export function animGallery() {
  const galleries = document.querySelectorAll(
    ".gallery__photos-top, .gallery__photos-bottom"
  );

  if (!galleries.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add("active");
      } else {
        target.classList.remove("active");
      }
    });
  });

  galleries.forEach((el) => observer.observe(el));
}
