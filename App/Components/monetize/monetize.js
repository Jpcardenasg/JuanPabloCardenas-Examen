export class AppMonetize extends HTMLElement {

    constructor () {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `

        <div class="section">
            <h1>¿Cómo Monetizar con tu App?</h1>
            <div class="section-images">
                <figure>
                    <img data-cost="600000" src="storage/images/answer-4-1.png" alt="">
                    <figcaption>Aplicación gratuita con publicidad</figcaption>
                </figure>
                <figure>
                    <img data-cost="1000000" src="storage/images/answer-4-2.png" alt="">
                    <figcaption>Aplicación de pago</figcaption>
                </figure>
                <figure>
                    <img data-cost="2000000" src="storage/images/answer-4-3.png" alt="">
                    <figcaption>Compras dentro de la app</figcaption>
                </figure>
                <figure>
                    <img data-cost="350000" src="storage/images/answer-4-4.png" alt="">
                    <figcaption>Otros / No lo sé todavía</figcaption>
                </figure>
            </div>
        </div>
        `;


    }

}

customElements.define( 'app-monetize', AppMonetize );