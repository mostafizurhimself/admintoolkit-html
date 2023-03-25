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
                    color: '#64748B'
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
                colors: ['#F44336', '#E91E63', '#9C27B0']

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
    },


    init() {
        const lineCharts =document.querySelectorAll('.line-chart');
        const theme = localStorage.getItem('theme')
        console.log(theme);
        if(lineCharts.length){
            [...lineCharts].forEach(lineChart => {
                const chart = new ApexCharts(lineChart, this.options.lineChart);
                chart.render();
            })
        }

    }
}

export default apexCharts;