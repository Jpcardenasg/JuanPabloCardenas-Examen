export class QualityLevel extends HTMLElement {

    constructor () {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `

        <div class="section">
            <h1>¿Qué nivel de calidad estás buscando?</h1>
            <div class="section-images">
                <figure>
                    <img data-cost="300000" src="storage/images/answer-1-1.png" alt="">
                    <figcaption>Calidad óptima</figcaption>
                </figure>
                <figure>
                    <img data-cost="380000" src="storage/images/answer-1-2.png" alt="">
                    <figcaption>Buena relación de calidad/precio</figcaption>
                </figure>
                <figure>
                    <img data-cost="200000" src="storage/images/answer-1-3.png" alt="">
                    <figcaption>No me importa tanto la calidad</figcaption>
                </figure>
            </div>
        </div>
        `;


    }

}

customElements.define( 'quality-level', QualityLevel );