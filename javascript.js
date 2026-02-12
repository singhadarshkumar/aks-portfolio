const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animate() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    requestAnimationFrame(animate);
  }
  animate();

  // Link hover
  document.querySelectorAll('a').forEach(el => {
    el.addEventListener('mouseenter', () =>
      ring.classList.add('link-hover')
    );
    el.addEventListener('mouseleave', () =>
      ring.classList.remove('link-hover')
    );
  });

  // Button hover
  document.querySelectorAll('button').forEach(el => {
    el.addEventListener('mouseenter', () =>
      ring.classList.add('button-hover')
    );
    el.addEventListener('mouseleave', () =>
      ring.classList.remove('button-hover')
    );
  });