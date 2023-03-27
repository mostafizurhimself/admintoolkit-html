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
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33],
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#8B5CF6", "#6b7280"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Average High & Low Temperature",
      align: "left",
      style: {
        color: "#64748B",
        fontSize: "16px",
        fontWeight: "600",
        fontFamily: "poppins",
      },
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      style: {
        color: "#64748B",
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 400,
        cssClass: "apexcharts-xaxis-label",
      },
      title: {
        text: "Month",
        style: {
          color: "#64748B",
        },
      },
    },
    yaxis: {
      title: {
        text: "Temperature",
        style: {
          color: "#64748B",
        },
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
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
                                    }
                                },
                                dataLabels: {
                                    enabled: false
                                },
                                stroke: {
                                    curve: 'straight'
                                },
                                title: {
                                    text: 'Product Trends by Month',
                                    align: 'left'
                                },
                                grid: {
                                    row: {
                                    colors: ['#f3f3f3', 'transparent'], 
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
