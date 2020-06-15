'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "android-icon-72x72.png": "b2570180a8b4ce69c59c92d6f317f62a",
"android-icon-48x48.png": "820bfa6fb1251220ae8b22cac06c904a",
"android-icon-144x144.png": "b46c30da7d28cd1dc5ea50e7cd37876f",
"favicon-96x96.png": "dea46080666da49319ff401286c91e26",
"favicon-16x16.png": "9501a747c9423b7ec5471afae0fd4932",
"apple-icon-152x152.png": "2ad22c41143288b7c1f5d9710f4bbbb8",
"apple-icon.png": "9c7332597375e2e4a0c813ed6af685d3",
"apple-icon-60x60.png": "f39aa9e2afee416b509989b030e61020",
"index.html": "d725f9674a3e2083cfb39c2e8a7bfc3d",
"/": "d725f9674a3e2083cfb39c2e8a7bfc3d",
"apple-icon-120x120.png": "5b00570328292c23b0e18645b99788fd",
"android-icon-36x36.png": "a1d75c0e6c8cca3a0968ff42c057b163",
"main.dart.js": "78c9ab7d3a5678927818672e91a76475",
"android-icon-96x96.png": "dea46080666da49319ff401286c91e26",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"images/icons/icon-96x96.png": "dfc7274b1fd53c9bc87d0a8b3e6753c2",
"images/icons/icon-152x152.png": "8c56a0003a2edc640309971f2b40c89a",
"images/icons/icon-72x72.png": "3747238d13bca93cc21407fec941ac62",
"images/icons/icon-144x144.png": "a4dbc8aa964a15df9c1cca964faea0bc",
"images/icons/icon-512x512.png": "2cee72d8aeaa6cb5cb9012a7218bcb92",
"images/icons/icon-192x192.png": "b390e9fa2777a533a8ef23a5ddacb2d7",
"images/icons/icon-128x128.png": "8819edab8660ee866b1b4214414646cc",
"images/icons/icon-384x384.png": "f9d3dc5782a814a6eb4c7e5b67a9fa31",
"ms-icon-144x144.png": "b46c30da7d28cd1dc5ea50e7cd37876f",
"android-icon-192x192.png": "aa0c029f0543ce52109932652d5bb2f5",
"ms-icon-310x310.png": "11a3ea8054f69dda8786814ace9d3a39",
"assets/FontManifest.json": "14c4e31b82a2ed2e1d037893dd336d6e",
"assets/AssetManifest.json": "e761bc6879ac01d01e872702a5c067ca",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/NOTICES": "b8389e6afbb3256d7c829530288b7306",
"favicon-32x32.png": "893a7f0d9d5c30e715d7cf12c6b390d6",
"apple-icon-180x180.png": "cdf4b4f116d7ab3f9b24b101ceace2ff",
"ms-icon-70x70.png": "f88d237f0585b32258679b3579e1af0c",
"apple-icon-76x76.png": "900aa6ace2fe632846aa17c1e58d44e8",
"apple-icon-114x114.png": "350282520eab459d9f7461f2b8931a7a",
"apple-icon-precomposed.png": "9c7332597375e2e4a0c813ed6af685d3",
"apple-icon-57x57.png": "d62b61ff63e2c00ae291cc58eb40f3e6",
"favicon.ico": "c3a56f1a692fd3ce48a0f2b610dd6677",
"ms-icon-150x150.png": "a6fc3334710bd1df1e7be69df1952da1",
"manifest.json": "b6b20893010c9a804281b7f7a72c47ab",
"apple-icon-72x72.png": "b2570180a8b4ce69c59c92d6f317f62a",
"apple-icon-144x144.png": "b46c30da7d28cd1dc5ea50e7cd37876f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
