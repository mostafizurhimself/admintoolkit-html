import ApexCharts from 'apexcharts'

const apexCharts = {
    options: {
        lineChart: {
            series: [
                {
                    name: "High - 2013",
                    data: [28, 29, 33, 36, 32, 32, 33],
                },
                {
                    name: "Low - 2013",
                    data: [12, 11, 14, 18, 17, 13, 13]
                }
            ],
            chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                toolbar: {
                    show: false
                }
            },
            colors: ['#8B5CF6', '#6b7280'],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Average High & Low Temperature',
                align: 'left',
                style:{
                    color: '#64748B',
                    fontSize:'16px',
                    fontWeight:'600',
                    fontFamily:'poppins'

                }
            },
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    opacity: 0.5
                  },
            },
            markers: {
                size: 1,
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                style: {
                    color: '#64748B',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                title: {
                    text: 'Month',
                    style:{
                        color: '#64748B'
                    }
                }
                
            },
            yaxis: {
                title: {
                    text: 'Temperature',
                    style:{
                        color:'#64748B'
                    }
                },
                min: 5,
                max: 40,
                
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        },
        areaChart:{
            series: [{
            name: 'north',
            data: [{
                x: 1996,
                y: 322
              },
              {
                x: 1997,
                y: 324
              },
              {
                x: 1998,
                y: 329
              },
              {
                x: 1999,
                y: 342
              },
              {
                x: 2000,
                y: 348
              },
              {
                x: 2001,
                y: 334
              },
              {
                x: 2002,
                y: 325
              },
              {
                x: 2003,
                y: 316
              },
              {
                x: 2004,
                y: 318
              },
              {
                x: 2005,
                y: 330
              },
              {
                x: 2006,
                y: 355
              },
              {
                x: 2007,
                y: 366
              },
              {
                x: 2008,
                y: 337
              },
              {
                x: 2009,
                y: 352
              },
              {
                x: 2010,
                y: 377
              },
              {
                x: 2011,
                y: 383
              },
              {
                x: 2012,
                y: 344
              },
              {
                x: 2013,
                y: 366
              },
              {
                x: 2014,
                y: 389
              },
              {
                x: 2015,
                y: 334
              }
            ]
          }, {
            name: 'south',
            data: [
              {
                x: 1996,
                y: 162
              },
              {
                x: 1997,
                y: 90
              },
              {
                x: 1998,
                y: 50
              },
              {
                x: 1999,
                y: 77
              },
              {
                x: 2000,
                y: 35
              },
              {
                x: 2001,
                y: -45
              },
              {
                x: 2002,
                y: -88
              },
              {
                x: 2003,
                y: -120
              },
              {
                x: 2004,
                y: -156
              },
              {
                x: 2005,
                y: -123
              },
              {
                x: 2006,
                y: -88
              },
              {
                x: 2007,
                y: -66
              },
              {
                x: 2008,
                y: -45
              },
              {
                x: 2009,
                y: -29
              },
              {
                x: 2010,
                y: -45
              },
              {
                x: 2011,
                y: -88
              },
              {
                x: 2012,
                y: -132
              },
              {
                x: 2013,
                y: -146
              },
              {
                x: 2014,
                y: -169
              },
              {
                x: 2015,
                y: -184
              }
            ]
          }],
            chart: {
            type: 'area',
            height: 350,
            toolbar:{
                show:false
              },
            style:{
              color:'red',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          
          title: {
            text: 'Area with Negative Values',
            align: 'left',
            style: {
              fontSize: '14px',
              color: '#94A3B8'
            }
          },
          xaxis: {
            type: 'datetime',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            tickAmount: 4,
            floating: false,
          
            labels: {
              style: {
                colors: '#8e8da4',
              },
              offsetY: -7,
              offsetX: 0,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false
            }
          },
          fill: {
            opacity: 0.5
          },
          
          tooltip: {
            x: {
              format: "yyyy",
            },
            fixed: {
              enabled: false,
              position: 'topRight'
            }
          },
          grid: {
            yaxis: {
              lines: {
                offsetX: -30
              }
            },
            padding: {
              left: 20
            }
          }
          },
        columnChart:{
          series: [{
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43]
        }, {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27]
        }, {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14]
        }, {
          name: 'PRODUCT D',
          data: [21, 7, 25, 13, 22, 8]
        }],
          chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  color:'#94A3B8',
                  fontWeight: 900
                }
              }
            }
          },
        },
        xaxis: {
          type: 'datetime',
          categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
            '01/05/2011 GMT', '01/06/2011 GMT'
          ],
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
        },
        barChart:{
          series: [
          {
            name: 'Actual',
            data: [
              {
                x: '2011',
                y: 12,
                goals: [
                  {
                    name: 'Expected',
                    value: 14,
                    strokeWidth: 2,
                    strokeDashArray: 2,
                    strokeColor: '#775DD0'
                  }
                ]
              },
              {
                x: '2012',
                y: 44,
                goals: [
                  {
                    name: 'Expected',
                    value: 54,
                    strokeWidth: 5,
                    strokeHeight: 10,
                    strokeColor: '#775DD0'
                  }
                ]
              },
              {
                x: '2013',
                y: 54,
                goals: [
                  {
                    name: 'Expected',
                    value: 52,
                    strokeWidth: 10,
                    strokeHeight: 0,
                    strokeLineCap: 'round',
                    strokeColor: '#775DD0'
                  }
                ]
              },
              {
                x: '2014',
                y: 66,
                goals: [
                  {
                    name: 'Expected',
                    value: 61,
                    strokeWidth: 10,
                    strokeHeight: 0,
                    strokeLineCap: 'round',
                    strokeColor: '#775DD0'
                  }
                ]
              },
              {
                x: '2015',
                y: 81,
                goals: [
                  {
                    name: 'Expected',
                    value: 66,
                    strokeWidth: 10,
                    strokeHeight: 0,
                    strokeLineCap: 'round',
                    strokeColor: '#775DD0'
                  }
                ]
              },
              {
                x: '2016',
                y: 67,
                goals: [
                  {
                    name: 'Expected',
                    value: 70,
                    strokeWidth: 5,
                    strokeHeight: 10,
                    strokeColor: '#775DD0'
                  }
                ]
              }
            ]
          }
        ],
          chart: {
          height: 350,
          type: 'bar',
          toolbar:{
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        colors: ['#00E396'],
        dataLabels: {
          formatter: function(val, opt) {
            const goals =
              opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                .goals
        
            if (goals && goals.length) {
              return `${val} / ${goals[0].value}`
            }
            return val
          }
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ['Actual', 'Expected'],
          markers: {
            fillColors: ['#00E396', '#775DD0']
          }
        }
        },
        scatterChart:{
          series: [{
          name: "SAMPLE A",
          data: [
          [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
        },{
          name: "SAMPLE B",
          data: [
          [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
        },{
          name: "SAMPLE C",
          data: [
          [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
        }],
          chart: {
          height: 350,
          type: 'scatter',
          toolbar:{
            show:false
          },
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        xaxis: {
          tickAmount: 10,
          labels: {
            formatter: function(val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
          tickAmount: 7
        }
        }
    },


    init() {
        const lineCharts = document.querySelectorAll('.line-chart');
        const areaCharts = document.querySelectorAll('.area-chart');
        const columnCharts = document.querySelectorAll('.column-chart');
        const barCharts = document.querySelectorAll('.bar-chart');
        const scatterCharts  =document.querySelectorAll('.scatter-chart');
        const pieCharts  =document.querySelectorAll('.pie-chart');
        // Line Charts 
        if(lineCharts.length){
            [...lineCharts].forEach(lineChart => {
                const chart = new ApexCharts(lineChart, this.options.lineChart);
                chart.render();
            })
        }
        // Area Charts 
        if(areaCharts.length){
            [...areaCharts].forEach(areaChart => {
                const chart = new ApexCharts(areaChart, this.options.areaChart);
                chart.render();
            })
        }
        // column Charts 
        if(columnCharts.length){
            [...columnCharts].forEach(columnChart => {
                const chart = new ApexCharts(columnChart, this.options.columnChart);
                chart.render();
            })
        }
        // bar Charts 
        if(barCharts.length){
            [...barCharts].forEach(barChart => {
                const chart = new ApexCharts(barChart, this.options.barChart);
                chart.render();
            })
        }
        // scatter Charts 
        if(scatterCharts.length){
            [...scatterCharts].forEach(scatterChart => {
                const chart = new ApexCharts(scatterChart, this.options.scatterChart);
                chart.render();
            })
        }
        // // pie Charts 
        // if(pieCharts.length){
        //     [...pieCharts].forEach(pieChart => {
        //         const chart = new ApexCharts(pieChart, this.options.pieChart);
        //         chart.render();
        //     })
        // }


    }
}

export default apexCharts;