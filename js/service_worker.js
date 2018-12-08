console.log('Service Worker: Registered');

const swCache = 'not-akamai';
const cachedUrls = [
    "/",
    "/css/styles.css",
    "/js/main.js",
    "/js/dbhelper.js"
];
//Perform the install steps for the service worker, caching the initial list of urls upon initialization
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(swCache).then(cache => {
            return cache.addAll(cachedUrls);
        })
    );
});

//Handle subsequent cached requests
self.addEventListener('fetch', event => {
    event.respondWith(event.request).then(response => {
        //If the response is cached return it
        if (response) {
            return response;
        }
        //Otherwise, ensure it is a valid request, then cache the request for the future.
        let fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }

            let responseToCache = response.clone();
            caches.open(swCache).then(cache => {
                cache.put(event.request, responseToCache);

            });
            return response;
        })
    })
});