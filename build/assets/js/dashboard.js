// WIDTH PROGRESS BAR
$('.dashboard-progress').each(function(){
  var currentProgress = $(this).attr('data-value');
  $(this).css('width', currentProgress + '%');
});

// COUNT ANIMATE
$('.counter').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).text()
  }, {
    duration: 2000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});

