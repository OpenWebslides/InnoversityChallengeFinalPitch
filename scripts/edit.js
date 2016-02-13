$(function () {
  var slide = $('#studenten').on('mousedown', function () {
    slide.attr('contentEditable', true)
         .on('keydown', function disableHotkeys(event) {
           event.stopPropagation();
           if (event.keyCode === 27) {
             slide.attr('contentEditable', false);
             slide.off('keydown', disableHotkeys);
           }
         });
  });

  $('.accept').click(function (event) {
    event.preventDefault();
    $('.popup').fadeOut();
  });
});
