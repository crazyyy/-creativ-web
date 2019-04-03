// Avoid `console` errors in browsers that lack a console.
(function () {
  var method
  var noop = function () {}
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn"
  ]
  var length = methods.length
  var console = (window.console = window.console || {})

  while (length--) {
    method = methods[length]

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop
    }
  }
})()
if (typeof jQuery === "undefined") {
  console.warn("jQuery hasn't loaded")
} else {
  console.log("jQuery " + jQuery.fn.jquery + " has loaded")
}
// Place any jQuery/helper plugins in here.

var hdiv = new Array('.d-hero', '.d-contact', '.d-films', '.d-theatre', '.d-resume', '.d-photo', '.d-news',
  '.d-video');

function opcl(arr, e) {
  if ($(e).css('display') == 'none') {
    for (var i in arr) {
      $(arr[i]).fadeOut();
    }
    $(e).fadeIn();
    $("html, body,.d-contact,.d-films,.d-theatre,.d-resume,.d-photo,.d-news,.d-video").animate({
      scrollTop: 0
    }, 0);
    return false;
  }
}

$('.special').featherlight({
  resetCss: true
});

$('.mtm').click(function () {
  $("html, body,.d-contact,.d-films,.d-theatre,.d-resume,.d-photo,.d-news,.d-video").animate({
    scrollTop: 0
  }, 0);
  return false;
});

/** Document Ready Functions **/
/********************************************************************/

$(document).ready(function () {

  // Resive video
  scaleVideoContainer();

  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  // initBannerVideoSize('.video-container video');

  $(window).on('resize', function () {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .poster img');
    scaleBannerVideoSize('.video-container .filter');
    // scaleBannerVideoSize('.video-container video');
  });

});

/** Reusable Functions **/
/********************************************************************/
function scaleVideoContainer() {
  var height = $(window).height();
  var unitHeight = parseInt(height) + 'px';
  $('.homepage-hero-module').css('height', unitHeight);
}

function initBannerVideoSize(element) {
  $(element).each(function () {
    $(this).data('height', $(this).height());
    $(this).data('width', $(this).width());
  });
  scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {
  var windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    videoWidth,
    videoHeight;

  // console.log(windowHeight);

  $(element).each(function () {
    console.log(element)
    var videoAspectRatio = $(this).data('height') / $(this).data('videoWidth'),
      windowAspectRatio = windowHeight / windowWidth;
    if (videoAspectRatio > windowAspectRatio) {
      videoWidth = windowWidth;
      videoWidth2 = videoWidth / 100;
      videoHeight = videoWidth * videoAspectRatio;
      $(this).css({
        'top': 0,
        'margin-left': 0
      });
    } else {
      videoHeight = windowHeight;
      videoWidth = videoHeight / videoAspectRatio;
      videoWidth2 = videoWidth / 100;
      $(this).css({
        'margin-top': 0,
        'margin-left': 0
      });
    }

    $(this).width(videoWidth + videoWidth2).height(videoHeight);
    $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
  });
}

jQuery(document).ready(function ($) {
  var $all_oembed_videos = $("iframe[src*='youtube'], iframe[src*='vimeo']");
  $all_oembed_videos.each(function () {
    $(this).removeAttr('height').removeAttr('width').wrap("<div class='embed-container'></div>");
  });
});

jQuery(function () {
  jQuery("a.bla-1").YouTubePopUp();
  jQuery("a.bla-2").YouTubePopUp({
    autoplay: 0
  }); // Disable autoplay
});

$('.button-collapse').sideNav({
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true, // Choose whether you can drag to open on touch screens,
});
$(".mtt").sideNav('hide');
$(".mtt").sideNav('destroy');
$(document).ready(function () {
  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  });
});

$('.mtm').click(function () {
  $("html, body,.d-contact,.d-films,.d-theatre,.d-resume,.d-photo,.d-news,.d-video").animate({
    scrollTop: 0
  }, 0);
  return false;
});

jQuery(function () {
  jQuery(".demo").videoBox({
    controls: 2
  });
});
