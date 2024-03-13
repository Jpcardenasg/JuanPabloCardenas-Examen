
export class AppSummary extends HTMLElement {

    constructor () {
        super();
        this.render();
    }

    render( totalPrice ) {
        this.innerHTML = `
            <div class="summary-section">
                <span>¡Bien! ¡Hemos terminado!</span>
                <h2>¡Compártenos si te ha gustado!</h2>
                <div class="social-media">
                    <button class="faceboton">
                        <i class='bx bxl-facebook' style='color:#ffffff'  ></i>
                        <p>Share</p>
                    </button>
                    <button class="inboton">
                        <i class='bx bxl-linkedin' style='color:#ffffff' ></i>
                        <p>Share</p>
                    </button>
                    <button class="gboton">
                        <i class='bx bxl-google' style='color:#ffffff' ></i>
                        <p>Google + </p>
                    </button>
                    <button class="tboton">
                        <i class='bx bxl-twitter' style='color:#ffffff'></i>
                        <p>Twitter</p>
                    </button>
                </div>
                <div class="app-cost">
                    <span>El costo estimado de tu app es</span>
                    <span class="text-cost">${totalPrice} COP</span>
                </div>
                <p>En GBP contamos con los mejores <strong>desarrolladores de apps y webs</strong> para tu proyecto. Publica tu proyeco en GBP</p>
                <button type="button" class="summary-button">Terminar</button>
            </div>
        `;
    }
}

customElements.define( 'app-summary', AppSummary );
