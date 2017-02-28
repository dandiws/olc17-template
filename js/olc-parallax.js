$(document).ready(function() {
  function parallax(elem) {
    var scroll=$(window).scrollTop();
    var scrollView=scroll+$(window).height();
    var elemtop=elem.offset().top;
    var elemDiss=elemtop+elem.height()+$(window).height();
    var distance=elemDiss-elemtop;
    var moving=(100/distance)*(scrollView-elemtop);
    if (elemtop<$(window).height()) {
      moving=(100/(elemtop+elem.height()))*scroll*0.5;
      elem.css('background-position-y', (100-moving)+'%');
    }
    else if (scrollView>=elemtop) {
      elem.css('background-position-y', (100-moving)+'%');
    }
  }
  $(window).scroll(function() {
    parallax($('header'));
  });
  function min(el) {
  }
  $('#bbb').click(function() {
    min($('#txtt'));
  });
});
