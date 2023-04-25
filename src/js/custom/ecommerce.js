import ApexCharts from 'apexcharts';
import colors from 'tailwindcss/colors';
import themeConfig, { themeColors } from '@tailwind.config';

// Sales Report Chart
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
let salesAnalyticsChart = new ApexCharts(document.querySelector('#sales-report-chart'), salesReportChartOptions);
salesAnalyticsChart.render();

// Order Status Chart
const orderStatusChartOptions = {
  series: [2500, 1500, 650],
  labels: ['Completed', 'Inprogress', 'Canceled'],
  colors: [themeColors.primary['500'], colors.amber['300'], themeColors.danger['400']],
  chart: {
    type: 'donut',
    width: '100%',
    height: 380,
    fontFamily: themeConfig.theme.fontFamily.sans,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    itemMargin: {
      horizontal: 10,
    },
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

let orderStatusChart = new ApexCharts(document.querySelector('#order-status-chart'), orderStatusChartOptions);
orderStatusChart.render();


// Revenue Chart



// Top Categories Chart
const topCategoriesChartOptions = {
  series: [{
    data: [
      25000, 20000, 18000, 15000, 13000, 10000, 8000, 5000
    ]
  }],
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
      distributed: true,
      horizontal: true,
      borderRadius: 4,
    }
  },
  colors: [
    themeColors.primary['500'],
    colors.sky['500'],
    colors.blue['500'],
    colors.emerald['500'],
    colors.rose['500'],
    colors.yellow['500'],
    colors.indigo['500'],
    colors.slate['500'],
  ],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Electronics",
      "Furniture",
      "Clothing",
      "Grocery",
      "Footwear",
      "Jewellery",
      "Sports",
      "Toys",
    ],
    labels: {
      formatter: function (value) {
        return value / 1000 + 'K';
      },
    },
  },
  yaxis: {
    min: 0,
    max: 25000,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
  }
};

let topCategoriesChartOption = new ApexCharts(
  document.querySelector('#top-categories-chart'),
  topCategoriesChartOptions
);
topCategoriesChartOption.render();
