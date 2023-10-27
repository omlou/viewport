### 言語

* [English](https://github.com/omlou/viewport#readme)
* [简体中文](https://github.com/omlou/viewport/blob/master/public/md/readme-zh.md)
* [日本語](https://github.com/omlou/viewport/blob/master/public/md/readme-ja.md)
* [한국어](https://github.com/omlou/viewport/blob/master/public/md/readme-ko.md)
* [Français](https://github.com/omlou/viewport/blob/master/public/md/readme-fr.md)

### はじめに

* H5開発、特にモバイル開発におけるページの適応問題を解決します。
* 優れたパフォーマンス、ページを再レンダリングする必要はありません。

### 原則

* 1remはhtmlルート要素の「font-size」と等しいで、デフォルトは16pxです。
* ルートの「font-size」を動的に変更することで、remのサイズを変更できます。

### 使用法

#### スクリプトタグを使用する

```html
<script src="https://unpkg.com/@xlou/viewport@1.0.0/dist/umd/viewport.min.js"></script>
<!-- ローカルにダウンロードして使用することをお勧めします -->
<script>
  /* このJSファイルを含めると、viewportオブジェクトがwindowで利用可能になります */
  vp.init({/* オプション */})
</script>
```

#### Node.jsプロジェクトで使用する

インストール

```bash
npm i @xlou/viewport -S
```

main.jsまたはmain.tsで

```javascript
/* パッケージ全体を使用する */
import vp from '@xlou/viewport'

/* モバイルでのおすすめ設定 */
vp.init({
  width: 375, // ここではデザインの下書きは375pxですが、750pxの場合、750に設定してください
  fontSize: '0.14rem'
})

/* PCでのおすすめ設定（デザインドラフトは1920px）  */
vp.init({
  width: 1920,
  metaViewport: false,
  fontSize: '0.14rem'
})
```

### API

#### vp

|キー|型|説明|
|----|----|----|
|init|関数|viewportを初期化します|
|info|オブジェクト|現在のページで使用されるviewportの情報を返します|

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
const vp: {
  init(options: Options): void;
  readonly info: StoreOptions;
}
```

**initオプションの紹介**

|キー|型|デフォルト|サポートされる値|説明|
|----|----|----|----|----|
|width|数値|375|数値|対象ウィンドウの幅（ウィンドウ単位の数）|
|mobile|ブール|true|ブール|モバイル互換モードを開くかどうか、WeChatやQQのブラウザと互換性があります|
|fontSize|文字列|"0.16rem"|文字列|ページのデフォルトのフォントサイズ、bodyタグに設定され、モバイル互換モードではデフォルトで "0.16rem" に設定されます|
|metaViewport|ブール|true|ブール|\<meta name="viewport">タグを使用するかどうか|
|userScalable|文字列 \| null|"no"|"yes","no",null|メタタグに関連する、ユーザーのスケーラブルをサポートするかどうか|
|initialScalable|文字列 \| null|"1.0"|文字列、null|メタタグに関連する、初期スケーリング値|
|minimumScale|文字列|null|文字列、null|メタタグに関連する、最小スケーリング値|
|maximumScale|文字列|null|文字列、null|メタタグに関連する、最大スケーリング値|

"null"をサポートする属性がnullに設定された場合、"meta"タグはその属性を設定しません。

"mobile"がfalseに設定されている場合、例えば、デザインで対象の幅が20pxの場合、コードでは20remを設定します。  
"mobile"がtrueに設定されている場合（モバイル互換モードを使用）、デザインで対象の幅が20pxの場合、コードでは0.2remを設定します（つまり、デザインの値を100で割ります）。

**info属性の紹介**

docInfo:

* meta: HTMLMetaElement、このページのmetaタグを返します

* rootSize: 文字列、ルートのフォントサイズを返します

options: オブジェクト、このページの"vp"のオプションを返します