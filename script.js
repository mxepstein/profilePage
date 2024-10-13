/* Parallax Header Stuff */
function parallax_height() {
  var scroll_top = $(this).scrollTop();
  var sample_section_top = $(".mxS2").offset().top;
  var header_height = $(".mxH2").outerHeight();
  $(".mxS2").css({ "margin-top": header_height });
  $(".mxH").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function() {
  parallax_height();
});
$(window).resize(function() {
  parallax_height();
});

/* Lower the volume of the birds */
var audio = document.getElementById("mysounds");
audio.volume = 0.2;