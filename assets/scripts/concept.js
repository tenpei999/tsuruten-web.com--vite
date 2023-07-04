if (document.body.classList.contains('l-body_is-concept_page')) {
  //ローディングアニメーション
  import('./modules/loading.js').then((module) => {
    module.loading();
  });

  //波
  import('./modules/drawWave.js').then((module) => {
    module.drawWave();
  });

  //swiper
  import('./modules/slider.js').then((module) => {
    module.swiperSetConcept();
  });
}
