import * as Cesium from 'cesium'
import "cesium/Build/Cesium/Widgets/widgets.css";

export default async function initCesiumMap() {
    window.CESIUM_BASE_URL = '/';

    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMDAwNmFiNS1mZWY5LTQ1YmEtOWM4Mi0wZDg5MjUxNDMzM2MiLCJpZCI6Mjc2NTEwLCJpYXQiOjE3NDQ4NzgwNjl9.pC3sbaxXZJ60hYWN-AUdWl2674GdTgAaj7XLyo3859M';

    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
        baseLayerPicker: false,           // 隐藏图层选择器
        navigationHelpButton: false,      // 隐藏导航帮助按钮
        animation: false,                 // 隐藏动画控件
        timeline: false,                  // 隐藏时间轴
        fullscreenButton: false,          // 隐藏全屏按钮
        vrButton: false,                  // 隐藏VR按钮
        geocoder: false,                  // 隐藏搜索框
        homeButton: false,                // 隐藏Home按钮
        sceneModePicker: false,           // 隐藏视角切换按钮（2D/3D/Columbus）
        selectionIndicator: false,        // 隐藏选中实体时的指示器
        infoBox: false,                   // 隐藏信息窗口
        shouldAnimate: true               // 启用动画（可选）
    });

    viewer.cesiumWidget.creditContainer.style.display = 'none';//隐藏 Logo 和 Credits（版权信息）

    const buildingTileset = await Cesium.createOsmBuildingsAsync();
    viewer.scene.primitives.add(buildingTileset);

    return viewer//如果你不 return viewer，那么你将无法在其它组件或模块中进一步使用或控制这个 Cesium 场景。所以这行代码是非常必要且关键的。
    //模块化	将地图初始化封装在独立文件中，返回 viewer 作为接口
    //可复用	多个组件/页面均可导入并使用同一个 viewer 实例
    //易扩展	可基于返回的 viewer 编写工具函数，提升开发效率
    //可维护	修改地图初始化只需改动一处，不影响其他代码

}