pkg_search_init = function() {
  var search_content = [
    {% for pkg in (site.data.project.packages) %}{ title: '{{ pkg.title }}' },
    {% endfor %}
  ];

  $('#search').search({
    searchFields: ['title'],
    source: search_content
  });
};

$(pkg_search_init);