function delay(fn, ms) {
  return function() {
    setTimeout(() => fn.apply(this, arguments), ms);
  };
}

let delayedLog = delay(console.log, 1000);

delayedLog("test"); // shows "test" after 1000 ms
