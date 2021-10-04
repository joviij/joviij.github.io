define(["../../../../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class CoolCard extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
            <style>
                .cool-card {
                    height: 100%;
                    background-color: white;
                    color: black;
                    padding: 10px;
                    box-sizing: border-box;
                    margin-top: 10px;
                }
        
				@media only screen and (min-width: 768px) {
                    .cool-card {
                        display: none;
                        margin-top: 0px;
                    }

                    .visible {
                        display: block;
                    }
                }
            </style>
            <div class="cool-card">
                <slot></slot>
            </div>
        `}static get properties(){return{cardId:String,visible:{type:Boolean,value:!1,observer:"toggleCard"}}}constructor(){super();this.card=null}toggleCard(){if(this.card){if(this.visible){this.card.classList.add("visible");return}this.card.classList.remove("visible")}}ready(){super.ready();this.card=this.shadowRoot.querySelector(".cool-card");if(this.visible){this.card.classList.add("visible")}}}customElements.define("cool-card",CoolCard)});