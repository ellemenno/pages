pkg_search_init = function() {
  var search_content = [
  {% for collection in site.collections %}
  {% unless collection.label == 'posts' %}
  {% for doc in collection.docs %}
    {% assign title = doc.title %}
    {% capture url %}{{ doc.url }}#/{{ collection.label | downcase }}/{% endcapture %}
    {% case doc.layout %}
      {% when 'package' %}
         {% assign title = doc.module %}
      {% when 'type' %}
         {% assign title = doc.name %}
    {% endcase %}
    { title: '{{ title }}', url: '{{ site.baseurl }}{{ url }}' },
  {% endfor %}
  {% endunless %}
  {% endfor %}
  ];

  // urls are auto-followed, so no callback needed
  $('#search').search({
    source: search_content,
    selectFirstResult: true,
  });

  // set up shortut key for search input focus
  Mousetrap.bind('s', function() { $( '#search .prompt' ).focus(); return false; });
};

$(window).on( 'load', pkg_search_init )
