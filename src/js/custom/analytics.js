import ApexCharts from 'apexcharts';
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
const areaOptions = {
  colors: ['#8C5EF6', '#1BA0FE'],
  series: [
    {
      name: 'Total Sales',
      data: [0, 1000, 7000, 16000, 21000, 38000, 43000, 30000, 36000, 25000, 36000],
    },
    {
      name: 'Total Orders',
      data: [0, 1100, 8000, 18000, 22000, 45000, 40000, 38000, 39000, 44000, 30000],
    },
  ],
  fill: {
    colors: ['#8B5CF6'],
    type: 'gradient',
    gradient: {
      opacityFrom: 0.3,
      opacityTo: 0,
    },
  },
  chart: {
    type: 'area',
    height: 250,
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
    curve: 'smooth',
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yaxis: {
    min: 0,
    max: 50000,
  },
  legend: {
    show: false,
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
