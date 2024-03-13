
export class AppSummary extends HTMLElement {

    constructor ( totalPrice ) {
        super();
        this.render();
    }

    render( totalPrice ) {
        this.innerHTML = `
            <div>
                <h3>¡Bien! ¡Hemos terminado!</h3>
                <h2>¡Compártenos si te ha gustado!</h2>
                <div class="app-cost">
                    <span>El costo estimado de tu app es</span>
                    <span class="text-cost">${totalPrice} COP</span>
                </div>
            </div>
        `;
    }
}

customElements.define( 'app-summary', AppSummary );
