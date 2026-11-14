var V='gudep-v5',SHELL=['./','./index.html','./manifest.webmanifest','./img/umar.jpg','./img/ummu.jpg','./img/umar-bulat.png','./img/ummu-bulat.png','./img/kwarda.jpg','./img/wosm.jpg','./img/cikal.png','./img/icon-192.png','./img/icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 e.respondWith(fetch(r).then(function(x){var c=x.clone();caches.open(V).then(function(ch){ch.put(r,c)});return x}).catch(function(){return caches.match(r).then(function(m){return m||caches.match('./index.html')})}))});
