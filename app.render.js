import { h, render } from "preact";
import htm from "htm";
import App from "./app/App.js";

window.html = htm.bind(h);

render(html`<${App} />`, document.body);
