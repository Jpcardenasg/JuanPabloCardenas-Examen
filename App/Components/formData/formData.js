import { postData } from "../../../Api/data-fetch.js";


export class FormData extends HTMLElement {
    constructor () {
        super();
        this.render();
    }

    render( totalPrice ) {
        this.innerHTML = `
            <form id="formData">
                <fieldset>
                    <legend> Ingresa tu Nombre completo</legend>
                <div class="input">
                    <label for="description">Nombre:</label>
                    <input type="text" id="name" name="name"
                        placeholder="Ingresar nombre" required>
                </div>
                <fieldset>
                    <legend> Ingresa tu Numero de contacto</legend>
                <div class="input">
                    <label for="description">Numero:</label>
                    <input type="number" id="contactNum" name="contactNum"
                        placeholder="Ingresar numero" required>
                </div>
                <fieldset>
                    <legend> Ingresa tu correo</legend>
                <div class="input">
                    <label for="description">Email:</label>
                    <input type="email" id="email" name="email"
                        placeholder="Ingresar correo" required>
                </div>
                <div class="containerSubmit">
                    <button id="data-button" type="submit">Enviar</button>
                </div>
            </form>
        `;


        console.log( totalPrice );

        const form = this.querySelector( "#formData" );

        form.addEventListener( "submit", async ( event ) => {
            event.preventDefault();

            console.log( totalPrice );
            let data = {
                nombre: form.querySelector( "#name" ).value,
                numero: form.querySelector( "#contactNum" ).value,
                email: form.querySelector( "#email" ).value,
                cotizacion: totalPrice
            };

            await postData( data );

            location.reload();
        } );
    }
}
customElements.define( "form-data", FormData );