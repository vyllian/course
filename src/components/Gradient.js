function updateBackgroundGradient(x, y) {
    const body = document.body;
    body.style.backgroundImage = `radial-gradient(
      circle farthest-side at ${x}px ${y}px,
      #3E62DC 0%,
      #292674 50%,
      transparent 100%
    ), url(./media/Noise.png)`;
  }
  
  // Usage example
  window.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    updateBackgroundGradient(clientX, clientY);
  });