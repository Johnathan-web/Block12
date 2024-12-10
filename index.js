const form = document.querySelector('#form')
const button = document.querySelector('#submit')
window.location.origin = 'index.html';

form.addEventListener('submit', (e) => {
  button.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + 'success.html';
})
setTimeout(() => {
    window.location.href = window.location.origin
  }, 5000)