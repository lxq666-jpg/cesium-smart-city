<script setup>//使用了 <script setup> 语法，默认情况下，import './cesium/mapInstance.js' 会在组件创建前执行，此时 cesiumContainer 还未被挂载。
import {ref,onMounted} from 'vue'
import initCesiumMap from './cesium/mapInstance.js'

const cesiumContainer = ref(null)

onMounted(() => {
    initCesiumMap()
})
</script>

<template>
    <div id="cesiumContainer" ref="cesiumContainer">

    </div>
</template>

<style scoped>
/* html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.cesium-widget-credits,
.cesium-infoBox,
.cesium-navigation-help {
    display: none !important;
} */

#cesiumContainer {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    /* z-index: 9999; */
}
</style>
