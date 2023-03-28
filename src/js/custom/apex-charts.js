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
const options = {
  lineChartOptions: {
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
  },
};
// Line Chart
const lineChartElement = document.querySelector("#line-chart");
const lineChart = new ApexCharts(lineChartElement, options?.lineChartOptions);
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
  "#apex-code-viewer",
  sourceCodeTemplate("line-chart", lineChartOptionsTemplate)
).render();
