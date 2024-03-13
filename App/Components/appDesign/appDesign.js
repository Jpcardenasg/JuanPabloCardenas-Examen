export class AppDesign extends HTMLElement {

    constructor () {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `

        <div class="section">
            <h1>¿Qué diseño quieres que tenga tu App?</h1>
            <div class="section-images">
                <figure>
                    <img data-cost="500000" src="storage/images/answer-3-1.png" alt="">
                    <figcaption>Interfaz Sencilla</figcaption>
                </figure>
                <figure>
                    <img data-cost="1000000" src="storage/images/answer-3-2.png" alt="">
                    <figcaption>Interfaz Pesonalizada/precio</figcaption>
                </figure>
                <figure>
                    <img data-cost="800000" src="storage/images/answer-3-3.png" alt="">
                    <figcaption>Interfaz replicada de la web</figcaption>
                </figure>
                <figure>
                    <img data-cost="300000" src="storage/images/answer-3-4.png" alt="">
                    <figcaption>No necesito diseño</figcaption>
                </figure>
            </div>
        </div>
        `;


    }

}

customElements.define( 'app-design', AppDesign );