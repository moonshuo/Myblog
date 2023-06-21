---
title: Hexo中Buttefly被百度，Bing等搜索引擎收录（五）
categories:
  - 博客搭建
tags:
  - Hexo
  - Butterfly
abbrlink: 6356
date: 2022-11-15
cover: https://moonshuo.cn/cover/6.jpg
---

原文链接：[Hexo中Buttefly被百度，Bing等搜索引擎收录（五） | 偷掉月亮 (moonshuo.cn)](https://moonshuo.cn/posts/6356.html)

大家好，我是阿硕，专注与后端，略懂前端的一个菜鸟程序猿，今天教大家如何使自己的博客被收录。

# 优化链接

## 为什么优化

我们首先看没有优化的文章链接，按照日期+文章标题，<font color='red'>但是这样有一个非常严重的错误，如果我们更改文章标题，那么文章原来的链接就会改变，而搜索引擎会不会收录稳定性不高的文章，同时访客也无法长期访问</font>

![img](https://moonshuo.cn//images/202211051939056.png)

现在我们以知乎为例子，看一下知乎的链接，知乎直接按照数字进行记录，数字一直不变，那么就一直定向这篇文章

![img](https://moonshuo.cn//images/202211051939204.png)

## 优化

执行下面的命令

```Java
npm install hexo-abbrlink --save
```

修改主配置文件的设置，我们执行hexo g之后，发现链接变化为永久链接

![img](https://moonshuo.cn//images/202211051940428.png)

而这个网址已经使我们文章首部的abbrlink标签对应的值

![image-20221105194055108](https://moonshuo.cn//images/202211051940125.png)

# 百度收录

## 收录

进入百度站长平台：[站点管理_站长工具_百度搜索资源平台 (baidu.com)](https://ziyuan.baidu.com/site#/)

用户中心->站点管理->添加网站->输入网站（有证书的话选择Https）->站点属性->验证网站

<font color='red'>这里我选择了CNAME验证，比较简单</font>

![img](https://moonshuo.cn//images/202211051941486.png)

在DNSh中进行解析，过一段时间验证完成验证 

![img](https://moonshuo.cn//images/202211051941824.png)

<font color='red'>百度的收录时间比较长，大概一个月才会进行收录，耐心等待，如果比较着急可以手动提交，这里不做介绍</font>

## 主动推送

执行以下命令，安装百度收录插件

```Java
npm install hexo-generator-sitemap --save     
npm install hexo-generator-baidu-sitemap --save
```

在hexo的根目录中写入以下配置

```Java
baidu_url_submit:
  count: 1               # 提交最新的多少个链接，可以提高一些
  host: https://moonshuo.cn/   # 在百度站长平台中添加的域名
  token: your_token      # 秘钥
  path: baidu_urls.txt   # 文本文档的地址， 新链接会保存在此文本文档里
```

加入新的deployer，由于部署在腾讯云服务器，所以不需要git的推送

```Java
deploy:
  type: baidu_url_submitter  
```

hexo g重新构建，hexo d推送到百度，下面显示推送成功

![img](https://moonshuo.cn//images/202211051941865.png)

## 设置站点地图

其实上述的操作做完，速度就已经很快了，这里做一个站点地图，是为了再一次做一个保证，将我们博客进行重新构建，并将public中的文件全部放到腾讯元存储桶中进行更新部署

找到百度站点，将其提交给百度sitemap

![image-20221101103157774](https://moonshuo.cn//images/202211011123646.png)

![image-20221101103321785](https://moonshuo.cn//images/202211011123652.png)

# Bing收录

我们首先登录bing站长，[Home - Bing Webmaster Tools](https://www.bing.com/webmasters/home)

![image-20221101103639065](https://moonshuo.cn//images/202211011123742.png)

直接提交，等待收录即可，大概10天左右即可

# 谷歌收录

由于谷歌在中国大陆无法访问，挂梯子提交文章没有意义，就不做说明
