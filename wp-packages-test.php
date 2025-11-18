<?php
/**
 * Plugin Name: WP Packages Test
 * Description: A plugin to demonstrate new WordPress build system.
 * Version: 1.0.0
 * Author: TheAminul
 * Author URI: https://profile.wordpress.org/theaminuldev/
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: wp-packages-test
 */


if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

require_once plugin_dir_path( __FILE__ ) . 'build/index.php';


function wpt_init() {
    // Main menu - WP Admin integrated page with route
    add_menu_page(
        'WP Packages Test',
        'WP Packages Test',
        'manage_options',
		'wp-packages-test',
        function() {
			echo '<div class="wrap"><h1>WP Packages Test</h1><div id="wpt-admin-app"></div></div>';
		},
        'dashicons-hammer',
        20
    );

}
add_action( 'admin_menu', 'wpt_init' );

function wpt_enqueue_scripts() {
    wp_enqueue_script( 'wpt-logger' );
	wp_enqueue_script( 'wpt-border' );	
}
add_action( 'admin_enqueue_scripts', 'wpt_enqueue_scripts' );
