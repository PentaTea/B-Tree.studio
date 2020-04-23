const { path } = require("@vuepress/shared-utils");

const Fontmin = require('fontmin');
const rename = require('gulp-rename');
const del = require('del');
const fs = require('fs');
del([path.resolve(__dirname, "dist/**/*")]);
del([path.resolve(__dirname, "fontminSelector.css")]);
del([path.resolve(__dirname, "fonts.css")]);

const FontminPlugin = (options) => ({
  name: "fontmin",
  enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],
  async ready() {
    fs.writeFileSync(path.resolve(__dirname, "fontminSelector.css"), ``);
    fs.writeFileSync(path.resolve(__dirname, "fonts.css"), ``);
    options.forEach(async (e, i) => {
      var fontFamily;
      let {
        src,
        text,
        selector,
      } = e;
      if (src && text && selector) {
        var fontmin = new Fontmin()
          .src(src)
          .use(rename(`${i}.ttf`))
          .use(Fontmin.glyph({
            text: text
          }))
          .use(Fontmin.ttf2eot())
          .use(Fontmin.ttf2woff())
          .use(Fontmin.ttf2svg())
          .use(Fontmin.css({
            fontFamily: function (fontInfo, ttf) {
              fontFamily = (ttf.name.fontFamily || fontInfo.fontFile).replace(/\W+/g, "");
              fs.appendFileSync(path.resolve(__dirname, "fontminSelector.css"),
                `${selector}{font-family:${fontFamily}!important;}`
              );
              fs.appendFileSync(path.resolve(__dirname, "fonts.css"),
                `@import './dist/${i}.css';`
              );
              return fontFamily;
            },
          }))
          .dest(path.resolve(__dirname, "dist/"));
        fontmin.run(err => { if (err) console.error(err); });

      } else {
        console.log("[Fontmin] Argument is missing");
      }
    });




  },

});



module.exports = FontminPlugin;
