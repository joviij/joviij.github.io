define(["../../../../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class FolderBox extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
			<style>
				::slotted([slot=folders]) {
					display: none;
				}

				@media only screen and (min-width: 768px) {
					.folder-box {
						display: flex;
						margin: auto;
						width: 60%;
						height: 500px;
						justify-content: center;
						align-content: basline;
						background-color: #1a1c21;
					}

					::slotted([slot=folders]) {
						display: block;
						border-right: 4px solid #00ff43;
						flex: .5 1 auto;
						padding: 10px;
					}

					::slotted([slot=folder-content]) {
						flex: 2 1 0;
					}
				}
			</style>
            <section class="folder-box">
                <slot name="folders"></slot>
                <slot name="folder-content"></slot>
			</section>
		`}static get properties(){return{showCard:{value:"",type:String}}}constructor(){super();this.__cards__=null;this.cardMap={};this.previousCard=""}connectedCallback(){super.connectedCallback();var loadedEvent=new CustomEvent("box-loaded",{bubbles:!0,composed:!0});this.dispatchEvent(loadedEvent)}ready(){super.ready();this.addEventListener("showCard",e=>{this.processCard(e)});this.__contentSlot__=this.shadowRoot.querySelectorAll("slot")[1];this.__contentSlot__=this.shadowRoot.querySelector("slot[name=folder-content]");this.__cards__=this.__contentSlot__.assignedNodes()[0].querySelectorAll("cool-card");this.initMap()}initMap(){this.__cards__.forEach(card=>{let key=card.getAttribute("card-id");this.cardMap[key]=card})}processCard(e){let id=e.detail.cardName.replace(/.js/g,"");if(this.cardMap.hasOwnProperty(id)&&id!==this.previousCard){if(this.cardMap.hasOwnProperty(this.previousCard)){this.cardMap[this.previousCard].removeAttribute("visible")}this.cardMap[id].setAttribute("visible","");this.previousCard=id}}}customElements.define("folder-box",FolderBox)});