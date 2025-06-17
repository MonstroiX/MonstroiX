function createCarousel(images, selector) {
  const container = document.querySelector(selector);
  if (!container) {
    console.error(`Элемент по селектору "${selector}" не найден.`);
    return;
  }

  let currentIndex = 0;

  // Создаем и стилизуем img
  const img = document.createElement('img');
  img.src = images[currentIndex];
  img.style.width = '100%';
  img.style.borderRadius = '8px';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
  container.appendChild(img);

  // Смена картинки
  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
  }

  setInterval(showNextImage, 3000);
}
