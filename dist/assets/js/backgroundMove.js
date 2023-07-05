const backgroundUp = () => {
  const layer2 = document.querySelector(".layer-2");
  const layer22 = document.querySelector(".layer-2-2");
  const layer23 = document.querySelector(".layer-2-3");
  function init() {
    window.addEventListener("load", () => {
      layer2.style.marginTop = "3030px";
      layer22.style.marginTop = "2660px";
      layer23.style.marginTop = "2550px";
    });
    window.addEventListener("scroll", () => {
      event.preventDefault();
      [layer2, layer22, layer23].forEach((ele) => ele.style.marginTop = "unset");
    });
    "scroll load".split(" ").forEach((MountainUp) => {
      window.addEventListener(MountainUp, () => {
        const winHeight = window.pageYOffset;
        const elmOffsetY = 2250;
        const winStart = 780 + elmOffsetY;
        const win2Start = 410 + elmOffsetY;
        const win3Start = 250 + elmOffsetY;
        const offsetMove = winStart - winHeight * 0.3333;
        const offset2Move = win2Start - winHeight * 0.15;
        const offset3Move = win3Start - winHeight * 0.1;
        if (winHeight < 2e3) {
          [layer2, layer22, layer23].forEach((ele) => ele.classList.add("up"));
          const layer2Up = document.querySelector(".layer-2.up");
          const layer22Up = document.querySelector(".layer-2-2.up");
          const layer23Up = document.querySelector(".layer-2-3.up");
          layer2Up.style.marginTop = offsetMove + "px";
          layer22Up.style.marginTop = offset2Move + "px";
          layer23Up.style.marginTop = offset3Move + "px";
        } else {
          [layer2, layer22, layer23].forEach((ele) => {
            ele.classList.remove("up");
          });
          [layer2, layer22].forEach((ele) => {
            ele.style.marginTop = "2360px";
          });
          layer23.style.marginTop = "2300px";
        }
      });
    });
  }
  const mountainUp = (entries) => {
    entries.forEach((entry) => {
      init();
    });
  };
  const mountainObserver = new IntersectionObserver(mountainUp);
  const mountainElements = document.querySelectorAll(".mountain");
  mountainElements.forEach((mountainElement) => {
    mountainObserver.observe(mountainElement);
  });
};
const backgroundFollowing = () => {
  const layer10 = document.querySelector(".layer-10");
  const layer11 = document.querySelector(".layer-11");
  window.onscroll = function() {
    const elmOffsetY = 0;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const position = elmOffsetY + scrollTop / 1.9;
    const Position2 = elmOffsetY + scrollTop / 1.5;
    layer10.style.marginTop = position + "px";
    layer11.style.marginTop = Position2 + "px";
  };
};
const backgroundOpacity = () => {
  const targetElement = document.querySelector(".p-contact");
  const opacityElements = Array.from({ length: 7 }, (_, i) => document.querySelector(`.layer-${[9, 10, 11, 1, 2, 4, 5][i]}`));
  const options = {
    root: document.querySelector(".l-main"),
    rootMargin: "2500px",
    threshold: 0
  };
  const observer = new IntersectionObserver(callback, options);
  function callback(entries, observer2) {
    entries.forEach((entry) => {
      opacityElements.forEach((element, index) => {
        if (entry.isIntersecting) {
          element.style.opacity = index === 6 ? "0" : "0.5";
          element.style.transition = "all 0.2s";
          if (index === 6)
            element.style.animation = "none";
        } else {
          element.style.opacity = "1";
        }
      });
    });
  }
  observer.observe(targetElement);
};
export {
  backgroundFollowing,
  backgroundOpacity,
  backgroundUp
};
