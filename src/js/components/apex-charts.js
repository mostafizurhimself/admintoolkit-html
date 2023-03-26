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
    },


    init() {
        const lineCharts = document.querySelectorAll('.line-chart');
        const areaCharts = document.querySelectorAll('.area-chart')
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


    }
}

export default apexCharts;