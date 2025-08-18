import __uv$config from '/uv/uv.config.js';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/uv/uv.sw.js', { scope: '/' })
    .then(() => console.log('Ultraviolet Service Worker registered'))
    .catch(err => console.error('SW registration failed:', err));
}

document.getElementById('uv-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('uv-address').value.trim();
  if (!input) return;

  const url = input.startsWith('http://') || input.startsWith('https://')
    ? input
    : 'https://' + input;

  const encodedUrl = __uv$config.encodeUrl(url);
  window.location.href = __uv$config.prefix + encodedUrl;
});
