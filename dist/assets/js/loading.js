const loading = () => {
  function addLoadedClass() {
    const spinner = document.getElementById("loading");
    if (spinner) {
      spinner.classList.add("loaded");
    }
  }
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", addLoadedClass);
  } else {
    addLoadedClass();
  }
};
export {
  loading
};
