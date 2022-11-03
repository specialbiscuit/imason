import * as THREE from 'three' //导入整个 three.js核心库
import { EquirectangularReflectionMapping } from 'three' //导入纹理映射模块
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader' //导入RGB加载器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' //导入控制器模块，轨道控制器
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' //导入GLTF模块，模型解析器,根据文件格式来定

import { RoomEnvironment  } from "three/examples/jsm/environments/RoomEnvironment";


class Base3d {
    constructor(selector) {
        this.container = document.querySelector(selector)
        this.camera
        this.scene
        this.renderer
        this.controls
        this.init()
        this.animate()
    }
    init() {
        //初始化场景
        this.initScene()
        //初始化相机
        this.initCamera()
        //初始化渲染器
        this.initRender()
        this.setEnvMap('')
        //初始化控制器，控制摄像头,控制器一定要在渲染器后
        this.initControls()
        // 添加物体模型
        this.addMesh()
        //监听场景大小改变，跳转渲染尺寸
        window.addEventListener("resize", this.onWindowResize.bind(this))
    }
    initScene() {
        this.scene = new THREE.Scene()
        // this.setEnvMap('aircraft_workshop_01_4k')
    }
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 200)
        this.camera.position.set(-1.8, 0.6, 20)
    }
    initRender() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true }) //设置抗锯齿
        //设置屏幕像素比
        this.renderer.setPixelRatio(window.devicePixelRatio)
        //渲染的尺寸大小
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        //色调映射
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping
        //曝光
        this.renderer.toneMappingExposure = 3
        this.container.appendChild(this.renderer.domElement)
    }
    setEnvMap(hdr) { //设置环境背景

        // 坐标轴渲染
        // const axesHelper = new THREE.AxesHelper(12); 
        this.scene.background = new THREE.Color( 0xbfe3dd );
        // this.scene.add(axesHelper);           

        // 网格渲染
        const grid = new THREE.GridHelper(1000, 1000, 0xFF0000, 0x444444);            
        grid.material.opacity = 0.4;
        grid.material.transparent = false;
        grid.rotation.x = Math.PI/2.0;
        this.scene.add(grid);     
        
        new RGBELoader().load((texture) => {
            texture.mapping = EquirectangularReflectionMapping  //圆柱形形纹理映射
            this.scene.background = texture
            this.scene.environment = texture
        })
        
        // 背景色渲染
        // const pmremGenerator = new THREE.PMREMGenerator( this.renderer );
        // this.scene.background = new THREE.Color( 0xbfe3dd );
        // this.scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture;


        // GLTF模型渲染
        // new RGBELoader().setPath('./models/gltf/').load(hdr+'.hdr', (texture) => {
        //     texture.mapping = EquirectangularReflectionMapping  //圆柱形形纹理映射
        //     this.scene.background = texture
        //     this.scene.environment = texture
        // })
    }
    render() {
        this.renderer.render(this.scene, this.camera)
    }
    animate() {
        this.renderer.setAnimationLoop(this.render.bind(this))
    }
    initControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    }
    //加载模型
    async setModel(modelName) {
        const loader = new GLTFLoader().setPath('models/gltf/')
        return await loader.load(modelName, (gltf) => {
            console.log(gltf);
            this.model = gltf.scenes[0]
            this.scene.add(this.model)
            // resolve(this.modelName + '模型添加成功')
        })
        return new Promise((resolve, reject) => {
            const loader = new GLTFLoader().setPath('models/gltf/')
            loader.load(modelName, (gltf) => {
                console.log(gltf);
                this.model = gltf.scenes[0]
                this.scene.add(this.model)
                resolve(this.modelName + '模型添加成功')
            })
        })
    }
    addMesh() {
        this.setModel('airplane63.gltf')
    }
    onWindowResize() { //调整屏幕大小
        this.camera.aspect = window.innerWidth / window.innerHeight //摄像机宽高比例
        this.camera.updateProjectionMatrix() //相机更新矩阵，将3d内容投射到2d面上转换
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
}
export default Base3d