import ApexCharts from 'apexcharts';
import colors from 'tailwindcss/colors';
import themeConfig, { themeColors } from '@tailwind.config';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

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
    colors: ['transparent'],
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
      },
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

// ========AmChart Start ===========

let root = am5.Root.new('worldChart');
let amChart = root.container.children.push(
  am5map.MapChart.new(root, {
    panX: 'translateX',
    panY: 'translateY',
    projection: am5map.geoNaturalEarth1(),
  })
);

// Set AmChart Theme
root.setThemes([am5themes_Animated.new(root)]);

// Remove AmChart Default Logo
if (root._logo) root._logo.dispose();

// Polygon Background Color
let polygonSeries = amChart.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ['AQ'],
    fill: am5.color(0xcbd5e1),
    stroke: am5.color(0xffffff),
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
  fill: am5.color(0x8b5cf6),
});

// Set Individual country Color
polygonSeries.data.setAll([
  {
    id: 'US',
    polygonSettings: {
      fill: am5.color(0x8b5cf6),
    },
  },
  {
    id: 'AU',
    polygonSettings: {
      fill: am5.color(0x10b981),
    },
  },
  {},
  {
    id: 'BR',
    polygonSettings: {
      fill: am5.color(0x6366f1),
    },
  },
  {
    id: 'DE',
    polygonSettings: {
      fill: am5.color(0xff8c42),
    },
  },
]);

// Is Hover Any Country Change BG Color
polygonSeries.mapPolygons.template.states.create('hover', {
  fill: am5.color(0x8b5cf6),
});
// ========AmChart End ===========
