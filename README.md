### Herramienta de Estimación de Costos para Desarrollo de Aplicaciones Móviles de GBP

Este proyecto tiene como objetivo desarrollar una aplicación para GBP (Socios Comerciales Genéricos) que facilite el proceso de estimación de costos para el desarrollo de varias aplicaciones móviles dentro de la empresa. La interfaz proporcionada incluye los siguientes elementos clave:

- **Nivel de Calidad**: Los usuarios pueden especificar el nivel de calidad deseado para su aplicación móvil.
- **Tipo de Aplicación Necesaria**: Los usuarios pueden indicar el tipo de aplicación móvil requerida.
- **Preferencias de Diseño**: Los usuarios pueden especificar su diseño deseado para la aplicación.
- **Estrategia de Monetización**: Los usuarios pueden especificar cómo pretenden monetizar la aplicación.
- **Requisito de Autenticación de Usuario**: Los usuarios pueden indicar si la aplicación requiere un sistema de autenticación de usuario.
- **Resumen de Cotización**: Proporciona un resumen de la cotización basado en los datos proporcionados.

### Componentes Web

Para cada página mencionada anteriormente, se han creado componentes web para garantizar una estructura modular y mantenible.

### Mecanismo de Guardado de Datos

La aplicación utiliza una función `fetch` para guardar datos en el servidor. Esta función, `dataFetch`, se define de la siguiente manera:

```javascript
const head = new Headers({ "Content-type": "application/json" });
const URL_API = "http://154.38.171.54:3001/";

export async function dataFetch(endpoint, id, request, data) {
    const url = id ? `${URL_API}${endpoint}/${id}` : `${URL_API}${endpoint}`;
    return await HTTPrequest(url, request, data);
}

export async function HTTPrequest(url, method, data = null) {
    const options = {
        method,
        headers: head,
        body: data ? JSON.stringify(data) : null
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error("Error en la petición.");
    }
    if (response.status !== 204) {
        return await response.json();
    }
}
```
