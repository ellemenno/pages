pkg_search_init = function() {
  var search_content = [
  {% for collection in site.collections %}
  {% unless collection.label == 'posts' %}
  {% for doc in collection.docs %}
    {% case doc.layout %}
      {% when 'package' %}
         {% assign title = doc.module %}
      {% when 'type' %}
         {% assign title = doc.name %}
      {% else %}
         {% assign title = doc.title %}
    {% endcase %}
    { title: '{{ title }}', url: '{{ doc.url }}' },
  {% endfor %}
  {% endunless %}
  {% endfor %}
  ];

  // urls are auto-followed, so no callback needed
  $('#search').search({
    source: search_content,
    selectFirstResult: true
  });

  // set up shortut key for search input focus
  Mousetrap.bind('s', function() { $( "#search .prompt" ).focus(); return false; });
};

$(window).on( "load", pkg_search_init )
