class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

const config = {
  browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('tailwindcss')('tailwind.js'),
    require('postcss-preset-env')(config),
    require('autoprefixer')(config),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './layouts/**/*.html'
      ],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html']
        }
      ]
    })
  ]
}
