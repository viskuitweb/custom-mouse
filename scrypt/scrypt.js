const customCursor = document.getElementById("custom-cursor");

const cursorPosition = (event)=> {
  const mouseY = event.clientY;
  const mouseX = event.clientX;
     
  customCursor.style.left = `${mouseX}px`;
  customCursor.style.top = `${mouseY}px`;
  cursorOpacity(14)
  }

const mouseOut = (() => {
  cursorOpacity(0)
})

const cursorOpacity = (cursorWidth) => {
  customCursor.style.width = (`${cursorWidth}px`);
  customCursor.style.height = (`${cursorWidth}px`);
}

window.addEventListener("mouseout", mouseOut)

window.addEventListener('mousemove', cursorPosition)