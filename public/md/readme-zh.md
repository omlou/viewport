### 语言

* [English](https://github.com/omlou/viewport#readme)
* [简体中文](https://github.com/omlou/viewport/blob/master/public/md/readme-zh.md)
* [日本语](https://github.com/omlou/viewport/blob/master/public/md/readme-ja.md)
* [한국어](https://github.com/omlou/viewport/blob/master/public/md/readme-ko.md)
* [Français](https://github.com/omlou/viewport/blob/master/public/md/readme-fr.md)

### 简介

* 解决H5开发，尤其是移动开发中的页面适配问题
* 出色的性能，页面无需重新渲染

### 原理

* 1rem等于html根元素的"font-size"，默认值为16px
* 动态更改根的"font-size"可以改变rem的大小

### 使用方法

#### 使用Script标签

```html
<script src="https://unpkg.com/@xlou/viewport@1.0.0/dist/umd/viewport.min.js"></script>
<!-- 建议下载并在本地使用文件 -->
<script>
  /* 包含此JS文件后，viewport对象将在window上可用 */
  cvp.init({/* 选项 */})
</script>
```

#### 在Node.js项目中

安装

``` bash
npm i @xlou/viewport -S
```

在main.js或main.ts中

``` javascript
/* 使用整个包 */
import cvp from '@xlou/viewport'

/* 推荐的移动端配置（设计稿宽度为375px，750px也相同） */
cvp.init({
  width: 375,
  fontSize: '0.14rem'
})

/* 推荐的PC配置（设计稿宽度为1920px）  */
cvp.init({
  width: 1920,
  metaViewport: false,
  fontSize: '0.14rem'
})
```

### API

#### cvp

|键|类型|描述|
|----|----|----|
|init|函数|初始化视口|
|info|对象|返回当前页面使用的视口信息|

```typescript
interface Options {
  width?: number;
  mobile?: boolean;
  fontSize?: string;
  metaViewport?: boolean;
  userScalable?: string | null;
  initialScale?: string | null;
  minimumScale?: string | null;
  maximumScale?: string | null;
}
interface StoreOptions {
  options: Options;
  docInfo: {
    meta: Element;
    rootSize: string;
  };
}
const cvp: {
  init(options: Options): void;
  readonly info: StoreOptions;
}
```

**init选项介绍**

|键|类型|默认值|支持的值|描述|
|----|----|----|----|----|
|width|数字|375|数字|目标窗口的宽度（窗口单位数）|
|mobile|布尔|true|布尔|是否开启移动兼容模式，兼容微信和QQ的浏览器|
|fontSize|字符串|"0.16rem"|字符串|页面的默认字体大小，在body标签上设置，默认在移动兼容模式下为"0.16rem"|
|metaViewport|布尔|true|布尔|是否使用\<meta name="viewport">标签|
|userScalable|字符串 \| null|"no"|"yes","no",null|与meta标签相关，是否支持用户缩放|
|initialScalable|字符串 \| null|"1.0"|字符串,null|与meta标签相关，初始缩放值|
|minimumScale|字符串|null|字符串,null|与meta标签相关，最小缩放值|
|maximumScale|字符串|null|字符串,null|与meta标签相关，最大缩放值|

如果支持"null"的属性设置为null，则"meta"标签将不配置该属性。

当"mobile"设置为false时，例如，设计中目标的宽度为20px，则在代码中设置为20rem。  
当"mobile"设置为true（使用移动兼容模式）时，如果设计中目标的宽度为20px，则在代码中设置为0.2rem（即将设计值除以100）。

**info属性介绍**

docInfo:

* meta: HTMLMetaElement，返回此页面的meta标签

* rootSize: 字符串，返回根的字体大小

options: 对象，返回此页面的"cvp"参数