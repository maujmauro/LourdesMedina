// Initialize all carousels
document.querySelectorAll('.carousel-wrapper').forEach((wrapper) => {
  const carousel = wrapper.querySelector('.carousel');
  const prevBtn = wrapper.querySelector('.carousel-btn.prev, .carousel-btn.left');
  const nextBtn = wrapper.querySelector('.carousel-btn.next, .carousel-btn.right');
  const navLinks = wrapper.querySelectorAll('.slider-nav a');
  
  if (!carousel || !prevBtn || !nextBtn) return;
  
  const images = carousel.querySelectorAll('img');
  let currentIndex = 0;
  
  function updateActiveNav() {
    navLinks.forEach((link, i) => {
      link.classList.toggle('active', i === currentIndex);
    });
  }
  
  function scrollToImage(index) {
    const imageWidth = carousel.offsetWidth;
    carousel.scrollLeft = index * imageWidth;
    currentIndex = index;
    updateActiveNav();
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      scrollToImage(currentIndex);
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      scrollToImage(currentIndex);
    }
  });
  
  navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToImage(index);
    });
  });
  
  // Re-alinear la foto actual si cambia el tamaño de la ventana
  window.addEventListener('resize', () => {
    carousel.scrollTo({ left: currentIndex * carousel.offsetWidth, behavior: 'instant' });
  });

  updateActiveNav();
});

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, observerOptions);

// Add scroll animations to elements
document.querySelectorAll('.carousel-section h2').forEach((el) => {
  el.classList.add('scroll-animate');
  observer.observe(el);
});

document.querySelectorAll('.carousel-wrapper').forEach((el) => {
  el.classList.add('scroll-animate');
  observer.observe(el);
});

document.querySelectorAll('.featured h2').forEach((el) => {
  el.classList.add('scroll-animate');
  observer.observe(el);
});

document.querySelectorAll('.featured-item').forEach((el, index) => {
  if (index % 2 === 0) {
    el.classList.add('scroll-animate-left');
  } else {
    el.classList.add('scroll-animate-right');
  }
  observer.observe(el);
});

document.querySelectorAll('.about img').forEach((el) => {
  el.classList.add('scroll-animate-left');
  observer.observe(el);
});

document.querySelectorAll('.about-text').forEach((el) => {
  el.classList.add('scroll-animate-right');
  observer.observe(el);
});

document.querySelectorAll('.contact').forEach((el) => {
  el.classList.add('scroll-animate');
  observer.observe(el);
});

// Video sound toggle on click
document.querySelectorAll('[data-video]').forEach((video) => {
  video.addEventListener('click', function() {
    if (this.muted) {
      this.muted = false;
    } else {
      this.muted = true;
    }
  });
});
