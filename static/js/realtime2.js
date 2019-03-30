
//(function () {
    var newdata, num, datasource, detail, description;
   // var normal1 = 0, normal2 = 2;//记录正常数据的阈值
    //开始画图
    var olddata = 0;
    var oldnumber = 0;
    var data = [];
    // var thresold_high = localStorage.getItem('max_thresold');//动态获取上下阈值
    // var thresold_low = localStorage.getItem('min_thresold');
    // normal1 = parseFloat(thresold_low);
    // normal2 = parseFloat(thresold_high);
    var myChart = echarts.init(document.getElementById('realtime_lstm_guard'));
    option = {
        title: {
            text: '有监督实时检测结果',
            x: 'center',
            textStyle: {
                color: '#ffffff'
            }
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {//数据单位格式化
                //params = params[0];
                var date = new Date();
                return num + ":" + newdata + "/"+detail+"/" + output;
            },
            axisPointer: {
                //animation: false
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },

        xAxis: [{
            type: 'category',
            boundaryGap: true,
            name: '时间',
            nameGap: 5,
            nameTextStyle: {
                color: '#fff',
                splitLine: {
                    show: false
                }
            },
            axisLabel: {        
                show: true,
                textStyle: {
                    //color: '#fff',
                    fontSize:'10'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eee',
                    fontSize: 12
                }
            },
            fontSize: 12,

            data: (function () {
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                    now = new Date(now - 1000);
                }
                return res;
            })()
        }],
        yAxis: {
            type: 'value',
            minInterval:0.01,
            splitLine: { show: false },//去除网格线
            scale: true,
            name: '分类',
            nameTextStyle: {
                color: '#fff',
                fontSize: 12
            },
            axisLabel: {        
                show: true,
                rotate:45,
                textStyle: {
                    //color: '#fff',
                    fontSize:'10'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eee',
                    fontSize: 10
                }
            },
        },
        // visualMap: {
        //     top: 10,
        //     right: 10,
        //     show: false,
        //     pieces: [{//异常
        //         gt: -10,
        //         lte: normal1,
        //         color: '#ff3300'
        //     }, {//正常
        //         gt: normal1,
        //         lte: normal2,
        //         color: '#ff3300'
        //     }, {//异常
        //         gt: normal2,
        //         lte: 10,
        //         color: '#ff3300'
        //     }],
        //     outOfRange: {
        //         color: '#999'
        //     },
        // },

        series: [{
            name: 'lstm',
            type: 'line',
            data:
                (function () {
                    var res = [];
                    var len = 0;
                    while (len < 1) {
                        datasource = localStorage.getItem('datasource');
                        datasource = changedatasource(datasource)
                        if(datasource!="KDDcup") newdata = localStorage.getItem('current_user');
                        if(datasource=="KDDcup") newdata = localStorage.getItem('current_attack');
                        console.log(newdata)
                        res.push(newdata);
                        len++;
                    }
                    return res;
                })()
        }]
    };

    setInterval(function () {
        //新来的实时数据保存在newdata中
        datasource = localStorage.getItem('datasource');
        datasource = changedatasource(datasource)
        if(datasource!="KDDcup") newdata = localStorage.getItem('current_user');
        if(datasource=="KDDcup") newdata = localStorage.getItem('current_attack');
        console.log(newdata)
        num = localStorage.getItem('number_guard');
       // act_time = localStorage.getItem('acttime');
        detail = localStorage.getItem('item');
        output = localStorage.getItem('output');

        if (num != oldnumber) {
            olddata = newdata;
            oldnumber = num;         
            axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');          
            var data0 = option.series[0].data;
            if (data0.length > 30) {
                data0.shift();
                data0.push(newdata);
                option.xAxis[0].data.shift();
                option.xAxis[0].data.push(axisData);
            }
            else {
                data0.push(newdata);
                option.xAxis[0].data.push(axisData);
            }
            myChart.setOption(option);
        }
    }, 2000);
    myChart.setOption(option);
//})();
    function changedatasource(ds) {
        var datasource = "KDDcup";
        if ((ds.search('kddtrain') != -1) || (ds.search('KDDcup') != -1)) {
            datasource = "KDDcup";
        }
        else {
            datasource = ds;
        }
        return datasource;
    }