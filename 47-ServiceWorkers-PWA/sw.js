const nombreCache = 'apv-v4';
//Cachear en caso de que no haya internet obtendra los archivos y los guardara
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
    '/manifest.json'
  ]




//Cuando se instala el Services Worker
/* Que hace el codigo
instala el service worker
vamos a esperar a que terminen de descargar los archivos de cache
los vamos agregando al cache

*/
self.addEventListener('install', e => {
    console.log('Instalado el service Worker');

    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                cache.addAll(archivos);
            })
    )


        
});

//Activar el Service Worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    e.waitUntil(
        caches.keys()
            .then( keys => {
                // console.log(keys);
                return Promise.all(
                    keys.filter( key => key !== nombreCache )
                        .map( key => caches.detele(key)) //Borra las versiones anteriores
                );
            })
    )
});

//Evento fetch para descargar achivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch..', e);

    e.respondWith(
        caches
          .match(e.request)
          .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('error.html')))
    )
})