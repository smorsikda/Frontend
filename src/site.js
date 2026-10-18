const site = document.querySelector('.site');
const themeToggle = document.querySelector('#theme-toggle');

themeToggle?.addEventListener('click', () => {
  const isDark = site.classList.toggle('dark');
  themeToggle.setAttribute('aria-label', isDark ? 'Activar tema claro' : 'Activar tema oscuro');
  themeToggle.textContent = isDark ? '☼' : '☾';
});
