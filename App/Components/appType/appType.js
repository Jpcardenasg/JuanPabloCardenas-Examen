export class AppType extends HTMLElement {

    constructor () {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `

        <div class="section">
            <h1>¿Qué tipo de APP necesitas?</h1>
            <div class="section-images">
                <figure>
                    <img data-cost="2000000" src="storage/images/answer-2-1.png" alt="">
                    <figcaption>Aplicación Android</figcaption>
                </figure>
                <figure>
                    <img data-cost="3000000" src="storage/images/answer-2-2.png" alt="">
                    <figcaption>Aplicación IOS/precio</figcaption>
                </figure>
                <figure>
                    <img data-cost="800000" src="storage/images/answer-2-3.png" alt="">
                    <figcaption>Aplicación Windows Phone</figcaption>
                </figure>
                <figure>
                    <img data-cost="3500000" src="storage/images/answer-2-4.png" alt="">
                    <figcaption>Aplicación Android + IOS</figcaption>
                </figure>
            </div>
        </div>
        `;


    }

}

customElements.define( 'app-type', AppType );