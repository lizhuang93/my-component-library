const Nav = () => import(/* webpackChunkName: 'demo' */ './nav');
const TriangleCoordinates = () => import(/* webpackChunkName: 'demo' */ './components/triangleCoordinates/demo');
const UploadFile = () => import(/* webpackChunkName: 'demo' */ './components/uploadFile/demo');
const Tooltip = () => import(/* webpackChunkName: 'demo' */ './components/tooltip/demo');
const RunSegment = () => import(/* webpackChunkName: 'demo' */ './components/runSegment/demo');
const HugeTree = () => import(/* webpackChunkName: 'demo' */ './components/hugeTree/demo');
const WebSocket = () => import(/* webpackChunkName: 'demo' */ './components/webSocket/demo');
const Notification = () => import(/* webpackChunkName: 'demo' */ './components/notification/demo');

const routes = [
  {
    path: '',
    name: 'nav',
    component: Nav,
  },
  {
    path: 'triangleCoordinates',
    name: 'triangleCoordinates',
    component: TriangleCoordinates,
  },
  {
    path: 'uploadFile',
    name: 'uploadFile',
    component: UploadFile,
  },
  {
    path: 'tooltip',
    name: 'tooltip',
    component: Tooltip,
  },
  {
    path: 'runSegment',
    name: 'runSegment',
    component: RunSegment,
  },
  {
    path: 'hugeTree',
    name: 'hugeTree',
    component: HugeTree,
  },
  {
    path: 'webSocket',
    name: 'webSocket',
    component: WebSocket,
  },
  {
    path: 'notification',
    name: 'notification',
    component: Notification,
  },
];

export default routes;
