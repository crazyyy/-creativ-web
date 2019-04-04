<?php get_header(); ?>

  <main>
    <div class="row">
      <div class="col s12 m12 l5 xl5">
        <div class="d-wrapper">

            <div id="d-theatre" class="d-theatre section scrollspy" style="display: block;">
              <h5 class="center-align res-p"><?php the_category(', '); ?></h5>
              <?php get_template_part('loop'); ?>
              <?php get_template_part('pagination'); ?>
            </div>

          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </main>

<?php get_footer(); ?>
