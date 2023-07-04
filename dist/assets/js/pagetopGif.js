const pageTopAnimation = () => {
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
};
export {
  pageTopAnimation
};
