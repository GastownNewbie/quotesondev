<?php
/**
 * Template part for displaying results in search pages.
 *
 * @package QOD_Custom_Theme
 */

?>
<div class="search-results-container">
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<header class="entry-header">
			<?php the_title(sprintf('<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url(get_permalink())), '</a></h2>'); ?>

			<?php if ('post' === get_post_type()) : ?>
				<div class="entry-meta">
				</div><!-- .entry-meta -->
			<?php endif; ?>
		</header><!-- .entry-header -->

		<div class="entry-summary">
			<?php the_excerpt(); ?>
		</div><!-- .entry-summary -->
	</article><!-- #post-## -->
</div>