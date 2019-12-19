const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 9090 }); // 服务器端口

wss.on('connection', ws => {
  console.log('server: receive connection.');
  responseHeartCheck(ws);

  // 接收客户端消息
  ws.on('message', message => {
    console.log('server: received:', message);
    if (typeof message === 'string') message = JSON.parse(message);
    const { action, params } = message;

    if (action === 'heartCheck') {
      responseHeartCheck(ws);
    } else {
      // do other something
      send(ws, { action: action, params: { ...params, add: '+1' } });
    }
  });

  // 处理异常
  ws.on('error', error => {
    console.log(error);
  });

  // 处理关闭
  ws.on('close', closed => {
    console.log(closed);
  });
});

function send(ws, config) {
  // 主动发送信息
  ws.send(JSON.stringify(config));
}

function responseHeartCheck(ws) {
  ws.send(JSON.stringify({ action: 'heartCheck' }));
}
