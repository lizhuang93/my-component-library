<template>
  <div class="socket-demo">
    <dt-web-socket
      url="ws://localhost:9090"
      :heartMsg="{ action: 'heartCheck' }"
      @onOpen="onOpen"
      @onMessage="onMessage"
      @onClose="onClose"
      @onError="onError"
    ></dt-web-socket>
  </div>
</template>

<script>
import DtWebSocket from '../../webSocket/index';
import notify from '../notify.js';
export default {
  components: { DtWebSocket },
  props: {},
  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {
    onOpen(evt) {
      console.log('onOpen', evt);
    },
    onMessage(data) {
      notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        onClick: () => {
          console.log('onClick--->');
        },
        onClose: () => {
          console.log('onClose--->');
        },
      });
      console.log('onMessage', data);
    },
    onClose(evt) {
      console.log('onClose', evt);
    },
    onError(evt) {
      console.log('onError', evt);
    },
  },
};
</script>

<style scoped lang="less" style="text/less"></style>
