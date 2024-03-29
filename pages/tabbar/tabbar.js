var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    navbar: ['首页', '轮播图', '登录'],
    currentTab: 1,
    slider: [],
    silderUrl: [],
    swiperCurrent: 0,
    phone: '',
    password:'',
    type: '',
    imglist: ['']
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e, e.detail.value)
    wx.showToast({
      title: 'form发生了submit事件',
      icon: 'success',
      duration: 1500
    })
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e, e.detail.value)
    this.setData({
      chosen: ''
    })
  },
  onLoad: function (options) {
    // 可以拿到页面带过来的参数
    console.log(options)
    this.setData({
      type: options.type
    })
    var that = this;
    //网络访问，获取轮播图的图片
    util.getRecommend(function(data){
      that.setData({
        slider: data
      })
      that.setData({
        silderUrl: that.data.slider.map(e => e.url)
      })
      console.log(that.data.silderUrl)
    })
  },
  onShow: function () {
    console.log(getCurrentPages())
  },
  //轮播图的切换事件
  swiperChange: function(e){
  //只要把切换后当前的index传给<swiper>组件的current属性即可
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function(e){
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  phoneInput:function(e) {
    // console.log(e)
    this.setData({ phone: e.detail.value })
   },
  passwordInput:function(e) {
   this.setData({ password: e.detail.value })
  },
  // 登陆
  login: function () {
    console.log(this.data.phone, this.data.password)
    if (this.data.phone !== '' && this.data.password !== '') {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1500
      })
    } else {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 1500
      })
    }
  },
  redirectTo: function () {
    wx.redirectTo({
      url: '../logs/logs'
    })
  },
  previewImage: function (e) {
    console.log(e)
    console.log(this.data.slider)
    var current = e.target.dataset.src
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.silderUrl // 需要预览的图片http链接列表  
    })
  }
})