// Import Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// Load workbox
if (workbox) {
    console.log('Workbox berhasil dimuat.');
    workbox.precaching.precacheAndRoute([
    "/",
	".htaccess",
	".well-known",
	"404.html",
	"about.html",
	"absen.html",
	"contact.html",
	"css",
	"home.html",
	"images",
	"index.html",
	"js",
	"manifest.json",
	"menu-settings.html",
	"preloader",
	"sw.js",
	".well-known/assetlinks.json",
	".well-known/index.html",
	"css/index.html",
	"css/materialize.css",
	"css/materialize.min.css",
	"css/my.css",
	"images/bg.png",
	"images/bg2.png",
	"images/favicon.ico",
	"images/icon-128x128.png",
	"images/icon-144x144.png",
	"images/icon-152x152.png",
	"images/icon-192x192.png",
	"images/icon-384x384.png",
	"images/icon-512x512.png",
	"images/icon-72x72.png",
	"images/icon-96x96.png",
	"images/index.html",
	"images/logo.png",
	"images/pictures",
	"images/pictures/0.png",
	"images/pictures/1.jpg",
	"images/pictures/1.png",
	"images/pictures/2.jpg",
	"images/pictures/3.jpg",
	"images/pictures/bgcard.png",
	"images/pictures/index.html",
	"js/contact.js",
	"js/index.html",
	"js/materialize.js",
	"js/materialize.min.js",
	"js/my.js",
	"js/qrcode.min.js",
	"js/reg.js",
	"js/script.js",
	"js/selector.js",
	"preloader/custom.js",
	"preloader/fontawesome-all.min.css",
	"preloader/framework.css",
	"preloader/index.html",
	"preloader/jquery.js",
	"preloader/plugins.js",
	"preloader/style.css"
]);

    workbox.routing.registerRoute(
        /^https:\/\/pro\.fontawesome\.com/,
        workbox.strategies.cacheFirst({
            cacheName: 'BAQI-FAFonts'
        })
    );

    workbox.routing.registerRoute(
        /^https:\/\/fonts\.googleapis\.com/,
        workbox.strategies.cacheFirst({
            cacheName: 'BAQI-GFonts'
        })
    );

    workbox.routing.registerRoute(
        /^https:\/\/cdnjs\.cloudflare\.com/,
        workbox.strategies.cacheFirst({
            cacheName: 'BAQI-AES'
        })
    );

    workbox.routing.registerRoute(
        /^https:\/\/code\.jquery\.com/,
        workbox.strategies.cacheFirst({
            cacheName: 'BAQI-JQuery'
        })
    );

    workbox.routing.registerRoute(
  		new RegExp('/css/'),
  		workbox.strategies.cacheFirst({
      		cacheName: 'BAQI-CSS'
  		})
	);

	workbox.routing.registerRoute(
  		new RegExp('/images/'),
  		workbox.strategies.cacheFirst({
      		cacheName: 'BAQI-Images'
  		})
	);

	workbox.routing.registerRoute(
  		new RegExp('/js/'),
  		workbox.strategies.cacheFirst({
      		cacheName: 'BAQI-JS'
  		})
	);

	workbox.routing.registerRoute(
  		new RegExp('/preloader/'),
  		workbox.strategies.cacheFirst({
      		cacheName: 'BAQI-Welcome'
  		})
	);

	workbox.routing.registerRoute(
  		new RegExp('/index.html'),
  		new RegExp('/home.html'),
  		new RegExp('/contact.html'),
  		new RegExp('/about.html'),
  		new RegExp('/absen.html'),
  		workbox.strategies.cacheFirst({
      		cacheName: 'BAQI-Main'
  		})
	);

} else {
    console.log('Workbox gagal dimuat.');
}