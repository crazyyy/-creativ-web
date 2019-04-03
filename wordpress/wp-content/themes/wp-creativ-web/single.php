<?php get_header(); ?>

  <main>
    <div class="row">
      <div class="col s12 m12 l5 xl5">
        <div class="d-wrapper">

          <?php if (have_posts()): while (have_posts()) : the_post(); ?>
            <div id="d-theatre" class="d-theatre section scrollspy" style="display: block;">
              <h5 class="center-align res-p"><?php the_title(); ?></h5>
              <div data-post-id="44" class="insert-page ">
                <?php the_content(); ?>
              </div>
            </div>
          <?php endwhile; endif; ?>

          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </main>

<?php get_footer(); ?>
