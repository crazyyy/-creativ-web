<?php /* Template Name: Home Page */ get_header(); ?>
  <main>
    <div class="row">
      <div class="col s12 m12 l5 xl5">
        <div class="d-wrapper">

        <?php if (have_posts()): while (have_posts()) : the_post(); ?>
          <div id="d-hero" class="d-hero section scrollspy">
            <div data-post-id="77" class="insert-page insert-page-77 ">
              <p><img class="actor hide-on-large-only" src="<?php echo get_template_directory_uri(); ?>/img/actor-1.jpg" alt="Актёр"></p>
              <div class="h-block hide-on-med-and-down center-align">
                <h1 class="h1 herotext">Артем</h1>
                <h1 class="h1 herotext">Мельничук</h1>
              </div>
              <div class="hero p-block hide-on-med-and-down center-align">
                <h3 class="h3">актер кино</h3>
                <div class="p-right">г. Москва</div>
              </div>
              <div class="hide-on-large-only center-align">
                <h4><strong>актер кино<br>
                    г.Москва</strong></h4>
                <p>&nbsp;
                </p>
              </div>
            </div>
          </div>
        <?php endwhile; endif; ?>

          <div id="d-news" class="d-news">
            <?php query_posts("showposts=4&cat=1"); ?>
              <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                  <div class="news">
                    <span class="h-news"><?php the_title(); ?></span>
                    <?php the_content(); ?>
                  </div>
                </article>

              <?php endwhile; endif; ?>
            <?php wp_reset_query(); ?>
            <div type="button" class="btn btn-danger btn-block" id="true_loadmore">Загрузить ещё</div>
          </div>

          <?php query_posts("page_id=52"); ?>
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
              <div id="d-photo" class="d-photo section scrollspy" style="">
                <h5 class="center-align res-p hide-on-large-only"><?php the_title(); ?></h5>
                <div data-post-id="31" class="insert-page insert-page-31 ">
                  <div class="center-align">
                    <div id="gallery-1" class="gallery galleryid-31 gallery-columns-3 gallery-size-thumbnail">
                      <?php $images = get_field('gallery'); if( $images ): ?>
                        <?php foreach( $images as $image ): ?>
                          <figure class="gallery-item">
                            <div class="gallery-icon portrait">
                              <a href="<?php echo $image['url']; ?>" ata-featherlight="image"><img width="300" height="300" src="<?php echo $image['sizes']['thumbnail']; ?>" class="attachment-thumbnail size-thumbnail" alt="<?php echo $image['alt']; ?>"></a>
                            </div>
                          </figure>
                        <?php endforeach; ?>
                      <?php endif; ?>
                    </div>
                    <?php $file = get_field('archive'); if( $file ): ?>
                      <p><a class="btn btn-danger" href="<?php echo $file['url']; ?>" target="_blank" rel="noopener noreferrer">Скачать все фото</a></p>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            <?php endwhile; endif; ?>
          <?php wp_reset_query(); ?>

          <?php query_posts("page_id=90"); ?>
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
              <div id="d-video" class="d-video section scrollspy" style="">
                <h5 class="center-align res-p hide-on-large-only"><?php the_title(); ?></h5>
                <div data-post-id="40" class="insert-page insert-page-40 ">
                  <?php if ( have_rows('videos') ) : ?>
                    <?php while( have_rows('videos') ) : the_row(); ?>
                      <p>
                        <?php the_sub_field('title'); ?><br>
                        <?php the_sub_field('iframe'); ?>
                      </p>
                    <?php endwhile; ?>
                  <?php endif; ?>
                </div>

                <?php if ( get_field('main_video_link') ) : ?>
                  <div class="col s12 m12 l12 xl12">
                    <div class="video-container">
                      <div class="demo" data-youtube="<?php echo get_field('main_video_link'); ?>"></div>
                    </div>
                  </div>
                <?php endif; ?>
              </div>
            <?php endwhile; endif; ?>
          <?php wp_reset_query(); ?>

          <?php query_posts("page_id=108"); ?>
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

              <div id="d-films" class="d-films section scrollspy" style="">
                <h5 class="center-align res-p hide-on-large-only"><?php the_title(); ?></h5>
                <div class="row">
                  <h6 class="center-align res-p"><?php echo get_field('first_title'); ?></h6>

                  <?php if ( have_rows('first_filmography') ) : ?>
                    <?php while( have_rows('first_filmography') ) : the_row(); ?>
                      <div class="col s12 m12 l12 xl12">
                        <div class="card horizontal">
                          <?php if ( get_sub_field('poster') ) : $image = get_sub_field('poster'); ?>
                            <div class="card-stacked">
                              <div class="card-content">
                                <span class="card-title"><span class="title-date"><?php the_sub_field('year'); ?></span>&nbsp;<strong><?php the_sub_field('title'); ?></strong></span>
                                <div class="hide-on-med-and-up">
                                  <a href="<?php echo $image['url']; ?>" data-featherlight="image">
                                    <img width="300" height="300" src="<?php echo $image['url']; ?>" class="attachment-thumbnail size-thumbnail wp-post-image" alt="<?php echo $image['alt']; ?>">
                                  </a>
                                </div>
                                <?php the_sub_field('description'); ?>
                              </div>
                            </div>
                            <div class="card-image fc hide-on-small-only">
                              <a href="<?php echo $image['url']; ?>" data-featherlight="image">
                                <img width="300" height="300" src="<?php echo $image['url']; ?>" class="attachment-thumbnail size-thumbnail wp-post-image" alt="<?php echo $image['alt']; ?>">
                              </a>
                            </div>
                          <?php endif; ?>
                        </div>
                      </div>
                    <?php endwhile; ?>
                  <?php endif; ?>

                  <?php if ( get_field('second_title') ) : ?>
                    <h6 class="center-align res-p"><?php echo get_field('second_title'); ?></h6>
                  <?php endif; ?>

                  <?php if ( have_rows('second_filmography') ) : ?>
                    <?php while( have_rows('second_filmography') ) : the_row(); ?>
                      <div class="col s12 m12 l12 xl12">
                        <div class="card horizontal">
                          <?php if ( get_sub_field('poster') ) : $image = get_sub_field('poster'); ?>
                            <div class="card-stacked">
                              <div class="card-content">
                                <span class="card-title"><span class="title-date"><?php the_sub_field('year'); ?></span>&nbsp;<strong><?php the_sub_field('title'); ?></strong></span>
                                <div class="hide-on-med-and-up">
                                  <a href="<?php echo $image['url']; ?>" data-featherlight="image">
                                    <img width="300" height="300" src="<?php echo $image['url']; ?>" class="attachment-thumbnail size-thumbnail wp-post-image" alt="<?php echo $image['alt']; ?>">
                                  </a>
                                </div>
                                <?php the_sub_field('description'); ?>
                              </div>
                            </div>
                            <div class="card-image fc hide-on-small-only">
                              <a href="<?php echo $image['url']; ?>" data-featherlight="image">
                                <img width="300" height="300" src="<?php echo $image['url']; ?>" class="attachment-thumbnail size-thumbnail wp-post-image" alt="<?php echo $image['alt']; ?>">
                              </a>
                            </div>
                          <?php endif; ?>
                        </div>
                      </div>
                    <?php endwhile; ?>
                  <?php endif; ?>

                </div>
                <div class="row">
                </div>
              </div>

            <?php endwhile; endif; ?>
          <?php wp_reset_query(); ?>


          <?php query_posts("page_id=117"); ?>
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
              <div id="d-theatre" class="d-theatre section scrollspy" style="">
                <h5 class="center-align res-p hide-on-large-only"><?php the_title(); ?></h5>
                <div data-post-id="44" class="insert-page insert-page-44 ">
                  <?php the_content(); ?>
                </div>
              </div>
            <?php endwhile; endif; ?>
          <?php wp_reset_query(); ?>

          <?php query_posts("page_id=119"); ?>
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
              <div id="d-resume" class="d-resume section scrollspy" style="">
                <h5 class="center-align res-p hide-on-large-only"><?php the_title(); ?></h5>
                <div data-post-id="46" class="insert-page insert-page-46 ">
                  <?php the_content(); ?>
                </div>
              </div>
            <?php endwhile; endif; ?>
          <?php wp_reset_query(); ?>

          <?php query_posts("page_id=121"); ?>
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
              <div id="d-contact" class="d-contact section scrollspy" style="">
                <h5 class="center-align res-p hide-on-large-only"><?php the_title(); ?></h5>
                <div data-post-id="48" class="insert-page insert-page-48 ">

                  <div class="ablock">
                    <div class="row">
                      <div class="col s12 m12 l4 xl4">
                        <?php if ( get_field('photo_one') ) : $image = get_field('photo_one'); ?>
                          <img class="actor" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"/>
                        <?php endif; ?>
                      </div>
                      <div class="col s12 m12 l8 xl8">
                        <h4 class="center-align"><?php the_field('title_one'); ?></h4>
                        <?php the_field('description_one'); ?>
                      </div>
                    </div>
                  </div>

                  <div class="sblock">
                    <div class="row">
                      <div class="col s12 m12 l4 xl4 center-align">
                        <?php if ( get_field('photo_second') ) : $image = get_field('photo_second'); ?>
                          <img class="actor" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"/>
                        <?php endif; ?>
                      </div>
                      <div class="col s12 m12 l8 xl8 center-align"><strong><span class="subagent text-center"><?php the_field('title_second'); ?></span></strong></div>
                      <div class="col s12 m12 l8 xl8 center-align">
                        <?php the_field('description_second'); ?>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            <?php endwhile; endif; ?>
          <?php wp_reset_query(); ?>

          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </main>

<?php get_footer(); ?>
