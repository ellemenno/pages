pkg_search_init = function() {
  var search_content = [
    {% for _entry in site.data.docfiles %}
    {% assign _type = _entry[0] %}
    {% assign _files = _entry[1] %}
    {% for _file in _files %}{% if _file.name %}{ title: '{{ _file.name }}' },
    {% endif %}{% endfor %}
    {% endfor %}
  ];

  $('#search').search({ source: search_content });
};

$(window).on( "load", pkg_search_init )
