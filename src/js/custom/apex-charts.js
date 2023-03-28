import ApexCharts from "apexcharts";

const emptyOption = `{ 
                          // ...... 
                        }`;
const sourceCodeTemplate = (id, options = emptyOption) => {
  return `
        <div id="${id}"></div>
        <script>
            import ApexCharts from 'apexcharts';
            const options = ${options};
            const chart =  new ApexCharts(document.querySelector("#${id}"), options);
            chart.render();
        </script>
        `;
};
// All Chart Options
const lineChartOptions = {
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
      color: "#94A3B8",
    },
  },
  grid: {
    row: {
      colors: ["#94A3B8", "#fff"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};
const areaChartOptions = {
  series: [
    {
      name: "STOCK ABC",
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
    type: "area",
    height: 350,
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
    text: "Fundamental Analysis of Stocks",
    align: "left",
    style: {
      color: "#94A3B8",
    },
  },
  subtitle: {
    text: "Price Movements",
    align: "left",
    style: {
      color: "#94A3B8",
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
    type: "datetime",
  },
  yaxis: {
    opposite: true,
  },
  legend: {
    horizontalAlign: "left",
  },
};
// Line Chart Start
const lineChartElement = document.querySelector("#line-chart");
const lineChart = new ApexCharts(lineChartElement, lineChartOptions);
lineChart.render();
const lineChartOptionsTemplate = `
                                  {
                                    series: [{
                                      name: "Desktops",
                                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                                  }],
                                    chart: {
                                    height: 350,
                                    type: 'line',
                                    zoom: {
                                      enabled: false
                                    },
                                    toolbar:{
                                      show: false,
                                    },
                                  },
                                  dataLabels: {
                                    enabled: false
                                  },
                                  stroke: {
                                    curve: 'straight'
                                  },
                                  title: {
                                    text: 'Product Trends by Month',
                                    align: 'left',
                                    style: {
                                      color: "#94A3B8",
                                    },
                                  },
                                  grid: {
                                    row: {
                                      colors: ["#94A3B8", "#fff"], 
                                      opacity: 0.5
                                    },
                                  },
                                  xaxis: {
                                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                  }
                                  }
                                `;

createCodeViewer(
  "#line-chart-code-viewer",
  sourceCodeTemplate("line-chart", lineChartOptionsTemplate)
).render();

// Line Chart End

// area Chart Start
const areaChartElement = document.querySelector("#area-chart");
const areaChart = new ApexCharts(areaChartElement, areaChartOptions);
areaChart.render();

createCodeViewer(
  "#area-chart-code-viewer",
  sourceCodeTemplate("area-chart")
).render();

// area Chart End
