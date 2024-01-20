import Chart from 'chart.js/auto'

export function showBarChart(canvasId, labels, data) {
  var ctx = document.getElementById(canvasId).getContext('2d')
  
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Amount',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
        x: {
          beginAtZero: true
        }
      }
    }
  })
}