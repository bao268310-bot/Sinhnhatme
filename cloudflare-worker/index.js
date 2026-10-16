addEventListener('fetch', event => {
  event.respondWith(handle(event.request));
});

async function handle(req) {
  // Thay bằng URL video của bạn (ví dụ: https://example.com/my-video)
  const target = 'https://example.com/VIDEO_URL_HERE';
  // Trả về redirect 302
  return Response.redirect(target, 302);
}
