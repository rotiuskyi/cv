import addScriptAsync from "./lib/addScriptAsync.js";

const IMPORTMAP_PATH = "./importmap.json";
const APP_RENDER_PATH = "./app.render.js";

fetch(IMPORTMAP_PATH)
  .then(res => {
    if (res.status !== 200) {
      return Promise.reject(`GET ${IMPORTMAP_PATH} | ${res.status}.`);
    }
    return res.text();
  })
  .then(importmap => {
    return addScriptAsync({ type: "importmap", innerHTML: importmap });
  })
  .catch(err => {
    console.error("Failed loading importmap.", err);
  })
  .then(() => {
    return addScriptAsync({ type: "module", src: APP_RENDER_PATH });
  });
