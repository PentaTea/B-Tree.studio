<template>
  <div class="three">
    <div :class="[threeId,'three-data']"></div>
    <div class="three-control">
      <transition name="fade">
        <div v-show="resetDisply" class="three-control-reset">
          <el-button plain @click="Reset">重置视角</el-button>
        </div>
      </transition>
    </div>
    <div @mousedown="FristClick" @touchstart="FristClick" class="three-container" :id="threeId"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import "three-orbitcontrols";
// import { SVGRenderer } from "three/examples/jsm/renderers/SVGRenderer";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Stats from "three/examples/jsm/libs/stats.module";
import { Loading } from "element-ui";
const YAML = require("js-yaml");
import axios from "axios";

export default {
  name: "Three",
  data() {
    return {
      threeId: "three-" + this._uid,
      camera: null,
      scene: null,
      renderer: null,
      object: null,
      manager: null,
      container: null,
      loadingInstance: null,
      stats: null,
      controls: null,
      resetDisply: 0,
      widthDisplay: 0,
      autoRotateSpeed: -2
    };
  },
  props: {
    conf: {
      type: String,
      default: ""
    },

    height: {
      type: String,
      default: "100px"
    },
    width: {
      type: String,
      default: "100%"
    }
  },
  watch: {
    autoRotateSpeed() {
      this.controls.autoRotateSpeed = this.autoRotateSpeed;
    },
    widthDisplay() {
      //监视窗口变化并更新
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted: function() {
    this.init();
    this.load();
    this.animate();
  },
  methods: {
    init() {
      //容器
      this.container = document.getElementById(this.threeId);
      this.height
        ? this.container.parentNode.setAttribute("height", this.height)
        : 0;
      this.width
        ? this.container.parentNode.setAttribute("width", this.width)
        : 0;
      // 创建性能监视器
      this.stats = new Stats();
      this.stats.domElement.style.position = "relative";
      this.stats.domElement.style.left = "0px";
      this.stats.domElement.style.top = "0px";
      this.stats.domElement.style.zIndex = "10";
      this.stats.domElement.style.display = "none";
      this.container.appendChild(this.stats.domElement);

      //创建场景
      this.scene = new THREE.Scene();

      //创建光源
      var point = new THREE.PointLight(0xffffff, 0); //点光源
      point.position.set(10, 10, 10); //点光源位置
      this.scene.add(point); //点光源添加到场景中
      var point2 = new THREE.PointLight(0xffffff, 3); //点光源
      point2.position.set(-5, -5, -5); //点光源位置
      this.scene.add(point2); //点光源添加到场景中
      var point3 = new THREE.PointLight(0xffffff, 3); //点光源
      point3.position.set(5, 5, 5); //点光源位置
      this.scene.add(point3); //点光源添加到场景中

      var ambient = new THREE.AmbientLight(0x222222); //环境光
      this.scene.add(ambient);

      //创建相机
      this.camera = new THREE.PerspectiveCamera(
        50,
        this.container.clientWidth / this.container.clientHeight,
        0.001,
        1000
      );
      this.camera.position.set(2, 0, 0.0); //设置相机位置
      this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)

      //创建渲染器
      //this.renderer = new SVGRenderer();
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      ); //设置渲染区域尺寸
      this.renderer.setClearColor(0xffffff, 1); //设置背景颜色
      this.renderer.render(this.scene, this.camera);
      this.renderer.domElement.style.position = "absolute";
      this.renderer.domElement.style.left = "0px";
      this.renderer.domElement.style.top = "0px";
      this.container.appendChild(this.renderer.domElement);

      //创建控制器
      this.controls = new THREE.OrbitControls(
        this.camera,
        this.renderer.domElement
      );
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = this.autoRotateSpeed;
      this.controls.enableDamping = true;
      this.controls.screenSpacePanning = true;
      this.controls.saveState();
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      //controls.addEventListener("change", this.animate);

      //创建加载管理器
      this.manager = new THREE.LoadingManager(
        () => {
          this.scene.add(this.object);
          this.renderer.render(this.scene, this.camera);
          this.stats.domElement.style.display = "";
          this.loadingInstance.close();
        },
        (item, loaded, total) => {
          var percentComplete = (loaded / total) * 100;
          console.log(
            Math.round(percentComplete, 2) + "% downloaded \n" + item
          );
        },
        error => {
          console.log(error);
        }
      );
      this.manager.onStart = () => {
        this.loadingInstance = Loading.service({ target: this.container });
      };
    },

    animate: function() {
      //递归
      requestAnimationFrame(this.animate);
      //窗口宽度更新
      this.widthDisplay = this.container.clientWidth;
      this.renderer.render(this.scene, this.camera);
      this.stats.update();
      this.controls.update();
    },

    load: function() {
      let path = "/assets/model/";
      //this.OBJLoader = new OBJLoader(this.manager); //obj加载器
      //this.MTLLoader = new MTLLoader(this.manager); //材质文件加载器
      let __GLTFLoader = new GLTFLoader(this.manager); //GLTF文件加载器

      axios.get(path + this.conf).then(response => {
        let {
          file = "RapberryPiZero.glb",
          type = "glTF",
          position = { x: 0, y: 0, z: 0 },
          autoRotateSpeed = -2
        } = YAML.load(response.data);
        switch (type) {
          case "glTF":
            __GLTFLoader.load(path + file, o => {
              // 控制台查看返回结构：包含Mesh的Group
              console.log(o);
              this.object = o.scene;
              this.object.position.set(position.x, position.y, position.z);
              this.autoRotateSpeed = autoRotateSpeed;
            });
            break;

          default:
            break;
        }
      });

      // //obj
      // this.MTLLoader.load(
      //   "/assets/RapberryPiZeroOBJ/RapberryPiZero.mtl",
      //   materials => {
      //     // 返回一个包含材质的对象MaterialCreator
      //     console.log(materials);
      //     //obj的模型会和MaterialCreator包含的材质对应起来
      //     this.OBJLoader.setMaterials(materials);
      //     this.OBJLoader.load(
      //       "/assets/RapberryPiZeroOBJ/RapberryPiZero.obj",
      //       o => {
      //         // 控制台查看返回结构：包含一个网格模型Mesh的组Group
      //         console.log(o);
      //         this.object = o;
      //       },
      //       function(xhr) {
      //         if (xhr.lengthComputable) {
      //           var percentComplete = (xhr.loaded / xhr.total) * 100;
      //           console.log(
      //             "model " + Math.round(percentComplete, 2) + "% downloaded"
      //           );
      //         }
      //       },
      //       // called when loading has errors
      //       function(error) {
      //         console.log("download error");
      //       }
      //     );
      //   }
      // );
    },
    FristClick() {
      this.autoRotateSpeed = 0;
      this.resetDisply = 1;
    },
    Reset() {
      this.controls.reset();
      this.resetDisply = 0;
    }
  }
};
</script>

<style>
.three {
  position: relative;
  width: 100%;
  height: 400px;
  margin: 20px 0;
}
.three-control {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.three-control-reset {
  z-index: 10;
  height: 1px;
  position: relative;
  top: 80%;
}
.three-container {
  position: absolute;
  border: 1px solid #eaecef;
  width: 100%;
  height: 100%;
}
.el-loading-mask {
  z-index: 10;
}
</style>
