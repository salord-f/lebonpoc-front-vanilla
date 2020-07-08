class Navbar extends HTMLElement {
    constructor() {
        super();
        this._burger = null;
        this._nav = null;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <link href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" rel="stylesheet">
        <style>
            .nav-bar {
                width: 100%;
                height: 70px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                background: #232323;
                color: #ccc;
            }
            
            .logo {
                letter-spacing: 3px;
            }
            
            .nav {
                display: flex;
                justify-content: space-around;
                width: 30%;
            }
            
            .nav-link {
                list-style: none;
                margin: 0;
            }
            
            .nav-link a {
                color: #ccc;
                text-decoration: none;
                font-size: 1.2em;
            }
            
            .burger {
                font-size: 1.2em;
                display: none;
            }
            
            @media screen and (max-width: 678px) {
                .burger {
                    display: block;
                }
                .nav {
                    margin: 0;
                    background: #343434;
                    position: absolute;
                    right: -100%;
                    top: 70px;
                    width: 50%;
                    height: calc(100% - 70px);
                    flex-direction: column;
                    justify-content: space-around;
                    padding: 0;
                    transition: all 400ms;
                }
                .nav-link {
                    text-align: center;
                }
            
                .nav-active {
                    right: 0;
                }
            }
        </style>
        <div class="nav-bar">
            <h1 class="logo">lebonpoc</h1>
            <ul class="nav">
                <li class="nav-link"><a href="#home">Home</a></li>
                <li class="nav-link"><a href="#about">About</a></li>
                <li class="nav-link"><a href="#projects">Projects</a></li>
                <li class="nav-link"><a href="#contact">Contact</a></li>
            </ul>
            <div class="burger">
                <i class="fas fa-bars"></i>
            </div>
        </div>
        `
    }


    connectedCallback() {
        this._burger = this.shadowRoot.querySelector('.burger i');
        this._nav = this.shadowRoot.querySelector('.nav');
        this._burger.addEventListener('click', this.toggleNav.bind(this));
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector(".burger i").removeEventListener('click', this.toggleNav);
    }

    toggleNav() {
        this._burger.classList.toggle('fa-bars');
        this._burger.classList.toggle('fa-times');
        this._nav.classList.toggle('nav-active');
    }
}

customElements.define('nav-bar', Navbar);
