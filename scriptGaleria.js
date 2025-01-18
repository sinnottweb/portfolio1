// Datos de las imágenes y categorías
const galleryData = [
  { src: 'assets/images/work/1.jpg', full: 'assets/images/work/1a.webp', category: 'informativo' },
  { src: 'assets/images/work/2.jpg', full: 'assets/images/work/2a.webp', category: 'informativo' },
  { src: 'assets/images/work/3.jpg', full: 'assets/images/work/3a.webp', category: 'informativo' },
  { src: 'assets/images/work/4.jpg', full: 'assets/images/work/4a.webp', category: 'informativo' },
  { src: 'assets/images/work/5.jpg', full: 'assets/images/work/5a.webp', category: 'informativo' },
  { src: 'assets/images/work/6.jpg', full: 'assets/images/work/6a.webp', category: 'informativo' },
  { src: 'assets/images/work/7.jpg', full: 'assets/images/work/7a.webp', category: 'informativo' },
  { src: 'assets/images/work/8.jpg', full: 'assets/images/work/8a.webp', category: 'landing' },
  { src: 'assets/images/work/9.jpg', full: 'assets/images/work/9a.webp', category: 'informativo' },
  { src: 'assets/images/work/10.jpg', full: 'assets/images/work/10a.webp', category: 'ecommerce' },
  { src: 'assets/images/work/11.jpg', full: 'assets/images/work/11a.webp', category: 'informativo' },
  { src: 'assets/images/work/12.jpg', full: 'assets/images/work/12a.webp', category: 'informativo' },
  { src: 'assets/images/work/13.jpg', full: 'assets/images/work/13a.webp', category: 'eccomerce' },
  { src: 'assets/images/work/14.jpg', full: 'assets/images/work/14a.webp', category: 'informativo' },
  { src: 'assets/images/work/15.jpg', full: 'assets/images/work/15a.webp', category: 'informativo' },
  { src: 'assets/images/work/16.jpg', full: 'assets/images/work/16a.webp', category: 'ecommerce' },
  { src: 'assets/images/work/17.jpg', full: 'assets/images/work/17a.webp', category: 'ecommerce' },
  { src: 'assets/images/work/18.jpg', full: 'assets/images/work/18a.webp', category: 'ecommerce' },
  { src: 'assets/images/work/19.jpg', full: 'assets/images/work/19a.webp', category: 'informativo' },
  { src: 'assets/images/work/20.jpg', full: 'assets/images/work/20a.webp', category: 'landing' },
  { src: 'assets/images/work/21.jpg', full: 'assets/images/work/21a.webp', category: 'ecommerce' },
  { src: 'assets/images/work/22.jpg', full: 'assets/images/work/22a.webp', category: 'landing' },
  { src: 'assets/images/work/23.jpg', full: 'assets/images/work/23a.webp', category: 'landing' },
  { src: 'assets/images/work/24.jpg', full: 'assets/images/work/24a.webp', category: 'ecommerce' },
  { src: 'assets/images/work/25.jpg', full: 'assets/images/work/25a.webp', category: 'ecommerce' },
  { src: 'assets/images/work/26.jpg', full: 'assets/images/work/26a.webp', category: 'informativo' },
  { src: 'assets/images/work/27.jpg', full: 'assets/images/work/27a.webp', category: 'ecommerce' },
  { src: 'assets/images/work/28.jpg', full: 'assets/images/work/28a.webp', category: 'landing' },
  { src: 'assets/images/work/29.jpg', full: 'assets/images/work/29a.webp', category: 'landing' },
  { src: 'assets/images/work/30.jpg', full: 'assets/images/work/30a.webp', category: 'landing' },
];

// Variables globales
let currentCategory = 'all';  // Categoría por defecto
let currentPage = 1;
const itemsPerPage = 8;

// Elementos del DOM
const galleryContainer = document.querySelector('.gallery-items');
const prevPageBtn = document.querySelector('.prev-page');
const nextPageBtn = document.querySelector('.next-page');
const pageInfo = document.querySelector('.page-info');
const filterButtons = document.querySelectorAll('.filter-btn');

// Función para renderizar la galería
function renderGallery() {
  const filteredData = galleryData.filter(item => currentCategory === 'all' || item.category === currentCategory);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  galleryContainer.innerHTML = '';
  paginatedData.forEach(item => {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.setAttribute('data-image', item.full);
    thumbnail.innerHTML = `<img src="${item.src}" alt="thumbnail">`;
    galleryContainer.appendChild(thumbnail);
    thumbnail.addEventListener('click', () => openModal(item.full));
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;

  // Marcar el filtro activo
  filterButtons.forEach(button => {
    if (button.getAttribute('data-category') === currentCategory) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Función para manejar categorías
filterButtons.forEach(button => button.addEventListener('click', () => {
  currentCategory = button.getAttribute('data-category');
  currentPage = 1;  // Resetear a la primera página al cambiar el filtro
  renderGallery(); // Volver a renderizar la galería
}));

// Cambiar de página
prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderGallery(); // Volver a renderizar la galería
  }
});

nextPageBtn.addEventListener('click', () => {
  const filteredData = galleryData.filter(item => currentCategory === 'all' || item.category === currentCategory);
  if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
    currentPage++;
    renderGallery(); // Volver a renderizar la galería
  }
});

// Modal
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  document.getElementById('modalImage').src = imageSrc;
  modal.style.display = 'flex';
}

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === document.getElementById('imageModal')) {
    document.getElementById('imageModal').style.display = 'none';
  }
});

// Inicializar galería
renderGallery(); // Iniciar la galería con la categoría predeterminada y la primera página
