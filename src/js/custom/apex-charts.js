import ApexCharts from 'apexcharts';
import defaultTheme from 'tailwindcss/defaultTheme';
import themeConfig from '@tailwind.config';

const emptyOption = `{ 
                          // ...... 
                        }`;
const sourceCodeTemplate = (id = 'chart', options = emptyOption) => {
  return `
        <div id="${id}"></div>
        <script type="module">
            import ApexCharts from 'apexcharts';
            const options = ${options};
            const chart =  new ApexCharts(document.querySelector("#${id}"), options);
            chart.render();
        </script>
        `;
};
// All Chart Options
const chartOptions = {
  lineChart: {
    series: [
      {
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      fontFamily: themeConfig.theme.fontFamily.sans,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left',
      style: {
        color: '#475569',
        fontSize: '18px',
        fontWeight: 600,
      },
    },
    grid: {
      row: {
        colors: ['transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  },
  areaChart: {
    series: [
      {
        name: 'STOCK ABC',
        data: [
          {
            x: 2010,
            y: 330,
          },
          {
            x: 2011,
            y: 355,
          },
          {
            x: 2012,
            y: 366,
          },
          {
            x: 2013,
            y: 337,
          },
          {
            x: 2014,
            y: 352,
          },
          {
            x: 2015,
            y: 377,
          },
          {
            x: 2016,
            y: 383,
          },
          {
            x: 2017,
            y: 344,
          },
          {
            x: 2018,
            y: 366,
          },
          {
            x: 2019,
            y: 389,
          },
          {
            x: 2020,
            y: 334,
          },
          {
            x: 2021,
            y: 334,
          },
        ],
      },
    ],
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      fontFamily: themeConfig.theme.fontFamily.sans,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },

    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left',
      style: {
        color: '#475569',
        fontSize: '18px',
        fontWeight: 600,
        fontFamily: {
          sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left',
      style: {
        color: '#475569',
        fontWeight: 500,
        fontFamily: {
          sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    labels: [
      {
        x: 20,
        y: 54,
      },
      {
        x: 30,
        y: 66,
      },
      {
        x: 20,
        y: 86,
      },
      {
        x: 38,
        y: 46,
      },
      {
        x: 34,
        y: 56,
      },
    ],
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: 'left',
    },
  },
  columnChart: {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      fontFamily: themeConfig.theme.fontFamily.sans,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
        style: {
          color: '#475569',
          fontWeight: 500,
          fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans],
          },
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        },
      },
    },
  },
  barChart: {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      fontFamily: themeConfig.theme.fontFamily.sans,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'Germany',
      ],
    },
  },
  scatterChart: {
    series: [
      {
        name: 'SAMPLE A',
        data: [
          [16.4, 5.4],
          [21.7, 2],
          [25.4, 3],
          [19, 2],
          [10.9, 1],
          [13.6, 3.2],
          [10.9, 7.4],
          [10.9, 0],
          [10.9, 8.2],
          [16.4, 0],
          [16.4, 1.8],
          [13.6, 0.3],
          [13.6, 0],
          [29.9, 0],
          [27.1, 2.3],
          [16.4, 0],
          [13.6, 3.7],
          [10.9, 5.2],
          [16.4, 6.5],
          [10.9, 0],
          [24.5, 7.1],
          [10.9, 0],
          [8.1, 4.7],
          [19, 0],
          [21.7, 1.8],
          [27.1, 0],
          [24.5, 0],
          [27.1, 0],
          [29.9, 1.5],
          [27.1, 0.8],
          [22.1, 2],
        ],
      },
      {
        name: 'SAMPLE B',
        data: [
          [36.4, 13.4],
          [1.7, 11],
          [5.4, 8],
          [9, 17],
          [1.9, 4],
          [3.6, 12.2],
          [1.9, 14.4],
          [1.9, 9],
          [1.9, 13.2],
          [1.4, 7],
          [6.4, 8.8],
          [3.6, 4.3],
          [1.6, 10],
          [9.9, 2],
          [7.1, 15],
          [1.4, 0],
          [3.6, 13.7],
          [1.9, 15.2],
          [6.4, 16.5],
          [0.9, 10],
          [4.5, 17.1],
          [10.9, 10],
          [0.1, 14.7],
          [9, 10],
          [12.7, 11.8],
          [2.1, 10],
          [2.5, 10],
          [27.1, 10],
          [2.9, 11.5],
          [7.1, 10.8],
          [2.1, 12],
        ],
      },
      {
        name: 'SAMPLE C',
        data: [
          [21.7, 3],
          [23.6, 3.5],
          [24.6, 3],
          [29.9, 3],
          [21.7, 20],
          [23, 2],
          [10.9, 3],
          [28, 4],
          [27.1, 0.3],
          [16.4, 4],
          [13.6, 0],
          [19, 5],
          [22.4, 3],
          [24.5, 3],
          [32.6, 3],
          [27.1, 4],
          [29.6, 6],
          [31.6, 8],
          [21.6, 5],
          [20.9, 4],
          [22.4, 0],
          [32.6, 10.3],
          [29.7, 20.8],
          [24.5, 0.8],
          [21.4, 0],
          [21.7, 6.9],
          [28.6, 7.7],
          [15.4, 0],
          [18.1, 0],
          [33.4, 0],
          [16.4, 0],
        ],
      },
    ],
    chart: {
      height: 350,
      type: 'scatter',
      zoom: {
        enabled: true,
        type: 'xy',
      },
      toolbar: {
        show: false,
      },
      fontFamily: themeConfig.theme.fontFamily.sans,
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function (val) {
          return parseFloat(val).toFixed(1);
        },
      },
    },
    yaxis: {
      tickAmount: 7,
    },
  },
  pieChart: {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: 'pie',
      align: 'center',
      toolbar: {
        show: false,
      },
      fontFamily: themeConfig.theme.fontFamily.sans,
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
  donutChart: {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut',
      width: 380,
      toolbar: {
        show: false,
      },
      fontFamily: themeConfig.theme.fontFamily.sans,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
  radarChart: {
    series: [
      {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
      },
    ],
    chart: {
      height: 350,
      type: 'radar',
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
      fontFamily: themeConfig.theme.fontFamily.sans,
    },
    title: {
      text: 'Radar Chart - Multi Series',
      style: {
        color: '#475569',
        fontSize: '18px',
        fontWeight: 600,
      },
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
    },
  },
};
// Line Chart Start
const lineChartElement = document.querySelector('#line-chart');
const lineChart = new ApexCharts(lineChartElement, chartOptions.lineChart);
lineChart.render();
const lineChartOptionsTemplate = `
{
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Product Trends by Month",
    align: "left",
    style: {
      color: "#475569",
      fontSize: '20px',
      fontWeight: 600,
    },
  },
  grid: {
    row: {
      colors: ["transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
    ],
  },
}
`;
// Add Source Code
createCodeViewer('#line-chart-code-viewer', sourceCodeTemplate(lineChartElement.id, lineChartOptionsTemplate)).render();
// Line Chart End

// area Chart Start
const areaChartElement = document.querySelector('#area-chart');
const areaChart = new ApexCharts(areaChartElement, chartOptions.areaChart);
areaChart.render();
// Add Source Code
createCodeViewer('#area-chart-code-viewer', sourceCodeTemplate(areaChartElement.id)).render();
// area Chart End

// column Chart Start
const columnChartElement = document.querySelector('#column-chart');
const columnChart = new ApexCharts(columnChartElement, chartOptions.columnChart);
columnChart.render();
// Add Source Code
createCodeViewer('#column-chart-code-viewer', sourceCodeTemplate(columnChartElement.id)).render();
// column Chart End

// bar Chart Start
const barChartElement = document.querySelector('#bar-chart');
const barChart = new ApexCharts(barChartElement, chartOptions.barChart);
barChart.render();
// Add Source Code
createCodeViewer('#bar-chart-code-viewer', sourceCodeTemplate(barChartElement.id)).render();
// bar Chart End

// scatter Chart Start
const scatterChartElement = document.querySelector('#scatter-chart');
const scatterChart = new ApexCharts(scatterChartElement, chartOptions.scatterChart);
scatterChart.render();
// Add Source Code
createCodeViewer('#scatter-chart-code-viewer', sourceCodeTemplate(scatterChartElement.id)).render();
// Scatter Chart End

// pie Chart Start
const pieChartElement = document.querySelector('#pie-chart');
const pieChart = new ApexCharts(pieChartElement, chartOptions.pieChart);
pieChart.render();
// Add Source Code
createCodeViewer('#pie-chart-code-viewer', sourceCodeTemplate(pieChartElement.id)).render();
// pie Chart End

// donut Chart Start
const donutChartElement = document.querySelector('#donut-chart');
const donutChart = new ApexCharts(donutChartElement, chartOptions.donutChart);
donutChart.render();
// Add Source Code
createCodeViewer('#donut-chart-code-viewer', sourceCodeTemplate(donutChartElement.id)).render();
// donut Chart End

// radar Chart Start
const radarChartElement = document.querySelector('#radar-chart');
const radarChart = new ApexCharts(radarChartElement, chartOptions.radarChart);
radarChart.render();
// Add Source Code
createCodeViewer('#radar-chart-code-viewer', sourceCodeTemplate(radarChartElement.id)).render();
// radar Chart End

window.Apex.chart = {
  fontFamily: {
    sans: ['Poppins', ...defaultTheme.fontFamily.sans],
  },
};
