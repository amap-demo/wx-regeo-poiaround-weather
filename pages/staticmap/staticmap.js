var amapFile = require('../../libs/amap-wx.js');
var config = require('../../libs/config.js');

Page({
  data: {
    src: ''
  },
  onLoad: function() {
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({key: key});
    wx.getSystemInfo({
      success: function(data){
        var height = data.windowHeight;
        var width = data.windowWidth;
        var size = width + "*" + height;
        myAmapFun.getStaticmap({
          zoom: 10,
          size: size,
          scale: 2,
          location: "116.38482,39.94858",
          markers: "mid,0xFF0000,A:116.37359,39.92437;116.47359,39.92437",
          labels: "朝阳公园,2,0,16,0xFFFFFF,0x008000:116.48482,39.94858",
          // paths: "10,0x0000ff,0.1,0x0000ff,0.7:116.31604,39.96491;116.320816,39.966606;116.321785,39.966827;116.32361,39.966957;116.39361,39.966957;116.39361,39.936957",
          paths: '10,0x0000ff,1,,:116.31604,39.96491;116.320816,39.966606;116.321785,39.966827;116.32361,39.966957',
          success: function(data){
            that.setData({
              src: data.url
            })
          },
          fail: function(info){
            // wx.showModal({title:info.errMsg})
          }
        })

      }
    })
    
  }
})