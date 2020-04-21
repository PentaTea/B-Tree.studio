const { path } = require("@vuepress/shared-utils");

const FontminPlugin = (options, ctx) => ({
  name: "fontmin",
  enhanceAppFiles: [path.resolve(__dirname, "enhanceAppFile.js")],
  async ready() {
    var Fontmin = require('fontmin');
    var srcPath = 'docs/.vuepress/font/AaXiaBiXiaoShu-2.ttf';
    var destPath = path.resolve(__dirname, "font/");
    var text = 'B-Tree Design Studio';

    // 初始化
    var fontmin = new Fontmin()
      .src(srcPath)               // 输入配置
      .use(Fontmin.glyph({        // 字型提取插件
        text: text              // 所需文字
      }))
      .use(Fontmin.ttf2eot())     // eot 转换插件
      .use(Fontmin.ttf2woff())    // woff 转换插件     
      .use(Fontmin.ttf2svg())     // svg 转换插件
      .use(Fontmin.css())         // css 生成插件
      .dest(destPath);            // 输出配置

    // 执行
    fontmin.run(function (err, files, stream) {
      if (files || stream) {
        console.error(files, " ", stream)
      }
      if (err) {                  // 异常捕捉
        console.error(err);
      }
      console.log('done');        // 成功
    });
  }
});

module.exports = FontminPlugin;
