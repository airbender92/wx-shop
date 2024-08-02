// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'
import compareVersion from '../../utils/compareVersion'

Component({
  data: {
    logs: [],
  },
  lifetimes: {
    attached() {
      // 基础库版本号
      const SDKVersion = wx.getAppBaseInfo().SDKVersion;
      if(compareVersion(SDKVersion, '1.1.0') > 0) {
        wx.openBluetoothAdapter();
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
      }
      console.log('appBasicInfo', appBasicInfo)

    }
  },
})
