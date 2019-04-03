<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet">
  <link href="<?php echo get_template_directory_uri(); ?>/favicon.png" rel="shortcut icon" type="image/x-icon">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="//www.google-analytics.com/" rel="dns-prefetch">
  <link href="//fonts.googleapis.com" rel="dns-prefetch">
  <link href="//cdnjs.cloudflare.com" rel="dns-prefetch">

  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
</head>
<body class="home blog wp-featherlight-captions hfeed">

  <div class="w1">
    <div class="bg-video w-background-video video-container">
      <video src="<?php echo get_template_directory_uri(); ?>/img/video-bg-transcode.mp4" class="hide-on-small-only" poster="<?php echo get_template_directory_uri(); ?>/img/background-mob.jpg" autoplay muted loop></video>
    </div>
  </div>

  <header>
    <nav class="transparent z-depth-0 navbar ">
      <div class="nav-wrapper">
        <a class="brand-logo" href="#"
          onclick="opcl(hdiv, '.d-hero'); return false;">Артем Мельничук<span
            class="sub-text-logo hide-on-small-only"> - актёр кино г.Москва</span></a>

        <?php /* wpeHeadNav(); */ ?>
        <ul class="right hide-on-med-and-down">
          <li><a class="mtm" href="#"
              onclick="opcl(hdiv, '.d-news'); return false;">Новости</a></li>
          <li><a class="mtm" href="#"
              onclick="opcl(hdiv, '.d-photo'); return false;">Фото</a></li>
          <li><a class="mtm" href="#"
              onclick="opcl(hdiv, '.d-video'); return false;">Видео</a></li>
          <li><a class="mtm" href="#"
              onclick="opcl(hdiv, '.d-films'); return false;">Фильмография</a></li>
          <li><a class="mtm" href="#"
              onclick="opcl(hdiv, '.d-theatre'); return false;">театр</a></li>
          <li><a class="mtm" href="#"
              onclick="opcl(hdiv, '.d-resume'); return false;">Резюме</a></li>
          <li><a class="mtm" href="#"
              onclick="opcl(hdiv, '.d-contact'); return false;">Контакты</a></li>
        </ul>
        <ul id="slide-out" class="side-nav section" style="transform: translateX(-100%);">
          <li><a class="mtt active" href="#d-hero"><i class="fa fa-user-circle"
                aria-hidden="true"></i>Главная</a></li>
          <li><a class="mtt" href="#d-news"><i class="fa fa-newspaper-o"
                aria-hidden="true"></i>Новости</a></li>
          <li><a class="mtt" href="#d-photo"><i class="fa fa-camera"
                aria-hidden="true"></i>Фото</a></li>
          <li><a class="mtt" href="#d-video"><i class="fa fa-file-video-o"
                aria-hidden="true"></i>Видео</a></li>
          <li><a class="mtt" href="#d-films"><i class="fa fa-film"
                aria-hidden="true"></i>Фильмография</a></li>
          <li><a class="mtt" href="#d-theatre"><i class="fa fa-university"
                aria-hidden="true"></i>Театр</a></li>
          <li><a class="mtt" href="#d-resume"><i class="fa fa-address-card-o"
                aria-hidden="true"></i>Резюме</a></li>
          <li><a class="mtt" href="#d-contact"><i class="fa fa-envelope-o"
                aria-hidden="true"></i>Контакты</a></li>
        </ul>
      </div>
    </nav>
  </header>
