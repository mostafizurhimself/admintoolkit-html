import ApexCharts from 'apexcharts';
import colors from 'tailwindcss/colors';
import themeConfig, { themeColors } from '@tailwind.config';

const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';

// ========Sales Report Chart Start ===========
const salesReportChartOptions = {
  series: [
    {
      name: 'Sales',
      data: [20000, 35000, 25000, 45000, 30000, 40000, 35000, 45000, 38000, 45000, 25000, 35000],
    },
    {
      name: 'Profit',
      data: [5000, 15000, 10000, 20000, 8000, 12000, 18000, 20000, 12000, 15000, 8000, 12000],
    },
  ],
  colors: [themeColors.primary['500'], colors.sky['500']],
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
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: {
      color: theme === 'dark' ? colors.slate['600'] : colors.slate['200'],
    },
    axisTicks: {
      color: theme === 'dark' ? colors.slate['600'] : colors.slate['200'],
    },
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
  grid: {
    borderColor: theme === 'dark' ? colors.slate['600'] : colors.slate['200'],
  },
};
let salesReportChart = new ApexCharts(document.querySelector('#sales-report-chart'), salesReportChartOptions);
salesReportChart.render();
// Custom Legends
const salesReportChartLegends = document.querySelectorAll("#sales-report-chart-legend input[type='checkbox']");
salesReportChartLegends.forEach((legend) => {
  legend.addEventListener('click', (event) => {
    salesReportChart.toggleSeries(event.target.value);
    legend.parentNode.classList.toggle('opacity-20');
  });
});
// ========Sales Report Chart End ===========

// ========Order Status Chart Start ===========
const orderStatusChartOptions = {
  series: [25000, 15000, 5000],
  labels: ['Completed', 'Pending', 'Canceled'],
  colors: [themeColors.primary['500'], themeColors.warning['400'], themeColors.danger['400']],
  chart: {
    type: 'donut',
    width: '100%',
    height: 350,
    toolbar: {
      show: false,
    },
    fontFamily: themeConfig.theme.fontFamily.sans,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },

  plotOptions: {
    pie: {
      expandOnClick: false,
      offsetY: 20,
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '14px',
            fontWeight: 500,
            color: colors.slate['400'],
          },
          value: {
            show: true,
            fontSize: '28px',
            fontWeight: 'bold',
            color: theme === 'dark' ? colors.slate['300'] : colors.slate['700'],
            formatter: function (val) {
              return Intl.NumberFormat().format(val);
            },
          },
          total: {
            show: true,
            label: 'Total Orders',
            fontSize: '14px',
            fontWeight: 500,
            color: colors.slate['400'],
            formatter: function (w) {
              const total = w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0);

              return Intl.NumberFormat().format(total);
            },
          },
        },
      },
    },
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    // itemMargin: {
    //   horizontal: 5,
    // },
    markers: {
      width: 10,
      height: 10,
    },
    formatter: function (name, opts) {
      const total = opts.w.globals.seriesTotals.reduce((a, b) => {
        return a + b;
      }, 0);
      const value = opts.w.globals.series[opts.seriesIndex];

      const percentage = ((value / total) * 100).toFixed(1);

      return `
        <div class="ml-1">
          <p class="text-slate-700 text-sm font-medium dark:text-slate-300">${percentage}%</p>
          <p class="text-xs">${name}</p>
        </div>
      `;
    },
    onItemClick: {
      toggleDataSeries: false,
    },
    onItemHover: {
      highlightDataSeries: false,
    },
  },
};

let orderStatusChart = new ApexCharts(document.querySelector('#order-status-chart'), orderStatusChartOptions);
orderStatusChart.render();
// ========Order Status Chart End ===========

// ========Profit Chart Start ===========
const profitChartOptions = {
  series: [
    {
      name: 'Profit',
      data: [0, 6000, 8000, 5000, 10000, 18000, 15000],
    },
  ],
  colors: [themeColors.info['500']],
  chart: {
    height: 350,
    type: 'line',
    fontFamily: themeConfig.theme.fontFamily.sans,
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
    width: 2,
    curve: 'smooth',
  },
  xaxis: {
    categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    axisBorder: {
      color: theme === 'dark' ? colors.slate['600'] : colors.slate['200'],
    },
    axisTicks: {
      color: theme === 'dark' ? colors.slate['600'] : colors.slate['200'],
    },
  },
  yaxis: {
    min: 0,
    max: 20000,
    tickAmount: 5,
    labels: {
      formatter: function (value) {
        return value / 1000 + 'K';
      },
    },
  },
  grid: {
    borderColor: theme === 'dark' ? colors.slate['600'] : colors.slate['200'],
  },
};

const profitChart = new ApexCharts(document.querySelector('#profit-chart'), profitChartOptions);
profitChart.render();

// ========Profit Chart End ===========

// ========Revenue Chart Start ===========
const revenueChartOptions = {
  series: [
    {
      name: 'Earnigs',
      data: [18000, 12000, 10000, 14000, 18000, 12000, 16000],
    },
    {
      name: 'Expenses',
      data: [-15000, -18000, -13000, -12000, -8000, -12000, -17000],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    fontFamily: themeConfig.theme.fontFamily.sans,
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.primary['500'], themeColors.warning['400']],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '12px',
      borderRadius: 6,
      borderRadiusApplication: 'around',
      borderRadiusWhenStacked: 'all',
      startingShape: 'rounded',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    min: -20000,
    max: 20000,
    tickAmount: 4,
    labels: {
      formatter: function (value) {
        return value / 1000 + 'K';
      },
    },
  },
  xaxis: {
    categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    axisBorder: {
      color: theme === 'dark' ? colors.slate['600'] : colors.slate['200'],
    },
    axisTicks: {
      color: theme === 'dark' ? colors.slate['600'] : colors.slate['200'],
    },
  },
  legend: {
    show: false,
  },
  grid: {
    borderColor: theme === 'dark' ? colors.slate['600'] : colors.slate['200'],
  },
};
const revenueChart = new ApexCharts(document.querySelector('#revenue-chart'), revenueChartOptions);
revenueChart.render();

// ========Revenue Chart End ===========

// ========Shipping Status Chart Start ===========
const shippingStatusChartOptions = {
  series: [70],
  chart: {
    height: 320,
    type: 'radialBar',
    fontFamily: themeConfig.theme.fontFamily.sans,
  },
  colors: [themeColors.primary['500']],
  stroke: {
    lineCap: 'round',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      },
      track: {
        background: theme === 'dark' ? colors.slate['600'] : colors.slate['200'],
      },
      dataLabels: {
        name: {
          show: true,
          fontSize: '14px',
          fontWeight: 500,
          offsetY: -6,
          color: colors.slate['400'],
        },
        value: {
          show: true,
          fontSize: '32px',
          fontWeight: 'bold',
          color: theme === 'dark' ? colors.slate['300'] : colors.slate['700'],
        },
      },
    },
  },
  labels: ['Shipped'],
};

var shippingStatusChart = new ApexCharts(document.querySelector('#shipping-status-chart'), shippingStatusChartOptions);
shippingStatusChart.render();
// ========Shipping Status Chart End ===========
