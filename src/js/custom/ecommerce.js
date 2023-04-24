import ApexCharts from 'apexcharts';
import colors from 'tailwindcss/colors';
import themeConfig, { themeColors } from '@tailwind.config';

const salesReportChartOptions = {
  colors: [themeColors.primary['500']],
  series: [
    {
      data: [0, 5000, 15000, 8000, 20000, 21000, 38000, 43000, 30000, 36000, 25000, 36000],
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
    curve: 'smooth',
    width: 2,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yaxis: {
    min: 0,
    max: 50000,
    tickAmount: 5,
    labels: {
      formatter: function (value) {
        return value / 1000 + 'K';
      },
    },
  },
  legend: {
    show: false,
  },
};

const orderStatusChartOptions = {
  series: [2500, 1500, 650],
  labels: ['Completed', 'Inprogress', 'Canceled'],
  colors: [themeColors.primary['500'], colors.amber['300'], themeColors.danger['400']],
  chart: {
    type: 'donut',
    width: '100%',
    height: 400,
    fontFamily: themeConfig.theme.fontFamily.sans,
  },
  legend: {
    position: 'bottom',
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
    },
  },
};
// Sales Analytics Chart Start
let salesAnalyticsChart = new ApexCharts(document.querySelector('#sales-report-chart'), salesReportChartOptions);
salesAnalyticsChart.render();
// Sales Analytics Chart End

// Top Categories Chart Start
let orderStatusChart = new ApexCharts(
  document.querySelector('#order-status-chart'),
  orderStatusChartOptions
);
orderStatusChart.render();
// Top Categories Chart End
