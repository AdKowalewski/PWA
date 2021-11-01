self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('iksde').then((cache) => cache.addAll([
        './index.html',
        './style1.css',
        './style2.css',
        './style3.css',
        './index.js'
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});