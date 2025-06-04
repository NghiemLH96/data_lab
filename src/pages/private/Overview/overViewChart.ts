// overallResult.ts
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend
  );
  
  export function createBarChart(
    canvas: HTMLCanvasElement,
    labels: string[],
    data: number[],
    label: string
  ) {
    return new Chart(canvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: 'rgba(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y', 
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: label,
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  
  

  export function createPieChart(canvas: HTMLCanvasElement, labels: string[], data: number[], label: string) {
    return new Chart(canvas, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40'
            ],
            borderColor: '#fff',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: label,
          },
        },
      },
    });
  }
  
  