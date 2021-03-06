/**
 * @desc app.js
 * *
 * *
 */

import './utils/to-promise.js';
import { checkUpdate } from './utils/util.js';

App({
  globalData: {
    token: ''
  },
  onLaunch: function(options) {
    // 开发者工具启动参数请添加：env=qa。在根据版本类型自动切换host类型时，低版本微信和开发者工具均无法获取envVersion，需添加标示区分。
    wx.setStorageSync('env', options.query.env);

    // 检查小程序是否有新版本
    checkUpdate();
  }
});