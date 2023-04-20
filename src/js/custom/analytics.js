import ApexCharts from 'apexcharts';
import colors from 'tailwindcss/colors';
import themeConfig, { themeColors } from '@tailwind.config';


const areaOptions = {
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
  labels: ['Camera', 'Sunglass', 'MacBook'],
  colors: ['#8B5CF6', '#FDE68A', '#FDA4AF'],
  chart: {
    type: 'donut',
    width: '100%',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 50,
      dataLabels: {
        enabled: false,
        style: {
          display: 'none',
          visibility: 'invisible',
        },
      },
    },
  },
  legend: {
    // show: false
    position: 'bottom',
    offsetY: -130,
  },
};
// Area Chart Start
let areaChart = new ApexCharts(document.querySelector('#area-chart'), areaOptions);
areaChart.render();
// AreaChart Custom Legends
const allLegends = document.querySelectorAll(".area-legend input[type='checkbox']");
allLegends.forEach((legend) => {
  legend.addEventListener('click', (event) => {
    areaChart.toggleSeries(event.target.value);
    legend.parentNode.classList.toggle('opacity-20');
  });
});
// Area Chart End

// Pie Chart Start
let pieChart = new ApexCharts(document.querySelector('#pie-chart'), pieOptions);
pieChart.render();
// Pie Chart End

// AM World map
