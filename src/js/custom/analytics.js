import ApexCharts from 'apexcharts';
import colors from 'tailwindcss/colors';
import themeConfig, { themeColors } from '@tailwind.config';


const salesAnalyticsChartOptions = {
  colors: [themeColors.primary['500'], colors.sky['500']],
  series: [
    {
      name: 'Total Sales',
      data: [0, 2000, 5000, 8000, 15000, 21000, 38000, 43000, 30000, 36000, 25000, 36000],
    },
    {
      name: 'Total Orders',
      data: [0, 3500, 7000, 10000, 20000, 25000, 45000, 40000, 38000, 39000, 44000, 50000],
    },
  ],
  fill: {
    type: 'solid',
    colors: ['transparent']
  },
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
      }
    },
  },
  legend: {
    show: false,
  },
};

const pieOptions = {
  series: [41, 17, 15],
  labels: ['Electronics', 'Furniture', 'Grocery'],
  colors: [themeColors.primary['500'], colors.amber['300'], themeColors.danger['400']],
  chart: {
    type: 'donut',
    width: "100%",
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
      expandOnClick: false
    }
  }
};
// Sales Analytics Chart Start
let salesAnalyticsChart = new ApexCharts(document.querySelector('#sales-analytics-chart'), salesAnalyticsChartOptions);
salesAnalyticsChart.render();
// AreaChart Custom Legends
const salesAnalyticsChartLegends = document.querySelectorAll("#sales-analytics-chart-legend input[type='checkbox']");
salesAnalyticsChartLegends.forEach((legend) => {
  legend.addEventListener('click', (event) => {
    salesAnalyticsChart.toggleSeries(event.target.value);
    legend.parentNode.classList.toggle('opacity-20');
  });
});
// Sales Analytics Chart End

// Top Categories Chart Start
let pieChart = new ApexCharts(document.querySelector('#top-categories-chart'), pieOptions);
pieChart.render();
// Top Categories Chart End

