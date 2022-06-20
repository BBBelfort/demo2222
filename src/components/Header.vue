<template>
  <div id="Header">
    <div class="top-left-edition">
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect":router="true">
        <el-menu-item index="/p1">
          <i class="el-icon-menu"></i>
          <span slot="title">目标提取</span>

        </el-menu-item>
<el-menu-item index="/p2">
          <i class="el-icon-menu"></i>
          <span slot="title">变化检测</span>
        </el-menu-item>
<el-menu-item index="/p3">
          <i class="el-icon-menu"></i>
          <span slot="title">目标检测</span>
        </el-menu-item>
<el-menu-item index="/p4">
          <i class="el-icon-menu"></i>
          <span slot="title">地物分类</span>
        </el-menu-item>
      </el-menu>
    </div>




  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "物地分类",
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
#Header {
  padding: 0px 0px 0 0px;
  width: 100%;
  margin: 10px auto;
}

#word {
  margin-left: 45%;
  margin-top: -35px;
  margin-bottom: 37px;
  height: 60px;
  line-height: 3.2em;
}

h1 {
  /*text-align: center;*/
  color: #21b3b9;
  letter-spacing: 30px;
  font-size: 2.3em;
}

.el-menu-demo {
  width: 100%;
  margin: 0px auto;
  padding: 0px;
}

.top-left-edition span i {
  float: left;
  margin-right: 10px;
}

i,
input,
label {
  vertical-align: middle;
}

i {
  border: 0;
  display: block;
  cursor: pointer;
}

.top-left-edition span {
  float: left;
  font-size: 16px;
  color: #999999;
  line-height: 24px;
  margin-right: 40px;
}
</style>