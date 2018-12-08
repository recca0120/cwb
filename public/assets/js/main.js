// 雨水酸鹼度值資料
$('.table-striped.version_3 tr td').filter(function (index) {
  return parseInt(this.innerHTML) < 5.0;
}).css({
  'color': '#f32e00',
  'font-style': 'italic'
});

//紫外線歷史資料
$('.table-striped.verion_9 tr td').filter(function (index) {
  return parseInt(this.innerHTML) > 7.0;
}).css({
  'color': '#f32e00',
});

// 地震震級顏色
$('.table-striped.version_4 tbody tr td').filter(function (index) {
  return parseInt(this.innerHTML) == 1;
}).addClass('eq_lv-1');
$('.table-striped.version_4 tbody tr td').filter(function (index) {
  return parseInt(this.innerHTML) == 2;
}).addClass('eq_lv-2');
$('.table-striped.version_4 tbody tr td').filter(function (index) {
  return parseInt(this.innerHTML) == 3;
}).addClass('eq_lv-3');
$('.table-striped.version_4 tbody tr td').filter(function (index) {
  return parseInt(this.innerHTML) == 4;
}).addClass('eq_lv-4');
$('.table-striped.version_4 tbody tr td').filter(function (index) {
  return parseInt(this.innerHTML) == 5;
}).addClass('eq_lv-5');
$('.table-striped.version_4 tbody tr td').filter(function (index) {
  return parseInt(this.innerHTML) == 6;
}).addClass('eq_lv-6');
$('.table-striped.version_4 tbody tr td').filter(function (index) {
  return parseInt(this.innerHTML) == 7;
}).addClass('eq_lv-7');

// 客家icon自動生成
$(".table-striped.version_7 .hakka-list tr td:first-child").prepend("<span class='icon-cwb-flower'><span class='path2'></span><span class='path3'></span><span class='path4'></span><span class='path5'></span><span class='path6'></span><span class='path7'></span><span class='path8'></span><span class='path9'></span><span class='path10'></span><span class='path11'></span><span class='path12'></span><span class='path13'></span><span class='path14'></span><span class='path15'></span></span>");

$(".table-striped.version_5 .tribes-list tr").prepend("<td></td>");
// 雨水pH值
$(function () {
  Highcharts.chart('bar_1', {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'PH數值'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0
      }

    },
    series: [{
      name: '雨水pH值',
      data: [1, 1.4, 3, 4.3, 2.3, 1.3, 5, 5, 4.5, 4, 3.7, 0, 0, 0, 0, 0, 0, 0, 2.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]

    }],
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
  });
});

// 雨水pH值
$(function () {
  Highcharts.chart('bar_2', {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'PH數值'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0
      }

    },
    series: [{
      name: '雨水pH值',
      data: [1, 1.4, 3, 4.3, 2.3, 1.3, 5, 5, 4.5, 4, 3.7, 0, 0, 0, 0, 0, 0, 0, 2.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]

    }],
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
  });
});

// 雨水pH值
$(function () {
  Highcharts.chart('bar_3', {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'PH數值'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0
      }

    },
    series: [{
      name: '雨水pH值',
      data: [1, 1.4, 3, 4.3, 2.3, 1.3, 5, 5, 4.5, 4, 3.7, 0, 0, 0, 0, 0, 0, 0, 2.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]

    }],
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
  });
});

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

$(function () {
  $('#container2').highcharts({
    chart: {
      type: 'line'
    },
    title: {

      text: '2005 - 2015平均臭氧量'
    },

    xAxis: {
      categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
    },
    yAxis: {
      title: {
        text: '平均臭氧量'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: '',
      data: [266, 267, 259, 260, 266, 264, 268, 269, 269, 268, 270],
      color: '#efb97f',
      marker: {
        radius: 6
      },
      lineWidth: 5
    }]
  });
});
/* datepickers */

/* End datepickers */

/* scale img */
var controls = $('#mapControls'),

  zoomStep = 10,
  zoom = $('#zoomSlider'),
  zoomOut = $('#zoomScale'),

  panStep = 10,
  totalPanX = 183,
  totalPanY = 107,
  panXOut = $('#posX'),
  panYOut = $('#posY'),

  debug = $('#debug');

controls.on('click', '.pan-arrow, .zoom-control', function () {
  switch ($(this).attr('id')) {
    case 'panTop':
      panMap(0, -panStep);
      break;

    case 'panRight':
      panMap(panStep, 0);
      break;

    case 'panBottom':
      panMap(0, panStep);
      break;

    case 'panLeft':
      panMap(-panStep, 0);
      break;

    case 'zoomIn':
      zoom.slider('value', zoom.slider('value') + zoomStep);
      updateZoom(zoom.slider('value'));
      break;

    case 'zoomOut':
      zoom.slider('value', zoom.slider('value') - zoomStep);
      updateZoom(zoom.slider('value'));
      break;
  }
});

zoom.slider({
  orientation: 'vertical',
  range: 'min',
  min: 50,
  max: 200,
  step: 1,
  value: 100,
  slide: function (e, ui) {
    updateZoom(ui.value);
  }
});

function updateZoom(rawZoom) {
  rawZoom /= 100;
  zoomOut.text(rawZoom);
  debug.css('-webkit-transform', 'scale(' + rawZoom + ')');
  debug.css('-moz-transform', 'scale(' + rawZoom + ')');
  debug.css('transform', 'scale(' + rawZoom + ')');
}

function panMap(panX, panY) {
  totalPanX += panX;
  if (totalPanX < 0) totalPanX = 0;
  totalPanY += panY;
  if (totalPanY < 0) totalPanY = 0;
  panXOut.text(totalPanX);
  panYOut.text(totalPanY);
  debug.css({
    top: totalPanY,
    left: totalPanX
  });
}
/* End scale img */

/* 全台天氣溫度變化資料 */

/* End 全台天氣溫度變化資料 */