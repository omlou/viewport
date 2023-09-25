### Languages

* [English](https://github.com/omlou/viewport#readme)
* [简体中文](https://github.com/omlou/viewport/blob/master/public/md/readme-zh.md)
* [日本語](https://github.com/omlou/viewport/blob/master/public/md/readme-ja.md)
* [한국어](https://github.com/omlou/viewport/blob/master/public/md/readme-ko.md)
* [Français](https://github.com/omlou/viewport/blob/master/public/md/readme-fr.md)

### Introduction

* Rollup project template.

### Usage

#### Using the Script Tag

```html
<script src="https://unpkg.com/@xlou/viewport@1.0.0/dist/umd/viewport.min.js"></script>
<!-- It's recommended to download and use the file locally -->
<script>
  /* After including this JS file, the viewport object will be available on the window */
  print()
</script>
```

#### In a Node.js Project

Installation

``` bash
npm i @xlou/viewport
```

In main.js or main.ts

``` javascript
/* Using the entire package */
import { print } from '@xlou/viewport'

print()
```

### API

#### print

Print "Hello, World!"

```typescript
function print(): void;
```

Usage Example

``` javascript
print()
```