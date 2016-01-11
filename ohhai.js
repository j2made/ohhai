/**
 * OHHAI
 * -----
 * Add a class to element once it enters the viewport.
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

(function( $ ) {
  $.fn.inView = function(options) {
    // Set default Options
    var defaults = {
      elTrigger: 'top',       // 'top', 'bottom'
      triggerOffset: 0,       // int, pixels the trigger should be delayed.
      inViewClass: 'oh-hai'   // class name that should be added
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

        if(opts.elTrigger === 'bottom') {
          elTop = $this.offset().top + opts.triggerOffset + $this.outerHeight();
        } else {
          elTop = $this.offset().top + opts.triggerOffset;
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
}( jQuery ));