### 언어

* [English](https://github.com/omlou/viewport#readme)
* [简体中文](https://github.com/omlou/viewport/blob/master/public/md/readme-zh.md)
* [日本語](https://github.com/omlou/viewport/blob/master/public/md/readme-ja.md)
* [한국어](https://github.com/omlou/viewport/blob/master/public/md/readme-ko.md)
* [Français](https://github.com/omlou/viewport/blob/master/public/md/readme-fr.md)

### 소개

* H5 개발, 특히 모바일 개발에서 페이지 적응 문제 해결
* 우수한 성능, 페이지를 다시 렌더링할 필요 없음

### 원리

* 1rem은 "font-size"의 HTML 루트 요소와 동일하며, 기본값은 16px입니다.
* 루트의 "font-size"를 동적으로 변경하면 rem의 크기를 변경할 수 있습니다.

### 사용법

#### 스크립트 태그 사용

```html
<script src="https://unpkg.com/@xlou/viewport@1.0.0/dist/umd/viewport.min.js"></script>
<!-- 파일을 로컬로 다운로드하고 사용하는 것을 권장합니다. -->
<script>
  /* 이 JS 파일을 포함한 후에 viewport 객체는 window에서 사용 가능합니다. */
  cvp.init({/* 옵션 */})
</script>
```

#### Node.js 프로젝트에서 사용

설치

``` bash
npm i @xlou/viewport -S
```

main.js 또는 main.ts에서

``` javascript
/* 패키지 전체를 사용 */
import cvp from '@xlou/viewport'

/* 모바일에서 권장되는 설정 (디자인 초안이 375px이면, 750px도 동일) */
cvp.init({
  width: 375,
  fontSize: '0.14rem'
})

/* PC에서 권장되는 설정 (디자인 초안이 1920px)  */
cvp.init({
  width: 1920,
  metaViewport: false,
  fontSize: '0.14rem'
})
```

### API

#### cvp

|키|타입|설명|
|----|----|----|
|init|함수|viewport 초기화|
|info|객체|현재 페이지에서 사용된 viewport 정보 반환|

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

**init 옵션 소개**

|키|타입|기본값|지원되는 값|설명|
|----|----|----|----|----|
|width|숫자|375|숫자|대상 창의 너비 (창 단위 수)|
|mobile|부울|true|부울|모바일 호환 모드를 여는지 여부, WeChat 및 QQ 브라우저와 호환됩니다.|
|fontSize|문자열|"0.16rem"|문자열|페이지의 기본 글꼴 크기, body 태그에 설정되며 모바일 호환 모드에서 기본값은 "0.16rem"입니다.|
|metaViewport|부울|true|부울|\<meta name="viewport"> 태그를 사용할지 여부|
|userScalable|문자열 \| null|"no"|"yes","no",null|Meta 태그와 관련된 사용자 축소 지원 여부|
|initialScalable|문자열 \| null|"1.0"|문자열,null|Meta 태그와 관련된 초기 축소 비율|
|minimumScale|문자열|null|문자열,null|Meta 태그와 관련된 최소 축소 비율|
|maximumScale|문자열|null|문자열,null|Meta 태그와 관련된 최대 축소 비율|

"null"을 지원하는 속성이 null로 설정되면 "meta" 태그는 해당 속성을 설정하지 않습니다.

"mobile"이 false로 설정된 경우, 예를 들어 디자인의 대상 너비가 20px이면 코드에서 20rem으로 설정합니다.  
"mobile"이 true로 설정된 경우 (모바일 호환 모드 사용), 디자인의 대상 너비가 20px이면 코드에서 0.2rem으로 설정합니다 (즉, 디자인 값을 100으로 나눕니다).

**info 속성 소개**

docInfo:

* meta: HTMLMetaElement, 이 페이지의 meta 태그 반환

* rootSize: 문자열, 루트의 글꼴 크기 반환

options: 객체, 이 페이지의 "cvp" 옵션 반환