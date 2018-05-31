$(document).ready(function () {

  var numb = 0;
  var boxes = $('.box').length;
  $('.success').hide()

  function success(val) {
    var check = $(val).attr('data-check')
    if (check === 'false') {
      $(val).attr('data-check', 'true')
      $(val).text('OK')
      numb++;
      if (numb === boxes) {
        $('.success').fadeIn(300)
      }
    }
  }

  $('.hover').hover(function () {
    success(this)
  });

  $('.click').click(function () {
    success(this)

  });

  $('.double').dblclick(function () {
    success(this)
  });

  $('.right').contextmenu(function () {
    success(this)
  });

  $('.scroll').scroll(function () {
    success(this)
  })

  $('.scrollClick').mousedown(function (e) {
    if (e.which === 2) {
      e.preventDefault();
      success(this)
    }
  })

});
