self.addEventListener('install', function(event) {
const indexPage = new Request('https://si-kuma.f5.si');
event.waitUntil(
fetch(indexPage).then(function(response) {
return caches.open('pwabuilder-offline').then(function(cache) {
console.log('[PWA Builder] Cached index page during Install'+ response.url);
return cache.put(indexPage, response);
});
}));
});
self.addEventListener('fetch', function(event) {
const updateCache = function(request){
return caches.open('pwabuilder-offline').then(function (cache) {
return fetch(request).then(function (response) {
console.log('[PWA Builder] add page to offline'+response.url)
return cache.put(request, response);
});
});
};
event.waitUntil(updateCache(event.request));
event.respondWith(
fetch(event.request).catch(function(error) {
console.log( '[PWA Builder] Network request Failed. Serving content from cache: ' + error );
return caches.open('pwabuilder-offline').then(function (cache) {
return cache.match(event.request).then(function (matching) {
var report =  !matching || matching.status == 404?Promise.reject('no-match'): matching;
return report
});
});
})
);
})
// service-worker.js

const CACHE_NAME = 'offline-cache';
const offlineFallbackPage = 'offline.html';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([offlineFallbackPage]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (!navigator.onLine) {
        return response || caches.match(offlineFallbackPage);
      } else {
        return fetch(event.request);
      }
    })
  );
});
