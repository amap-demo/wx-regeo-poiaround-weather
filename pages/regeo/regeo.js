var amapFile = require('../../libs/amap-wx.js');
var config = require('../../libs/config.js');

Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {}
  },
  onLoad: function() {
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({key: key});
    myAmapFun.getRegeo({
      iconPath: "../../img/marker.png",
      iconWidth: 22,
      iconHeight: 32,
      success: function(data){
        that.setData({
          markers: data
        });
        that.setData({
          latitude: data[0].latitude
        });
        that.setData({
          longitude: data[0].longitude
        });
        that.setData({
          textData: {
            name: data[0].name,
            desc: data[0].desc
          }
        })
      },
      fail: function(info){
        wx.showModal({title:info.errMsg})
      }
    })
  }
})