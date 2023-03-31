import Chart from "chart.js/auto";

const emptyOption = `{ 
    // ...... 
  }`;
const sourceCodeTemplate = (id, options = emptyOption) => {
  return `
<div id="${id}"></div>
<script>
import Chart from "chart.js/auto";
const options = ${options};
const chart =  new Chart(document.querySelector("#${id}"), options);
</script>
`;
};

const chartOptions = 
// Line Chart Start
const lineOptionTemplate = `
{
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "My First Dataset",
          data: [10, 80, 161, 56, 55, 140],
          fill: false,
          borderColor: "#8B5CF6",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Chart.js Line Chart - Cubic interpolation mode",
          style: {
            color: "#94A3B8",
          },
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
          },
          suggestedMin: -10,
          suggestedMax: 200,
        },
      },
    },
  }`;
const lineChartElement = document.querySelector("#line-chart");
const lineChart = new Chart(lineChartElement, chartOptions.lineChart);
// Js Source Code View
createCodeViewer(
  "#line-chart-code-viewer",
  sourceCodeTemplate("line-chart", lineOptionTemplate)
).render();

// Line Chart End
