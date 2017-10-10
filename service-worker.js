const
  version = '1.0.0',
  CACHE = version + '::SW-APP',
  offlineURL = '/SW_Rebellion_Tracking_App/',
  installFilesEssential = [
    '/SW_Rebellion_Tracking_App/',
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