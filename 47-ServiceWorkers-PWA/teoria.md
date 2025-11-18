Caracteristicas de una PWA

- Rapida - Cargan toda la información en menos de 5 segundos

- Instalables - Se puede navegar o instalar en tu navegador o teléfono móvil como una aplicación nátiva.

- Soporte Offline - Pueden funcionar incluso sin conexión a internet.


Service Workers

# Es la base de una PWA. Son Scripts que están corriendo todo el tiempo detrás de escenas.
- Funciona Offline.
- No tiene Acceso al DOM.
- Cargan de forma Instantanea.
- Pueden sincronizar datos detrás de escenas o sin interferir en la navegación.


# Funciones no disponibles en Service Workers
- Window (Utiliza Self)
- Document(Se utiliza caches)
- LocalStorage (Se utiliza Fetch)


# Es obligatorio un manifest.Json para un PWA