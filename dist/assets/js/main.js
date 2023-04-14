const main = "";
if (!document.body.classList.contains("l-body_is-concept_page")) {
  const pageTop = document.querySelector(".p-page-top");
  const lMain = document.querySelector(".l-main");
  const scrollListener = () => {
    if (window.scrollY <= 0) {
      pageTop.classList.remove("floatAnime");
      window.removeEventListener("scroll", scrollListener);
    }
  };
  pageTop.addEventListener("click", () => {
    pageTop.classList.add("floatAnime");
    window.addEventListener("scroll", scrollListener);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setTimeout(() => {
      lMain.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 100);
  });
  "scroll load".split(" ").forEach((inokichiDown) => {
    window.addEventListener(inokichiDown, () => {
      const winHeight = window.pageYOffset;
      const pageTop2 = document.querySelector(".p-page-top");
      if (winHeight >= 100) {
        pageTop2.classList.add("UpMove");
        pageTop2.classList.remove("DownMove");
      } else {
        pageTop2.classList.remove("UpMove");
        pageTop2.classList.add("DownMove");
      }
    });
  });
  window.onload = function() {
    const spinner = document.getElementById("loading");
    spinner.classList.add("loaded");
  };
}
if (document.body.classList.contains("l-body_is-front_page")) {
  let media = function() {
    const width = window.innerWidth;
    const modalButton = document.querySelector(".c-text--link.c-modal-window__button-open");
    const modalButtonClose = document.querySelector(".p-modal-window__button-close");
    const modalMessageClose = document.querySelector(".p-modal-window__message-close");
    const modalFadeOut = document.querySelector(".p-modal-window");
    const accordionButton = document.querySelector(".p-gmenu__button");
    const table = document.querySelector(".p-gmenu--table");
    const list = document.querySelector(".p-gmenu__list.in-table");
    const pageTop = document.querySelector(".p-page-top");
    const overlay = document.querySelector(".c-overlay");
    if (width > 1200) {
      modalButton.parentNode.insertBefore(document.getElementById("modal-text"), modalButton.nextElementSibling);
    } else if (width <= 1200) {
      accordionButton.addEventListener("click", () => {
        accordionButton.classList.toggle("active");
        table.classList.toggle("c-background--opacity");
        list.classList.toggle("active");
      });
      modalButtonClose.parentNode.insertBefore(document.getElementById("modal-text"), modalButtonClose.nextElementSibling);
      modalButton.addEventListener("click", function() {
        modalFadeOut.style.opacity = 1;
        modalFadeOut.style.display = "block";
        modalMessageClose.style.display = "block";
        overlay.style.display = "block";
        overlay.style.opacity = 0;
        pageTop.style.display = "none";
        function overlayIn() {
          setTimeout(function step() {
            let val = parseFloat(overlay.style.opacity);
            if (!((val += 0.3) > 1)) {
              overlay.style.opacity = val;
              setTimeout(step, 50);
            }
          }, 0);
        }
        overlayIn();
      });
      modalMessageClose.addEventListener("click", function() {
        modalFadeOut.style.opacity = 0;
        modalFadeOut.style.display = "none";
        modalMessageClose.style.display = "none";
        overlay.style.display = "none";
        pageTop.style.display = "unset";
      });
    }
  }, init = function() {
    window.addEventListener("load", () => {
      layer2.style.marginTop = "3030px";
      layer22.style.marginTop = "2660px";
      layer23.style.marginTop = "2550px";
    });
    window.addEventListener("scroll", () => {
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
  };
  var media2 = media, init2 = init;
  window.onload = function() {
    const spinner = document.getElementById("loading");
    spinner.classList.add("loaded");
  };
  media();
  window.addEventListener("resize", function() {
    media();
  });
  const layer2 = document.querySelector(".layer-2");
  const layer22 = document.querySelector(".layer-2-2");
  const layer23 = document.querySelector(".layer-2-3");
  const layer10 = document.querySelector(".layer-10");
  const layer11 = document.querySelector(".layer-11");
  let myArray = [layer2, layer22, layer23, layer10, layer11];
  window.myGlobalVariable = myArray;
  window.onscroll = function() {
    const elmOffsetY = 0;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const position = elmOffsetY + scrollTop / 1.9;
    const Position2 = elmOffsetY + scrollTop / 1.5;
    layer10.style.marginTop = position + "px";
    layer11.style.marginTop = Position2 + "px";
  };
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
}
if (document.body.classList.contains("l-body_is-concept_page")) {
  let init = function() {
    info.seconds = 0;
    info.t = 0;
    canvasList = [];
    colorList = [];
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(["rgba(12, 80, 198, 0.75) "]);
    for (var canvasIndex in canvasList) {
      var canvas = canvasList[canvasIndex];
      canvas.width = document.documentElement.clientWidth;
      canvas.height = 650;
      canvas.contextCache = canvas.getContext("2d");
    }
    update();
  }, update = function() {
    for (var canvasIndex in canvasList) {
      var canvas = canvasList[canvasIndex];
      draw(canvas, colorList[canvasIndex]);
    }
    info.seconds = info.seconds + 0.014;
    info.t = info.seconds * Math.PI;
    setTimeout(update, 200);
  }, draw = function(canvas, color) {
    var context = canvas.contextCache;
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawWave(canvas, color[0], 1, 2, 0);
  }, drawWave = function(canvas, color, alpha, zoom, delay) {
    var context = canvas.contextCache;
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height);
    context.lineTo(0, canvas.height);
    context.closePath();
    context.fill();
  }, drawSine = function(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height / 2);
    var yAxis = 0;
    var context = canvas.contextCache;
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (var i = yAxis; i <= canvas.width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  };
  var init2 = init, update2 = update, draw2 = draw, drawWave2 = drawWave, drawSine2 = drawSine;
  window.onload = function() {
    const spinner = document.getElementById("loading");
    spinner.classList.add("loaded");
  };
  var unit = 100, canvasList, info = {}, colorList;
  init();
}