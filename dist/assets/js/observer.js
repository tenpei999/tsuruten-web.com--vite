class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };
    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.els.forEach((el) => this.io.observe(el));
  }
  destroy() {
    this.io.disconnect();
  }
}
const addJSClass = function(el, isIntersecting) {
  if (isIntersecting) {
    el.classList.add("js-observer");
  } else {
    el.classList.remove("js-observer");
  }
};
const fadeUpAnimation = function() {
  new ScrollObserver(
    ".c-title--common",
    addJSClass,
    {
      rootMargin: "0px 0px -220px 0px"
    }
  );
  new ScrollObserver(
    ".js-fadeUp",
    addJSClass,
    { rootMargin: "0px 0px -220px 0px" }
  );
  new ScrollObserver(
    ".js-fadeUp__card2",
    addJSClass,
    { rootMargin: "0px 0px -220px 0px" }
  );
  new ScrollObserver(
    ".js-fadeUp__card3",
    addJSClass,
    { rootMargin: "0px 0px -220px 0px" }
  );
  new ScrollObserver(
    ".js-fadeUp__card4",
    addJSClass,
    { rootMargin: "0px 0px -220px 0px" }
  );
  new ScrollObserver(
    ".js-fadeUp__card5",
    addJSClass,
    { rootMargin: "0px 0px -220px 0px" }
  );
};
export {
  ScrollObserver,
  addJSClass,
  fadeUpAnimation
};
