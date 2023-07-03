<?php get_header(); ?>

<?php if (is_home() || is_front_page()) : ?>
  <article id="loading"></article>

  <div id="overlay" class="c-overlay modal-fade-out"></div>
  <div class="p-modal-window modal-fade-out">
    <button class="js-close p-modal-window__button-close">Close</button>


    <?php

    $page_obj = get_page_by_path('modal-window');
    $page = get_post($page_obj);

    echo $page->post_content;   //本文を表示

    ?>

  </div>
  <a class="p-modal-window__message-close modal-fade-out">と じ る</a>
  <section class="l-primary" id="primary">
    <aside class="p-animation-background">
      <ul class="p-animation-background__layer">
        <li class="layer-1 bg-lazy"></li>
        <li class="layer-1__inner bg-lazy"></li>
        <li class="layer-2 bg-lazy mountain"></li>
        <li class="layer-2-2 bg-lazy mountain"></li>
        <li class="layer-2-3 bg-lazy mountain"></li>
        <li class="layer-4 bg-lazy"></li>
        <li class="layer-5 bg-lazy"></li>
        <li class="layer-6 bg-lazy"></li>
        <li class="layer-7 bg-lazy"></li>
        <li class="layer-8 bg-lazy"></li>
      </ul>
      <ul class="p-animation-background__child">
        <li class="layer-9 bg-lazy"></li>
        <li class="layer-10 bg-lazy"></li>
        <li class="layer-11 bg-lazy"></li>
      </ul>
    </aside>
    <!-- animation-background -->

    <main class="l-main">

      <article class="c-space-narrow">
        <section class="c-background-opacity p-intro">

          <h1 class="p-intro__logo">
            <div>
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/dist/assets/images/tsuruten_logo20230124-2.png" alt="tsuruten-web.com" class="c-margin-center">
            </div>
          </h1>

          <article class="p-intro__button-special">
            <div class="u-button-special soap_wrap">
              <a class="soap" href="<?php
                                    $page = get_page_by_path('concept');
                                    echo esc_url(get_permalink($page->ID));
                                    ?>">Concept
              </a>
            </div>
            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/dist/assets/images/crow.png" alt="好奇心旺盛なカラス" class="u-button-special__img">
          </article>
          <!-- button-group -->

        </section>
        <!-- p-intro -->

        <article class="p-gmenu--table">
          <button class="p-gmenu__button">
            <p class="c-title--button p-gmenu__button--title">もくじ</p>
          </button>
          <ul class="p-gmenu__list in-table">
            <li class="item">
              <div id="scene">
                <div class="boxBase">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="front"></div>
                  <div class="back"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>
              <a href="#profile">
                <p class="title">私について</p>
              </a>
            </li>
            <li class="item">
              <div id="scene">
                <div class="boxBase">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="front"></div>
                  <div class="back"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>
              <a href="#skill">
                <p class="title">スキル</p>
              </a>
            </li>
            <li class="item">
              <div id="scene">
                <div class="boxBase">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="front"></div>
                  <div class="back"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>
              <a href="#products">
                <p class="title">制作物</p>
              </a>
            </li>
            <li class="item">
              <div id="scene">
                <div class="boxBase">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="front"></div>
                  <div class="back"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>
              <a href="#contact">
                <p class="title">お問合せ・制作依頼</p>
              </a>
            </li>
            <li class="item">
              <div id="scene">
                <div class="boxBase">
                  <div class="top"></div>
                  <div class="bottom"></div>
                  <div class="front"></div>
                  <div class="back"></div>
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </div>
              <a href="#posts">
                <p class="title">Blog</p>
              </a>
            </li>
          </ul>
        </article>

      </article>
      <section class="p-profile c-background-opacity">

        <h2 class="title" id="profile">
          <p class="c-title--section c-margin-center">

            <?php

            $page_obj = get_page_by_path('profile');
            $page = get_post($page_obj);

            echo $page->post_title;   //本文を表示

            ?>

          </p>
        </h2>

        <?php

        $page_obj = get_page_by_path('profile');
        $page = get_post($page_obj);

        echo $page->post_content;   //本文を表示
        ?>

      </section>
      <!-- p-profile -->

      <section class="c-background-opacity p-skill">
        <h2 class="title" id="skill">
          <p class="c-title--section">スキル</p>
        </h2>
        <h4 class="title__sub">
          <p>静的コーディングからWordPressテーマ開発まで</p>
        </h4>
        <ul class="cell">
          <li class="cell__li first">
            <div class="img">
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/dist/assets/images/html-g.png" alt="">
            </div>
            <h5 class="title">
              <p class="c-title--content">HTMLマークアップ</p>
            </h5>
            <ul class="detail">
              <li class="li">
                <span class="c-check"></span>
                <p>
                  HTML Living Standard に準拠したセマンティックかつアクセシビリティに優れたマークアップ
                </p>
              </li>
              <li class="li">
                <span class="c-check"></span>
                <p>
                  metaタグと&lt;h1&gt;〜&lt;h6&gt;タグの適切な利用によるブラウザフレンドリーなマークアップ
                </p>
              </li>
              <li class="li">
                <span class="c-check"></span>
                セクショニングタグを適切に配置することによる文書の構造構築
              </li>
            </ul>
          </li>
          <li class="cell__li">
            <div class="img">
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/dist/assets/images/interior-design-g70f9d930b_1280.jpg" alt="css" class="icon">
            </div>
            <h5 class="title">
              <p class="c-title--content">CSSスタイリング</p>
            </h5>
            <ul class="detail">
              <li class="li">
                <span class="c-check"></span>
                <p>
                  vw、calc、clamp等のモダンなCSSプロパティを活用したレスポンシブなコーディング
                </p>
              </li>
              <li class="li">
                <span class="c-check"></span>
                <p>
                  keyframesアニメーションを駆使することによる「目で見て楽しい」コーディング
                </p>
              </li>
              <li class="li">
                <span class="c-check"></span>
                <p>
                  保守しやすく、予測しやすく、拡張しやすく、再利用しやすいといった「よいCSS設計の目指す4つのゴール」を常に心がけることにより読みやすくかつ作業負担が少ないコーディング
                </p>
              </li>
              <li class="li">
                <span class="c-check"></span>
                <p>
                  CSS設計手法にFLOCSSとBEMを採用することによる安定したカスケーディング管理
                </p>
              </li>
            </ul>
          </li>
          <li class="cell__li">
            <div class="img">
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/dist/assets/images/Javascript.jpg" alt="JavaScript" class="icon">
            </div>
            <h5 class="title">
              <p class="c-title--content">JavaScript</p>
            </h5>
            <ul class="detail">
              <li class="li">
                <span class="c-check"></span>
                <p>
                  jQuery非依存の独自アニメーション作成
                </p>
              </li>
              <li class="li">
                <span class="c-check"></span>
                <p>
                  JavaScriptライブラリの活用による高機能なアニメーションの実装
                </p>
              </li>
              <li class="li">
                <span class="c-check"></span>
                <p>
                  外部webサービスとのAPI連携
                </p>
              </li>
              <li class="li">
                <span class="c-check"></span>
                <p>
                  gulp、vite、postcss等フロントエンドツールの独自テンプレート作成
                </p>
              </li>
            </ul>
          </li>
          <li class="cell__li">
            <div class="img">
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/dist/assets/images/cms-WordPress.jpg" alt="WordPress" class="icon">
            </div>
            <h5 class="title">
              <p class="c-title--content">WordPress</p>
            </h5>
            <ul class="detail">
              <li class="li">
                <span class="c-check"></span>
                <p>
                  オリジナルテーマの作成
                </p>
              </li>
              <li class="li">
                <span class="c-check"></span>
                <p>
                  クエリの活用による投稿データの動的取得
                </p>
              </li>
              <li class="li">
                <span class="c-check"></span>
                <p>
                  カスタム投稿、カスタムフィールドによるCMS機能の高度なカスタマイズ
                </p>
              </li>
              <li class="li">
                <span class="c-check"></span>
                <p>
                  FTPソフトを介しサーバー上でwebサイトを管理運営し、404エラー等の急な不具合にも対応可能
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <!-- p-skill -->
      <!-- Slider main container -->

      <section class="p-products c-background-opacity">

        <h2 class="title" id="products">
          <p class="c-title--section c-margin-center">制作物</p>
        </h2>
        <article class="p-products__swiper">

          <article class="swiper">
            <!-- Additional required wrapper -->
            <ul class="swiper-wrapper">
              <!-- Slides -->
              <li class="swiper-slide">
                <?php
                $page = get_page_by_path('chunta', OBJECT, 'product');
                $permalink = get_permalink($page->ID);; ?>
                <a href="<?php echo $permalink; ?>">
                  <img src="<?php echo esc_url(get_template_directory_uri()); ?>/dist/assets/images/bird.png" alt="アイキャッチ画像" class="img">
                </a>
                <section class="card">
                  <div class="card-body">
                    <div class="card-inner">
                      <h5 class="card-title">
                        <p>CSSアニメーション/chunta</p>
                      </h5>
                      <small>
                        制作期間:7時間
                      </small>
                    </div>
                  </div>
                </section>
              </li>
              <li class="swiper-slide">
                <?php
                $page = get_page_by_path('gotenyama-no-huji-css-animation', OBJECT, 'product');
                $permalink = get_permalink($page->ID);
                ?>
                <a href="<?php echo $permalink; ?>">
                  <img src="<?php echo esc_url(get_template_directory_uri()); ?>/dist/assets/images/publicdomainq-0011230agtryf-1.jpg" alt="アイキャッチ画像" class="img">
                </a>
                <section class="card">
                  <div class="card-body">
                    <div class="card-inner">
                      <h5 class="card-title">
                        <p>CSSアニメーション/gotenyama</p>
                      </h5>
                      <small>
                        制作期間:7日
                      </small>
                    </div>
                  </div>
                </section>
              </li>
              <li class="swiper-slide">
                <?php
                $page = get_page_by_path('hamburger', OBJECT, 'product');
                $permalink = get_permalink($page->ID);
                ?>
                <a href="<?php echo $permalink; ?>">
                  <img src="<?php echo esc_url(get_template_directory_uri()); ?>/dist/assets/images/screenshotHamburger" alt="アイキャッチ画像" class="img">
                </a>
                <section class="card">
                  <div class="card-body">
                    <div class="card-inner">
                      <h5 class="card-title">
                        <p>RaiseTech最終課題</p>
                      </h5>
                      <small>
                        制作期間:6週間
                      </small>
                    </div>
                  </div>
                </section>
              </li>
            </ul>

            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
            <!-- If we need navigation buttons -->
            </div>
          </article>
        </article>
      </section>
      <section class="p-contact">
        <h2 id="contact">
          <p class="c-title--section c-margin-center">お問い合わせ</p>
        </h2>
        <article class="p-contact__form">
          <?php echo apply_shortcodes('[contact-form-7 id="3515" title="お問合せフォーム"]'); ?>
        </article>
      </section>
      <!-- p-space-wide -->
    <?php endif; ?>
    </main>
  </section>
  <!-- l-primary  -->

  <?php get_footer(); ?>