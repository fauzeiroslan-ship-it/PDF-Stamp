const CACHE_NAME = 'stamper-cache-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  '[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)',
  '[https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js](https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js)',
  '[https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js)'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
