document.addEventListener('DOMContentLoaded', function() {
    const aliceText = document.getElementById('aliceText');
    let isAlice = true;

    aliceText.addEventListener('click', function() {
      if (isAlice) {
        aliceText.classList.add('rotate');
        aliceText.textContent = 'alice4k';
      } else {
        aliceText.classList.remove('rotate');
        aliceText.textContent = 'Alice';
      }
      isAlice = !isAlice;
    });
  });