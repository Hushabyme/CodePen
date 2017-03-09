const container = document.querySelector('.container');
const sticks = document.querySelectorAll('.stick');


function toggleClass() {
  sticks.forEach(stick => {
    stick.classList.contains('open') ? stick.classList.toggle('close') : stick.classList.toggle('open');
  })
}

container.addEventListener('click', toggleClass);