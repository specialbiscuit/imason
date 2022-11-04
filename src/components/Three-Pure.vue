<template>
    <a-scene> 
        <a-entity id="rig"  position="6 0 5" rotation="0 90 0">
            <a-entity  camera look-controls wasd-controls="false"></a-entity>
        </a-entity>

        <a-entity gltf-model = "url(models/gltf/Soldier.glb); dracoDecoderPath: three/examples/js/libs/draco/;"></a-entity>
        
    </a-scene>
</template>