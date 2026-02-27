const CACHE_NAME = "kuch-baatein-v2";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/cover-art.png",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});