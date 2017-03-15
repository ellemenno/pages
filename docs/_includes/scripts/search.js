pkg_search_init = function() {
  var search_content = [
  {% for collection in site.collections %}
  {% unless collection.label == 'posts' %}
  {% for doc in collection.docs %}
    {% case collection.label %}
      {% when 'api' %}
         {% assign title = doc.name %}
      {% else %}
         {% assign title = doc.title %}
    {% endcase %}
    { title: '{{ title }}' },
  {% endfor %}
  {% endunless %}
  {% endfor %}
  ];

  $('#search').search({ source: search_content });
};

$(window).on( "load", pkg_search_init )
