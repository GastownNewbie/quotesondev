<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>

</div><!-- #content -->

<footer id="colophon" class="site-footer container" role="contentinfo">
	<div class="site-info">
		<nav id="site-navigation" class="main-navigation" role="navigation">

			<?php wp_nav_menu(array('theme_location' => 'primary', 'menu_id' => 'primary-menu')); ?><p class="nav-red">Brought to you by <a href="https://redacademy.com/vancouver/"> Red Academy</a></p>
		</nav><!-- #site-navigation -->
	</div>
</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>