<template>
    <a-scene> 
        <a-entity id="rig"  position="0 0 0">
            <a-camera look-controls wasd-controls="false"></a-camera>
        </a-entity>

        <a-entity gltf-model = "url(models/gltf/Soldier.glb); dracoDecoderPath: three/examples/js/libs/draco/;"></a-entity>
        
    </a-scene>
</template>