---
title: Hexo中Buttefly腾讯云部署（三）
categories:
  - 博客搭建
tags:
  - Hexo
  - Butterfly
abbrlink: 57170
date: 2022-11-12
cover: https://moonshuo.cn/cover/4.jpg
---

原文链接：[Hexo中Buttefly腾讯云部署（三） | 偷掉月亮 (moonshuo.cn)](https://moonshuo.cn/posts/57170.html)

大家好，我是阿硕，专注与后端，略懂前端的一个菜鸟程序猿，今天将为大家讲述如何将博客部署在腾讯云上。

# 腾讯云部署

## 购买

搜索cos对象存储

![image-20221030092222234](https://moonshuo.cn//images/202211011117073.png)

选择购买资源包，购买时长选择1年，规格10Gb足够了

![image-20221030092323485](https://moonshuo.cn//images/202211011118875.png)

大概也就10元钱，而且害免费赠送cdn

![image-20221030092407772](https://moonshuo.cn//images/202211011119220.png)

## 部署

进入以下界面，创建存储桶

![image-20221030092537287](https://moonshuo.cn//images/202211011119020.png)

选择离自己最近的地域

![image-20221030092732855](https://moonshuo.cn//images/202211011119184.png)

下一步，这一页都不需要选用，除非有特殊的请求，然后在下一步创建

![image-20221030092802589](https://moonshuo.cn//images/202211011119518.png)

现在我们完成之后会进入如下的界面，将静态页面打开

![image-20221030093003539](https://moonshuo.cn//images/202211011119430.png)

开启之后，其他的选择默认即可，记住你的访问节点，最开始我们使用这个进行访问

![image-20221030093339417](https://moonshuo.cn//images/202211011119609.png)

现在我们下载腾讯云官方软件[cosbrowser - COS 官方客户端 (tencent.com)](https://cosbrowser.cloud.tencent.com/)，当然也可以不下载，但是下载之后，我们部署更加简单方便，打开之后，我们会发现一个空存储桶

![image-20221030094002182](https://moonshuo.cn//images/202211011119304.png)

现在我们打开public文件，全选，然后拖到这个存储桶里面，上传完成之后，我们可以通过初始的节点进行访问，而且网速还很快！！！

![image-20221030094134305](https://moonshuo.cn//images/202211011119706.png)

![image-20221030094239904](https://moonshuo.cn//images/202211011119336.png)

# 自定义域名

<font color='red'>在这里的操作可能需要大家在国内域名备案，还是建议大家进行备案，而且在腾讯云或者阿里云或者华为云进行备案，需要对应的服务器，我们可以自己购买一个学生服务器，记住要三个月以上！！！这是服务器备案的基本需要，而且在备案的时候，必须还有一个月的结余</font>

大家可以自己搜索，足够我们备案的时间即可

![5gy3flpt4tqxgfef59w28](https://moonshuo.cn//images/202212131817115.png)

![image-20221213175222979](https://moonshuo.cn//images/202212131752094.png)

现在我们需要访问我们的域名转接到我们的域名

![image-20221030101731670](https://moonshuo.cn//images/202211011119361.png)

现在我们去解析域名，而后续的SSL证书申请<font color='red'>，建议大家都去申请，提高网站的安全性，而且我们选择个人免费版即可，大概3分钟左右就可以申请下来</font>

![image-20221030103758711](https://moonshuo.cn//images/202211011119363.png)

@是浏览器访问moonshuo.cn,而www，是访问www.moonshuo.cn这个网址

![image-20221030102808241](https://moonshuo.cn//images/202211011119995.png)

等待一会，即可通过我们的自定义域名进行访问

![image-20221030103937479](https://moonshuo.cn//images/202211011119822.png)

# CDN节点加速

CDN是将我们的内容分发到全国各地的服务器节点中，加快不同的地区的用户的访问速度，搜索cdn，进入如下界面

![image-20221030104146329](https://moonshuo.cn//images/202211011119203.png)

在添加域名的时候，需要进行域名验证，根据提示进行添加即可

![image-20221030104314317](https://moonshuo.cn//images/202211011120104.png)

在这里如果第三方的COS源，那么就进行相应的选择配置

![image-20221030104617185](https://moonshuo.cn//images/202211011120853.png)

下一步之后，这里的缓存天数，设置默认即可，在进行配置

![image-20221030105257179](https://moonshuo.cn//images/202211011120655.png)

增加@类型为我们的记录值，如果与上面的发生冲突，那么我们将上面的进行删除即可

![image-20221030105554968](https://moonshuo.cn//images/202211011120991.png)

到此为止，我们的配置全部完成

![image-20221030105831484](https://moonshuo.cn//images/202211011120976.png)

最终形成配置的CDN的网站为，仅仅CDN那里有，而自定义源站域名没有

![image-20221031164824285](https://moonshuo.cn//images/202211011120582.png)

现在假如说我们更新了一篇文章，想要使用户立即看到改变，那么需要我们设置刷新函数，刷新我们的cdn存储的节点

![image-20221101114518383](https://moonshuo.cn//images/202211061148383.png)



添加cdn刷新函数即可

![image-20221101114612171](https://moonshuo.cn//images/202211061148384.png)

<font color='red'>如何证明我们的网站开启了CDN那？？首先明确CDN是将我们的文件分发到不同地点的服务器，那么我们进行ping检测，会有多个ip相应</font>

[多个地点ping服务器-网站测速-站长工具 (chinaz.com)](https://ping.chinaz.com/)

![image-20221031112814542](https://moonshuo.cn//images/202211011120752.png)

最终<font color='red'>首次</font>进行访问，影响访问速度都是其他的外连接，并不是我们的源文件，后续我们会进行解决，争取将时间都控制在1秒

![image-20221030112625355](https://moonshuo.cn//images/202211011120401.png)

# 加更

{% tabs 更新方案%}

<!-- tab 旧方案-->

2022年11月24日更

很多小伙伴可能暂时无法明白怎么，进行更新，现在录个视频演示一下


![更新示意-min loading="lazy"](https://moonshuo.cn//images/202211241138677.gif)

<!-- endtab-->

<!-- tab 新方案，没有cdn的小伙伴-->

2022年12月4日更

最近有小伙伴觉得上面的更新过程太复杂，有没有直接hexo d就可以直接上传的，浏览了一下hexo插件，发现了一个专门独属于腾讯云的插件

首先执行以下的命令安装插件

```bash
npm install hexo-deployer-cos --save
```

然后在主配置文件的deploy关键字中进行配置

```yaml
deploy:
#这是百度的收录
- type: baidu_url_submitter
#从这里开始写，表明是cos存储桶
- type: cos
# 存储通的名称
  bucket: butterfly-123456789
#存储通的地域
  region: ap-chengdu
#腾讯云的secretId与key
  secretId: 
  secretKey:
```

最终执行hexo deploy命令，下面的效果就是成功![image-20221204154346474](https://moonshuo.cn//images/202212041543577.png)

<!-- endtab-->
<!-- tab 新方案，推荐有cdn的小伙伴-->

2023年6月20日更
最近有一些小伙伴反应在部署cdn的情况下，并不会立即刷新，那么现在我们引入cdn的刷新
插件地址，小伙伴可以自行配置：https://github.com/lxl80/hexo-deployer-cos-cdn

```bash
npm install hexo-deployer-cos-cdn --save
```

进行配置

```bash
deploy:
- type: baidu_url_submitter
- type: cos-cdn
  cloud: tencent
  bucket: butterfly-1309913189
  region: ap-chengdu
  #是否刷新
  cdnEnable: true
  secretId: 
  secretKey: 
```

最终hexo deploy即可

<!-- endtab-->

{% endtabs %}

