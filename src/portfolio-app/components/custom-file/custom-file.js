define(["../../../../node_modules/@polymer/polymer/polymer-element.js"],function(_polymerElement){"use strict";class CustomFile extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
        <style>
            .file-icon {
                width: 20px;
                vertical-align: bottom;
                padding-right: 5px;
            }

            .file {
                cursor: default;
            }
        </style>
        <span on-click="handleFileClick" class="file"><img class="file-icon" src="../../../../../assets/file.svg"/>[[name]]</span>
        `}static get properties(){return{name:{type:String,value:""}}}handleFileClick(){this.dispatchEvent(new CustomEvent("showCard",{bubbles:!0,composed:!0,detail:{cardName:this.name}}))}}customElements.define("custom-file",CustomFile)});