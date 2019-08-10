function getHeatmapOpt(hmdata) {
    var points = [].concat.apply([], hmdata['val'].map(function(track) {
        return track.map(function(seg) {
            return seg.coord.concat([1]);
        });
    }));
    var heatmapOpt = {
        title: {
            text: hmdata['key']
        },
        animation: false,
        bmap: {
            // beijing
            center: [116.4039006839, 39.9552108931],
            // hangzhou
            // center: [120.13066322374, 30.240018034923],
            zoom: 12,
            roam: true
        },
        visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: points,
            pointSize: 3,
            blurSize: 3
        }]
    }
    return heatmapOpt;
}