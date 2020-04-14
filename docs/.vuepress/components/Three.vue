<template>
  <div class="three-container" :id="threeId"></div>
</template>


<script>
//base on https://github.com/NBSeven/vue-svg-draw
import * as THREE from "three";
import "three-orbitcontrols";
import { SVGRenderer } from "three/examples/jsm/renderers/SVGRenderer";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default {
  name: "Three",
  data() {
    return {
      threeId: "three-" + this._uid,
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      OBJLoader: null,
      MTLLoader: null,
      GLTFLoader: null,
      object: {},
      manager: null
    };
  },
  props: {
    file: {
      type: String,
      default: "" // 文件路径 绝对路径
    },
    height: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "100%"
    }
  },
  mounted: function() {
    this.init();
    this.animate();
    this.load();
  },
  methods: {
    init() {
      var container = document.getElementById(this.threeId);
      /**
       * 创建场景对象Scene
       */
      this.scene = new THREE.Scene();
      /**
       * 创建网格模型
       */
      // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
      // let geometry = new THREE.IcosahedronGeometry(50);
      // let material = new THREE.MeshLambertMaterial({
      //   color: 0x66ccff
      // }); //材质对象Material
      // this.mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      // this.scene.add(this.mesh); //网格模型添加到场景中

      /**
       * 光源设置
       */

      var point = new THREE.PointLight(0xffffff, 0); //点光源
      point.position.set(10, 10, 10); //点光源位置
      this.scene.add(point); //点光源添加到场景中
      var point2 = new THREE.PointLight(0xffffff, 2); //点光源
      point2.position.set(-0, -10, -0); //点光源位置
      this.scene.add(point2); //点光源添加到场景中
      var point3 = new THREE.PointLight(0xffffff, 2); //点光源
      point3.position.set(0, 10, 0); //点光源位置
      this.scene.add(point3); //点光源添加到场景中

      var ambient = new THREE.AmbientLight(0x222222); //环境光
      this.scene.add(ambient);
      /**
       * 相机设置
       */
      //创建相机对象
      this.camera = new THREE.PerspectiveCamera(
        50,
        container.clientWidth / container.clientHeight,
        0.001,
        1000
      );
      this.camera.position.set(0.0, 1.5, 0.0); //设置相机位置
      this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
      /**
       * 创建渲染器对象
       */
      //this.renderer = new SVGRenderer();
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight); //设置渲染区域尺寸
      this.renderer.setClearColor(0xffffff, 1); //设置背景颜色
      this.renderer.render(this.scene, this.camera);
      container.appendChild(this.renderer.domElement);
      let controls = new THREE.OrbitControls(
        this.camera,
        this.renderer.domElement
      );
      this.renderer.render(this.scene, this.camera);
      controls.addEventListener("change", this.animate);
    },

    animate: function() {
      //requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },

    load: function() {
      this.manager = new THREE.LoadingManager(() => {
        // this.object.traverse(function(child) {
        //   if (child instanceof THREE.Mesh) {
        //     child.material.shading = THREE.SmoothShading;
        //   }
        // });
        //this.object.position.set(0.051, -0.02, -0.014);
        //this.object.children[0].material.color.set(0xffffff); //设置材质颜色
        this.scene.add(this.object);
        this.renderer.render(this.scene, this.camera);
      });

      this.manager.onProgress = function(item, loaded, total) {
        console.log(item, loaded, total);
      };

      this.OBJLoader = new OBJLoader(this.manager); //obj加载器
      this.MTLLoader = new MTLLoader(this.manager); //材质文件加载器
      this.GLTFLoader = new GLTFLoader(this.manager); //GLTF文件加载器

      this.GLTFLoader.load(
        "/assets/RapberryPiZeroOBJ/1.glb",
        o => {
          // 控制台查看返回结构：包含一个网格模型Mesh的组Group
          console.log(o);
          this.object = o.scene;
        },
        function(xhr) {
          if (xhr.lengthComputable) {
            var percentComplete = (xhr.loaded / xhr.total) * 100;
            console.log(
              "model " + Math.round(percentComplete, 2) + "% downloaded"
            );
          }
        },
        // called when loading has errors
        function(error) {
          console.log(error);
        }
      );

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
    }
  }
};
</script>

<style>
.three-container {
  width: 100%;
  height: 400px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
