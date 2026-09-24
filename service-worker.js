// Service worker for QR-scanneren.
//
// Strategi: "netværk først, cache som reserve".
// - Online hentes altid den nyeste version (cache: 'no-cache' = spørg serveren om filen
//   er ændret, i stedet for at bruge browserens HTTP-cache). Så risikerer man aldrig at
//   teste en forældet version, selvom appen er installeret.
// - Offline bruges den senest hentede kopi fra cachen, så appen stadig kan åbnes.
//
// CACHE_VERSION ændres når listen over filer ændres; gamle caches ryddes ved aktivering.

const CACHE_VERSION = 'qr-scanner-v8';

const PRECACHE = [
  './',
  'index.html',
  'privacy.html',
  'manifest.json',
  'lib/jsQR.js',
  'lib/qrcode-generator.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      // cache: 'reload' = hent frisk fra serveren, ikke fra browserens HTTP-cache
      .then(cache => cache.addAll(PRECACHE.map(url => new Request(url, { cache: 'reload' }))))
      // Tag den nye version i brug med det samme i stedet for at vente på at alle faner lukkes
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  // Kun egne GET-forespørgsler — alt andet går direkte til netværket
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_VERSION);
    try {
      let fresh = await fetch(req, { cache: 'no-cache' });
      // Et omdirigeret svar må ikke bruges direkte som svar på en sidevisning
      // (browseren afviser det), så det pakkes om til et almindeligt svar.
      if (fresh.redirected && req.mode === 'navigate') {
        fresh = new Response(fresh.body, { status: fresh.status, statusText: fresh.statusText, headers: fresh.headers });
      }
      if (fresh.ok) cache.put(req, fresh.clone());
      return fresh;
    } catch (err) {
      // Offline: brug cachen. Sidevisninger (fx med ?parametre) falder tilbage til forsiden.
      const cached = await cache.match(req, { ignoreSearch: req.mode === 'navigate' });
      if (cached) return cached;
      if (req.mode === 'navigate') {
        const home = await cache.match('./');
        if (home) return home;
      }
      throw err;
    }
  })());
});
