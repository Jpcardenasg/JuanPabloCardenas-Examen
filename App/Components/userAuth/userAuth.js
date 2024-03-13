export class UserAuth extends HTMLElement {

    constructor () {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `

        <div class="section">
            <h1>¿Tu App necesita sistema de autenticación?</h1>
            <div class="section-images">
                <figure>
                    <img data-cost="2000000" src="storage/images/answer-5-1.png" alt="">
                    <figcaption>Sí, con redes sociales y email</figcaption>
                </figure>
                <figure>
                    <img data-cost="1500000" src="storage/images/answer-5-2.png" alt="">
                    <figcaption>Sí, con email</figcaption>
                </figure>
                <figure>
                    <img data-cost="0" src="storage/images/answer-5-3.png" alt="">
                    <figcaption>No</figcaption>
                </figure>
                <figure>
                    <img data-cost="350000" src="storage/images/answer-5-4.png" alt="">
                    <figcaption>No lo sé todavía</figcaption>
                </figure>
            </div>
        </div>
        `;


    }

}

customElements.define( 'user-auth', UserAuth );