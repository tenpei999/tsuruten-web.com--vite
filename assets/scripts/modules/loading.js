export const loading = () => {

  function addLoadedClass() {
    const spinner = document.getElementById('loading');

    if (spinner) {
      spinner.classList.add('loaded');
    }
  }

  if (document.readyState === 'loading') {  // Loading hasn't finished yet
    window.addEventListener('DOMContentLoaded', addLoadedClass);
  } else {  // `DOMContentLoaded` has already fired
    addLoadedClass();
  }
};
