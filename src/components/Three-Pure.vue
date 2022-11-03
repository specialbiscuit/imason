<template>
    <!-- <a-entity camera look-controls position="500 500 500"></a-entity> -->
    <a-scene> 
        <!-- <a-box color="red" position="0 2 -5" rotation="0 45 45" scale="2 2 2"></a-box> -->
        <a-entity id="rig"  position="0 0 0">
            <a-camera look-controls wasd-controls="false"></a-camera>
        </a-entity>

        <a-entity gltf-model = "url(models/gltf/Soldier.glb); dracoDecoderPath: three/examples/js/libs/draco/;"></a-entity>
        
    </a-scene>
</template>