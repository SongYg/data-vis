function get3DbarOpt(mp3ddata) {
    data = mp3ddata['val']
    data = data.filter(function (dataItem) {
        return dataItem[2] > 0;
    }).map(function (dataItem) {
        return [dataItem[0], dataItem[1], dataItem[2]];
    });

    var opt = {
        visualMap: {
            show: false,
            max: 25,
            calculable: true,
            realtime: false,
            inRange: {
                color: ['#55CEBF', '#61C1CD', '#A09EC2', '#9B7189']
            },
            outOfRange: {
                colorAlpha: 0
            }
        },
        mapbox3D: {
            center: [116.3975, 39.9087],
            zoom: 11,
            pitch: 50,
            bearing: 0,
            style: 'mapbox://styles/mapbox/light-v10',
            boxHeight: 8,
            // altitudeScale: 1e2,
            postEffect: {
                enable: true,
                screenSpaceAmbientOcclusion: {
                    enable: true,
                    radius: 2
                }
            }
        },
        series: [{
            type: 'bar3D',
            coordinateSystem: 'mapbox3D',
            shading: 'color',
            // minHeight: 1,
            maxHeight: 25,
            barSize: 0.1,
            data: data,
            silent: true,
            animationEasingUpdate: 1000
        }]
    }
    return opt;
}