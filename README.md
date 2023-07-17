# Implementación de Hooks

En este proyecto he implementado el uso de Hooks en React para controlar y administrar un listado de tareas. A continuación, te mostraré cómo funciona:

## Uso del Hook useState

El hook `useState` es utilizado para controlar el listado de tareas en mi aplicación. Cada tarea está compuesta por una descripción y un estado que puede ser completada o pendiente. Para representar el estado de cada tarea, he utilizado valores booleanos.

## Almacenamiento en localStorage

He integrado el almacenamiento en localStorage para garantizar que las tareas y su estado se conserven incluso cuando el usuario cierre o recargue la aplicación. Cada vez que se produce un cambio en alguna tarea, estos cambios se guardan automáticamente en localStorage. Esto garantiza que el usuario pueda ver sus tareas cuando vuelva a utilizar la aplicación.

## Uso del Hook useEffect

El hook `useEffect` se encarga de cargar el listado de tareas desde `localStorage` al iniciar la aplicación. Esto asegura que las tareas previamente guardadas se muestren al usuario de manera predeterminada.
