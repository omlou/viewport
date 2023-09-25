### Languages

* [English](https://github.com/omlou/origin#readme)
* [简体中文](https://github.com/omlou/origin/blob/master/public/md/readme-zh.md)
* [日本語](https://github.com/omlou/origin/blob/master/public/md/readme-ja.md)
* [한국어](https://github.com/omlou/origin/blob/master/public/md/readme-ko.md)
* [Français](https://github.com/omlou/origin/blob/master/public/md/readme-fr.md)

### Introduction

* Rollup project template.

### Usage

#### Using the Script Tag

```html
<script src="https://unpkg.com/@xlou/origin@1.0.0/dist/umd/origin.min.js"></script>
<!-- It's recommended to download and use the file locally -->
<script>
  /* After including this JS file, the origin object will be available on the window */
  print()
</script>
```

#### In a Node.js Project

Installation

``` bash
npm i @xlou/origin
```

In main.js or main.ts

``` javascript
/* Using the entire package */
import { print } from '@xlou/origin'

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