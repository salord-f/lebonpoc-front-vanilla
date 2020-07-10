

class Add extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <form name="add-form" action="/">
          <input type="text" name="name" required>
          <input type="submit" value="Submit">
        </form>
        `
    }

    connectedCallback() {
        console.log('Add connected');
    }

    disconnectedCallback() {
        console.log('Add disconnected');
    }
}

customElements.define('add-item', Add);
