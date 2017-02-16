$(document).ready(function($) {
    "use strict";

        /* ======= Revolution slider ======= */
    if ($('.tt-banner').length > 0) {
        jQuery(".tt-banner").revolution({
            delay:3000,
            startwidth:848,
            startheight:565,
            onHoverStop:"off",
            hideThumbs:10,
            hideTimerBar:"on",
            navigationType:"none",
            navigationStyle:"preview1",
            fullWidth:"off",
            fullScreen:"off",
            fullScreenOffsetContainer: ""
        });
    }

});