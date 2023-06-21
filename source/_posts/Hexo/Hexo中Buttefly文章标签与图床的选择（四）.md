---
title: Hexo中Buttefly文章标签与图床的选择（四）
categories:
  - 博客搭建
tags:
  - Hexo
  - Butterfly
abbrlink: 31137
date: 2022-11-13
cover: https://moonshuo.cn/cover/5.jpg
---

原文地址：[Hexo中Buttefly文章标签与图床的选择（四） | 偷掉月亮 (moonshuo.cn)](https://moonshuo.cn/posts/31137.html)

大家好，我是阿硕，专注与后端，略懂前端的一个菜鸟程序猿，今天将为大家讲述文件标签的意义与图床的配置与选择。

# 文章的标签

<font color='red'>我们文章都放在_posts目录下，分类效果只与我们的标签有关</font>

下面是官网的信息，我们主要介绍一些重要的标签

![image-20221030162612873](https://moonshuo.cn//images/202211011132187.png)

下面按照本文章为例子进行讲解

![img](https://moonshuo.cn//images/202211011133548.png)

```Java
//文章的标题，也是所以可以搜索到的东西
title: Hexo中Buttefly文章标签与图床的选择（四）
//分类，如果想要二级分类，直接在下面直接添加就好
categories:
 - 博客搭建
//标签，表示这个属于Hexo标签与Butterfly标签，注意两个标签是同级的，同时便于别人的查询
tags：
 - Hexo
 - Butterfly
//自定义文章封面
cover: 图片的链接
//这个是网站的链接，是便于搜索引擎收录的，我们后续搜索引擎收录的时候在进行讲解
permalink
//评论功能，后续会讲解到
comments
```

# 图床的选择

在本地的访问，我们将图片文件放在了本地电脑中，我们可以直接进行访问，但是我们发布到网络，其他的用户将无法进行访问。此时我们需要将图片进行上传！！

<font color='red'>在这里我们选择腾讯云cos作为图床，同时为了增加我们的访问速度，将图床与博客的文件放在一起，但是注意博客的文件可以随便删除，但是这里图床文件夹千万不要删除，一旦删除，那么所有的图片都将要失效</font>

## 下载PicGo

用自己的手机热点进行链接

[PicGo (molunerfinn.com)](https://molunerfinn.com/PicGo/)

![image-20221031114204455](https://moonshuo.cn//images/202211011134965.png)

安装完成之后，找到腾讯云cos

在腾讯云网页端，腾讯云头像–>[访问管理](https://cloud.tencent.com/product/cam?from=10680)–> [API密钥管理](https://cloud.tencent.com/product/ssm?from=10680)，创建密钥，就会生成 **APPID、SecretId和SecretKey**

![image-20221031114551950](https://moonshuo.cn//images/202211011134195.png)

填入对应的括号中，而我这里选择讲个图片上传到images中，那么这个里面的文件，我们不能进行删除，<font color='red'>如果说我们要设置自定义域名的话，那么我们需要在客户端中选中传输管理，讲个下载设置为自定义域名，这样的话我们图片也是我们的域名了，防止了原网站的泄露</font>

![image-20221031161541248](https://moonshuo.cn//images/202211011134817.png)

![image-20221031143603742](https://moonshuo.cn//images/202211011134458.png)

## 配置Typora

在Typora中选择，选择我们自己对应的Picgo的启动路径，选择完毕，

![image-20221031143750351](https://moonshuo.cn//images/202211011134808.png)

插入图片的时候，我们可以直接进行上传，如果大家选用的图床比较可靠，可以直接选择上传，如果不是可靠的话，建议选择复制到文件夹，后续自己右键图片手动上传，这样就会有双重备份了

![image-20221031161931201](https://moonshuo.cn//images/202211011134252.png)

上传之后，我们据可以看到这个照片的网址了，而对应的图床也有这个文件了，浏览器访问也正常

![image-20221031144125061](https://moonshuo.cn//images/202211011134556.png)
