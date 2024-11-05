var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_VictoriaCounty_3 = new ol.format.GeoJSON();
var features_VictoriaCounty_3 = format_VictoriaCounty_3.readFeatures(json_VictoriaCounty_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VictoriaCounty_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VictoriaCounty_3.addFeatures(features_VictoriaCounty_3);
var lyr_VictoriaCounty_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VictoriaCounty_3, 
                style: style_VictoriaCounty_3,
                interactive: false,
                title: '<img src="styles/legend/VictoriaCounty_3.png" /> Victoria County'
            });
var format_StPatrickCounty_4 = new ol.format.GeoJSON();
var features_StPatrickCounty_4 = format_StPatrickCounty_4.readFeatures(json_StPatrickCounty_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StPatrickCounty_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StPatrickCounty_4.addFeatures(features_StPatrickCounty_4);
var lyr_StPatrickCounty_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StPatrickCounty_4, 
                style: style_StPatrickCounty_4,
                interactive: false,
                title: '<img src="styles/legend/StPatrickCounty_4.png" /> St Patrick County'
            });
var format_ElectoralDistricts_5 = new ol.format.GeoJSON();
var features_ElectoralDistricts_5 = format_ElectoralDistricts_5.readFeatures(json_ElectoralDistricts_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectoralDistricts_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectoralDistricts_5.addFeatures(features_ElectoralDistricts_5);
var lyr_ElectoralDistricts_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElectoralDistricts_5, 
                style: style_ElectoralDistricts_5,
                interactive: true,
    title: 'Electoral Districts<br />\
    <img src="styles/legend/ElectoralDistricts_5_0.png" /> BARRACKPORE WEST<br />\
    <img src="styles/legend/ElectoralDistricts_5_1.png" /> BRONTE<br />\
    <img src="styles/legend/ElectoralDistricts_5_2.png" /> DEBE EAST/L\'ESPERANCE/UNION HALL<br />\
    <img src="styles/legend/ElectoralDistricts_5_3.png" /> DEBE SOUTH<br />\
    <img src="styles/legend/ElectoralDistricts_5_4.png" /> LA FORTUNE/DEBE NORTH<br />\
    <img src="styles/legend/ElectoralDistricts_5_5.png" /> LA ROMAINE<br />\
    <img src="styles/legend/ElectoralDistricts_5_6.png" /> PALMISTE/HERMITAGE<br />\
    <img src="styles/legend/ElectoralDistricts_5_7.png" /> PENAL<br />\
    <img src="styles/legend/ElectoralDistricts_5_8.png" /> QUINAM/ MORNE DIABLO<br />\
    <img src="styles/legend/ElectoralDistricts_5_9.png" /> ROCHARD/BARRACKPORE EAST<br />'
        });
var format_Roads_6 = new ol.format.GeoJSON();
var features_Roads_6 = format_Roads_6.readFeatures(json_Roads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_6.addFeatures(features_Roads_6);
var lyr_Roads_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_6, 
                style: style_Roads_6,
                interactive: true,
                title: '<img src="styles/legend/Roads_6.png" /> Roads'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_VictoriaCounty_3.setVisible(true);lyr_StPatrickCounty_4.setVisible(true);lyr_ElectoralDistricts_5.setVisible(true);lyr_Roads_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_GoogleSatellite_2,lyr_VictoriaCounty_3,lyr_StPatrickCounty_4,lyr_ElectoralDistricts_5,lyr_Roads_6];
lyr_VictoriaCounty_3.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'COUNTY': 'COUNTY', });
lyr_StPatrickCounty_4.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'COUNTY': 'COUNTY', });
lyr_ElectoralDistricts_5.set('fieldAliases', {'fid': 'fid', 'Councillor': 'Councillor', 'Chairman of Committee': 'Chairman of Committee', 'Electoral District': 'Electoral District', 'Email': 'Email', 'Contact Number': 'Contact Number', });
lyr_Roads_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_VictoriaCounty_3.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'COUNTY': 'TextEdit', });
lyr_StPatrickCounty_4.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'COUNTY': 'TextEdit', });
lyr_ElectoralDistricts_5.set('fieldImages', {'fid': 'TextEdit', 'Councillor': 'TextEdit', 'Chairman of Committee': 'TextEdit', 'Electoral District': 'TextEdit', 'Email': 'TextEdit', 'Contact Number': 'TextEdit', });
lyr_Roads_6.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_VictoriaCounty_3.set('fieldLabels', {'fid': 'header label', 'AREA': 'header label', 'COUNTY': 'header label', });
lyr_StPatrickCounty_4.set('fieldLabels', {'fid': 'header label', 'AREA': 'header label', 'COUNTY': 'header label', });
lyr_ElectoralDistricts_5.set('fieldLabels', {'fid': 'header label', 'Councillor': 'header label', 'Chairman of Committee': 'header label', 'Electoral District': 'header label', 'Email': 'header label', 'Contact Number': 'header label', });
lyr_Roads_6.set('fieldLabels', {'fid': 'header label', 'name': 'header label', });
lyr_Roads_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});