<template>
  <Renderer ref="rendererC" antialias :orbit-ctrl="{ enableDamping: true }" resize="window">
    <Camera :position="{ z: 5, x: 5 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <TorusKnot :size="1" ref="meshC" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial />
      </TorusKnot>
    </Scene>
  </Renderer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs'
const rendererC = ref()
const meshC = ref()
onMounted(() => {
  const renderer = rendererC.value
  const mesh = meshC.value.mesh
  renderer.onBeforeRender(() => {
    mesh.rotation.x += 0.01
  })
  
})
</script>

<style>
body {
  margin: 0;
}
canvas {
  position: absolute;
  z-index: -1;
}
</style>