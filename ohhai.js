/**
 * OHHAI
 * -----
 * Add a class to an element once it enters the viewport.
 * Useful for Fading in elements on scroll with CSS and whatnot.
 *
 * @author:   Shaun M Baer / J2made
 * @link:     https://github.com/iamhexcoder
 * @repo:     https://github.com/j2made/ohhai
 * @issues:   https://github.com/j2made/ohhai/issues
 * @license:  MIT
 * @version:  1.0.0
 *
 */

(function( $, window, document, undefined ) {
  $.fn.ohhai = function(options) {
    // Set default Options
    var defaults = {
      elTrigger: 'top',       // `top` or `bottom`
      triggerOffset: 0,       // distance the trigger should be delayed.
      offsetValue: 'px',      // value type for offest, `px` or `percentage`
      inViewClass: 'visible'  // class name that should be added
    };
    var opts      = $.extend( {}, defaults, options );
    var selector  = this.selector;
    var winBottom = $(window).scrollTop() + $(window).height();
    var elTop;

    /**
     * Determine position of element.
     * If trigger point is above Viewport, add class.
     */
    function fade_in() {
      $(selector).each( function(){
        $this = $(this);
        thisOffest = opts.triggerOffset;


        // Convert offset to percentage if necessary
        if(opts.offsetValue === 'percentage') {
          thisOffest = ( ( opts.triggerOffset / 100) * $this.outerHeight() );
        }

        if(opts.elTrigger === 'bottom') {
          elTop = $this.offset().top + thisOffest + $this.outerHeight();
        } else {
          elTop = $this.offset().top + thisOffest;
        }

        if( winBottom > elTop ){
          $this.addClass(opts.inViewClass);
        }
      });
    }


    /**
     * When the DOM is ready, make it so.
     */
    $(document).ready(function() {
      fade_in();

      /**
       * Whenever the window is scrolled, make it so.
       */
      $(window).scroll( function(){
        winBottom = $(window).scrollTop() + $(window).height();
        fade_in();
      });

    });

  };
}( jQuery, window, document ));