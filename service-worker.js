const
  version = '1.0.0',
  CACHE = version + '::SW-APP',
  offlineURL = '/SW_Rebellion_Tracking_App/',
  installFilesEssential = [
    'manifest.json',
    'style.css',
    'main.js',
    'bg.jpg'
  ].concat(offlineURL)


  function installStaticFiles() {
    return caches.open(CACHE)
    .then(cache => {
      return cache.addAll(installFilesEssential);
    });
}

self.addEventListener('install', event => {
  console.log('service worker: install');
  event.waitUntil(
    installStaticFiles()
    .then(() => self.skipWaiting())
  );

});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  let url = event.request.url;
  event.respondWith(
    caches.open(CACHE)
      .then(cache => {
        return cache.match(event.request)
          .then(response => {
            if (response) {
              console.log('cache fetch: ' + url);
              return response;
            }
            return fetch(event.request)
              .then(newreq => {
                console.log('network fetch: ' + url);
                if (newreq.ok) cache.put(event.request, newreq.clone());
                return newreq;

              })
              .catch(() => offlineAsset(url));
          });
      })
  );
});