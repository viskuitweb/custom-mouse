const customCursor = document.getElementById("custom-cursor");

const cursorPosition = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
     
    customCursor.style.left = `${mouseX}px`;
    customCursor.style.top = `${mouseY}px`;
  }

  window.addEventListener('mousemove', cursorPosition)