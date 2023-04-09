<?php

/**
 * Functions and definitions
 *
 * @package WordPress
 * @subpackage themrishvite
 */

//develop mode config
define( "IS_VITE_DEVELOPMENT", false );

//define
define( 'DIST_DEF', 'dist' );
define( 'DIST_URI',  get_template_directory_uri() . '/' . DIST_DEF );
define( 'DIST_PATH', get_template_directory()     . '/' . DIST_DEF );

define( 'JS_DEPENDENCY', array() ) ; // array( 'jquery' ) as example
define( 'JS_LOAD_IN_FOOTER', true ) ; // load scripts in footer?

define('VITE_SERVER', 'http://localhost:3000');
define('VITE_ENTRY_POINT', '/main.js');

/*
 * init theme support
 */
function themrishvite_theme_support() {
	add_theme_support( 'html5', array (
		'comment-form',
		'comment-list',
		'search-form',
		'gallery',
		'caption',
		'style',
		'script'
	) );
	add_theme_support( "post-thumbnails" );
	add_theme_support( 'title-tag' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'custom-logo' );
	add_theme_support( 'automatic-feed-links' );
	register_nav_menus( array (
		'main-menu' => __( 'mainmenu', 'themrishvite' )
	) );
}
add_action( 'after_setup_theme', 'themrishvite_theme_support' );

function cors_http_header() {
	header( "Access-Control-Allow-Origin: *" );
}
add_action( 'send_headers', 'cors_http_header' );

function  readScript()
{
  wp_enqueue_style('Noto+Sans+JP', '//fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;900&display=swap', array());
  wp_enqueue_style('Noto+Serif+JP', '//fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700&display=swap', array());
  wp_enqueue_style('Zen Maru Gothic', '//fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500&display=swap', array());
  wp_enqueue_style('M+PLUS+1', '//fonts.googleapis.com/css2?family=M+PLUS+1:wght@400;500;600&display=swap', array());
  wp_enqueue_style('Shippori Antique', '//fonts.googleapis.com/css2?family=Shippori+Antique&display=swap', array());
  wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css', array(), '4.7.0');

}
add_action('wp_enqueue_scripts', 'readScript');

add_action( 'wp_enqueue_scripts', function() {
	if ( defined( 'IS_VITE_DEVELOPMENT') && IS_VITE_DEVELOPMENT === true ) {
		//develop mode
		function vite_head_module_hook() {
			echo '<script type="module" crossorigin src="' . VITE_SERVER . VITE_ENTRY_POINT . '"></script>';
		}
		add_action( 'wp_footer', 'vite_head_module_hook' );
	} else {
		// production mode, 'npm run build' must be executed in order to generate assets

		// read manifest.json to figure out what to enqueue
		$manifest = json_decode( file_get_contents( DIST_PATH . '/manifest.json'), true );
		
		// is ok
		if ( is_array( $manifest ) ) {
			
			// get first key, by default is 'main.js'
			$manifest_key = array_keys( $manifest );
			if ( isset( $manifest_key[0] ) ) {
				// enqueue CSS files
				foreach( @$manifest["main.css"] as $css_file ) {
					wp_enqueue_style( 'main', DIST_URI . '/' . $css_file );
				}
				// enqueue main JS file
				$js_file = @$manifest["main.js"]['file'];
				if ( ! empty( $js_file ) ) {
					wp_enqueue_script( 'main', DIST_URI . '/' . $js_file, JS_DEPENDENCY, '', JS_LOAD_IN_FOOTER );
				}
			}
		}
	}
} );

function load_swiper() {
  wp_enqueue_script( 'swiper-js', get_template_directory_uri() . '/node_modules/swiper/swiper-bundle.min.js', array(), '1.0.0', true );
  wp_enqueue_script('slider-script', get_theme_file_uri() . '/assets/scripts/slider.js', array('swiper-js'), '1.0.0', true);
  wp_enqueue_style( 'swiper-css', get_template_directory_uri() . '/node_modules/swiper/swiper-bundle.min.css', array(), '1.0.0', false );
}
add_action( 'wp_enqueue_scripts', 'load_swiper' );

/* ウイジェット追加
---------------------------------------------------------- */
if (!function_exists('bj_register_sidebars')) {

  function bj_register_sidebars()
  {

    register_sidebar(array(
      'name'          => '人気記事', //ウィジェットの名前
      'id'            => 'popular', //ウィジェットのID
    ));

    register_sidebar(array(
      'name'          => '最新の投稿', //ウィジェットの名前
      'id'            => 'newposts', //ウィジェットのID
    ));

    register_sidebar(array(
      'name'          => 'サイドバー', //ウィジェットの名前
      'id'            => 'sidebar', //ウィジェットのID
    ));
  }

  add_action('widgets_init', 'bj_register_sidebars');
}

//複数のメニューを登録する場合
register_nav_menus(array(
  'header_menu'  => 'gmenu',
));

function codex_product_init()
{
  $labels = array(
    'name'               => _x('Product', 'post type general name', 'tsuruten-web.com'),
    'singular_name'      => _x('Product', 'post type singular name', 'tsuruten-web.com'),
    'menu_name'          => _x('Products', 'admin menu', 'tsuruten-web.com'),
    'name_admin_bar'     => _x('Product', 'add new on admin bar', 'tsuruten-web.com'),
    'add_new'            => _x('Add New', 'product', 'tsuruten-web.com'),
    'add_new_item'       => __('Add New Product', 'tsuruten-web.com'),
    'new_item'           => __('New Product', 'tsuruten-web.com'),
    'edit_item'          => __('Edit Product', 'tsuruten-web.com'),
    'view_item'          => __('View Product', 'tsuruten-web.com'),
    'all_items'          => __('All Products', 'tsuruten-web.com'),
    'search_items'       => __('Search Products', 'tsuruten-web.com'),
    'parent_item_colon'  => __('Parent Products:', 'tsuruten-web.com'),
    'not_found'          => __('No Products found.', 'tsuruten-web.com'),
    'not_found_in_trash' => __('No Products found in Trash.', 'tsuruten-web.com')
  );

  $args = array(
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array('slug' => 'product'),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'show_in_rest'       => true,
    'supports'           => array('title', 'editor', 'author', 'thumbnail', 'excerpt')
  );

  register_post_type('product', $args);
}
add_action('init', 'codex_product_init');

add_action('init', 'create_product_taxonomies', 0);

function create_product_taxonomies()
{
  // （カテゴリーのような）階層化したカスタム分類を新たに追加
  $labels = array(
    'name'              => _x('Classifications', 'taxonomy general name'),
    'singular_name'     => _x('Classification', 'taxonomy singular name'),
    'search_items'      => __('Search Classifications'),
    'all_items'         => __('All Classifications'),
    'parent_item'       => __('Parent Classification'),
    'parent_item_colon' => __('Parent Classification:'),
    'edit_item'         => __('Edit Classification'),
    'update_item'       => __('Update Classification'),
    'add_new_item'      => __('Add New Classification'),
    'new_item_name'     => __('New Classification Name'),
    'menu_name'         => __('Classification'),
  );

  $args = array(
    'hierarchical'      => true,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_in_rest'      => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array('slug' => 'classification'),
  );

  register_taxonomy('classification', 'product', $args);
}

add_filter('wpcf7_autop_or_not', 'wpcf7_autop_return_false');
function wpcf7_autop_return_false()
{
  return false;
}

// searchは5件表示する.archiveは3件表示する
function my_posts_control($query)
{
  if (is_admin() || !$query->is_main_query()) {
    return;
  }
  if ($query->is_search()) {
    $query->set('posts_per_page', '5');
    return;
  }
  if ($query->is_archive()) {
    $query->set('posts_per_page', '3');
    return;
  }
}
add_action('pre_get_posts', 'my_posts_control');


//サイト内検索のカスタマイズ
function custom_search($search, $wp_query)
{
  global $wpdb;

  //検索ページ以外だったら終了
  if (!$wp_query->is_search)
    return $search;
  if (!isset($wp_query->query_vars))
    return $search;

  // タグ名・カテゴリ名・カスタムフィールド も検索対象にする
  $search_words = explode(' ', isset($wp_query->query_vars['s']) ? $wp_query->query_vars['s'] : '');
  if (count($search_words) > 0) {
    $search = '';
    foreach ($search_words as $word) {
      if (!empty($word)) {
        $search_word = $wpdb->_escape("%{$word}%");
        $search .= " AND (
						{$wpdb->posts}.post_title LIKE '{$search_word}'
          
						OR {$wpdb->posts}.post_content LIKE '{$search_word}'
            -- // 検索結果に投稿内容を含めたい場合はコメントアウトを解除

						OR {$wpdb->posts}.ID IN (
							SELECT distinct r.object_id
							FROM {$wpdb->term_relationships} AS r
							INNER JOIN {$wpdb->term_taxonomy} AS tt ON r.term_taxonomy_id = tt.term_taxonomy_id
							INNER JOIN {$wpdb->terms} AS t ON tt.term_id = t.term_id
							WHERE t.name LIKE '{$search_word}'
						OR t.slug LIKE '{$search_word}'
						OR tt.description LIKE '{$search_word}'
						)
						OR {$wpdb->posts}.ID IN (
							SELECT distinct p.post_id
							FROM {$wpdb->postmeta} AS p
							WHERE p.meta_value LIKE '{$search_word}'
						)
				) ";
      }
    }
  }

  return $search;
}
add_filter('posts_search', 'custom_search', 10, 2);


// h2をsingle.phpからh2を取得しリスト
function get_single()
{
  //グローバル変数を使う為の宣言
  global $post;
  //マッチングで<h>タグを取得する
  preg_match_all('/<h[2]>.+<\/h[2]>/u', $post->post_content, $matches);
  //取得した<h>タグの個数をカウント
  $matches_count = count($matches[0]);
  if (empty($matches)) {
    //<h>タグがない場合の出力
    echo '<span>Sorry no index</span>';
  } else {
    //<h>タグが存在する場合に<h>タグを出力
    for ($i = 0; $i < $matches_count; $i++) {
      echo  $matches[0][$i];
    }
  }
}

//本体ギャラリーCSS停止
add_filter('use_default_gallery_style', '__return_false');


function gutenberg_support_setup()
{

  //Gutenberg用スタイルの読み込み
  add_theme_support('wp-block-styles');

  //「幅広」と「全幅」に対応
  add_theme_support('align-wide');
}
add_action('after_setup_theme', 'gutenberg_support_setup');

function post_has_archive($args, $post_type)
{

  if ('post' == $post_type) {
    $args['rewrite'] = true;
    $args['has_archive'] = 'catArchive'; //任意のスラッグ名
  }
  return $args;
}
add_filter('register_post_type_args', 'post_has_archive', 10, 2);

function imagepassshort($arg)
{
  $content = str_replace('"img/', '"' . get_bloginfo('template_directory') . '/img/', $arg);
  return $content;
}
add_action('the_content', 'imagepassshort');


add_action('wp_footer', function () {
?>

    <?php
  });
