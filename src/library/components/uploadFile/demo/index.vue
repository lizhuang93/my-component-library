<template>
  <div class="upload">
    <!-- 预览 -->
    <section class="file-list">
      <div class="img-wrap" v-for="(item, index) in fileList" :key="index">
        <div class="mask" v-if="Number(item.progress < 100)">
          <span class="text">{{ item.progress || 0 }}%</span>
        </div>
        <i @click="onDelete(item)">&times;</i>
        <img :src="preview(item)" alt="" />
      </div>
    </section>
    <Add
      @onAdd="onAdd"
      @onSuccess="onSuccess"
      @onProgress="onProgress"
      @onFailed="onFailed"
      :url="post.url"
      :uploadMethod="post.method"
    ></Add>
    <select @change="onChange">
      <option selected="selected" value="formdata">formdata</option>
      <option value="arraybuffer">arraybuffer</option>
    </select>
    <read-me class="mark-down"></read-me>
  </div>
</template>

<script>
import Add from '../add';
import ReadMe from './readme.md';
const POST_METHOD = {
  formdata: {
    url: '/api/fileUploadByFormData',
    method: 'formdata',
  },
  arraybuffer: {
    url: '/api/fileUploadByArrayBuffer',
    method: 'arraybuffer',
  },
};
export default {
  components: {
    Add,
    ReadMe,
  },
  props: {},
  data() {
    return {
      fileList: [],
      post: POST_METHOD.formdata,
    };
  },

  computed: {},

  mounted() {},

  methods: {
    // 添加图片，但此时并未传递完成, 选择图片是触发
    onAdd(files) {
      console.log(files);
      files.forEach(file => {
        this.fileList.push({
          name: file.name,
          size: file.size,
          file: file, // File 对象自身
          progress: 0,
        });
      });
    },
    onSuccess({ file, res }) {
      console.log('file--->', file);
      console.log('res.data--->', res.data);
    },
    onProgress({ file, progress }) {
      const index = this.fileList.findIndex(i => i.name === file.name);
      this.fileList[index].progress = progress;
    },
    onFailed(file) {
      this.onDelete(file);
    },
    onDelete(file) {
      const index = this.fileList.findIndex(i => i.name === file.name);
      this.fileList.splice(index, 1);
      // 发送 detete 请求，，，
    },
    preview(file) {
      if ('URL' in window) {
        var src = window.URL.createObjectURL(file.file);
        return src;
      }
    },
    onChange({ target }) {
      console.log(target.value);
      this.post = POST_METHOD[target.value];
    },
  },
};
</script>

<style scoped lang="less" style="text/less">
.upload {
  text-align: left;
  .file-list {
    display: inline-block;
    .img-wrap {
      position: relative;
      display: inline-block;
      margin: 0 20px 20px 0;
      .mask {
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #ffffff;
        .text {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-weight: 700;
        }
      }
      i {
        position: absolute;
        text-align: center;
        right: -8px;
        top: -8px;
        width: 16px;
        height: 16px;
        color: #ffffff;
        background-color: red;
        line-height: 16px;
        border-radius: 50%;
        font-style: normal;
        font-weight: 700;
        cursor: pointer;
      }
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
