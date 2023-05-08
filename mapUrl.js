/*
@Descripttion: 重写天地图瓦片url方法
@Author: yy
@Date: 2021-03-01 11:43:01
 * @LastEditTime: 2023-05-08 16:25:55
*/
//离线地图url
var offlineMapLine = "http://192.168.0.220:8080";
function addLayer() {
  var urlArr = [{url: offlineMapLine + '/geoserver/gwc/service/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=hhgFullImgs:hhgshq2&TILEMATRIXSET=EPSG:900913&FORMAT=image/png&TILEMATRIX=EPSG:900913:{z}&TILEROW={y}&TILECOL={x}'},{url: offlineMapLine + '/geoserver/gwc/service/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=hhg-group&TILEMATRIXSET=EPSG:900913&FORMAT=image/png&TILEMATRIX=EPSG:900913:{z}&TILEROW={y}&TILECOL={x}'}];
  urlArr.forEach(function (item) {
    var option = {
      minZoom: 0,
      maxZoom: 30,
      errorTileUrl:"./images/404.png"
    }
    var layer = new T.TileLayer(item.url, option);
    // 将图层增加到地图上
    map.addLayer(layer);
  });
}
  
var timeout = setInterval(function () {
  if (map) {
    clearInterval(timeout);
    timeout = "";
    addLayer();
  }
}, 300)