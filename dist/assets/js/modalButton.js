const modal = () => {
  const modalButton = document.querySelector(".c-text--link.c-modal-window__button-open");
  const modalMessageClose = document.querySelector(".p-modal-window__message-close");
  const modalFadeOut = document.querySelector(".p-modal-window");
  const pageTop = document.querySelector(".p-page-top");
  const overlay = document.querySelector(".c-overlay");
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
};
export {
  modal
};
