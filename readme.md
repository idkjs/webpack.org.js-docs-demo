# Webpack Demo

- you have to create your dist/build folder unless you set it up to auto generate.

## Asset Management

- for css, install `npm install --save-dev style-loader css-loader`

- add a rules property to config that tests for css and declares which loaders to use.

```js
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }
```

- this allows us to import './style.css' into a file that depends on it. when that module is run, a <style> tag with the stringified css will inserted into the <head> of the html file.

- test. add style.css and import into index.js

- if you run build and inspect the head tags in dev tools you will see the inserted styles:
```html
<style type="text/css">.hello {
  color: red;
}
</style>
```

## Loading Images

- install file loader:
- run `npm install --save-dev file-loader`

