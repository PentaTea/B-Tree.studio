import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import vuescroll from "vuescroll";

export default function({ Vue }) {
  Vue.use(ElementUI);
  Vue.use(vuescroll, {
    ops: {
      vuescroll: {
        mode: "native",
        sizeStrategy: "percent",
        detectResize: true
      },
      scrollPanel: {
        initialScrollY: false,
        initialScrollX: false,
        scrollingX: true,
        scrollingY: true,
        speed: 300,
        easing: undefined,
        verticalNativeBarPos: "right",
        maxHeight: undefined,
        maxWidth: undefined
      },
      rail: {
        background: "#fff",
        opacity: 0,
        size: "6px",
        specifyBorderRadius: false,
        gutterOfEnds: null,
        gutterOfSide: "2px",
        keepShow: false
      },
      bar: {
        showDelay: 500,
        onlyShowBarOnScroll: false,
        keepShow: false,
        background: "#66ccff",
        opacity: 1,
        hoverStyle: false,
        specifyBorderRadius: false,
        minSize: false,
        size: "6px",
        disable: false
      }
    },
    name: "VueScroll"
  });
}
