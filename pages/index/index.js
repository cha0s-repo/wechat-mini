// index.js

const { enc } = require('../../utils/crypto-js.js');

// 获取应用实例
const app = getApp()



Page({
  data: {
    cal_text:'',
    aes_mode:'',
},
  // 事件处理函数
  aboutPage() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  calText(msg) {
    const CryptoJS = require('../../utils/aes_utils.js');
    var fetch_value = msg['detail']['value']
    var msg = fetch_value['msg']
    var code = fetch_value['code']
    var enc_msg = ""
    if (this.aes_mode === 'enc') {
      enc_msg = CryptoJS.AesEncrypt(msg, code)
    } else if(this.aes_mode === 'dec') {
      enc_msg = CryptoJS.AesDecrypt(msg, code)
    } else {
      console.log('mode wrong: ' + this.aes_mode)
    }
    if(enc_msg.length <= 0) {
      enc_msg="操作失败,请重新输入"
    }
    this.setData({cal_text:enc_msg})
  },
  radioChange(data) {
    this.aes_mode=data['detail']['value']
  },
  onLoad() {
    this.aes_mode = 'enc'
  }
})
