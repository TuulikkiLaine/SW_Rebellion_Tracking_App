const PRECACHE = 'precache-v1.2';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
  './index.html',
  './style.css',
  './main.js',
  './manifest.json',
  './data.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});