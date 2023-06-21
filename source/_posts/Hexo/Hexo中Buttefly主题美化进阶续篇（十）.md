---
title: Hexo中Buttefly主题美化进阶续篇（十）
categories:
  - 博客搭建
tags:
  - Hexo
  - Butterfly
cover: 'https://moonshuo.cn/cover/11.jpg'
abbrlink: 25274
date: 2022-12-03
swiper_index: 91
---

原文地址：[Hexo中Buttefly主题美化进阶续篇（十） | 偷掉月亮 (moonshuo.cn)](https://moonshuo.cn/posts/25274.html)

大家好，我是阿硕，专注与后端，略懂前端的一个菜鸟程序猿，今天将为大家讲述Butterfly主题的我们页面的整体美化，其实前面已经出过这个配置，但是由于字数的限制，只能再起一个篇章

# 双栏布局

效果

![image-20221117162655938](https://moonshuo.cn//images/202211171626192.png)

首先执行以下的命令

```bash
npm i hexo-butterfly-article-double-row --save
```

在网站的<font color='red'>根配置文件</font>下添加以下的代码

```yaml
#双栏美化
butterfly_article_double_row:
  enable: true
```

这样之后我们的页码会出现一个小bug，在自定义css文件中加入下面的代码

调整页码的位置

```css
/* 翻页按钮居中 */
#pagination {
	width: 100%;
	margin: auto;
  }
```

hexo clean,hexo g,hexo s即可完成

# 首页轮播图

首先执行以下的代码

```bash
npm install hexo-butterfly-swiper --save
```

在主配置文件中引入轮播图组件

```css
# hexo-butterfly-swiper
# see https://akilar.top/posts/8e1264d1/
swiper:
  enable: true # 开关
  priority: 5 # 过滤器优先权
  enable_page: all # 应用页面
  timemode: date # date/updated
  layout: # 挂载容器类型
    type: id
    name: recent-posts
    index: 0
  default_descr: 
  swiper_css: https://unpkg.zhimg.com/hexo-butterfly-swiper/lib/swiper.min.css
  swiper_js: https://unpkg.zhimg.com/hexo-butterfly-swiper/lib/swiper.min.js
  custom_css: https://unpkg.zhimg.com/hexo-butterfly-swiper/lib/swiperstyle.css
  custom_js: https://unpkg.zhimg.com/hexo-butterfly-swiper/lib/swiper_init.js
```

下面是博主的配置，博主将这些文件另存下载下来，放在了本地，大家可以自由选择

```yaml
swiper:
  enable: true # 开关
  priority: 5 # 过滤器优先权
  enable_page: all # 应用页面
  timemode: date # date/updated
  layout: # 挂载容器类型
    type: id
    name: recent-posts
    index: 0
  default_descr: 
  swiper_css: /css/swiper.min.css
  swiper_js: /js/swiper.min.js
  custom_css: /css/swiperstyle.css
  custom_js: /js/swiper_init.js
```

现在我们想要使文章进行轮播，那么现在我们需要在文章的写作时，在front_matter`中添加`swiper_index，数值越大，越首先进行出现

![image-20221117195425736](https://moonshuo.cn//images/202211171954775.png)

而关于描述的小心，大家同样可以添加description标签进行操作

# 今日诗词

在下面的位置创建，复制以下的代码..\themes\butterfly\layout\includes\widget\card_poem.pug

```css
#card-poem.card-widget
    #poem_sentence
    #poem_info
        #poem_dynasty
        #poem_author
script(src='https://cdn.jsdelivr.net/npm/js-heo@1.0.11/poem/jinrishici.js', charset='utf-8')
script(type='text/javascript').
  jinrishici.load(function(result) {
  var sentence = document.querySelector("#poem_sentence")
  var author = document.querySelector("#poem_author")
  var dynasty = document.querySelector("#poem_dynasty")

  var sentenceText = result.data.content
  sentenceText = sentenceText.substr(0, sentenceText.length - 1);
  sentence.innerHTML = sentenceText
  dynasty.innerHTML = result.data.origin.dynasty
  author.innerHTML = result.data.origin.author + '《' + result.data.origin.title + '》'
  });
```

引入组件

```css
!=partial('includes/widget/card_poem', {}, {cache: true})
```

...\themes\butterfly\layout\includes\widget\index.pug在index.pug中填写上述的代码

![image-20221118153128397](https://moonshuo.cn//images/202211181531471.png)

在主题配置文件中引入下面的代码

```yaml
  #诗词
     - <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/js-heo@1.0.11/mainColor/heoMainColor.css">
     - <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/js-heo@1.0.11/poem/poem.css">
```

大家有能力还是可以将这些文件存储在本地

# 原版文章渲染函数

博主根据原作者的修改，但是发现了一些bug，自己只能删除一些代码，达到一个效果，大家可以参考原作者[Butterfly 分类标签归档页增加文章索引 | Eurkon](https://blog.eurkon.com/post/27df86b.html)的修改，也可以根据博主进行修修改

## 更改方式

首先打开下面的文件，将第一行变为下面的代码

```css
mixin articleSort(posts, current)
```

## 修改归档、分类等页面

路径：..\themes\butterfly\layout\archive.pug

修改：

```css
+articleSort(page.posts)
修改为
+articleSort(page.posts, page.current)
```

路径：..themes\butterfly\layout\category.pug

```css
+articleSort(page.posts)
修改为
+articleSort(page.posts, page.current)
```

路径：..\themes\butterfly\layout\tag.pug

```css
+articleSort(page.posts)
修改为
+articleSort(page.posts, page.current)
```

## 增加文章索引样式

路径：..\themes\butterfly\source\css\_page\archives.styl

复制以下代码，注意格式，hexo 三连即可

```css
    &-index
      opacity: .5
      position: absolute
      top: .5rem
      right: .5rem
      font-style: italic
      font-size: 2.5rem
      line-height: 1.5rem
```

![image-20221118160914343](https://moonshuo.cn//images/202211181609374.png)

# 旋转小风车

在主题配置文件中，更改如下，下面对应的为小风车的编号，可以更改为自己的编号

```yaml
beautify:
  enable: true
  field: post # site/post
  title-prefix-icon: '\f863'
  title-prefix-icon-color: "#F47466"
```

复制以下代码到css文件中、

```css
/* 文章页H1-H6图标样式效果 */
/* 控制风车转动速度 4s那里可以自己调节快慢 */
h1::before,
h2::before,
h3::before,
h4::before,
h5::before,
h6::before {
  -webkit-animation: ccc 4s linear infinite;
  animation: ccc 4s linear infinite;
}
/* 控制风车转动方向 -1turn 为逆时针转动，1turn 为顺时针转动，相同数字部分记得统一修改 */
@-webkit-keyframes ccc {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-1turn);
    transform: rotate(-1turn);
  }
}
@keyframes ccc {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-1turn);
    transform: rotate(-1turn);
  }
}
/* 设置风车颜色 */
#content-inner.layout h1::before {
  color: #ef50a8;
  margin-left: -1.55rem;
  font-size: 1.3rem;
  margin-top: -0.23rem;
}
#content-inner.layout h2::before {
  color: #fb7061;
  margin-left: -1.35rem;
  font-size: 1.1rem;
  margin-top: -0.12rem;
}
#content-inner.layout h3::before {
  color: #ffbf00;
  margin-left: -1.22rem;
  font-size: 0.95rem;
  margin-top: -0.09rem;
}
#content-inner.layout h4::before {
  color: #a9e000;
  margin-left: -1.05rem;
  font-size: 0.8rem;
  margin-top: -0.09rem;
}
#content-inner.layout h5::before {
  color: #57c850;
  margin-left: -0.9rem;
  font-size: 0.7rem;
  margin-top: 0rem;
}
#content-inner.layout h6::before {
  color: #5ec1e0;
  margin-left: -0.9rem;
  font-size: 0.66rem;
  margin-top: 0rem;
}
/* s设置风车hover动效 6s那里可以自己调节快慢*/
#content-inner.layout h1:hover,
#content-inner.layout h2:hover,
#content-inner.layout h3:hover,
#content-inner.layout h4:hover,
#content-inner.layout h5:hover,
#content-inner.layout h6:hover {
  color: var(--theme-color);
}
#content-inner.layout h1:hover::before,
#content-inner.layout h2:hover::before,
#content-inner.layout h3:hover::before,
#content-inner.layout h4:hover::before,
#content-inner.layout h5:hover::before,
#content-inner.layout h6:hover::before {
  color: var(--theme-color);
  -webkit-animation: ccc 6s linear infinite;
  animation: ccc 6s linear infinite;
}
```

# 点击复制出现弹窗

2022年11月26日更新

## 自带的弹窗

其实这个butterfly主题自带弹窗功能，但是这个弹窗太丑了，在butterfly主题配置文件中,大家可以自行开启看一下，但是这个有点死板，不太灵活，大家想要配置可以看下这一篇文章

[snackbar弹窗的调用 | Sianx's Blog](https://sianx.com/posts/817b75fb/)

```yaml
# Snackbar (Toast Notification 彈窗)
# https://github.com/polonel/SnackBar
# position 彈窗位置
# 可選 top-left / top-center / top-right / bottom-left / bottom-center / bottom-right
snackbar:
  enable: fasle
  position: top-left
  bg_light: '#49b1f5' # The background color of Toast Notification in light mode
  bg_dark: '#1f1f1f' # The background color of Toast Notification in dark mode
```

## 自定义弹窗

相比较来说，博主还是喜欢自定义弹窗，样式和内容的更改都比较简单，这里使用的是jquery与toastr.js进行改编

首先在自定义js文件中添加下面的文件，更多的用法参考[GitHub - CodeSeven/toastr：简单的javascript toast通知](https://github.com/CodeSeven/toastr)

```js

document.addEventListener("copy", (function (e) {
    toastr.options = {
        /*关闭按钮是否开启 */  
        closeButton: false,  
        debug: false,  
        /*是否出现进度条 */
        progressBar: true, 
        /*出现的位置，top与left可以进行更改  */ 
        positionClass: "toast-top-left",  
        /*点击触发的函数，懂js的同学可以自行设置 */
        onclick: null,  
        /**持续的实践，动画实践等等 */
        showDuration: "300",  
        hideDuration: "300",  
        timeOut: "2500",  
        extendedTimeOut: "1000",
        /**出现的方式 */  
        showEasing: "swing",  
        hideEasing: "linear",  
        showMethod: "fadeIn",  
        hideMethod: "fadeOut"  
    };
    /**点击复制之后出现的文本，后面是标题 */
    toastr.success("如果转载，请保留原文链接哦(●ˇ∀ˇ●)","复制成功！！！");  
}));
```

然后在我们的butterfly主题配置文件中引入一下的js文件,还是有能力的小伙伴把文件存储在本地

```yaml
<link href="https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.min.css" rel="stylesheet">
# 自定义的js文件
<script src="/js/copy.js"></script>
```

在自定义css文件复制以下的内容，博主这里将totatr.css文件改编一些，源文件链接，大家也可以自己下载改编[原css地址](https://cdn.bootcdn.net/ajax/libs/toastr.js/2.1.4/toastr.css)，<font color='red'>在第135行可以插入图片，也可以插入动图，大小的话，大家更改图片像素大小即可，图片太大可能会不合适，</font>，还有这个是使用到了jquery，没有引入的小伙伴需要引入jquery，如果引入的话，就不需要引入了，建议还是存储在本地。

```js
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
```



```css
.toast-title {
  font-weight: bold;
}
.toast-message {
  -ms-word-wrap: break-word;
  word-wrap: break-word;
}
.toast-message a,
.toast-message label {
  color: #FFFFFF;
}
.toast-message a:hover {
  color: #CCCCCC;
  text-decoration: none;
}
.toast-close-button {
  position: relative;
  right: -0.3em;
  top: -0.3em;
  float: right;
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  -webkit-text-shadow: 0 1px 0 #ffffff;
  text-shadow: 0 1px 0 #ffffff;
  opacity: 0.8;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  filter: alpha(opacity=80);
  line-height: 1;
}
.toast-close-button:hover,
.toast-close-button:focus {
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.4;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
  filter: alpha(opacity=40);
}
.rtl .toast-close-button {
  left: -0.3em;
  float: left;
  right: 0.3em;
}
/*Additional properties for button version
 iOS requires the button element instead of an anchor tag.
 If you want the anchor version, it requires `href="#"`.*/
button.toast-close-button {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}
.toast-top-center {
  top: 0;
  right: 0;
  width: 100%;
}
.toast-bottom-center {
  bottom: 0;
  right: 0;
  width: 100%;
}
.toast-top-full-width {
  top: 0;
  right: 0;
  width: 100%;
}
.toast-bottom-full-width {
  bottom: 0;
  right: 0;
  width: 100%;
}
.toast-top-left {
  top: 12px;
  left: 12px;
}
.toast-top-right {
  top: 12px;
  right: 12px;
}
.toast-bottom-right {
  right: 12px;
  bottom: 12px;
}
.toast-bottom-left {
  bottom: 12px;
  left: 12px;
}
#toast-container {
  position: fixed;
  z-index: 999999;
  pointer-events: none;
  /*overrides*/
}
#toast-container * {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#toast-container > div {
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 15px 15px 15px 50px;
  width: 300px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
  border-radius: 3px 3px 3px 3px;
  background-position: 15px center;
  background-repeat: no-repeat;
  color: #0e0808;
  opacity: 1.0;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);
  filter: alpha(opacity=80);
}
#toast-container > div.rtl {
  direction: rtl;
  padding: 15px 50px 15px 15px;
  background-position: right 15px center;
}
#toast-container > div:hover {
  -moz-box-shadow: 0 0 12px #000000;
  -webkit-box-shadow: 0 0 12px #000000;
  box-shadow: 0 0 12px #000000;
  opacity: 1;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
  filter: alpha(opacity=100);
  cursor: pointer;
}

#toast-container > .toast-success {
  background-image: url("成功.png") !important;
}
#toast-container.toast-top-center > div,
#toast-container.toast-bottom-center > div {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
#toast-container.toast-top-full-width > div,
#toast-container.toast-bottom-full-width > div {
  width: 96%;
  margin-left: auto;
  margin-right: auto;
}
.toast {
  background-color: #030303;
}
.toast-success {
  background-color: #ffffff;
}
.toast-progress {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  background-color: #000000;
  opacity: 0.4;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=40);
  filter: alpha(opacity=40);
}
/*Responsive Design*/
@media all and (max-width: 240px) {
  #toast-container > div {
    padding: 8px 8px 8px 50px;
    width: 11em;
  }
  #toast-container > div.rtl {
    padding: 8px 50px 8px 8px;
  }
  #toast-container .toast-close-button {
    right: -0.2em;
    top: -0.2em;
  }
  #toast-container .rtl .toast-close-button {
    left: -0.2em;
    right: 0.2em;
  }
}
@media all and (min-width: 241px) and (max-width: 480px) {
  #toast-container > div {
    padding: 8px 8px 8px 50px;
    width: 18em;
  }
  #toast-container > div.rtl {
    padding: 8px 50px 8px 8px;
  }
  #toast-container .toast-close-button {
    right: -0.2em;
    top: -0.2em;
  }
  #toast-container .rtl .toast-close-button {
    left: -0.2em;
    right: 0.2em;
  }
}
@media all and (min-width: 481px) and (max-width: 768px) {
  #toast-container > div {
    padding: 15px 15px 15px 50px;
    width: 25em;
  }
  #toast-container > div.rtl {
    padding: 15px 50px 15px 15px;
  }
}
```

# 参考文章

[教程：butterfly 主题文章双栏布局插件 | 小冰博客 (zfe.space)](https://zfe.space/post/hexo-butterfly-article-double-row.html)

[Butterfly美化：今日诗词侧边栏小组件，中国传统诗词文化 | 张洪Heo (zhheo.com)](https://blog.zhheo.com/p/2ed9d8dd.html)

[Butterfly 分类标签归档页增加文章索引 | Eurkon](https://blog.eurkon.com/post/27df86b.html)

