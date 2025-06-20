const inputName = document.querySelector('#name-input'); 
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', () => {
  const value = inputName.value.trim();
  outputName.textContent = value === '' ? 'Anonymous' : value;
});