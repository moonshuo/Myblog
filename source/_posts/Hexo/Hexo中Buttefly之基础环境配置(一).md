---
title: Hexo中Buttefly之基础环境配置（一）
categories:
  - 博客搭建
tags:
  - Hexo
  - Butterfly
abbrlink: 13308
date: 2022-11-08
cover: https://moonshuo.cn/cover/2.jpg
---

<font color='red'>注意git中粘贴为shift+insert键，而复制为ctrl+insert</font>

原文链接：[Hexo中Buttefly之基础环境配置（一） | 偷掉月亮 (moonshuo.cn)](https://moonshuo.cn/posts/13308.html)

大家好，我是阿硕，专注与后端，略懂前端的一个菜鸟程序猿，今天我们将要完成Hexo博客的环境等等基础配置。

# Node.js配置

## 下载Node.js

官网：[Node.js官网](https://nodejs.org/en/download/)

<font color='red'>根据自己的系统进行选择，大部分人应该是微软的64位，选择msi位安装程序，苹果用户选择苹果对应的版本</font>,如果说这个的下载比较慢的话，可以电脑链接手机热点

![image-20221029150618277](https://moonshuo.cn//images/202211161029328.png)

## 安装Node.js

看下面的步骤，注意红圈的地方

![image-20221029151737755](https://moonshuo.cn//images/202211011127542.png)

![image-20221029151828242](https://moonshuo.cn//images/202211011127192.png)

<font color='red'>单机Next之后，在这里注意将安装位置进行更改，我这里在D盘新建了一个NodeJs的文件夹</font>

![image-20221029152020401](https://moonshuo.cn//images/202211011127870.png)

接下来一路默认就好，环境变量的配置我们自己配置

![image-20221029152209385](https://moonshuo.cn//images/202211011127134.png)

安装完成

最终的测试，我们在cmd控制窗口输入,下列的代码，查看是否安装成功

```Java
node -v
npm -v
```

![image-20221029152557381](https://moonshuo.cn//images/202211011128198.png)

# Git配置

## 下载Git

Git官网：[Git官网](https://git-scm.com/)

![image-20221029153541711](https://moonshuo.cn//images/202211011128951.png)

下载安装的程序（<font color='red'>使用手机热点，自己联网很慢的</font>）

## 安装Git

![image-20221029153958072](https://moonshuo.cn//images/202211011128584.png)

<font color='red'>老规矩，还是更改安装的位置</font>

![image-20221029154114640](https://moonshuo.cn//images/202211011128577.png)

接下来默认就好，我们的博客不需要那么多的git功能，<font color='red'>下面这个界面我们选择第二个，虽然这个影响不大，但是如果有小伙伴在github部署，那么还是比较友好的</font>，剩下的全是默认配置，只截图了一部分，无脑next就好

![image-20221029154341458](https://moonshuo.cn//images/202211011128413.png)

![image-20221029154525570](https://moonshuo.cn//images/202211011128166.png)

![image-20221029154539983](https://moonshuo.cn//images/202211011128158.png)

安装完成

![image-20221029154809158](https://moonshuo.cn//images/202211011128005.png)

![image-20221029155029904](https://moonshuo.cn//images/202211011128173.png)

# 博客初始化

我在D判断下建立了一个MyBlog的文件夹，进入文件右键git bash here

![image-20221029155305229](https://moonshuo.cn//images/202211011128177.png)

## 安装Hexo文件

执行以下的命令，等待安装完成

```java
npm install -g hexo-cli
```

安装成功

![image-20221029155559637](https://moonshuo.cn//images/202211011128984.png)

## 初始化博客

执行以下命令，等待完成

```Java
hexo init
```

看到这句话，就已经成功了

![image-20221029160142557](https://moonshuo.cn//images/202211011128442.png)

## 启动配置博客

使用以下的命令，生成相应的文件

```Java
hexo g
```

<font color='red'>执行完毕之后，我们会发现目录中多出了public文件，这个就是真正的hexo帮助我们转换的静态网页，每一次我们执行这个命令，就会重新生成并覆盖原来的public文件</font>

![image-20221029160504821](https://moonshuo.cn//images/202211011128971.png)

执行以下命令,开启本地服务，可以查看已经生成的网页

```java
hexo s
```

网址：http://localhost:4000/

出现以下界面表示配置成功

![image-20221029160724587](https://moonshuo.cn//images/202211011128844.png)

# 总结

本次的博客教程与很多的不同，是因为这个不需要我们上传到github中，那样访问速度太慢，到这里基础配置也就完成了。