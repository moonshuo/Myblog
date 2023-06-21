---
title: Hexo中Buttefly主题看板娘与自定义看板娘（十三）
categories:
  - 博客搭建
tags:
  - Hexo
  - Butterfly
cover: 'https://moonshuo.cn/cover/14.jpg'
abbrlink: 16544
date: 2022-12-15
---

# 看板娘与自定义看板娘

> 原作者项目：[GitHub - stevenjoezhang/live2d-widget: 把萌萌哒的看板娘抱回家 (ノ≧∇≦)ノ | Live2D widget for web platform](https://github.com/stevenjoezhang/live2d-widget)
>
> 我的改进：
>
> 1. 把文件存储在hexo本地，提升看板娘的访问速度
> 2. 去除看板娘复杂的模型，更加轻便，同时可以自定义看板娘

## 下载依赖

首先将依赖文件存放在本地，下载下面的资源到本地的..\themes\butterfly\source，并且命名为<font color='red'>live2d-widget-master</font>

[GitHub - stevenjoezhang/live2d-widget： 把萌萌哒的看板娘抱回家 （ノ≧∇≦）ノ |用于网页平台的Live2D小部件](https://github.com/stevenjoezhang/live2d-widget)

![image-20221214093730408](https://moonshuo.cn//images/202212140937902.png)

而后打开链接https://moonshuo.cn/live2d-widget-master/autoload.js

下载作者的js文件，替换live2d-widget-master文件夹下的文件

![image-20221214094250415](https://moonshuo.cn//images/202212140942651.png)

## 下载依赖的模组

点击下载下方的链接[live2d: 看板娘动态动画，可以为网页增加相应动作 (gitee.com)](https://gitee.com/moonshuo/live2d)，并且命名为<font color='red'>live2d_api</font>，也放在..\themes\butterfly\source下面

![image-20221214094735228](https://moonshuo.cn//images/202212140947304.png)

打开主题配置文件，复制以下的代码到其中

```yaml
live2d:
  enable: true
```

在butterfly主题中引入js文件

```yaml
     - <script defer src="/live2d-widget-master/autoload.js"></script>
```

现在hexo三连即可查看效果

# 更换模组

下面作者给出几个网址，大家可以进行下载

https://gitee.com/rao_she/live2d_models_collect

海王星系列、初音未来、雷姆、凉风青叶、尼禄、薇尔莉特、小埋、樱花庄、玉藻前等资源模型包（.moc）

链接：https://pan.baidu.com/s/1KV4Zg8dsDKV75uL5V5Mn0Q
提取码：bivj

舰娘live2d模型合集是提取自舰娘colletion游戏里的live2d模型，里面有很多模型，足够你研究一段时间

链接：https://pan.baidu.com/s/1QPrMhc9HABN22ds7pR8vOg
提取码：gyuy

下载完毕模型包之后，我们找到自己想要的模型，找到他的下一次文件结构为如下，<font color='red'>将json文件更改为index.json文件，现在这个模型只能转换.moc模型，关于.moc3文件也可以使用，但是比较复杂</font>

![image-20221214095420277](https://moonshuo.cn//images/202212140954325.png)

我们将整体模型包重新命名，然后将其复制移动到..\themes\butterfly\source\live2d_api\model文件下

![image-20221214095641465](https://moonshuo.cn//images/202212140956493.png)

## 更换引用

打开..\themes\butterfly\source\live2d_api\model_list.json,<font color='red'>model下面我们放自己想要加的model文件夹的名称，而message则是这个任务出现之后第一局话</font>

```json
{
    "models": [
        "welt",
        "histoire"
    ],
    "messages": [
        "在下薇尔莉特·伊芙加登，欢迎来到主人的博客",
        "欢迎来到我的主人的博客,旅行者"
    
    ]
}
```

如果位置大小不正确，我们可以打开刚刚命名的index.json文件，添加并且自行更改下面的位置，而后也可以通过css文件更改配置

```json
    "layout":{
		"center_x": 0,
        "center_y": 0,
        "width": 1.8
	},
	"hit_areas_custom":{
		"head_x":[-0.35, 0.6],
		"head_y":[0.19, -0.2],
		"body_x":[-0.3, -0.25],
		"body_y":[0.3, -0.9]
	},
```

博主的css配置下载，替换..\themes\butterfly\source\live2d-widget-master下面的waifu.css文件

css链接:https://moonshuo.cn/live2d-widget-master/waifu.css