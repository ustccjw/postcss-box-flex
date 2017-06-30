postcss-box-flex

> a postcss-plugin for adapter for box flex

add a rule prepend css when div `display: -webkit-box`, use after autoprefixer

````css
div > *，
div::before,
div::after {
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
}
````
