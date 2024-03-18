const head = new Headers( { "Content-type": "application/json" } );
const URL_API = "http://154.38.171.54:3001/";

export async function dataFetch( endpoint, id, request, data ) {
    const url = id ? `${URL_API}${endpoint}/${id}` : `${URL_API}${endpoint}`;
    return await HTTPrequest( url, request, data );
}

export async function HTTPrequest( url, method, data = null ) {
    const options = {
        method,
        headers: head,
        body: data ? JSON.stringify( data ) : null
    };
    const response = await fetch( url, options );
    if ( !response.ok ) {
        throw new Error( "Error en la petición." );
    }
    if ( response.status !== 204 ) {
        return await response.json();
    }
}

export async function postData( data ) {
    try {
        // const data = { nombre: 'nombre', numContacto: 'numContacto', email: 'email', totalPrice };
        await dataFetch( 'priceD', null, 'POST', data );
    } catch ( error ) {
        console.error( 'Error al enviar datos al servidor', error );
    }
}