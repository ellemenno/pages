sidebar_init = function() {
  $('#sidebar-retractable')
  .sidebar({
    closable: false,
    dimPage: false,
    transition: 'push',
    context: $('.ui.pushable.segment'),
  })
  .sidebar('attach events', '#title .button.item', 'toggle')
  ;

  $('#sidebar-fixed')
    .visibility({
      type   : 'fixed',
      offset : 15
    })
  ;
};

$(sidebar_init);

ensure_mobile_view = function() {
  if (0 == $('#sidebar-retractable').has('#indices').length) {
    $('#indices').appendTo( $('#sidebar-retractable') );
  }
};
ensure_desktop_view = function() {
  if (0 == $('#sidebar-fixed').has('#indices').length) {
    $('#indices').appendTo( $('#sidebar-fixed') );
  }
  if ($('#sidebar-retractable').sidebar('is visible')) {
    $('#sidebar-retractable').sidebar('hide');
  }
};
check_sidebar_visibility = function() {
  if ($('#sidebar-fixed').css('display') == 'none') ensure_mobile_view();
  else ensure_desktop_view();
};

set_resize_handler = function() {
  check_sidebar_visibility();
  $(window).resize(check_sidebar_visibility);
};

$(set_resize_handler);
