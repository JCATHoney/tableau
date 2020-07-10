/**
 * Defer image load magic that replaces the placeholder markup with the actual
 * image either on wondow load or document ready based on configuration.
 */
(function ($) {
  // Decide whether to use window load or document ready
  $(document).ready(function(){
    if (Drupal.settings.deferImage != undefined) {
      if (Drupal.settings.deferImage.deferTiming == 'load') {
        $(window).load(function() {
          loadImages();
        });
      } else {
        loadImages();
      }
    }
  });

  // Creates an image element with all attributes passed from the placeholder
  // element.
  function loadImages() {
    var defer_class = '.' + Drupal.settings.deferImage.deferClass,
        $defer_img = $(defer_class);
    if ($defer_img.length) {
      $defer_img.each(function(){
        var $this = $(this),
            src = $(this).data('defer-src'),
            attrs = 'src="' + src + '" ';
        $.each($this.data(), function(index, value) {
          if (index.indexOf('defer-') != -1) {
            attrs += index.replace('defer-', '') + '="' + value + '" ';
          }
        });
        $this.removeClass(defer_class).html('<img ' + attrs + '/>');
      });
    }
  }
})(jQuery);
;
(function ($) {
  Drupal.behaviors.gssAutocomplete = {
    attach: function(context, settings) {
      if (settings.gss.key == undefined) {
        return;
      }

      $('.block-search .form-item-search-block-form input.form-text, .gss .form-item-keys input.form-text, .block-search .form-search input.form-text')
        .focus(function () {
          this.select();
        })
        .mouseup(function (e) {
          e.preventDefault();
        })
        .autocomplete({
          position: {
            my: "left top",
            at: "left bottom",
            offset: "0, 5",
            collision: "none"
          },
          source: function (request, response) {
            $.ajax({
              url: "http://clients1.google.com/complete/search?q=" + request.term + "&hl=en&client=partner&source=gcsc&partnerid=" + settings.gss.key + "&ds=cse&nocache=" + Math.random().toString(),
              dataType: "jsonp",
              success: function (data) {
                response($.map(data[1], function (item) {
                  return {
                    label: item[0],
                    value: item[0]
                  };
                }));
              }
            });
          },
          autoFill: true,
          minChars: 0,
          select: function (event, ui) {
            $(this).closest('input').val(ui.item.value);
            $(this).closest('form').trigger('submit');
          }
        });
    }
  };
}(jQuery));
;
/**
 * Either returns or acts on user browser language preference, depending on what
 * parameters are passed.
 *
 * @param mixed async
 *   If a callable is passed, the callable will be called when a browser's
 *   language preference is determined, with the language preference as its only
 *   argument. Nothing will be returned. If a boolean false is passed, the check
 *   for language preference will be performed synchronously and the result
 *   returned.
 * @return
 *   If called with async=false, the language preference will be returned.
 *   Otherwise,
 */
(function($) {
  Drupal.getLanguagePreference = function (async) {
    var preference = '',
        langPref = $.cookie('langPref');

    // Only perform the HTTP request if the value isn't already known.
    if (!langPref) {
      // Perform a request for parsed accept-language header data.
      var ajaxAsync = (typeof async === 'boolean') ? async : true;
      jQuery.ajax({
        url: Drupal.settings.getLanguagePreferencePath,
        async: ajaxAsync,
        success: function (data) {
          preference = data[1] || 'und';

          // Store the language preference in a cookie to minimize requests.
          $.cookie('langPref', preference, {path: '/'});

          // Call the callback with the language preference.
          if (typeof async === 'function') {
            async(preference);
          }
        }
      });
    }
    else {
      // If we already have the value, just call the callback.
      if (typeof async === 'function') {
        async(langPref);
      }
    }

    // Only return a value if this method was intended to be called synchronously.
    if (typeof async === 'boolean' && !async) {
      return preference || langPref;
    }
  };
})(jQuery);
;
