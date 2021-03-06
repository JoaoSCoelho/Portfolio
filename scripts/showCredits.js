const creditosButton = document.querySelector('#container-creditos-button button');
const creditosDiv = document.querySelector('.container-creditos');
const creditos = document.querySelector('#creditos');

creditosDiv.style.top = '100vh';
creditosButton.style.top = 'calc(100vh - 1.6rem)';

creditosButton.addEventListener('click', () => {
  if (creditosDiv.style.top === '100vh') {
    creditosDiv.style.top = `calc(100% - 7rem - ${creditos.querySelector('p').innerText.length / 30}rem)`
    creditosButton.style.top = `calc(100% - 8rem - ${creditos.querySelector('p').innerText.length / 30}rem)`;
  } else {
    creditosDiv.style.top = '100vh';
    creditosButton.style.top = 'calc(100vh - 1.6rem)';
  };
});

creditosButton.addEventListener('mouseover', mouseOver);
creditosButton.addEventListener('mouseout', mouseOut);

function mouseOver() {
  creditosButton.style.backgroundColor = '#9a4ae6';
  creditos.style.backgroundColor = '#9a4ae6';

};

function mouseOut() {
  creditosButton.style.backgroundColor = 'blueviolet';
  creditos.style.backgroundColor = 'blueviolet';
};