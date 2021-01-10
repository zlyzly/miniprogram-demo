var common = require('../../utils/commen.js')
Page({
  data: {
    text: "This is page me.",
    datas: {
      texts: "This is page text.",
      list: [
        { num: 10 },
        { num: 20 },
        { num: 60 }
      ],
    }
  },
  hello: function () {
    common.sayHello('zahra！')
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
    wx.getSystemInfo({
      success: (result) => {
        console.log('2', result)
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    console.log('me页面隐藏')
    // Do something when page hide.
  },
  onUnload: function () {
    console.log('me页面被销毁')
  // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  }
})