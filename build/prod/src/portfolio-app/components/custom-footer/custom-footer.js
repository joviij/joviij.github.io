define(["../../../../node_modules/@polymer/polymer/polymer-element.js","../../utils/utils.js"],function(_polymerElement,_utils){"use strict";_utils=babelHelpers.interopRequireDefault(_utils);class CustomFooter extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
			<style>
                .footer {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    padding: 20px 0px;
                }

                .position-relative {
                    position: relative;
                }
            </style>

			<section class="footer">
				<slot></slot>
			</section>
		`}constructor(){super();this.__content__=document.querySelector("#content");this.adjustFooterPosition=this.adjustFooterPosition.bind(this);this.util=new _utils.default;this.finishedResize}ready(){super.ready();this.adjustFooterPosition()}connectedCallback(){super.connectedCallback();window.addEventListener("resize",this.util.throttle(this.adjustFooterPosition,50))}adjustFooterPosition(){let __footer__=this.shadowRoot.querySelector(".footer");if(window.outerHeight-60<this.__content__.getBoundingClientRect().bottom){__footer__.classList.add("position-relative")}clearTimeout(this.finishedResize);this.finishedResize=setTimeout(()=>{if(window.outerHeight-60>this.__content__.getBoundingClientRect().bottom){__footer__.classList.remove("position-relative")}},100)}}customElements.define("custom-footer",CustomFooter)});