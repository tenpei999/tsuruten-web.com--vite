if (document.body.classList.contains('l-body_is-front_page')) {

  //ローディングアニメーション
  import('./modules/loading.js').then((module) => {
    module.loading();
  });

  //視線に追従する雲
  import('./modules/backgroundMove.js').then((module) => {
    module.backgroundFollowing();
  });

  //fadeUpアニメーション
  import('./modules/observer.js').then((module) => {
    module.fadeUpAnimation();
  });

  //前景の山が迫り上がる。
  import('./modules/backgroundMove.js').then((module) => {
    module.backgroundUp();
  });

  //コンテンツの位置によって背景の雲が透過する。
  import('./modules/backgroundMove.js').then((module) => {
    module.backgroundOpacity();
  });

  //swiper
  import('./modules/slider.js').then((module) => {
    module.swiperFront();
  });


  media();
  window.addEventListener('resize', function () { media(); })

  // メディアクエリ
  function media() {
    // 横幅を取得
    const width = window.innerWidth;
    const modalButton = document.querySelector('.c-text--link.c-modal-window__button-open');
    const modalButtonClose = document.querySelector(".p-modal-window__button-close");

    if (width > 1200) {

      // 画面幅が1200pxより上の時
      modalButton.parentNode.insertBefore(document.getElementById("modal-text"), modalButton.nextElementSibling);

    } else if (width <= 1200) {

      // 画面幅が1200px以下での時
      modalButtonClose.parentNode.insertBefore(document.getElementById("modal-text"), modalButtonClose.nextElementSibling);

      //アコーディオンメニュー
      import('./modules/accordion.js').then((module) => {
        module.accordion();
      });
      //モーダルウィンドウ
      import('./modules/modalButton.js').then((module) => {
        module.modal();
      });
    }
  }
}
