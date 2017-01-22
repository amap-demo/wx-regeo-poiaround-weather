##参考手册
###AMapWX构造函数
| 构造函数 | 说明 |
| -------| ---|
| AMapWX(OBJECT) | OBJECT为AMapWX必选参数对象，包括：<br/>key:高德开发者key

###方法概述
| 方法 | 说明 |
| -------| ---|
| getRegeo | 根据用户定位或location参数，返回位置附近poi信息 |
| getPoiAround | 根据用户定位或location参数，返回位置附近多个poi信息 |
| getWeather | 根据用户定位或city参数，返回位置附近天气信息 |
| getStaticmap | 根据用户传参，返回静态图地址 |



###方法详述

#####1.getRegeo(OBJECT)

#####OBJECT参数说明

|参数名     | 说明 | 类型  | 是否必选 | 备注 |
| --------| ----|------|-------|----|
| iconPath | 标注的图标 | String  |  是 | 项目目录下的图片路径，支持相对路径写法 
| width | 标注图标的宽度 | Number  |  否 | 默认为图片实际宽度
| height | 标注图标的高度 | Number  |  否 | 默认为图片实际高度
| location | 位置坐标，格式：经度,纬度 |String| 否 | 传该参数时，不再进行定位 （v1.1.0开始支持）|
| success| 接口调用成功的回调函数 |Function| 否 |
| fail | 接口调用失败的回调函数 |Function| 否 |





###2.getPoiAround(OBJECT)

#####OBJECT参数说明

|参数名     | 说明 | 类型       | 是否必选 | 备注 |
| --------| ----|------|-------|----|
| iconPath | 未选中的图标 | String  |  是 | 项目目录下的图片路径，支持相对路径写法 |
| iconPathSelected | 选中的图标 | String  |  是 | 项目目录下的图片路径，支持相对路径写法 |
| width | 标注图标的宽度 | Number  |  否 | 默认为图片实际宽度|
| height | 标注图标的高度 | Number  |  否 | 默认为图片实际高度|
| querytypes | 搜索类型 | String  |  否 | |
| querykeywords | 搜索关键字 | String  |  否 | |
| location | 位置坐标，格式：经度,纬度 |String| 否 | 传该参数时，不再进行定位 （v1.1.0开始支持）|
| success| 接口调用成功的回调函数 |Function| 否 | |
| fail | 接口调用失败的回调函数 |Function| 否 | |


###3.getWeather(OBJECT)

#####OBJECT参数说明

|参数名     | 说明 | 类型       | 是否必选 | 备注 |
| --------| ----|------|-------|----|
| city | 城市代码 |String| 否 | 传该参数时，不再进行定位 （v1.1.0开始支持）|
| type | 默认是live（实时天气），可设置成forecast（预报天气） |String| 否 | v1.1.0开始支持 |
| success| 接口调用成功的回调函数 |Function| 否 | |
| fail | 接口调用失败的回调函数 |Function| 否 | |

###4.getStaticmap(OBJECT)

#####OBJECT参数说明

|参数名     | 说明 | 类型       | 是否必选 | 备注 |
| --------| ----|------|-------|----|
| location | 地图中心点坐标 | String | 否 | 默认为当前位置（v1.1.0开始支持）|
| zoom | 缩放级别 | String | 是 | 地图缩放级别:[1,17]（v1.1.0开始支持）|
| size | 地图大小 | String | 否 | v1.1.0开始支持|
| scale | 普通或高清。 1:返回普通图；2:调用高清图 | String | 否 | v1.1.0开始支持|
| markers | marker | String | 否 | v1.1.0开始支持|
| labels | 标签 | String | 否 | v1.1.0开始支持|
| paths | 折线 | String | 否 | v1.1.0开始支持|
| traffic | 交通路况标识:0，不展现；1，展现。 | String | 否 | v1.1.0开始支持|
| city | 城市代码 |Function| 否 | 传该参数时，不再进行定位 （v1.1.0开始支持）|
| success| 接口调用成功的回调函数 |Function| 否 | |
| fail | 接口调用失败的回调函数 |Function| 否 | |



