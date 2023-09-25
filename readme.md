### Languages

* [English](https://github.com/omlou/viewport#readme)
* [简体中文](https://github.com/omlou/viewport/blob/master/public/md/readme-zh.md)
* [日本語](https://github.com/omlou/viewport/blob/master/public/md/readme-ja.md)
* [한국어](https://github.com/omlou/viewport/blob/master/public/md/readme-ko.md)
* [Français](https://github.com/omlou/viewport/blob/master/public/md/readme-fr.md)

### Introduction

* Solve the problem of page adaptation in H5 development, especially mobile development
* Excellent performance, the page don't need to be re-rendered

### Principle

* 1rem is equal to the "font-size" of the html root element, the default is 16px
* Dynamically changing the font-size of the root can change the size of the rem

### Usage

#### Using the Script Tag

```html
<script src="https://unpkg.com/@xlou/viewport@1.0.0/dist/umd/viewport.min.js"></script>
<!-- It's recommended to download and use the file locally -->
<script>
  /* After including this JS file, the viewport object will be available on the window */
  cvp.init({/* options */})
</script>
```

#### In a Node.js Project

Installation

``` bash
npm i @xlou/viewport -S
```

In main.js or main.ts

``` javascript
/* Using the entire package */
import cvp from '@xlou/viewport'

/* Recommended configuration on the mobile (design draft is 375px, 750px is the same) */
cvp.init({
  width: 375,
  fontSize: '0.14rem'
})

/* PC recommended configuration (design draft is 1920px)  */
cvp.init({
  width: 1920,
  metaViewport: false,
  fontSize: '0.14rem'
})
```

### API

#### cvp

|Key|Type|Description|
|----|----|----|
|init|function|Init the viewport|
|info|object|Return the informations of viewport that current page used|

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

**Introduction to init options**

|Key|Type|Default|Supported values|Description|
|----|----|----|----|----|
|width|number|375|number|The width of the target window (the number of window units)|
|mobile|boolean|true|boolean|Whether to open the mobile compatibility mode, compatible with the browsers of WeChat and QQ|
|fontSize|String|"0.16rem"|string|The default font-size of the page, set on the body tag, defaults to "0.16rem" in mobile compatibility mode|
|metaViewport|boolean|true|boolean|Whether to use the \<meta name="viewport"> tag|
|userScalable|string \| null|"no"|"yes","no",null|Meta tag related, whether to support user scalable|
|initialScalable|string \| null|"1.0"|string,null|Meta tag related, initial scaling value|
|minimumScale|string|null|string,null|Meta tag related, min scaling value|
|maximumScale|string|null|string,null|Meta tag related, max scaling value|

If the attribute that supports "null" is set to null, the "meta" tag will not configure the attribute.

When "mobile" is set to false, for example, the width of the target in the design is 20px, then set 20rem in the code.  
When "mobile" is set to true (use the mobile compatibility mode), if the width of the target in the design is 20px, then set 0.2rem in the code (that is, divide the design value by 100).

**Introduction to info attributes**

docInfo:

* meta: HTMLMetaElement, return meta tag of this page

* rootSize: string, return the font-size of root

options: object, return the options of "cvp" this page