if (!document.body.classList.contains('l-body_is-concept_page')) {
  // main.jsで実行したいコードをここに追加

  import('./modules/pagetopGif.js').then((module) => {
    module.pageTopAnimation();
  });
}