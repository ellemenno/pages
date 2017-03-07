collection_tabs_init = function() {
  $('#collection-tabs .item').tab({
    history: true,
    historyType: 'hash',
  });
  $('.ui.accordion').accordion();
};

$(collection_tabs_init);
