document.addEventListener('DOMContentLoaded', () => {
  // Update year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile Drawer toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Menu Category Filtering Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const categoryBlocks = document.querySelectorAll('.menu-category-block');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-category');

      // Update active state on buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show/hide category blocks
      categoryBlocks.forEach(block => {
        if (block.id === `cat-${targetCategory}`) {
          block.classList.add('active');
        } else {
          block.classList.remove('active');
        }
      });
    });
  });

  // Header scroll shadow effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // Parallax subtle effect on hero image on scroll
  const heroImg = document.querySelector('.hero-bg-img');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight) {
        heroImg.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
      }
    });
  }
});