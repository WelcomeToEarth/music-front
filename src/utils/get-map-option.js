export default list => ({
  backgroundColor: 'transparent',
  tooltip: {
    formatter (params) {
      const d = params.data;
      return `
        ${d.name}<br />
        确诊: ${d.value}`;
    },
  },
  dataRange: {
    show: false,
    splitList: [
      { start: 1000, color: '#E65100' },
      { start: 100, end: 999, color: '#FB8C00' },
      { start: 10, end: 99, color: '#FFB74D' },
      { start: 0, end: 10, color: '#FFE0B2' },
    ],
  },
  geo: {
    map: 'china',
    roam: false,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    label: {
      normal: {
        show: true, // 地名
        textStyle: {
          color: '#E65100',
          fontSize: 8,
        },
        textBorderColor: '#fff',
        textBorderWidth: 1.5,
      }
    },
    itemStyle: {
      normal: {
        borderColor: '#fff',
        borderWidth: 0.5,
      },
      emphasis: {
        areaColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 20,
        borderWidth: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      }
    }
  },
  series: [{
    type: 'scatter',
    coordinateSystem: 'geo', // 对应上方配置
  }, {
    name: '确诊', // 浮动框的标题
    type: 'map',
    geoIndex: 0,
    data: list,
  }],
});
