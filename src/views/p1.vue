<template>

  <div>
    <el-steps :active="1" simple>
      <el-step title="选择图片" icon="el-icon-edit"></el-step>
      <el-step title="上传图片" icon="el-icon-upload"></el-step>
      <el-step title="处理图片，单击查看原图" icon="el-icon-picture"></el-step>
    </el-steps>

    <el-container>
      <el-container>
      <el-aside class="el-aside"
        style="width: 400px; height: 500px; border: 0px solid #ccc;
        /*!*内容居中*!*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/

        ;">

        <div style="margin-top: 200px">
          <el-upload
              v-model="fileList"
              ref="uploadref"
              action="#"
              :auto-upload="false"
              list-type="picture-card"
              :file-list="fileList"
              :limit="1"

              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-change="handleChange"

          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog v-model="dialogVisible">
            <img width="100%"  :src="dialogImageUrl" alt="" />
          </el-dialog>
          <el-button  @click="handleClick" size="small" type="primary" style="margin-top: 10px">上传并处理图片</el-button>
        </div>




      </el-aside >
      <el-main>
        <el-card class="box-card">
          <div>
            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0 " style="margin-left: 100px;margin-bottom: 50px;margin-top: 30px">
              <el-card :body-style="{ padding: '0px' }">
                <el-image
                    :src="before_big"
                    :style="{ width: '350px', height: '300px' }"
                    :preview-src-list="before_bigList">
                </el-image>
                <div style="padding: 14px;">
                  <span>处理前</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                  </div>
                </div>
              </el-card>
            </el-col>

            <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0" style="margin-left: 100px;margin-bottom: 50px;margin-top: 30px">
              <el-card :body-style="{ padding: '0px' }">
                <el-image
                    style="width: 350px; height: 300px"
                    :src="after_big"
                    :preview-src-list="after_bigList">
                </el-image>
                <div style="padding: 14px;">
                  <span>处理后</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                  </div>
                </div>
              </el-card>
            </el-col>
          </div>
        </el-card>
        <div style="margin-top: 70px">





<!--            </el-aside>-->
<!--            <el-main>-->
<!--              <div class="demo-image__preview">-->
<!--                <el-image-->
<!--                    style="width: 300px; height: 300px"-->
<!--                    :src="after_big"-->
<!--                    :preview-src-list="after_bigList">-->
<!--                </el-image>-->
<!--              </div>-->
<!--              <div class="el-upload__text"><em>处理后</em></div>-->
<!--            </el-main>-->

<!--          </el-container>-->

        </div>
      </el-main>
      </el-container>
      <el-footer>
        <div class="footer">
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="100"></el-progress>
        <el-progress type="circle" :percentage="70" ></el-progress>
        <el-progress type="circle" :percentage="50"></el-progress>
        </div>
      </el-footer>
    </el-container>

  </div>


</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      before:'',
      after:'',
      fileList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      fileParam: "",
      currentDate: new Date(),
      before_big: '',
      before_bigList: [],
      after_big: '',
      after_bigList: [],
    };
  },
  // created() {
  //   axios
  //       .get("http://127.0.0.1:5000/get-picture/")
  //       .then((response) => {
  //         console.log(response.data);
  //         this.fileList.push(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  // },
  methods: {
    handleRemove(file, fileList) {
      this.fileList.pop();
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleClick() {
      axios
          .post("http://127.0.0.1:5000/save-picture1/", this.fileParam)
          .then((response) => {
            console.log(response);
            this.before=response.data.url0;
            this.after=response.data.url1;
            this.before_big=response.data.url0;
            this.before_bigList.push(response.data.url0);
            this.after_big=response.data.url1;
            this.after_bigList.push(response.data.url1);
            console.log(this.before);
            console.log(this.after);
            this.fileList = [];
          })
          .catch((e) => {
            console.log(e);
          });

      // axios
      //     .get("http://127.0.0.1:5000/get-picture1/")
      //     .then((response) => {
      //       // url0=response.picture_data['url0'];
      //       console.log(response.data);
      //       this.fileList.push(response.data);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
    },

    handleChange(file, fileList) {
      this.fileParam = new FormData(); //创建form对象
      this.fileParam.append("file", file["raw"]);
      this.fileParam.append("fileName", file["name"]);
    },
  },
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.el-aside{
  width: 700px;
  height: 500px;
}
.divider{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.demo-image__preview {
  width: 300px;
  /*display: inline-block;*/
}
/*.el-aside{*/
/*  display: inline-block;*/
/*}*/
/*.el-upload{*/
/*  width:500px;*/
/*  height: 500px;*/
/*}*/
.footer{
  /*display: flex;*/
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 100px;
}


</style>