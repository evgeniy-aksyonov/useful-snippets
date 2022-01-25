function addScript(url: string, async: boolean) {
  let script = window.document.createElement('script');
  script.src = url;
  script.async = async;
  window.document.head.appendChild(script);
}
