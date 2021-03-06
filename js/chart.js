// var myChart01 = echarts.init(document.getElementById('chart01'));
//
// var data = [{
//     name: 'Flora',
//     itemStyle: {
//         color: '#da0d68'
//     },
//     children: [{
//         name: 'Black Tea',
//         value: 1,
//         itemStyle: {
//             color: '#975e6d'
//         }
//     }, {
//         name: 'Floral',
//         itemStyle: {
//             color: '#e0719c'
//         },
//         children: [{
//             name: 'Chamomile',
//             value: 1,
//             itemStyle: {
//                 color: '#f99e1c'
//             }
//         }, {
//             name: 'Rose',
//             value: 1,
//             itemStyle: {
//                 color: '#ef5a78'
//             }
//         }, {
//             name: 'Jasmine',
//             value: 1,
//             itemStyle: {
//                 color: '#f7f1bd'
//             }
//         }]
//     }]
// }, {
//     name: 'Fruity',
//     itemStyle: {
//         color: '#da1d23'
//     },
//     children: [{
//         name: 'Berry',
//         itemStyle: {
//             color: '#dd4c51'
//         },
//         children: [{
//             name: 'Blackberry',
//             value: 1,
//             itemStyle: {
//                 color: '#3e0317'
//             }
//         }, {
//             name: 'Raspberry',
//             value: 1,
//             itemStyle: {
//                 color: '#e62969'
//             }
//         }, {
//             name: 'Blueberry',
//             value: 1,
//             itemStyle: {
//                 color: '#6569b0'
//             }
//         }, {
//             name: 'Strawberry',
//             value: 1,
//             itemStyle: {
//                 color: '#ef2d36'
//             }
//         }]
//     }, {
//         name: 'Dried Fruit',
//         itemStyle: {
//             color: '#c94a44'
//         },
//         children: [{
//             name: 'Raisin',
//             value: 1,
//             itemStyle: {
//                 color: '#b53b54'
//             }
//         }, {
//             name: 'Prune',
//             value: 1,
//             itemStyle: {
//                 color: '#a5446f'
//             }
//         }]
//     }, {
//         name: 'Other Fruit',
//         itemStyle: {
//             color: '#dd4c51'
//         },
//         children: [{
//             name: 'Coconut',
//             value: 1,
//             itemStyle: {
//                 color: '#f2684b'
//             }
//         }, {
//             name: 'Cherry',
//             value: 1,
//             itemStyle: {
//                 color: '#e73451'
//             }
//         }, {
//             name: 'Pomegranate',
//             value: 1,
//             itemStyle: {
//                 color: '#e65656'
//             }
//         }, {
//             name: 'Pineapple',
//             value: 1,
//             itemStyle: {
//                 color: '#f89a1c'
//             }
//         }, {
//             name: 'Grape',
//             value: 1,
//             itemStyle: {
//                 color: '#aeb92c'
//             }
//         }, {
//             name: 'Apple',
//             value: 1,
//             itemStyle: {
//                 color: '#4eb849'
//             }
//         }, {
//             name: 'Peach',
//             value: 1,
//             itemStyle: {
//                 color: '#f68a5c'
//             }
//         }, {
//             name: 'Pear',
//             value: 1,
//             itemStyle: {
//                 color: '#baa635'
//             }
//         }]
//     }, {
//         name: 'Citrus Fruit',
//         itemStyle: {
//             color: '#f7a128'
//         },
//         children: [{
//             name: 'Grapefruit',
//             value: 1,
//             itemStyle: {
//                 color: '#f26355'
//             }
//         }, {
//             name: 'Orange',
//             value: 1,
//             itemStyle: {
//                 color: '#e2631e'
//             }
//         }, {
//             name: 'Lemon',
//             value: 1,
//             itemStyle: {
//                 color: '#fde404'
//             }
//         }, {
//             name: 'Lime',
//             value: 1,
//             itemStyle: {
//                 color: '#7eb138'
//             }
//         }]
//     }]
// }, {
//     name: 'Sour/\nFermented',
//     itemStyle: {
//         color: '#ebb40f'
//     },
//     children: [{
//         name: 'Sour',
//         itemStyle: {
//             color: '#e1c315'
//         },
//         children: [{
//             name: 'Sour Aromatics',
//             value: 1,
//             itemStyle: {
//                 color: '#9ea718'
//             }
//         }, {
//             name: 'Acetic Acid',
//             value: 1,
//             itemStyle: {
//                 color: '#94a76f'
//             }
//         }, {
//             name: 'Butyric Acid',
//             value: 1,
//             itemStyle: {
//                 color: '#d0b24f'
//             }
//         }, {
//             name: 'Isovaleric Acid',
//             value: 1,
//             itemStyle: {
//                 color: '#8eb646'
//             }
//         }, {
//             name: 'Citric Acid',
//             value: 1,
//             itemStyle: {
//                 color: '#faef07'
//             }
//         }, {
//             name: 'Malic Acid',
//             value: 1,
//             itemStyle: {
//                 color: '#c1ba07'
//             }
//         }]
//     }, {
//         name: 'Alcohol/\nFremented',
//         itemStyle: {
//             color: '#b09733'
//         },
//         children: [{
//             name: 'Winey',
//             value: 1,
//             itemStyle: {
//                 color: '#8f1c53'
//             }
//         }, {
//             name: 'Whiskey',
//             value: 1,
//             itemStyle: {
//                 color: '#b34039'
//             }
//         }, {
//             name: 'Fremented',
//             value: 1,
//             itemStyle: {
//                 color: '#ba9232'
//             }
//         }, {
//             name: 'Overripe',
//             value: 1,
//             itemStyle: {
//                 color: '#8b6439'
//             }
//         }]
//     }]
// }, {
//     name: 'Green/\nVegetative',
//     itemStyle: {
//         color: '#187a2f'
//     },
//     children: [{
//         name: 'Olive Oil',
//         value: 1,
//         itemStyle: {
//             color: '#a2b029'
//         }
//     }, {
//         name: 'Raw',
//         value: 1,
//         itemStyle: {
//             color: '#718933'
//         }
//     }, {
//         name: 'Green/\nVegetative',
//         itemStyle: {
//             color: '#3aa255'
//         },
//         children: [{
//             name: 'Under-ripe',
//             value: 1,
//             itemStyle: {
//                 color: '#a2bb2b'
//             }
//         }, {
//             name: 'Peapod',
//             value: 1,
//             itemStyle: {
//                 color: '#62aa3c'
//             }
//         }, {
//             name: 'Fresh',
//             value: 1,
//             itemStyle: {
//                 color: '#03a653'
//             }
//         }, {
//             name: 'Dark Green',
//             value: 1,
//             itemStyle: {
//                 color: '#038549'
//             }
//         }, {
//             name: 'Vegetative',
//             value: 1,
//             itemStyle: {
//                 color: '#28b44b'
//             }
//         }, {
//             name: 'Hay-like',
//             value: 1,
//             itemStyle: {
//                 color: '#a3a830'
//             }
//         }, {
//             name: 'Herb-like',
//             value: 1,
//             itemStyle: {
//                 color: '#7ac141'
//             }
//         }]
//     }, {
//         name: 'Beany',
//         value: 1,
//         itemStyle: {
//             color: '#5e9a80'
//         }
//     }]
// }, {
//     name: 'Other',
//     itemStyle: {
//         color: '#0aa3b5'
//     },
//     children: [{
//         name: 'Papery/Musty',
//         itemStyle: {
//             color: '#9db2b7'
//         },
//         children: [{
//             name: 'Stale',
//             value: 1,
//             itemStyle: {
//                 color: '#8b8c90'
//             }
//         }, {
//             name: 'Cardboard',
//             value: 1,
//             itemStyle: {
//                 color: '#beb276'
//             }
//         }, {
//             name: 'Papery',
//             value: 1,
//             itemStyle: {
//                 color: '#fefef4'
//             }
//         }, {
//             name: 'Woody',
//             value: 1,
//             itemStyle: {
//                 color: '#744e03'
//             }
//         }, {
//             name: 'Moldy/Damp',
//             value: 1,
//             itemStyle: {
//                 color: '#a3a36f'
//             }
//         }, {
//             name: 'Musty/Dusty',
//             value: 1,
//             itemStyle: {
//                 color: '#c9b583'
//             }
//         }, {
//             name: 'Musty/Earthy',
//             value: 1,
//             itemStyle: {
//                 color: '#978847'
//             }
//         }, {
//             name: 'Animalic',
//             value: 1,
//             itemStyle: {
//                 color: '#9d977f'
//             }
//         }, {
//             name: 'Meaty Brothy',
//             value: 1,
//             itemStyle: {
//                 color: '#cc7b6a'
//             }
//         }, {
//             name: 'Phenolic',
//             value: 1,
//             itemStyle: {
//                 color: '#db646a'
//             }
//         }]
//     }, {
//         name: 'Chemical',
//         itemStyle: {
//             color: '#76c0cb'
//         },
//         children: [{
//             name: 'Bitter',
//             value: 1,
//             itemStyle: {
//                 color: '#80a89d'
//             }
//         }, {
//             name: 'Salty',
//             value: 1,
//             itemStyle: {
//                 color: '#def2fd'
//             }
//         }, {
//             name: 'Medicinal',
//             value: 1,
//             itemStyle: {
//                 color: '#7a9bae'
//             }
//         }, {
//             name: 'Petroleum',
//             value: 1,
//             itemStyle: {
//                 color: '#039fb8'
//             }
//         }, {
//             name: 'Skunky',
//             value: 1,
//             itemStyle: {
//                 color: '#5e777b'
//             }
//         }, {
//             name: 'Rubber',
//             value: 1,
//             itemStyle: {
//                 color: '#120c0c'
//             }
//         }]
//     }]
// }, {
//     name: 'Roasted',
//     itemStyle: {
//         color: '#c94930'
//     },
//     children: [{
//         name: 'Pipe Tobacco',
//         value: 1,
//         itemStyle: {
//             color: '#caa465'
//         }
//     }, {
//         name: 'Tobacco',
//         value: 1,
//         itemStyle: {
//             color: '#dfbd7e'
//         }
//     }, {
//         name: 'Burnt',
//         itemStyle: {
//             color: '#be8663'
//         },
//         children: [{
//             name: 'Acrid',
//             value: 1,
//             itemStyle: {
//                 color: '#b9a449'
//             }
//         }, {
//             name: 'Ashy',
//             value: 1,
//             itemStyle: {
//                 color: '#899893'
//             }
//         }, {
//             name: 'Smoky',
//             value: 1,
//             itemStyle: {
//                 color: '#a1743b'
//             }
//         }, {
//             name: 'Brown, Roast',
//             value: 1,
//             itemStyle: {
//                 color: '#894810'
//             }
//         }]
//     }, {
//         name: 'Cereal',
//         itemStyle: {
//             color: '#ddaf61'
//         },
//         children: [{
//             name: 'Grain',
//             value: 1,
//             itemStyle: {
//                 color: '#b7906f'
//             }
//         }, {
//             name: 'Malt',
//             value: 1,
//             itemStyle: {
//                 color: '#eb9d5f'
//             }
//         }]
//     }]
// }, {
//     name: 'Spices',
//     itemStyle: {
//         color: '#ad213e'
//     },
//     children: [{
//         name: 'Pungent',
//         value: 1,
//         itemStyle: {
//             color: '#794752'
//         }
//     }, {
//         name: 'Pepper',
//         value: 1,
//         itemStyle: {
//             color: '#cc3d41'
//         }
//     }, {
//         name: 'Brown Spice',
//         itemStyle: {
//             color: '#b14d57'
//         },
//         children: [{
//             name: 'Anise',
//             value: 1,
//             itemStyle: {
//                 color: '#c78936'
//             }
//         }, {
//             name: 'Nutmeg',
//             value: 1,
//             itemStyle: {
//                 color: '#8c292c'
//             }
//         }, {
//             name: 'Cinnamon',
//             value: 1,
//             itemStyle: {
//                 color: '#e5762e'
//             }
//         }, {
//             name: 'Clove',
//             value: 1,
//             itemStyle: {
//                 color: '#a16c5a'
//             }
//         }]
//     }]
// }, {
//     name: 'Nutty/\nCocoa',
//     itemStyle: {
//         color: '#a87b64'
//     },
//     children: [{
//         name: 'Nutty',
//         itemStyle: {
//             color: '#c78869'
//         },
//         children: [ {
//             name: 'Peanuts',
//             value: 1,
//             itemStyle: {
//                 color: '#d4ad12'
//             }
//         }, {
//             name: 'Hazelnut',
//             value: 1,
//             itemStyle: {
//                 color: '#9d5433'
//             }
//         }, {
//             name: 'Almond',
//             value: 1,
//             itemStyle: {
//                 color: '#c89f83'
//             }
//         }]
//     }, {
//         name: 'Cocoa',
//         itemStyle: {
//             color: '#bb764c'
//         },
//         children: [{
//             name: 'Chocolate',
//             value: 1,
//             itemStyle: {
//                 color: '#692a19'
//             }
//         }, {
//             name: 'Dark Chocolate',
//             value: 1,
//             itemStyle: {
//                 color: '#470604'
//             }
//         }]
//     }]
// }, {
//     name: 'Sweet',
//     itemStyle: {
//         color: '#e65832'
//     },
//     children: [{
//         name: 'Brown Sugar',
//         itemStyle: {
//             color: '#d45a59'
//         },
//         children: [{
//             name: 'Molasses',
//             value: 1,
//             itemStyle: {
//                 color: '#310d0f'
//             }
//         }, {
//             name: 'Maple Syrup',
//             value: 1,
//             itemStyle: {
//                 color: '#ae341f'
//             }
//         }, {
//             name: 'Caramelized',
//             value: 1,
//             itemStyle: {
//                 color: '#d78823'
//             }
//         }, {
//             name: 'Honey',
//             value: 1,
//             itemStyle: {
//                 color: '#da5c1f'
//             }
//         }]
//     }, {
//         name: 'Vanilla',
//         value: 1,
//         itemStyle: {
//             color: '#f89a80'
//         }
//     }, {
//         name: 'Vanillin',
//         value: 1,
//         itemStyle: {
//             color: '#f37674'
//         }
//     }, {
//         name: 'Overall Sweet',
//         value: 1,
//         itemStyle: {
//             color: '#e75b68'
//         }
//     }, {
//         name: 'Sweet Aromatics',
//         value: 1,
//         itemStyle: {
//             color: '#d0545f'
//         }
//     }]
// }];
//
// var option01 = {
//     title: {
//         text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
//         subtext: 'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/',
//         textStyle: {
//             fontSize: 14,
//             align: 'center'
//         },
//         subtextStyle: {
//             align: 'center'
//         },
//         sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
//     },
//     series: {
//         type: 'sunburst',
//         highlightPolicy: 'ancestor',
//         data: data,
//         radius: [0, '95%'],
//         sort: null,
//         levels: [{}, {
//             r0: '15%',
//             r: '35%',
//             itemStyle: {
//                 borderWidth: 2
//             },
//             label: {
//                 rotate: 'tangential'
//             }
//         }, {
//             r0: '35%',
//             r: '70%',
//             label: {
//                 align: 'right'
//             }
//         }, {
//             r0: '70%',
//             r: '72%',
//             label: {
//                 position: 'outside',
//                 padding: 3,
//                 silent: false
//             },
//             itemStyle: {
//                 borderWidth: 3
//             }
//         }]
//     }
// };
//
// // 使用刚指定的配置项和数据显示图表。
// myChart01.setOption(option01);


//chart02
// var myChart02 = echarts.init(document.getElementById('chart02'));
//
// var option02 = {
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         splitLine:{show: false},//去除网格线
//         axisTick:{
//             show:false//轴刻度线隐藏
//         },
//         axisLine:{
//             show:false,//轴线隐藏
//         },
//         axisLabel:{//字体颜色调整
//             textStyle:{
//                 color:'#999',
//                 fontSize:12,
//             }
//
//         },
//         data: ['4月12号', '4月13号', '4月14号', '4月15号', '4月16号', '4月17号', '4月18号']
//     },
//     yAxis: {
//         type: 'value',
//         axisTick:{
//             show:false//轴刻度线隐藏
//         },
//         axisLine:{
//             show:false,//轴线隐藏
//         },
//         axisLabel:{//字体颜色调整
//             textStyle:{
//                 color:'#999',
//                 fontSize:12,
//             }
//
//         },
//         splitLine:{show: false},//去除网格线
//     },
//     series: [{
//         data: [2000, 4000, 1000, 6000, 1000,8000,4000],
//         type: 'line',
//         itemStyle:{
//             opacity:0,
//         },
//         areaStyle: {}
//     }]
// };
//
// myChart02.setOption(option02);



//chart03
// var myChart03 = echarts.init(document.getElementById('chart03'));
//
// var option03 = {
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         splitLine:{show: false},//去除网格线
//         axisLabel:{//字体颜色调整
//             textStyle:{
//                 color:'#999',
//                 fontSize:12,
//             }
//
//         },
//         axisLine:{
//             show:false,
//         },
//         axisTick:{
//             show:false
//         },
//         data: ['4月12号', '4月13号', '4月14号', '4月15号', '4月16号', '4月17号', '4月18号']
//     },
//     yAxis: {
//         type: 'value',
//         axisTick:{
//             show:false//轴刻度线隐藏
//         },
//         axisLine:{
//             show:false,//轴线隐藏
//         },
//         axisLabel:{//字体颜色调整
//             textStyle:{
//                 color:'#999',
//                 fontSize:12,
//             }
//
//         },
//         splitLine:{show: false},//去除网格线
//     },
//     series: [{
//         data: [2000, 3000, 6000, 4000, 2000,8000,4000],
//         type: 'line',
//         itemStyle:{
//             opacity:0,//折线条圆点
//         },
//         lineStyle:{
//             color:'#75bbe2',//折线条颜色
//         },
//         areaStyle: {
//             color: '#75bbe2',//背景填充颜色
//         }
//     }]
// };
//
// myChart03.setOption(option03);

//chart04

// var myChart04 = echarts.init(document.getElementById('chart04'));
//
//
// var option04  = {
//     title: {
//         text: '重仓股票'
//     },
//     tooltip: {
//         trigger: 'axis',
//         formatter: function (params) {
//             params = params[0];
//             var date = new Date(params.name);
//             return params.value[1];
//         },
//         axisPointer: {
//             animation: false
//         }
//     },
//     xAxis: {
//         type: 'value',
//         data: ['09:00', '10:00', '11:00', '11:30', '13:30','14:00','15:00'],
//
//     },
//     yAxis: {
//         type: 'value',
//         data: [2000, 3000, 6000, 4000, 2000,8000,4000],
//     },
//     series: [{
//         name: '模拟数据',
//         type: 'line',
//         showSymbol: false,
//         hoverAnimation: false,
//         //stack: '总量',
//         data: [2000, 3000, 6000, 4000, 2000,8000,4000],
//     }]
// };
//
// // setInterval(function () {
// //
// //
// //     for (var i = 0; i < 1; i++) {
// //         // data.shift();
// //         // data.push(a);
// //     }
// //
// //     myChart04.setOption({
// //         series: [{
// //             name: '模拟数据',
// //             type: 'line',
// //             showSymbol: false,
// //             hoverAnimation: false,
// //             //stack: '总量',
// //             data: [2000, 3000, 6000, 4000, 2000,8000,4000],
// //         }]
// //     });
// //     myChart04.setOption({
// //         xAxis: [{
// //             type: 'value',
// //             splitLine: {
// //                 show: false
// //             },
// //             data: ['09：00','15：00']
// //         }]
// //     });
// // }, 2000);
//
// myChart04.setOption(option04);



//chart05
var myChart05 = echarts.init(document.getElementById('chart05'));

var option05 = {
    title: {
        show:false,
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['平安','保险', '科技']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show:false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','3月','6月','9月','12月']
    },
    yAxis: {
        type: 'value',
        data:[0,100,200,300,400,500]
    },
    series: [
        {
            name:'平安',
            type:'line',
            stack: '总量',
            lineStyle:{
            color:'#75bbe2',//折线条颜色
            },
            data:[100, 400, 500, 300, 200, 300,]
        },
        {
            name:'保险',
            type:'line',
            stack: '总量',
            lineStyle:{
                color:'#75bbe2',//折线条颜色
            },
            data:[100, 400, 200, 500, 200, 300,]
        },
        {
            name:'科技',
            type:'line',
            stack: '总量',
            lineStyle:{
                color:'#75bbe2',//折线条颜色
            },
            data:[100, 400, 200, 500, 200, 300,]
        },

    ]
};

myChart05.setOption(option05);




//chart06
var myChart06 = echarts.init(document.getElementById('chart06'));

var option06 = {
    tooltip : {
        show:false,
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show:false,
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            radius:'100%',
            splitNumber:1,
            detail: {
                show:false
            },
            axisTick:{
                show:false
            },
            itemStyle:{//指针颜色
                color:'#fff'

            },
            axisLabel:{
                show:false,
            },
            axisLine:{
                lineStyle:{
                    color:[[0.05, '#62da3a'], [0.1, '#88fa4f'], [0.4, '#ff9400'],[1, '#ff644e']]
                }
            },
            pointer:{
                length:'80%',
                width:8,
            },
            markPoint:{
                symbol:'circle'
            },
            data: [{value: '30', name: ''}]
        }
    ]
};

// setInterval(function () {
//     option06.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
//     myChart06.setOption(option06, true);
// },2000);

myChart06.setOption(option06);




//chart07
var myChart07 = echarts.init(document.getElementById('chart07'));

var option07 = {
    tooltip: {
        show:false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: '50%',
        align:'left',
        top:'5%',
        formatter:'',
        textStyle:{
            color:'#fff',
            fontSize:12,
            fontFamily:'DIN-Regular',
        },
        data: [{name:'现金管理 13%',icon:'rect'},{name:'权益管理类 13%',icon:'rect'},{name:'固定收益类 13%',icon:'rect'},{name:'黄金管理类 13%',icon:'rect'},{name:'另类(非黄金) 13%',icon:'rect'},]
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['60%', '88%'],
            center: ['25%', '45%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle:{
                 borderColor:'#141f3d',
                borderWidth: 4,
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'现金管理 13%',itemStyle:{normal:{color:'#c54e28'}}},
                {value:310, name:'权益管理类 13%',itemStyle:{normal:{color:'#365278'}}},
                {value:234, name:'固定收益类 13%',itemStyle:{normal:{color:'#197bba'}}},
                {value:135, name:'黄金管理类 13%',itemStyle:{normal:{color:'#0faed9'}}},
                {value:1548, name:'另类(非黄金) 13%',itemStyle:{normal:{color:'#d0d2d8'}}}
            ]
        }
    ]
};

myChart07.setOption(option07);


//chart08
var myChart08 = echarts.init(document.getElementById('chart08'));

var option08 = {
    tooltip: {
        show:false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: '50%',
        align:'left',
        top:'5%',
        formatter:'',
        textStyle:{
            color:'#fff',
            fontSize:12,
            fontFamily:'DIN-Regular',
        },
        data: [{name:'现金管理 13%',icon:'rect'},{name:'权益管理类 13%',icon:'rect'},{name:'固定收益类 13%',icon:'rect'},{name:'黄金管理类 13%',icon:'rect'},{name:'另类(非黄金) 13%',icon:'rect'},]
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['60%', '88%'],
            center: ['25%', '45%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle:{
                borderColor:'#141f3d',
                borderWidth: 4,
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'现金管理 13%',itemStyle:{normal:{color:'#c54e28'}}},
                {value:310, name:'权益管理类 13%',itemStyle:{normal:{color:'#365278'}}},
                {value:234, name:'固定收益类 13%',itemStyle:{normal:{color:'#197bba'}}},
                {value:135, name:'黄金管理类 13%',itemStyle:{normal:{color:'#0faed9'}}},
                {value:1548, name:'另类(非黄金) 13%',itemStyle:{normal:{color:'#d0d2d8'}}}
            ]
        }
    ]
};

myChart08.setOption(option08);


//chart09
var myChart09 = echarts.init(document.getElementById('chart09'));

var option09 = {
    tooltip: {
        show:false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: '50%',
        align:'left',
        top:'5%',
        formatter:'',
        textStyle:{
            color:'#fff',
            fontSize:12,
            fontFamily:'DIN-Regular',
        },
        data: [{name:'现金管理 13%',icon:'rect'},{name:'权益管理类 13%',icon:'rect'},{name:'固定收益类 13%',icon:'rect'},{name:'黄金管理类 13%',icon:'rect'},{name:'另类(非黄金) 13%',icon:'rect'},]
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['60%', '88%'],
            center: ['25%', '45%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle:{
                borderColor:'#141f3d',
                borderWidth: 4,
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'现金管理 13%',itemStyle:{normal:{color:'#c54e28'}}},
                {value:310, name:'权益管理类 13%',itemStyle:{normal:{color:'#365278'}}},
                {value:234, name:'固定收益类 13%',itemStyle:{normal:{color:'#197bba'}}},
                {value:135, name:'黄金管理类 13%',itemStyle:{normal:{color:'#0faed9'}}},
                {value:1548, name:'另类(非黄金) 13%',itemStyle:{normal:{color:'#d0d2d8'}}}
            ]
        }
    ]
};

myChart09.setOption(option09);




//chart10
var myChart10 = echarts.init(document.getElementById('chart10'));

var option10 = {

    title: {
        left: 'center',
        text: '大数据量面积图',
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0,1,2,3,4,5,6,7]
    },
    yAxis: [{
        name:'股价',
        type: 'value',
        boundaryGap: [0, '100%']
    },
        {
            name:'涨跌幅',
            type: 'value',
            min: -10,
            max: 10
        }],

    series: [
        {
            name:'股价',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            data: [2,3,4,5,6,7,6,7]
        },
        {
            name:'涨跌幅',
            type:'scatter',
            data:[
                [7,-3],
                [7,-4],
                [7,3],
                [7,5],
                [7,7],

            ]
        }
    ]
};

myChart10.setOption(option10);



//chart11
var myChart11 = echarts.init(document.getElementById('chart11'));
var data = [
    [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
    [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
];

var option11 = {
    backgroundColor: "rgba(22, 30, 63, 0.75)",
    // title: {
    //     text: '1990 与 2015 年各国家人均寿命与 GDP'
    // },
    legend: {
        right: 10,
        data: ['1990', '2015']
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color:'#666699'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color:'#666699'
            }
        },
        scale: true
    },
    series: [{
        name: '1990',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: '2015',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
};

myChart11.setOption(option11);



//chart12

var myChart12 = echarts.init(document.getElementById('chart12'));
var option12 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        show:false,
        orient: 'vertical',
        x: 'left',
        data:['利空','利好']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['45%', '70%'],
            center: ['50%', '44%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'normal'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle:{
                borderColor:'#141f3d',
                borderWidth: 4,
            },
            data:[
                {value:224, name:'利空',itemStyle:{normal:{color:'#4499a9'}}},
                {value:335, name:'利好',itemStyle:{normal:{color:'#c65d3e'}}},
            ]
        }
    ]
};


myChart12.setOption(option12);


var myChart14 = echarts.init(document.getElementById('chart14'))
var option14 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine:{show: false},//去除网格线

    },
    yAxis: {
        type: 'category',
        data: ['-10%','-9%','-8%','-7%','-6%','-5%','-4%','-3%','-2%','-1%','0','1%','2%','3%','4%','5%','6%','7%','8%','9%','10%'],
        splitLine:{show: false},//去除网格线
        itemStyle:{
            normal:{
                color:'red'
            }
        }


    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            barWidth:'50%',
            data: [1,2,2,3,4,5,6,7,7,8,9,8,7,7,6,6,4,4,2,2,1],
            // itemStyle: {
            //     normal: {
            //         color: '#3398DB'
            //     }
            // },
            itemStyle:{
                normal:{
                    color:function(params){
                        var indexColor = params.name.slice(0,1);
                        if(indexColor == '-'){
                            return '#4498a9'
                        }else if (indexColor =='0'){
                            return '#b9bbc4'
                        }else{
                            return '#c65c3e'
                        }
                    }
                }
            }
        }
    ]
};
myChart14.setOption(option14);