// Sidebar functionality
const bars = document.getElementById('bars');
const xmark = document.getElementById('xmark');
const sidebar = document.getElementById('sidebar');

bars.addEventListener('click', () => {
    sidebar.style.display = 'flex';
});


xmark.addEventListener('click', () => {
    sidebar.style.display = 'none';
});

// Swiper Sliders Initialization
const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto' , // allows variable width
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const commentsSwiper = new Swiper('.comments-slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
   
  });