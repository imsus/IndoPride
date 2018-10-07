var critical = require('critical')

critical.generate({
  base: 'public',
  src: 'index.html',
  dest: '../assets/css/critical.css',
  minify: true,
  width: 1300,
  height: 900,
  ignore: ['@font-face',/url\(/]
});
