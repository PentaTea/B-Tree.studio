const { path } = require("@vuepress/shared-utils");

const FontminPlugin = (options, ctx) => ({
  name: "fontmin",
  enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],

});

module.exports = FontminPlugin;
