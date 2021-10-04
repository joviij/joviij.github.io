define(["../../../../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class HeaderSection extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
			<style>
				.header-section {
					width: 100%;
					height: 50px;
					font-size: 25px;
					padding-top: 10px;
					font-family: 'IBM Plex Sans', sans-serif;
					letter-spacing: 2px;
					text-align: center;
				}

			</style>
			<section class="header-section">
				<slot></slot>
			</section>
		`}}customElements.define("header-section",HeaderSection)});