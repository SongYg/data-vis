function getHistogramOpt(hisdata) {
    hisOpt = {
        title: {
            text: hisdata['key']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['预测值', '真实值']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['东城区', '西城区', '海淀区', '朝阳区', '丰台区', '门头沟区', '石景山区']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '预测值',
            type: 'bar',
            data: hisdata['val'][0]
        }, {
            name: '真实值',
            type: 'bar',
            data: hisdata['val'][1]
        }]
    }
    return hisOpt;
}