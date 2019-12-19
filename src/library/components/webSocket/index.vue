<template>
  <div class=""></div>
</template>

<script>
export default {
  components: {},
  props: {
    url: { type: String, default: 'ws://localhost:9090' }, // 协议链接
    delay: { type: Number, default: 3000 }, // 单位 ms， 心跳检测间隔
    maxCount: { type: Number, default: 3 }, // 检测 maxCount 次无响应，则重连
    heartMsg: {
      type: [Object, String],
      default: () => {
        return { action: 'heartCheck' };
      },
    }, // 心跳检测发送的消息
    autoReconect: { type: Boolean, default: true }, // 发生错误自动重连
  },
  data() {
    return {
      ws: '',
      message: [],
      heartCount: 0,
    };
  },

  computed: {},

  mounted() {
    this.conect();
  },

  methods: {
    conect() {
      // this.ws = new WebSocket('ws://10.63.0.81:19018/socket/fdsafdsfsa');
      this.ws = new WebSocket(this.url);
      this.ws.onopen = evt => {
        this.lived();
        this.$emit('onOpen', evt);
      };

      this.ws.onmessage = ({ data }) => {
        this.lived();
        if (typeof data === 'string') data = JSON.parse(data);
        this.$emit('onMessage', data);
        // console.log(JSON.parse(data));
        // if (typeof data === 'string') data = JSON.parse(data);
        // const { action, params } = data;
        // console.log('Received Message: ', data);
        // if (action !== 'heartCheck') {
        //   this.message.push(JSON.stringify(data));
        // }
      };

      this.ws.onclose = evt => {
        this.$emit('onClose', evt);
      };
      this.ws.onerror = evt => {
        this.$emit('onError', evt);
        if (this.autoReconect) this.connect();
      };
      this.heartCheck();
    },

    send(msg) {
      if (typeof msg === 'object' && typeof msg !== null) msg = JSON.stringify(msg);
      this.ws.send(msg);
    },

    // 心跳检测
    heartCheck() {
      setTimeout(() => {
        if (this.heartCount > this.maxCount) {
          this.conect();
          return;
        }
        this.send(this.heartMsg);
        this.heartCount++;
        this.heartCheck();
      }, this.delay);
    },

    lived() {
      this.heartCount = 0;
    },

    close() {
      this.ws.close();
    },
  },
};
</script>

<style scoped lang="less" style="text/less"></style>
