const button = document.querySelector('button');
const circle = document.querySelector('.js-circle');
const text = document.querySelector('.js-text');

const radius = circle.getAttribute('r');
// console.log(radius);
const area = Math.round(Math.PI * radius * 2);
// console.log(area);
const getOffset = (val = 0) => Math.round((100 - val) / 100 * area);

const run = () => {
  const val = Math.floor(Math.random() * 100);
  // console.log(val);
  circle.style.strokeDashoffset = getOffset(val);
  text.textContent = `${val}%`;
};

button.addEventListener('click', run);
document.addEventListener('DOMContentLoaded', () => setTimeout(run, 100));