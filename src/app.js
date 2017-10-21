const keys = document.querySelectorAll('.keyboard .keys .key');

keys.forEach((el) => {
  el.addEventListener('mousedown', () => {
    console.log('key pressed');
  });
});
