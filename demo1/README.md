# CSS3弹性盒子

#### 弹性盒子是CSS3的一种新的布局模式，是一种当页面需要适应不同屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。

```
	display:flex;//将块元素变为弹性元素
	display:inline-flex;//将内联元素变为弹性元素
```
> - 弹性容器通过设置display属性的值为flex和inline-flex，将其定义为弹性容器。
>
> - 弹性容器内可以设置一个或多个弹性子元素
> 
> 注意:只设置 `display:flex` 或 `display:inline-flex` 并不能实现居中的效果。




## 	justify-content属性: ##
> 水平方向的对齐方式
```
	justify-content: flex-start | flex-end | center | space-between | space-around;
```

各个值解析：

- flex-start：弹性项目向行头紧挨着填充（默认值）。
- flex-end：弹性项目向行尾紧挨着填充。 
- center：弹性项目居中紧挨着填充。
- space-between：弹性项目平均分布在该行上。
- space-around：弹性项目平均分布在该行上，两边留有一半的间隔空间。


效果演示：
	![justify-content效果演示](https://i.imgur.com/gOhgnB6.jpg)

## aligin-items属性 ##
> 垂直方向的对齐方式
```
	align-items: flex-start | flex-end | center | baseline | stretch
```
各个值解析:

- flex-start：顶部对齐
- flex-end：底部对齐
- center：垂直居中对齐
- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
- stretch：默认对齐

## 完美居中 ##

> 使用弹性盒子，居中变的很简单，只想要设置 margin: auto; 可以使得弹性子元素在两上轴方向上完全居中(注意:`margin:auto`要写在弹性子元素上)

```
	
.flex-item {
    background-color: cornflowerblue;
    width: 75px;
    height: 75px;
    margin: auto;
}

```


## align-self属性 ##

> ##### 用于设置弹性元素自身在侧轴（纵轴）方向上的对齐方式。

```
	align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

各个值解析:

- auto:如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'。
- flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
- flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
- center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
- stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

效果展示:
	
![align-self设置每个子元素的垂直位置](https://i.imgur.com/zQfkpcd.jpg)

## flex属性 ##
> 用于指定弹性子元素如何分配空间。

```
	flex: auto | initial | none | inherit |  [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]
```
#### 实例 ####
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>flex属性</title> 
<style> 
.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}

.flex-item {
    background-color: cornflowerblue;
    margin: 10px;
}

.item1 {
    -webkit-flex: 2;
    flex: 2;
}

.item2 {
    -webkit-flex: 1;
    flex: 1;
}

.item3 {
    -webkit-flex: 1;
    flex: 1;
}
</style>
</head>
<body>

<div class="flex-container">
  <div class="flex-item item1">flex item 1</div>
  <div class="flex-item item2">flex item 2</div>
  <div class="flex-item item3">flex item 3</div>  
</div>

</body>
</html>
```
效果展示:

![flex分配所占位置比例](https://i.imgur.com/mUoP5BN.jpg)