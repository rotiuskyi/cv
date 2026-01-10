import { h, render } from "preact";
import htm from "htm";
import App from "./app/App.js";

window.html = htm.bind(h);

// <... id="main">...</...> is available as global object
// by the name equals to given DOM's block id
render(html`<${App} />`, main);
