(function () {
  const article = document.querySelector('[data-article-content]');
  const card = document.querySelector('[data-toc-card]');
  const list = document.querySelector('[data-toc-list]');

  if (!article || !card || !list) return;

  const headings = Array.from(article.querySelectorAll('h2, h3')).filter(function (heading) {
    return heading.textContent.trim().length > 0;
  });

  if (headings.length < 3) return;

  headings.forEach(function (heading, index) {
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-') + '-' + index;
    }

    const link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;
    link.className = heading.tagName.toLowerCase() === 'h3' ? 'toc-h3' : 'toc-h2';
    list.appendChild(link);
  });

  card.hidden = false;
})();
