---
title: Hexo中Buttefly主题配置(二)
categories:
  - 博客搭建
tags:
  - Hexo
  - Butterfly
abbrlink: 28148
date: 2022-11-10
swiper_index: 98
---

<font color='red'>注意git中粘贴为shift+insert键，而复制为ctrl+insert</font>

原文地址：[Hexo中Buttefly主题配置(二) | 偷掉月亮 (moonshuo.cn)](https://moonshuo.cn/posts/28148.html)

大家好，我是阿硕，专注与后端，略懂前端的一个菜鸟程序猿，今天将为大家讲述Butterfly的安装与主题配置。

# Butterfly安装

执行以下命令，安装稳定版本，这是国内的gitee，速度比较快

```Java
git clone -b master https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

安装成功

![image-20221029162300850](https://moonshuo.cn//images/202211011130297.png)

<font color='red'>安装重要的插件，由于butterfly主题与其他的主题使用的渲染方式不同，现在我们需要重新安装一个新的渲染插件</font>，执行以下命令，等待完成

```Java
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

![image-20221029163639142](https://moonshuo.cn//images/202211011130842.png)

## 更改主题，尝试启动

此时进入到themes，会发现多出来一个butterfly文件夹，此时我们回到最初的位置，找到config.yml文件，我们称这个最外围的配置文件为<font color='red'>主配置文件</font>

![image-20221029162556735](https://moonshuo.cn//images/202211011130789.png)

打开文件夹，找到，下面的这一行

![image-20221029162713569](https://moonshuo.cn//images/202211011130866.png)

将这个更改为butterfly，注<font color='red'>意这个名字一定要与我们themes文件下的想要使用的文件同名</font>，哪怕我们那个文件名称为‘哈哈哈’，那么这里也是‘哈哈哈’，但是不建议使用中文名称

![image-20221029162752626](https://moonshuo.cn//images/202211011130831.png)

执行以下命令，清除原来主题文件，然后重新生成文件，<font color='red'>hexo clean是清除原来的public文件，hexo g生成新的public文件，这样主题才能生效,hexo s是开启本地预览服务</font>

```Java
hexo clean
hexo g
hexo s
```

最终打开网页http://localhost:4000/，成功

![image-20221029163739375](https://moonshuo.cn//images/202211011130797.png)

# 完善配置

## 完善主配置文件配置

首先我们打开主配置文件

![image-20221029164727674](https://moonshuo.cn//images/202211011130824.png)

```Java
# Site
# 网站标题
title: '偷掉月亮'
#网站副标题,即我们网页标签对应的文字
subtitle: '我们一起去偷月亮吧'
#网站描述
description: '这是我的博客网站'
# 网站关键词，便于别人搜索到你
keywords: '偷掉月亮'
# 作者名称
author: '偷掉月亮的阿硕'
# 语言
language: zh-CN
#时区
timezone: Asia/Shanghai
```

![image-20221029165602446](https://moonshuo.cn//images/202211011130901.png)

```Java
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
# 自己网站的网址
url: https://moonshuo.cn/
# 永久链接，这里不建议使用这个，后面我们会进行优化
permalink: :year/:month/:day/:title/
permalink_defaults:
```

下面是各个文件的关系，比如分类，标签等等对应的文件夹名称，这里使用默认，不用更改

![image-20221029165725424](https://moonshuo.cn//images/202211011130420.png)

下面是我们的文章对应的配置，现在使用默认，不进行更改

![image-20221029165947095](https://moonshuo.cn//images/202211011130740.png)

后续的我们都使用默认，不进行更改

<font color='red'>由于我们经过了更改，我们重新执行命令hexo g，hexo s</font>

![image-20221030085647109](https://moonshuo.cn//images/202211011130892.png)

## 标签的完善

接下来完善标签的添加

![image-20221030085927717](https://moonshuo.cn//images/202211011131447.png)

### hexo自带的标签

hexo自带的标签包括分类，首页，标签等等，那么现在我们看到上面的对应的配置

![image-20221029165725424](https://moonshuo.cn//images/202211011131540.png)

```java 
# Directory
//文章对应的位置
source_dir: source
//渲染的文件位置
public_dir: public
//标签对应的文件目录
tag_dir: tags
//时间线对应的目录
archive_dir: archives
//分类对应的目录
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:
```

在source目录下，执行下面命令，建立标签页，其他的categories等等也是相同的操作

```Java
hexo new page "tags"
```

<font color='red'>注意在这里，我们还需要进行相应的文件夹中，增加type，后续的内容与title相同，用双引号括住</font>

![image-20221030170251319](https://moonshuo.cn//images/202211011131899.png)

打开 **/themes/主题/_config.yml**

将我们想要的进行注释取消，并且更改为中文名称

![image-20221030090713269](https://moonshuo.cn//images/202211011131303.png)

```Java
menu:
   首页: / || fas fa-home
   时间线: /archives/ || fas fa-archive
   标签: /tags/ || fas fa-tags
   分类: /categories/ || fas fa-folder-open
   休闲||fas fa-list:
     音乐: /music/ || fas fa-music
     电影: /movies/ || fas fa-video
   #Link: /link/ || fas fa-link
   关于: /about/ || fas fa-heart
```



