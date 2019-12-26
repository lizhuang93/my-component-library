import elNotification from './main.js'; // 页面级通知

/**
 * 1. 页面可见 || 浏览器不支持 Notification || 浏览器禁止了 Notification, 页面级通知
 * 2. else， 系统级通知
 * @param {*} options
 */
export default function(options = {}) {
  if (window.document.visibilityState === 'visible' || !window.Notification) {
    elNotification(options);
    return;
  }

  if (Notification.permission == 'granted') {
    popNotice(options); // 系统级通知
  } else if (Notification.permission != 'denied') {
    Notification.requestPermission(function(permission) {
      popNotice(options); // 系统级通知
    });
  } else {
    elNotification(options); // 页面级通知
  }
}

function popNotice(options) {
  if (Notification.permission == 'granted') {
    var notification = new Notification(options.title, {
      body: options.message,
    });

    notification.onclick = function() {
      options.onClick();
      notification.close();
    };

    notification.onclose = function() {
      options.onClose();
    };
  }
}
