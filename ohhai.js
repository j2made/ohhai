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
    var winBottom = $(window).scrollTop() + $(window).height();
    var selector  = this.selector;
    var elTop;

    // console.log(selector);


    /**
     * Determine position of element.
     * If trigger point is above Viewport, add class.
     */
    function fade_in() {
      $(selector).each( function(){

        var $this = $(this);
        var triggerOffset = opts.triggerOffset;
        var thisOffset = $this.offset();

        // console.log($this);

        // Convert offset to percentage if necessary
        if(opts.offsetValue === 'percentage') {
          triggerOffset = ( ( opts.triggerOffset / 100) * $this.outerHeight() );
        }

        if(opts.elTrigger === 'bottom') {
          elTop = thisOffset.top + triggerOffset + $this.outerHeight();
        } else {
          elTop = thisOffset.top + triggerOffset;
        }

        if( winBottom > elTop ){
          $this.addClass(opts.inViewClass);
        }
      });
    }


    /**
     * When the DOM is ready, make it so.
     */
    $(document).on( 'ready', function() {
      fade_in();
    });

    /**
     * Whenever the window is scrolled, make it so.
     */
    $(window).on('scroll', function(){
      winBottom = $(window).scrollTop() + $(window).height();
      fade_in();
    });

  };
}( jQuery, window, document ));