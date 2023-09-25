### Langues

* [English](https://github.com/omlou/viewport#readme)
* [简体中文](https://github.com/omlou/viewport/blob/master/public/md/readme-zh.md)
* [日本語](https://github.com/omlou/viewport/blob/master/public/md/readme-ja.md)
* [한국어](https://github.com/omlou/viewport/blob/master/public/md/readme-ko.md)
* [Français](https://github.com/omlou/viewport/blob/master/public/md/readme-fr.md)

### Introduction

* Résout le problème de l'adaptation des pages dans le développement H5, en particulier pour le développement mobile.
* Excellentes performances, la page n'a pas besoin d'être ré-encodée.

### Principe

* 1rem équivaut à la "taille de police" de l'élément racine HTML, la valeur par défaut étant de 16px.
* Le changement dynamique de la taille de police de la racine peut modifier la taille de rem.

### Utilisation

#### Utilisation de la balise de script

```html
<script src="https://unpkg.com/@xlou/viewport@1.0.0/dist/umd/viewport.min.js"></script>
<!-- Il est recommandé de télécharger le fichier localement et de l'utiliser. -->
<script>
  /* Après avoir inclus ce fichier JS, l'objet viewport sera disponible dans la fenêtre */
  cvp.init({/* options */})
</script>
```

#### Dans un projet Node.js

Installation

```bash
npm i @xlou/viewport -S
```

Dans main.js ou main.ts

```javascript
/* Utilisation du package entier */
import cvp from '@xlou/viewport'

/* Configuration recommandée pour mobile (maquette de conception de 375px, 750px est identique) */
cvp.init({
  width: 375,
  fontSize: '0.14rem'
})

/* Configuration recommandée pour PC (maquette de conception de 1920px)  */
cvp.init({
  width: 1920,
  metaViewport: false,
  fontSize: '0.14rem'
})
```

### API

#### cvp

|Clé|Type|Description|
|----|----|----|
|init|fonction|Initialise le viewport|
|info|objet|Retourne les informations du viewport utilisé par la page actuelle|

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

**Introduction aux options d'initialisation**

|Clé|Type|Par défaut|Valeurs prises en charge|Description|
|----|----|----|----|----|
|width|nombre|375|nombre|Largeur de la fenêtre cible (nombre d'unités de fenêtre)|
|mobile|booléen|true|booléen|Indique si le mode de compatibilité mobile doit être activé, compatible avec les navigateurs WeChat et QQ|
|fontSize|chaîne de caractères|"0.16rem"|chaîne de caractères|Taille de police par défaut de la page, définie sur la balise body, par défaut à "0.16rem" en mode de compatibilité mobile|
|metaViewport|booléen|true|booléen|Indique si la balise \<meta name="viewport"> doit être utilisée|
|userScalable|chaîne de caractères \| null|"no"|"yes","no",null|En relation avec la balise meta, indique si le redimensionnement par l'utilisateur est pris en charge|
|initialScalable|chaîne de caractères \| null|"1.0"|chaîne de caractères,null|En relation avec la balise meta, valeur de redimensionnement initiale|
|minimumScale|chaîne de caractères|null|chaîne de caractères,null|En relation avec la balise meta, valeur de redimensionnement minimale|
|maximumScale|chaîne de caractères|null|chaîne de caractères,null|En relation avec la balise meta, valeur de redimensionnement maximale|

Si l'attribut prenant en charge "null" est défini sur null, l'attribut de la balise "meta" ne sera pas configuré.

Lorsque "mobile" est défini sur false, par exemple, si la largeur cible dans la conception est de 20px, alors définissez 20rem dans le code.  
Lorsque "mobile" est défini sur true (utilisation du mode de compatibilité mobile), si la largeur cible dans la conception est de 20px, définissez 0.2rem dans le code (c'est-à-dire, divisez la valeur de conception par 100).

**Introduction aux attributs info**

docInfo:

* meta: HTMLMetaElement, retourne la balise meta de cette page

* rootSize: chaîne de caractères, retourne la taille de police de la racine

options: objet, retourne les options de "cvp" de cette page