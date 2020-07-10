class HomePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <div>lebonpoc HomePage</div>
        `
    }
    connectedCallback() {
        console.log('HomePage connected');
    }

    disconnectedCallback() {
        console.log('HomePage disconnected');
    }
}

customElements.define('home-page', HomePage);
