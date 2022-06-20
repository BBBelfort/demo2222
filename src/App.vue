<template>
  <div id="app">
    <app-header></app-header>
    <vue-particles
        color="#39AFFD"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="triangle"
        :particleSize="6"
        linesColor="#8DD1FE"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    ></vue-particles>

    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>


<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: 'app',
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#particles-js {
  background: linear-gradient(-180deg, #ffffff 0%, #ffffff 100%);
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
}
</style>