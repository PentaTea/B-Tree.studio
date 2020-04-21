const { path } = require("@vuepress/shared-utils");

var Fontmin = require('fontmin');
var rename = require('gulp-rename');
var del = require('del');

const FontminPlugin = (options, ctx) => ({
  name: "fontmin",
  enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],
  async ready() {
    let {
      src,
      text,
      selector,
    } = options;
    let destPath = path.resolve(__dirname, "dist/");
    let fontFamily;
    await del([path.resolve(__dirname, "dist/*")]);
    await del([path.resolve(__dirname, "fontmin.css")]);
    if (src && text && selector) {
      var fontmin = await new Fontmin()
        .src(src)
        .use(rename('font.ttf'))
        .use(Fontmin.glyph({
          text: text
        }))
        .use(Fontmin.ttf2eot())
        .use(Fontmin.ttf2woff())
        .use(Fontmin.ttf2svg())
        .use(Fontmin.css({
          //asFileName: true
          fontFamily: function (fontInfo, ttf) {
            let fontFamily = (ttf.name.fontFamily || fontInfo.fontFile).replace(/\W+/g, "");
            require('fs').writeFileSync(path.resolve(__dirname, "fontmin.css"),
              `${selector}{font-family:${fontFamily}!important;}`
            );
            return fontFamily;
          },
        }))
        .dest(destPath);
      fontmin.run(err => { if (err) console.error(err); });
    } else {
      require('fs').writeFileSync(path.resolve(__dirname, "fontmin.css"),
        ``
      );
    }

  },

});



module.exports = FontminPlugin;
