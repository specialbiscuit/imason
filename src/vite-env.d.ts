/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "three/Three.js"
declare module "three-orbitcontrols/OrbitControls.js"
declare module "utils/Base3d.js"
declare module "vue-3d-model"
