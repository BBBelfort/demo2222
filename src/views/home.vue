<template>
<div>
  <h1>GIS地理信息系统</h1>
  <i class="el-icon-discover"></i>
  <el-carousel :interval="2000" type="card" height="500px">
    <el-carousel-item v-for="item in imgList" :key="item.name">
      <img :src="item.src" style="height:100%;width:100%;" alt="图片丢失了" :title="item.title" />

    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      imgList: [
        {
          name: "p1",
          src:"https://pica.zhimg.com/v2-6e8689c2a284f65e2f31dd5d65eae7d8_r.jpg?source=1940ef5c",
          title: "这是lj.png"
        },
        {
          name: "p2",
          src: "https://pic3.zhimg.com/v2-eeeabca37cf30f9100e6b8cdc66f917b_r.jpg?source=1940ef5c",
          title: "这是logo.png"
        },
        {
          name: "p3",
          src: "https://pica.zhimg.com/v2-c92bc8eb5551df8aa0243ff9084bb5c8_r.jpg?source=1940ef5c",
          title: "这是bg.png"
        },
        {
          name: "p4",
          src:"https://pica.zhimg.com/v2-71c2ed69591a2cdf059410bb0d1fe5ea_r.jpg?source=1940ef5c",
          title: "这是sadmas.png"
        }
      ]
    };
  },
}

</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>