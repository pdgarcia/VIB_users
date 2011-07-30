(function ($) {
  Drupal.behaviors.VIB_user = {
      attach: function (context, settings) {
        $('.VIB-Page-img', context).hover(
        function () {
          $(this).stop().fadeTo("slow", 0.33);
        },
        function () {
          $(this).stop().fadeTo("slow", 1);
      });
    }
  };
})(jQuery);
