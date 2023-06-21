---
title: Hexo中Buttefly主题美化进阶续篇（十一）
categories:
  - 博客搭建
tags:
  - Hexo
  - Butterfly
cover: 'https://moonshuo.cn/cover/12.jpg'
swiper_index: 90
date: 2022-12-06
abbrlink: 12667
---

原文地址，阅读效果更佳：[Hexo中Buttefly主题美化进阶续篇（十一） | 偷掉月亮 (moonshuo.cn)](https://moonshuo.cn/posts/12667.html)

大家好，我是阿硕，专注与后端，略懂前端的一个菜鸟程序猿，今天将为大家讲述Butterfly主题的我们页面的整体美化，其实前面已经出过两个这样的美化，但是随着时间的交替，发现可能适合我们的美化，这里将大家可以自由进行选择

# 个人卡片背景图

[Hexo中Buttefly主题美化进阶（八） | 偷掉月亮 (moonshuo.cn)](https://moonshuo.cn/posts/1481.html)，这一篇文章中我们讲述过将butterfly主题的个人卡片背景图设置为渐变色，但是后续感觉有点突兀

```css
/*白天主题下的配置*/
#aside-content>.card-widget.card-info {
    /*换成自己图片的地址*/
    background-image: url('./bg.jpg');
    background-repeat: no-repeat;
    background-attachment: inherit;
    background-size: 100%
}
/*黑暗主题下的配置*/
[data-theme=dark] #aside-content>.card-widget.card-info {
    /*换成自己图片的地址*/
    background-image: url('./bbg.png') !important
}
```

效果展示（黑暗主题下就不贴图了）：

![image-20221128151720530](https://moonshuo.cn//images/202211281517650.png)

# 星空背景流星特效

新建universe.js,复制以下代码

```js
function dark() {
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var n, e, i, h, t = .05,
        s = document.getElementById("universe"),
        o = !0,
        a = "180,184,240",
        r = "226,225,142",
        d = "226,225,224",
        c = [];

    function f() {
        n = window.innerWidth, e = window.innerHeight, i = .216 * n, s.setAttribute("width", n), s.setAttribute("height", e)
    }

    function u() {
        h.clearRect(0, 0, n, e);
        for (var t = c.length, i = 0; i < t; i++) {
            var s = c[i];
            s.move(), s.fadeIn(), s.fadeOut(), s.draw()
        }
    }

    function y() {
        this.reset = function () {
            this.giant = m(3), this.comet = !this.giant && !o && m(10), this.x = l(0, n - 10), this.y = l(0, e), this.r = l(1.1, 2.6), this.dx = l(t, 6 * t) + (this.comet + 1 - 1) * t * l(50, 120) + 2 * t, this.dy = -l(t, 6 * t) - (this.comet + 1 - 1) * t * l(50, 120), this.fadingOut = null, this.fadingIn = !0, this.opacity = 0, this.opacityTresh = l(.2, 1 - .4 * (this.comet + 1 - 1)), this.do = l(5e-4, .002) + .001 * (this.comet + 1 - 1)
        }, this.fadeIn = function () {
            this.fadingIn && (this.fadingIn = !(this.opacity > this.opacityTresh), this.opacity += this.do)
        }, this.fadeOut = function () {
            this.fadingOut && (this.fadingOut = !(this.opacity < 0), this.opacity -= this.do / 2, (this.x > n || this.y < 0) && (this.fadingOut = !1, this.reset()))
        }, this.draw = function () {
            if (h.beginPath(), this.giant) h.fillStyle = "rgba(" + a + "," + this.opacity + ")", h.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1);
            else if (this.comet) {
                h.fillStyle = "rgba(" + d + "," + this.opacity + ")", h.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1);
                for (var t = 0; t < 30; t++) h.fillStyle = "rgba(" + d + "," + (this.opacity - this.opacity / 20 * t) + ")", h.rect(this.x - this.dx / 4 * t, this.y - this.dy / 4 * t - 2, 2, 2), h.fill()
            } else h.fillStyle = "rgba(" + r + "," + this.opacity + ")", h.rect(this.x, this.y, this.r, this.r);
            h.closePath(), h.fill()
        }, this.move = function () {
            this.x += this.dx, this.y += this.dy, !1 === this.fadingOut && this.reset(), (this.x > n - n / 4 || this.y < 0) && (this.fadingOut = !0)
        }, setTimeout(function () {
            o = !1
        }, 50)
    }

    function m(t) {
        return Math.floor(1e3 * Math.random()) + 1 < 10 * t
    }

    function l(t, i) {
        return Math.random() * (i - t) + t
    }
    f(), window.addEventListener("resize", f, !1),
        function () {
            h = s.getContext("2d");
            for (var t = 0; t < i; t++) c[t] = new y, c[t].reset();
            u()
        }(),
        function t() {
            document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark' && u(), window.requestAnimationFrame(t)
        }()
};
dark()
```

在自定义css文件下，复制以下的代码

```css
/* 背景宇宙星光  */
#universe{
  display: block;
  position: fixed;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}
```

<font color='red'>最终在butterfly主题配置文件下引入上面的css文件与js文件,注意第一行一定不能遗忘</font>

```yaml
 #星空特效
     - <canvas id="universe"></canvas>
     - <script defer src="/js/universe.js"></script>
```

# 背景透明设置修复

在[Hexo中Buttefly主题美化进阶（八） | 偷掉月亮 (moonshuo.cn)](https://moonshuo.cn/posts/1481.html)中已经说到了怎么设置透明度，<font color='red'>但是发现了一个问题，很多的教程中在我们设置背景透明的时候，将文章的颜色也设置了，在我们黑白变色的时候，发现文章的颜色并不会改变，但是发现字体变为白色了！！！！</font>这样的话整体会阅读性很差，那么问题来到我们怎么将黑色主题不同设置！！！

{% tabs  更改方案%}

<!-- tab 旧方案-->

前面的个人卡片背景图给了我启示，重要的就是[data-theme=dark]，那么我们尝试进行设置，发现这样在不同的主题下，可以展现不同的颜色，成功！！！！

```css
.layout>#post{
    background: rgba(255,255,255,.8);
}
#aside-content>.sticky_layout>.card-widget{
    background: rgba(255,255,255,.8);
}
/*侧边栏页面*/
#aside-content>.card-widget  {
	background: rgba(255,255,255,0.8);
}
[data-theme=dark] #aside-content>.card-widget  {
	background: rgba(22, 18, 18, 0.8);
}
[data-theme=dark] #aside-content>.sticky_layout>.card-widget{
    background: rgba(25,25,25,.8);
}
[data-theme=dark] .layout>#post{
    background: rgba(25,25,25,.8);
}
```

<!-- endtab -->



<!-- tab 新方案-->

新方案参考了Fomalhaut在双栏设置的css设置，同时按照自己的喜好去除了一些配置，添加了一些边框等等

```css
:root {
	--trans-light: rgba(255, 255, 255, 0.88);
	--trans-dark: rgba(25, 25, 25, 0.88);
	--border-style: 1px solid rgb(169, 169, 169);
	--backdrop-filter: blur(5px) saturate(150%);
  }
  
  /* 首页文章卡片 */
  #recent-posts > .recent-post-item {
	background: var(--trans-light);
	border-radius: 25px;
	border: var(--border-style);
  }
  
  /* 首页侧栏卡片 */
  #aside-content .card-widget {
	background: var(--trans-light);
	border-radius: 18px;
	border: var(--border-style);
  }
  
  /* 文章页、归档页、普通页面 */
  div#post,
  div#page,
  div#archive {
	background: var(--trans-light);
	border: var(--border-style);
	border-radius: 20px;
	--border-style: 2px solid rgb(82, 224, 132);
  }

  
  /* 导航栏 */
  #page-header.nav-fixed #nav {
	background: rgba(255, 255, 255, 0.88);
  }
  
  [data-theme="dark"] #page-header.nav-fixed #nav {
	background: rgba(0, 0, 0, 0.7) !important;
  }
  
  /* 夜间模式遮罩 */
  [data-theme="dark"] #recent-posts > .recent-post-item,
  [data-theme="dark"] #aside-content .card-widget,
  [data-theme="dark"] div#post,
  [data-theme="dark"] div#archive,
  [data-theme="dark"] div#page {
	background: var(--trans-dark);
  }
  
  
  /* 夜间模式页脚页头遮罩透明 */
  [data-theme="dark"] #footer::before {
	background: transparent !important;
  }
  [data-theme="dark"] #page-header::before {
	background: transparent !important;
  }
  
  /* 阅读模式 */
  .read-mode #aside-content .card-widget {
	background: rgba(118, 238, 152, 0.5) !important;
  }
  .read-mode div#post {
	background: rgba(114, 227, 146, 0.5) !important;
  }
  
  /* 夜间模式下的阅读模式 */
  [data-theme="dark"] .read-mode #aside-content .card-widget {
	background: rgba(25, 25, 25, 0.9) !important;
	color: #ffffff;
  }
  [data-theme="dark"] .read-mode div#post {
	background: rgba(25, 25, 25, 0.9) !important;
	color: #ffffff;
  }
```

<!-- endtab -->

{% endtabs %}

# 昼夜切换动画

新建..\themes\butterfly\layout\includes\sun_moon.pug，这里实质上是一个动画，通过js操纵这个动画效果

```css
svg(aria-hidden='true', style='position:absolute; overflow:hidden; width:0; height:0')
  symbol#icon-sun(viewBox='0 0 1024 1024')
    path(d='M960 512l-128 128v192h-192l-128 128-128-128H192v-192l-128-128 128-128V192h192l128-128 128 128h192v192z', fill='#FFD878', p-id='8420')
    path(d='M736 512a224 224 0 1 0-448 0 224 224 0 1 0 448 0z', fill='#FFE4A9', p-id='8421')
    path(d='M512 109.248L626.752 224H800v173.248L914.752 512 800 626.752V800h-173.248L512 914.752 397.248 800H224v-173.248L109.248 512 224 397.248V224h173.248L512 109.248M512 64l-128 128H192v192l-128 128 128 128v192h192l128 128 128-128h192v-192l128-128-128-128V192h-192l-128-128z', fill='#4D5152', p-id='8422')
    path(d='M512 320c105.888 0 192 86.112 192 192s-86.112 192-192 192-192-86.112-192-192 86.112-192 192-192m0-32a224 224 0 1 0 0 448 224 224 0 0 0 0-448z', fill='#4D5152', p-id='8423')
  symbol#icon-moon(viewBox='0 0 1024 1024')
    path(d='M611.370667 167.082667a445.013333 445.013333 0 0 1-38.4 161.834666 477.824 477.824 0 0 1-244.736 244.394667 445.141333 445.141333 0 0 1-161.109334 38.058667 85.077333 85.077333 0 0 0-65.066666 135.722666A462.08 462.08 0 1 0 747.093333 102.058667a85.077333 85.077333 0 0 0-135.722666 65.024z', fill='#FFB531', p-id='11345')
    path(d='M329.728 274.133333l35.157333-35.157333a21.333333 21.333333 0 1 0-30.165333-30.165333l-35.157333 35.157333-35.114667-35.157333a21.333333 21.333333 0 0 0-30.165333 30.165333l35.114666 35.157333-35.114666 35.157334a21.333333 21.333333 0 1 0 30.165333 30.165333l35.114667-35.157333 35.157333 35.157333a21.333333 21.333333 0 1 0 30.165333-30.165333z', fill='#030835', p-id='11346')
```

新建..\themes\butterfly\source\css\_layout\sun_moon.styl

```css
.Cuteen_DarkSky,
.Cuteen_DarkSky:before
  content ''
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index 88888888

.Cuteen_DarkSky
  background linear-gradient(#feb8b0, #fef9db)
  &:before
    transition 2s ease all
    opacity 0
    background linear-gradient(#4c3f6d, #6c62bb, #93b1ed)

.DarkMode
  .Cuteen_DarkSky
    &:before
      opacity 1

.Cuteen_DarkPlanet
  z-index 99999999
  position fixed
  left -50%
  top -50%
  width 200%
  height 200%
  -webkit-animation CuteenPlanetMove 2s cubic-bezier(0.7, 0, 0, 1)
  animation CuteenPlanetMove 2s cubic-bezier(0.7, 0, 0, 1)
  transform-origin center bottom


@-webkit-keyframes CuteenPlanetMove {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes CuteenPlanetMove {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.Cuteen_DarkPlanet
  &:after
    position absolute
    left 35%
    top 40%
    width 9.375rem
    height 9.375rem
    border-radius 50%
    content ''
    background linear-gradient(#fefefe, #fffbe8)

.search
  span
    display none

.menus_item
  a
    text-decoration none!important
//按钮相关，对侧栏按钮做过魔改的可以调整这里的数值
.icon-V
  padding 5px
```

新建..\themes\butterfly\source\js\sun_moon.js

```js
function switchNightMode() {
  document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),
    setTimeout(function() {
      document.querySelector('body').classList.contains('DarkMode') ? (document.querySelector('body').classList.remove('DarkMode'), localStorage.setItem('isDark', '0'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')) : (document.querySelector('body').classList.add('DarkMode'), localStorage.setItem('isDark', '1'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')),
        setTimeout(function() {
          document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition = 'opacity 3s';
          document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity = '0';
          setTimeout(function() {
            document.getElementsByClassName('Cuteen_DarkSky')[0].remove();
          }, 1e3);
        }, 2e3)
    })
  const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  if (nowMode === 'light') {
    activateDarkMode()
    saveToLocal.set('theme', 'dark', 2)
    GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')
  } else {
    activateLightMode()
    saveToLocal.set('theme', 'light', 2)
    document.querySelector('body').classList.add('DarkMode'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')
  }
  // handle some cases
  typeof utterancesTheme === 'function' && utterancesTheme()
  typeof FB === 'object' && window.loadFBComment()
  window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
}
```

修改..\themes\butterfly\layout\includes\head.pug，引入文件

```di
//- 昼夜模式切换动画
include ./sun_moon.pug
```

修改\themes\butterfly\layout\includes\rightside.pug

```diff
  when 'translate'
    if translate.enable
      button#translateLink(type="button" title=_p('rightside.translate_title'))= translate.default
  when 'darkmode'
    if theme.darkmode.enable && theme.darkmode.button
-     button#darkmode(type="button" title=_p('rightside.night_mode_title'))
-       i.fas.fa-adjust
+     a.icon-V.hidden(onclick='switchNightMode()',  title=_p('rightside.night_mode_title'))
+       svg(width='25', height='25', viewBox='0 0 1024 1024')
+         use#modeicon(xlink:href='#icon-moon')
```

最后一步，引入..\themes\butterfly\_config.yml

```yaml
  - <script src="/js/sun_moon.js" async></script>
```

# 参考文章

[Hexo博客 | 如何让你的博客拥有星空背景和流星特效 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1917951)

[【Hexo博客】添加Butterfly主题昼夜模式转换动画 | 百里飞洋 (meta-code.top)](https://blog.meta-code.top/2022/06/19/2022-74/)
