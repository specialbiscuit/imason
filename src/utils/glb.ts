// import * as THREE from 'three' //导入整个 three.js核心库
// import { EquirectangularReflectionMapping, Scene } from 'three' //导入纹理映射模块
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader' //导入RGB加载器
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' //导入控制器模块，轨道控制器
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' //导入GLTF模块，模型解析器,根据文件格式来定

// export default class GLB {

//     scene: THREE.Scene
//     camera: THREE.Camera
//     renderer: THREE.WebGLRenderer
//     controls: OrbitControls

//     constructor() {
//         this.scene = this.initScene()
//         this.camera = this.initCamera()
//         this.renderer = this.initRenderer()
//         this.controls = this.initControls(this.camera, this.renderer)
//         //监听场景大小改变，跳转渲染尺寸
//         window.addEventListener("resize", this.onWindowResize.bind(this))
//     }

//     private initScene() {
//         return new THREE.Scene()
//     }

//     private initCamera() {
//         const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 200)
//         camera.position.set(-1.8, 0.6, 20)
//         return camera
//     }
    
//     private initRenderer() {
//         const renderer = new THREE.WebGLRenderer({
//             // 设置抗锯齿
//             antialias: true
//         })
//         // 设置屏幕像素比
//         renderer.setPixelRatio(window.devicePixelRatio)
//         // 渲染的尺寸大小
//         renderer.setSize(window.innerWidth, window.innerHeight)
//         // 色调映射
//         renderer.toneMapping = THREE.ACESFilmicToneMapping
//         // 曝光
//         renderer.toneMappingExposure = 3
//         return renderer;
//     }

//     private initControls(camera: THREE.Camera, renderer: THREE.WebGLRenderer) {
//         return new OrbitControls(this.camera, this.renderer.domElement)
//     }


//     private onWindowResize() { //调整屏幕大小
//         this.camera.aspect = window.innerWidth / window.innerHeight //摄像机宽高比例
//         this.camera.updateWorldMatrix() //相机更新矩阵，将3d内容投射到2d面上转换
//         this.renderer.setSize(window.innerWidth, window.innerHeight)
//     }



// }