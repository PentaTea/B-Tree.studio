const {
  path
} = require("@vuepress/shared-utils");
global.fetch = require("node-fetch");

const MusicBarPlugin = (
  options, ctx
) => ({

  enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],
  globalUIComponents: "MusicBar",
  define: {
    MUSICBAR_OPTIONS: options,
    MUSICBAR_CONTEXT: ctx
  }
});

module.exports = MusicBarPlugin;