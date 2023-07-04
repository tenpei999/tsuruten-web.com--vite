const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/dist/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const main = "";
if (!document.body.classList.contains("l-body_is-concept_page")) {
  __vitePreload(() => import("./pagetopGif.js"), true ? [] : void 0).then((module) => {
    module.pageTopAnimation();
  });
}
if (document.body.classList.contains("l-body_is-front_page")) {
  let media = function() {
    const width = window.innerWidth;
    const modalButton = document.querySelector(".c-text--link.c-modal-window__button-open");
    const modalButtonClose = document.querySelector(".p-modal-window__button-close");
    if (width > 1200) {
      modalButton.parentNode.insertBefore(document.getElementById("modal-text"), modalButton.nextElementSibling);
    } else if (width <= 1200) {
      modalButtonClose.parentNode.insertBefore(document.getElementById("modal-text"), modalButtonClose.nextElementSibling);
      __vitePreload(() => import("./accordion.js"), true ? [] : void 0).then((module) => {
        module.accordion();
      });
      __vitePreload(() => import("./modalButton.js"), true ? [] : void 0).then((module) => {
        module.modal();
      });
    }
  };
  var media2 = media;
  __vitePreload(() => import("./loading.js"), true ? [] : void 0).then((module) => {
    module.loading();
  });
  __vitePreload(() => import("./backgroundMove.js"), true ? [] : void 0).then((module) => {
    module.backgroundFollowing();
  });
  __vitePreload(() => import("./observer.js"), true ? [] : void 0).then((module) => {
    module.fadeUpAnimation();
  });
  __vitePreload(() => import("./backgroundMove.js"), true ? [] : void 0).then((module) => {
    module.backgroundUp();
  });
  __vitePreload(() => import("./backgroundMove.js"), true ? [] : void 0).then((module) => {
    module.backgroundOpacity();
  });
  __vitePreload(() => import("./slider.js"), true ? [] : void 0).then((module) => {
    module.swiperFront();
  });
  media();
  window.addEventListener("resize", function() {
    media();
  });
}
if (document.body.classList.contains("l-body_is-concept_page")) {
  __vitePreload(() => import("./loading.js"), true ? [] : void 0).then((module) => {
    module.loading();
  });
  __vitePreload(() => import("./drawWave.js"), true ? [] : void 0).then((module) => {
    module.drawWave();
  });
  __vitePreload(() => import("./slider.js"), true ? [] : void 0).then((module) => {
    module.swiperSetConcept();
  });
}
