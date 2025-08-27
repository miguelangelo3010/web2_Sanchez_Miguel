
  const menuBtn = document.querySelector('.menu');
  const navList = document.querySelector('nav ul');

  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

