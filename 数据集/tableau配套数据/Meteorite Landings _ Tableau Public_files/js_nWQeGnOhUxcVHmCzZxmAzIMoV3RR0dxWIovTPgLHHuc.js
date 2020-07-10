/**
 * Display a message highlighting the language drop down when the browser's
 * language preference does not match the current page and a translation exists.
 */
(function($) {
  $(document).ready(function() {
    var maxRepeats = parseInt(Drupal.settings.lang_dropdown_remind.repeat),
        repeated = parseInt($.cookie('langDropdownReminded')) || 0;

    // Ensure we only show the message as many times as specified.
    if (repeated < maxRepeats) {
      Drupal.getLanguagePreference(function(langPref) {
        // Support XHTML and HTML5 language identification methods.
        var docLang = $('html').attr('xml:lang') || $('html').attr('lang'),
            langOnly = langPref.substr(0, 2);

        // We care if the language preference and document language don't match.
        if (langOnly.length === 2 && docLang.indexOf(langOnly) === -1) {
          // Support the following language selectors:
          // 1) Core Language Switcher
          // 2) Language Switcher Dropdown (lang_dropdown 1.x)
          // 3) Language Switcher Dropdown (lang_dropdown 2.x)
          var $langLink = $('.language-switcher-locale-url li[class~="' + langOnly + '"] a,' +
                            '#lang-dropdown-form input[name^="' + langOnly + '"],' +
                            '#lang_dropdown_form_language input[name^="' + langOnly + '"]'),
              translationExists = false;

          if ($langLink.length) {
            // Core language switcher.
            if ($langLink.attr('href') !== undefined && $langLink.attr('href').indexOf('node') === -1) {
              translationExists = true;
            }
            // Language switcher dropdown (lang_dropdown).
            else if ($langLink.attr('value') !== undefined && $langLink.attr('value').indexOf('node') === -1) {
              translationExists = true;
            }
          }

          // Furthermore, we only care if an appropriate translation exists.
          if (translationExists) {
            // Create, insert, and display the message.
            var message = Drupal.settings.lang_dropdown_remind.messages[langOnly] || Drupal.settings.lang_dropdown_remind.messages['default'];
            var closeMsg = Drupal.settings.lang_dropdown_remind.close[langOnly] || Drupal.settings.lang_dropdown_remind.close['default'];
            var close = '<a id="langdropdown-reminder-close">' + closeMsg + '</a>';
            var $markup = $('<div id="langdropdown-reminder">' +
              Drupal.settings.lang_dropdown_remind.markup.replace('!message', message).replace('!close_button', close) +
              '</div>');
            $markup.hide();
            $(Drupal.settings.lang_dropdown_remind.prependto).prepend($markup);
            // Triggering a custom event that can be used for custom interaction
            // in a theme.
            $(Drupal.settings.lang_dropdown_remind.prependto).trigger('lang_dropdown_remind_ready');

            $('#langdropdown-reminder').slideDown();

            // Allow something to trigger opening of the language dropdown.
            $('#trigger-langdropdown').click(function() {$('#edit-lang-dropdown-select_child').toggle();});

            // Behavior for the "close" button.
            $('#langdropdown-reminder-close').click(function() {
              // Trigger a custom event when the language bar is about to be closed. Useful for styling in a theme.
              $(Drupal.settings.lang_dropdown_remind.prependto).trigger('lang_dropdown_remind_close');

              $('#langdropdown-reminder').slideUp();

              // Ensure the language switcher dropdown is also gone (otherwise,
              // it would be awkwardly stuck open with no way to close it).
              $('#edit-lang-dropdown-select_child').css('display', '');

              // If a user physically clicked the "close" button, don't ever
              // display the reminder again (for this session).
              $.cookie('langDropdownReminded', maxRepeats, {path: '/'});
            });

            // Increment the repeated value in the cookie.
            $.cookie('langDropdownReminded', ++repeated, {path: '/'});
          }
        }
      });
    }
  });
})(jQuery);
;
/*
 * This uses the Facebook load pattern to load an array of external scripts
 * asynchronously.
 */

(function(w, d, s) {
  var easy_loader = function(){
    var js, fjs = d.getElementsByTagName(s)[0],
      socialjs = w.Drupal.settings.easy_social.external_scripts,
      load = function(url, id) {
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.src = url; js.id = id; js.async = true;
        fjs.parentNode.insertBefore(js, fjs);
      };

    for (var i=0,len=socialjs.length; i < len; i++) {
      load(socialjs[i], 'es_scr'+i);
    }
  };

  if (w.addEventListener) {
    w.addEventListener('load', easy_loader, false);
  }
  else if (w.attachEvent) {
    w.attachEvent('onload', easy_loader);
  }
}(window, document, 'script'));
;
