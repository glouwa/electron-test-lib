import "./components/frame/test"
import "./index.scss"

import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';

console.log("hallo welt")

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));


const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action, .mdc-top-app-bar ';
const ripples = [].map.call(document.querySelectorAll(selector), function(el:any) {
    return new MDCRipple(el);
});
