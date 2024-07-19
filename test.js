// test.js
document.getElementById('switch').addEventListener('click', () => {
  const body = document.body;
  const isToggled = body.style.getPropertyValue('--value') === 'black';
  body.style.setProperty('--value', isToggled ? 'white' : 'black');
});
