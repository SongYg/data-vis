function get3DbarOpt(data) {
    data = data.filter(function(dataItem) {
        return dataItem[2] > 0;
    }).map(function(dataItem) {
        return [dataItem[0], dataItem[1], dataItem[2]];
    });
    var opt = {
        visualMap: {
            show: false,
            max: 1000,
            calculable: true,
            realtime: false,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            outOfRange: {
                colorAlpha: 0
            }
        },
        mapbox3D: {
            center: [116.3975, 116.3975],
            zoom: 4,
            pitch: 50,
            bearing: -10,
            style: 'mapbox://styles/mapbox/light-v9',
            boxHeight: 10,
            // altitudeScale: 1e2,
            postEffect: {
                enable: true,
                screenSpaceAmbientOcclusion: {
                    enable: true,
                    radius: 2
                }
            },
            light: {
                main: {
                    intensity: 2,
                    shadow: true,
                    shadowQuality: 'high'
                },
                ambient: {
                    intensity: 0.
                },
                ambientCubemap: {
                    texture: 'asset/canyon.hdr',
                    exposure: 2,
                    diffuseIntensity: 0.5
                }
            }
        },
        series: [{
            type: 'bar3D',
            coordinateSystem: 'mapbox3D',
            shading: 'lambert',
            minHeight: 1,
            maxHeight: 40,
            barSize: 0.1,
            data: data,
            silent: true,
            animationEasingUpdate: 2000
        }]
    }
    return opt;
}