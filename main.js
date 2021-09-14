/* global document */

function ready(fn) {
  if (
    document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function renderLogo() {
  const h1 = document.querySelector('h1');
  const [w0, w1, w2, w3, ...rest] = h1.innerText.split(' ');

  h1.innerHTML = `
    <span class="line-1">${w0} ${w1} ${w2}</span>
    <span class="line-2">${w3}</span>
    <span class="line-3">${rest.join(' ')}</span>
    <span class="and-video">&amp; video game emporium</span>
  `;
}

function init() {
  renderLogo();
}

ready(init);
