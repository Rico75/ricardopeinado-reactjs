var $ = jQuery.noConflict();

$(document).ready(function ($) {
    "use strict";

    /////////////////// Progress Bar ////////////////////////////
    $('.skill-shortcode').appear(function () {
        $('.progress').each(function () {
            $('.progress-bar').css('width',  function () { return ($(this).attr('data-percentage') + '%')});
        });
    }, {accY: -100});

  //////////////////// Facebook SDK  /////////////////////////////
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1253707201409167',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  //////////////////// End Facebook SDK  ///////////////////////////////

});
