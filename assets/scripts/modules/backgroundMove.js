export const backgroundUp = () => {
  const layer2 = document.querySelector('.layer-2');
  const layer22 = document.querySelector('.layer-2-2');
  const layer23 = document.querySelector('.layer-2-3');

  function init() {
    window.addEventListener('load', () => {
      layer2.style.marginTop = '3030px'
      layer22.style.marginTop = '2660px'
      layer23.style.marginTop = '2550px'
    })

    window.addEventListener('scroll', () => {
      [layer2, layer22, layer23].forEach(ele => ele.style.marginTop = 'unset');
    })

    'scroll load'.split(' ').forEach((MountainUp) => {
      window.addEventListener(MountainUp, () => {

        const winHeight = window.pageYOffset;                              //ページ上端からの距離を検知
        const elmOffsetY = 2250;                                            //'.layer-2'のY座標における絶対位置
        const winStart = 780 + elmOffsetY;
        const win2Start = 410 + elmOffsetY;
        const win3Start = 250 + elmOffsetY;
        const offsetMove = winStart - winHeight * 0.3333;                             // 'layer-2'のmargin-top を求める条件式
        const offset2Move = win2Start - winHeight * 0.15;                             // 'layer-2'のmargin-top を求める条件式
        const offset3Move = win3Start - winHeight * 0.1;                             // 'layer-2'のmargin-top を求める条件式   

        if (winHeight < 2000) {
          [layer2, layer22, layer23].forEach(ele => ele.classList.add('up'));

          const layer2Up = document.querySelector('.layer-2.up');
          const layer22Up = document.querySelector('.layer-2-2.up');
          const layer23Up = document.querySelector('.layer-2-3.up');

          layer2Up.style.marginTop = offsetMove + 'px';
          layer22Up.style.marginTop = offset2Move + 'px';
          layer23Up.style.marginTop = offset3Move + 'px';

          //アニメーションをする前の状態を表すクラス名'.up'を付与し、合わせて'layer-2'を下方に待機させる。
        } else {
          [layer2, layer22, layer23].forEach(ele => { ele.classList.remove('up') });
          [layer2, layer22,].forEach(ele => { ele.style.marginTop = '2360px' });
          layer23.style.marginTop = '2300px';
        }
      })
    })
  };

  const mountainUp = (entries) => {
    entries.forEach((entry) => {
      init();
    });
  }

  const mountainObserver = new IntersectionObserver(mountainUp);

  const mountainElements = document.querySelectorAll('.mountain');
  mountainElements.forEach((mountainElement) => {
    mountainObserver.observe(mountainElement)
  })
};
export const backgroundFollowing = () => {
  const layer10 = document.querySelector('.layer-10');
  const layer11 = document.querySelector('.layer-11');
  
  window.onscroll = function () {
    //ページ上端からの距離を検知
    const elmOffsetY = 0;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const position = elmOffsetY + scrollTop / 1.9;
    const Position2 = elmOffsetY + scrollTop / 1.5;

    layer10.style.marginTop = position + 'px';
    layer11.style.marginTop = Position2 + 'px';

  };
};
export const backgroundOpacity = () => {
  // 監視対象の要素を取得
  const targetElement = document.querySelector('.p-contact');
  const opacityElements = Array.from({ length: 7 }, (_, i) =>
    document.querySelector(`.layer-${[9, 10, 11, 1, 2, 4, 5][i]}`));

  // Intersection Observerの設定
  const options = {
    root: document.querySelector('.l-main'),
    rootMargin: '2500px',
    threshold: 0
  };

  // Intersection Observerの作成
  const observer = new IntersectionObserver(callback, options);

  // コールバック関数
  function callback(entries, observer) {
    entries.forEach(entry => {
      opacityElements.forEach((element, index) => {
        if (entry.isIntersecting) {
          element.style.opacity = index === 6 ? '0' : '0.5';
          element.style.transition = 'all 0.2s';
          if (index === 6) element.style.animation = 'none';
        } else {
          element.style.opacity = '1';
        }
      });
    });
  }

  // 監視を開始
  observer.observe(targetElement);
};