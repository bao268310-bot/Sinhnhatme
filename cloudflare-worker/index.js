addEventListener('fetch', event => {
  event.respondWith(handle(event.request));
});

async function handle(req) {
  const target = 'https://sinhnhatvuive.github.io/sinh-nhat-me/';
  return Response.redirect(target, 302);
}
