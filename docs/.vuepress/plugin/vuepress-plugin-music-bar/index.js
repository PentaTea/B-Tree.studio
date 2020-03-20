const { path } = require("@vuepress/shared-utils");
global.fetch = require("node-fetch");

const MusicBarPlugin = (options, ctx) => ({
  name: "music-bar",
  enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],
  globalUIComponents: "MusicBar",
  define: {
    MUSICBAR_OPTIONS: options,
    MUSICBAR_ENABLE_DEBUG: !ctx.isProd && options.debugMode != false
  },
  async ready() {
    if (!ctx.isProd) {
      console.log("\n");
      if (options.debugMode != false) {
        console.log(
          "\x1b[32m[MusicBar]检测到当前为开发环境,将自动输出log到console\x1b[0m"
        );
        console.log(
          "\x1b[32m[MusicBar]Detect that you are currently in the development environment, and automatically output log to the console\x1b[0m"
        );
      } else if (options.debugMode === false) {
        console.log(
          "\x1b[32m[MusicBar]检测到当前为开发环境,但debugMode被关闭了,将不会输出log\x1b[0m"
        );
        console.log(
          "\x1b[32m[MusicBar]Detect that you are currently in the development environment, but debugMode is turned off, so no log will be output\x1b[0m"
        );
      }
      console.log("\n");
    }
  }
});

module.exports = MusicBarPlugin;
