var amapFile = require('../../libs/amap-wx.js');
var config = require('../../libs/config.js');

var markersData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
    city: ''
  },
  makertap: function(e) {
    var id = e.markerId;
    var that = this;
    that.showMarkerInfo(markersData,id);
    that.changeMarkerColor(markersData,id);
  },
  onLoad: function(e) {
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({key: key});
    var params = {
      iconPathSelected: '../../img/marker_checked.png',
      iconPath: '../../img/marker.png',
      success: function(data){
        markersData = data.markers;
        var poisData = data.poisData;
        if(markersData.length > 0){
          that.setData({
            markers: markersData
          });
          that.setData({
            city: poisData[0].cityname || ''
          });
          that.setData({
            latitude: markersData[0].latitude
          });
          that.setData({
            longitude: markersData[0].longitude
          });
          that.showMarkerInfo(markersData,0);
        }else{
          that.setData({
            textData: {
              name: '抱歉，未找到结果',
              desc: ''
            }
          });
        }
        
      },
      fail: function(info){
        wx.showModal({title:info.errMsg})
      }
    }
    if(e && e.keywords){
      params.querykeywords = e.keywords;
    }
    myAmapFun.getPoiAround(params)
  },
  bindInput: function(e){
    var that = this;
    var url = '../inputtips/input';
    if(e.target.dataset.latitude && e.target.dataset.longitude && e.target.dataset.city){
      var dataset = e.target.dataset;
      url = url + '?lonlat=' + dataset.longitude + ',' + dataset.latitude + '&city=' + dataset.city;
    }
    wx.redirectTo({
      url: url
    })
  },
  showMarkerInfo: function(data,i){
    var that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
  },
  changeMarkerColor: function(data,i){
    var that = this;
    var markers = [];
    for(var j = 0; j < data.length; j++){
      if(j==i){
        data[j].iconPath = "../../img/marker_checked.png";
      }else{
        data[j].iconPath = "../../img/marker.png";
      }
      markers.push(data[j]);
    }
    that.setData({
      markers: markers
    });
  }

})