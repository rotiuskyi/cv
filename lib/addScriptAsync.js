function addScript({
  src,
  type,
  innerHTML,
  onload,
  onerror,
  appendTo = document.head
}) {
  const script = document.createElement("script");
  if (src) {
    script.src = src;
  }
  if (type) {
    script.type = type;
  }
  if (innerHTML) {
    script.innerHTML = innerHTML;
  }
  if (onload) {
    script.onload = onload;
  }
  if (onerror) {
    script.onerror = onerror;
  }
  appendTo.appendChild(script);
}

function addScriptAsync({
  src,
  type,
  innerHTML,
  appendTo = document.head
}) {
  return new Promise((resolve, reject) => {
    addScript({
      src,
      type,
      innerHTML,
      appendTo,
      onload(...args) {
        resolve(...args);
      },
      onerror(...args) {
        reject(...args);
      }
    });
    if (type === "importmap") {
      resolve();
    }
  });
}

export default addScriptAsync;
