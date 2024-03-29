import '../App/Components/qualityLevel/qualityLevel.js';
import '../App/Components/appType/appType.js';
import '../App/Components/appDesign/appDesign.js';
import '../App/Components/monetize/monetize.js';
import '../App/Components/userAuth/userAuth.js';
import '../App/Components/formData/formData.js';
import '../App/Components/summary/summary.js';

const mainContent = document.getElementById( 'main-content' );
const homeButton = document.getElementById( 'home-button' );
const customElements = document.querySelectorAll( '.customElement' );

let totalPrice = 0;


customElements.forEach( ( element, index ) => {
    if ( index != 0 ) {
        element.classList.add( 'hidden' );
    }
} );

homeButton.addEventListener( 'click', () => {
    mainContent.classList.add( 'hidden' );
    customElements[ 0 ].classList.remove( 'hidden' );
} );


customElements.forEach( ( element, index ) => {
    if ( index < customElements.length - 1 ) {
        const images = element.querySelectorAll( '.section-images img' );
        images.forEach( image => {
            image.addEventListener( 'click', () => {
                const cost = parseInt( image.getAttribute( 'data-cost' ) );
                totalPrice += cost;

                element.classList.add( 'hidden' );
                customElements[ index + 1 ].classList.remove( 'hidden' );

                const appSummary = document.querySelector( 'app-summary' );
                const formData = document.querySelector( 'form-data' );

                formData.render( totalPrice );
                const formatedPrice = totalPrice.toLocaleString( 'es-ES' );
                appSummary.render( formatedPrice );

            } );
        } );
    }
} );

