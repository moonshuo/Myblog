hexo.extend.helper.register('catalog_list', function (type) {
    let html = ``
    hexo.locals.get(type).map(function (item) {
      html += `
      <div class="catalog-list-item" id="/${item.path}">
        <a href="/${item.path}">${item.name}<sup>${item.length}</sup></a>
      </div>
      `
    })
    return html
  })

// 最新文章
hexo.extend.helper.register('newPost', function() {
    let name, time;
    hexo.locals.get('posts').map((item, index) => {
        if (index == 0) name = item.title, time = item.date
        else if (item.date > time) { name = item.title, time = item.date }
    });
    return name
})