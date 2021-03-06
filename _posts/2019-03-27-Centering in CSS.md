---
layout: post
title: Centering in CSS
subtitle: A Complete Guide of CSS Centering
date: 2019-03-27
author: Jalever
header-img: img/css_bg_simple.png
catalog: true
tags:
  - CSS
---

- [水平居中](#%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD)
    - [行内元素水平居中](#%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD)
    - [块级元素水平居中](#%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD)
      - [将该块级元素左右外边距`margin-left`和`margin-right`设置为`auto`](#%E5%B0%86%E8%AF%A5%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E5%B7%A6%E5%8F%B3%E5%A4%96%E8%BE%B9%E8%B7%9Dmargin-left%E5%92%8Cmargin-right%E8%AE%BE%E7%BD%AE%E4%B8%BAauto)
      - [使用`table`+`margin`](#%E4%BD%BF%E7%94%A8tablemargin)
      - [使用`absolute`+`transform`](#%E4%BD%BF%E7%94%A8absolutetransform)
      - [使用`flex`+`justify-content`](#%E4%BD%BF%E7%94%A8flexjustify-content)
      - [使用`flex`+`margin`](#%E4%BD%BF%E7%94%A8flexmargin)
    - [多块级元素水平居中](#%E5%A4%9A%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD)
      - [利用`flex`布局](#%E5%88%A9%E7%94%A8flex%E5%B8%83%E5%B1%80)
      - [利用`inline-block`](#%E5%88%A9%E7%94%A8inline-block)
    - [浮动元素水平居中](#%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD)
      - [定宽的非浮动元素](#%E5%AE%9A%E5%AE%BD%E7%9A%84%E9%9D%9E%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0)
      - [不定宽的浮动元素](#%E4%B8%8D%E5%AE%9A%E5%AE%BD%E7%9A%84%E6%B5%AE%E5%8A%A8%E5%85%83%E7%B4%A0)
      - [通用办法`flex`布局(不管是定宽还是不定宽)](#%E9%80%9A%E7%94%A8%E5%8A%9E%E6%B3%95flex%E5%B8%83%E5%B1%80%E4%B8%8D%E7%AE%A1%E6%98%AF%E5%AE%9A%E5%AE%BD%E8%BF%98%E6%98%AF%E4%B8%8D%E5%AE%9A%E5%AE%BD)
    - [绝对定位元素水平居中](#%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E5%85%83%E7%B4%A0%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD)
- [垂直居中](#%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD)
    - [单行内联元素垂直居中](#%E5%8D%95%E8%A1%8C%E5%86%85%E8%81%94%E5%85%83%E7%B4%A0%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD)
    - [多行内联元素垂直居中](#%E5%A4%9A%E8%A1%8C%E5%86%85%E8%81%94%E5%85%83%E7%B4%A0%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD)
      - [利用`flex`布局（flex）](#%E5%88%A9%E7%94%A8flex%E5%B8%83%E5%B1%80flex)
      - [利用表布局&#40;table&#41;](#%E5%88%A9%E7%94%A8%E8%A1%A8%E5%B8%83%E5%B1%8040table41)
    - [块级元素垂直居中](#%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD)
      - [使用`absolute`&#43;`-margin`&#40;已知高度宽度&#41;](#%E4%BD%BF%E7%94%A8absolute43-margin40%E5%B7%B2%E7%9F%A5%E9%AB%98%E5%BA%A6%E5%AE%BD%E5%BA%A641)
      - [使用`absolute`&#43;`transform`](#%E4%BD%BF%E7%94%A8absolute43transform)
      - [使用`flex`&#43;`align-items`](#%E4%BD%BF%E7%94%A8flex43align-items)
      - [使用`table-cell`&#43;`vertical-align`](#%E4%BD%BF%E7%94%A8table-cell43vertical-align)
- [水平垂直居中](#%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD)
    - [绝对定位与负边距实现&#40;已知高度宽度&#41;](#%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E4%B8%8E%E8%B4%9F%E8%BE%B9%E8%B7%9D%E5%AE%9E%E7%8E%B040%E5%B7%B2%E7%9F%A5%E9%AB%98%E5%BA%A6%E5%AE%BD%E5%BA%A641)
    - [绝对定位与`margin&#58;auto`&#40;已知高度宽度&#41;](#%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E4%B8%8Emargin58auto40%E5%B7%B2%E7%9F%A5%E9%AB%98%E5%BA%A6%E5%AE%BD%E5%BA%A641)
    - [绝对定位与`CSS3`&#40;未知元素的高度&#41;](#%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E4%B8%8Ecss340%E6%9C%AA%E7%9F%A5%E5%85%83%E7%B4%A0%E7%9A%84%E9%AB%98%E5%BA%A641)
    - [水平垂直居中-`flex`布局](#%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD-flex%E5%B8%83%E5%B1%80)
    - [`flex`&#47;`grid` 与 `margin:auto`&#40;最简单的写法&#41;](#flex47grid-%E4%B8%8E-marginauto40%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E5%86%99%E6%B3%9541)

## 水平居中

#### 行内元素水平居中

利用 `text-align: center` 可以实现在块级元素内部的行内元素水平居中
此方法对 inline、inline-block、inline-table 和 inline-flex 元素水平居中都有效

```css
  .parent{//在父容器设置
      text-align:center;
  }
```

此外，如果块级元素内部包着也是一个块级元素，我们可以先将其由块级元素改变为行内块元素，再通过设置行内块元素居中以达到水平居中

```css
  <div class="parent">
    <div class="child">Demo</div>
  </div>

  <style>
    .parent{
      text-align:center;
    }

    .child {
      display: inline-block;
    }
  </style>
```

#### 块级元素水平居中

##### 将该块级元素左右外边距`margin-left`和`margin-right`设置为`auto`

```
  .child{
      width: 100px;//确保该块级元素定宽
      margin:0 auto;
  }
```

##### 使用`table`+`margin`

先将子元素设置为块级表格来显示（类似），再将其设置水平居中
display:table 在表现上类似 block 元素，但是宽度为内容宽

```
    <div class="parent">
      <div class="child">Demo</div>
    </div>

    <style>
      .child {
        display: table;
        margin: 0 auto;
      }
    </style>
```

##### 使用`absolute`+`transform`

先将父元素设置为相对定位，再将子元素设置为绝对定位，向右移动子元素，移动距离为父容器的一半，最后通过向左移动子元素的一半宽度以达到水平居中

```
    <div class="parent">
      <div class="child">Demo</div>
    </div>

    <style>
      .child {
        position:absolute;
        left:50%;
        transform:translateX(-50%);
      }

      .parent {
        position:relative;
      }

    </style>
```

不过 transform 属于 css3 内容，兼容性存在一定问题，高版本浏览器需要添加一些前缀

##### 使用`flex`+`justify-content`

通过`CSS3`中的布局利器`flex`中的`justify-content`属性来达到水平居中

```
  <div class="parent">
    <div class="child">Demo</div>
  </div>

  <style>
    .parent {
      display: flex;
      justify-content:center;
    }
  </style>
```

##### 使用`flex`+`margin`

通过`flex`将父容器设置为为 Flex 布局，再设置子元素居中

```css
    <div class="parent">
      <div class="child">Demo</div>
    </div>

    <style>
      .parent {
        display: flex;
      }

      .child {
        margin:0 auto;
      }
    </style>
```

#### 多块级元素水平居中

##### 利用`flex`布局

利用弹性布局(flex)，实现水平居中，其中 justify-content 用于设置弹性盒子元素在主轴（默认横轴）方向上的对齐方式

```css
<div class="parent">
    <div class="child1">
    </div>

    <div class="child2">
    </div>

    <div class="child3">
    </div>
</div>

<style>
.parent {
  width: 800px;
  height: 800px;
  background-color: #00ffff;
  display: flex;
  justify-content: center;
}
</style>
```

##### 利用`inline-block`

将要水平排列的块状元素设为 display:inline-block，然后在父级元素上设置 text-align:center，达到与上面的行内元素的水平居中一样的效果

```css
  .container {
     text-align: center;
  }

  .inline-block {
     display: inline-block;
  }
```

#### 浮动元素水平居中

##### 定宽的非浮动元素

通过子元素设置`relative`&#43;`-margin`,原理见下图:
![relative_negative_margin](https://github.com/Jalever/Note-taking/blob/master/images/relative_negative_margin.png)

注意：样式设置在浮动元素本身

```css
  .child {
     position:relative;
     left:50%;
     margin-left:-250px;
  }

  <div class="parent">
    <span class="child" style="float: left;width: 500px;">我是要居中的浮动元素</span>
  </div>
```

##### 不定宽的浮动元素

![position_left_right](https://github.com/Jalever/Note-taking/blob/master/images/position_left_right.png)
注意：要清除浮动，给外部元素加上 float。这里的父元素就是外部元素

```css
    <div class="box">
        <p>我是浮动的</p>
        <p>我也是居中的</p>
    </div>

    .box{
        float:left;
        position:relative;
        left:50%;
    }

    p{
        float:left;
        position:relative;
        right:50%;
    }
```

##### 通用办法`flex`布局(不管是定宽还是不定宽)

利用弹性布局(`flex`)的`justify-content`属性，实现水平居中

```css
  .parent {
      display:flex;
      justify-content:center;
  }

  .chlid{
      float: left;
      width: 200px;//有无宽度不影响居中
  }

  <div class="parent">
    <span class="chlid">我是要居中的浮动元素</span>
  </div>
```

#### 绝对定位元素水平居中

通过子元素绝对定位，外加`margin: 0 auto`来实现

```css
<div class="parent">
    <div class="child">让绝对定位的元素水平居中对齐。</div>
</div>

.parent{
      position:relative;
  }

.child{
     position: absolute; /*绝对定位*/
     width: 200px;
     height:100px;
     background: yellow;
     margin: 0 auto; /*水平居中*/
     left: 0; /*此处不能省略，且为0*/
     right: 0;/*此处不能省略，且为0*/
}
```

## 垂直居中

#### 单行内联元素垂直居中

```
<div id="box">
  <span>单行内联元素垂直居中。</span>。
</div>

<style>
  #box {
    height: 120px;
    line-height: 120px;
    border: 2px dashed #f69c55;
  }
</style>
```

#### 多行内联元素垂直居中

##### 利用`flex`布局（flex）

利用 flex 布局实现垂直居中，其中 flex-direction: column 定义主轴方向为纵向。这种方式在较老的浏览器存在兼容性问题。

```
<div class="parent">
  <p>Dance like nobody is watching, code like everybody is.
  Dance like nobody is watching, code like everybody is.
  Dance like nobody is watching, code like everybody is.</p>
</div>

<style>
  .parent {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px dashed #f69c55;
  }
</style>
```

##### 利用表布局&#40;table&#41;

利用表布局的`vertical-align: middle`可以实现子元素的垂直居中

```
<div class="parent">
    <p class="child">The more technology you learn, the more you realize how little you know.
    The more technology you learn, the more you realize how little you know.
    The more technology you learn, the more you realize how little you know.</p>
</div>

 <style>
    .parent {
        display: table;
        height: 140px;
        border: 2px dashed #f69c55;
    }

    .child {
        display: table-cell;
        vertical-align: middle;
    }
</style>
```

#### 块级元素垂直居中

##### 使用`absolute`&#43;`-margin`&#40;已知高度宽度&#41;

通过绝对定位元素距离顶部 50%，并设置 margin-top 向上偏移元素高度的一半，就可以实现了

```
    <div class="parent">
        <div class="child">固定高度的块级元素垂直居中</div>
    </div>

    .parent {
       position: relative;
    }

    .child {
       position: absolute;
       top: 50%;
       height: 100px;
       margin-top: -50px;
    }
```

##### 使用`absolute`&#43;`transform`

当垂直居中的元素的高度和宽度未知时，可以借助 CSS3 中的 transform 属性向 Y 轴反向偏移 50%的方法实现垂直居中

```
    <div class="parent">
        <div class="child">未知高度的块级元素垂直居中。</div>
    </div>

    .parent {
       position: relative;
    }

    .child {
       position: absolute;
       top: 50%;
       transform: translateY(-50%);
    }
```

##### 使用`flex`&#43;`align-items`

通过设置`flex`布局中的属性`align-items`，使子元素垂直居中

```
    <div class="parent">
        <div class="child">未知高度的块级元素垂直居中。</div>
    </div>

    .parent {
        display:flex;
        align-items:center;
    }
```

##### 使用`table-cell`&#43;`vertical-align`

通过将父元素转化为一个表格单元格显示（类似 `<td>` 和 `<th>`），再通过设置 `vertical-align`属性，使表格单元格内容垂直居中

```
    <div class="parent">
      <div class="child">Demo</div>
    </div>

    <style>
      .parent {
        display: table-cell;
        vertical-align: middle;
      }
    </style>
```

## 水平垂直居中

#### 绝对定位与负边距实现&#40;已知高度宽度&#41;

这种方式需要知道被垂直居中元素的高和宽，才能计算出`margin`值，兼容所有浏览器

```
#parent {
   position: relative;
}

#child {
  width: 100px;
  height: 100px;
  background-color: #666;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -50px;
}
```

#### 绝对定位与`margin&#58;auto`&#40;已知高度宽度&#41;

这种方式无需知道被垂直居中元素的高和宽，但不能兼容低版本的 IE 浏览器

```
    #parent {
       position: relative;
       height:100px;//必须有个高度
    }

    #child {
       position: absolute;
       top: 0;
       left: 0;
       bottom: 0;
       right: 0;
       margin: auto;//注意此处的写法
    }
```

#### 绝对定位与`CSS3`&#40;未知元素的高度&#41;

利用`CSS3`的`transform`,可以轻松的在未知元素的高宽的情况下实现元素的垂直居中

```
    #container {
      position: relative;
    }

    #center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
```

#### 水平垂直居中-`flex`布局

利用`flex`布局，其中`justify-content`用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式；而`align-items`属性定义`flex`子项在`flex`容器的当前行的侧轴（纵轴）方向上的对齐方式

```
#container {//直接在父容器设置即可
   height: 100vh;//必须有高度
   display: flex;
   justify-content: center;
   align-items: center;
 }
```

#### `flex`&#47;`grid` 与 `margin:auto`&#40;最简单的写法&#41;

容器元素设为`flex`布局或是`grid`布局，子元素只要写 `margin: auto` 即可

```
  #container {
    height: 100vh;//必须有高度
    display: grid;
  }

  #center {
    margin: auto;
  }
```
