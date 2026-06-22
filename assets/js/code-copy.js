(function () {
  const blocks = document.querySelectorAll('.prose pre');

  blocks.forEach(function (pre) {
    if (pre.querySelector('.copy-code-button')) return;

    const code = pre.querySelector('code');
    if (!code) return;

    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code block');

    button.addEventListener('click', async function () {
      try {
        await navigator.clipboard.writeText(code.innerText);
        button.textContent = 'Copied';
        setTimeout(function () {
          button.textContent = 'Copy';
        }, 1600);
      } catch (error) {
        button.textContent = 'Failed';
        setTimeout(function () {
          button.textContent = 'Copy';
        }, 1600);
      }
    });

    pre.appendChild(button);
  });
})();
