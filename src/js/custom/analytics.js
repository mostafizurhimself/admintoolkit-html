import * as am5 from '@amcharts/amcharts5';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import themeConfig, { themeColors } from '@tailwind.config';
import ApexCharts from 'apexcharts';
import colors from 'tailwindcss/colors';

const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';

// ========Store Analytics Chart Start ===========
const storeAnalyticsChartOptions = {
  series: [
    {
      name: 'Visitors',
      data: [0, 15000, 7000, 22000, 15000, 30000, 28000, 40000, 30000, 25000, 44000, 48000],
    },
    {
      name: 'Orders',
      data: [0, 5000, 1500, 5000, 2500, 25000, 10000, 15000, 10000, 30000, 15000, 36000],
    },
  ],
  colors: [themeColors.primary['500'], colors.sky['500']],
  chart: {
    type: 'line',
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
let storeAnalyticsChart = new ApexCharts(document.querySelector('#store-analytics-chart'), storeAnalyticsChartOptions);
storeAnalyticsChart.render();
// Custom Legends
const salesAnalyticsChartLegends = document.querySelectorAll("#store-analytics-chart-legend input[type='checkbox']");
salesAnalyticsChartLegends.forEach((legend) => {
  legend.addEventListener('click', (event) => {
    storeAnalyticsChart.toggleSeries(event.target.value);
    legend.parentNode.classList.toggle('opacity-20');
  });
});

// ========Store Analytics Chart End ===========

// ========Active Users Chart Start ===========

const activeUsersChartOptions = {
  series: [25000, 15000, 5000],
  labels: ['Desktop', 'Mobile', 'Tablet'],
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
            label: 'Total Users',
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
    //   horizontal: 10,
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

const activeUsersChart = new ApexCharts(document.querySelector('#active-users-chart'), activeUsersChartOptions);
activeUsersChart.render();

// ========Active Users Chart End ===========

// ========Sale Location Cart Start ===========

let root = am5.Root.new('salesLocationChart');

// Set Sale Location Cart Theme
root.setThemes([am5themes_Animated.new(root)]);

// Create the map chart
let salesLocationChart = root.container.children.push(
  am5map.MapChart.new(root, {
    projection: am5map.geoMercator(),
    draggable: false,
    panY: false,
    panX: false,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    wheelable: false,
    wheelX: 'none',
    wheelY: 'none',
  })
);

// Remove Sale Location Cart Default Logo
if (root._logo) root._logo.dispose();

// Polygon Background Color
let polygonSeries = salesLocationChart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ['AQ'],
    fill: theme === 'dark' ? am5.color(colors.slate['600']) : am5.color(colors.slate['200']),
    stroke: theme === 'dark' ? am5.color(colors.slate['700']) : am5.color(colors.slate['100']),
  })
);
// Polygon Settings
polygonSeries.mapPolygons.template.setAll({
  tooltipText: '{name}',
  toggleKey: 'active',
  interactive: true,
  templateField: 'polygonSettings',
});

// Set Tooltip Background Color
let tooltip = am5.Tooltip.new(root, {});
tooltip.get('background').setAll({
  fill: am5.color(themeColors.primary['500']),
});

// Set Individual country Color
polygonSeries.data.setAll([
  {
    id: 'US',
    polygonSettings: {
      fill: am5.color(themeColors.primary['500']),
    },
  },
  {
    id: 'AU',
    polygonSettings: {
      fill: am5.color(themeColors.success['500']),
    },
  },
  {},
  {
    id: 'BR',
    polygonSettings: {
      fill: am5.color(themeColors.info['500']),
    },
  },
  {
    id: 'DE',
    polygonSettings: {
      fill: am5.color(themeColors.warning['500']),
    },
  },
]);

// ========Sale Location Cart End ===========
