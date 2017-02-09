function stickyRelocate() {
    var windowTop = $(window).scrollTop();
    var divTop = $('#sticky-anchor').offset().top;
    if (windowTop > divTop) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').height($('#sticky').outerHeight());
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}

$(function() {
  $(window).scroll(stickyRelocate);
  stickyRelocate();

  $('.static-link').click(e => {
    e.preventDefault();
  });

});

var dir = 1;
var MIN_TOP = 200;
var MAX_TOP = 350;

function autoscroll() {
    var windowTop = $(window).scrollTop() + dir;
    if (windowTop >= MAX_TOP) {
        windowTop = MAX_TOP;
        dir = -1;
    } else if (windowTop <= MIN_TOP) {
        windowTop = MIN_TOP;
        dir = 1;
    }
    $(window).scrollTop(windowTop);
    window.setTimeout(autoscroll, 100);
}
