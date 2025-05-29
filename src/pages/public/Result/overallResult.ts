import { Chart } from 'chart.js/auto';

export const createLineChart = (ctx: HTMLCanvasElement): Chart => {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['05/03/2025', '12/03/2025', '19/03/2025', '10/04/2025', '15/04/2025'],
      datasets: [
        // Đường line chính
        {
          label: 'Bài Kiểm Tra Nhỏ (Cấp 1/2)',
          data: [70, 80, 90, null, null],
          pointBackgroundColor: 'gray',
          pointBorderColor: 'gray',
          pointRadius: 6,
          type: 'line',
          borderWidth: 0,
          fill: false
        },
        // Điểm A
        {
          label: 'Bài Thi Giữa Kì (Cấp 3)',
          data: [null, null, null, 63, 70],
          backgroundColor:'#38618C',
          pointBackgroundColor: '#38618C',
          pointBorderColor: '#38618C',
          pointRadius: 6,
          type: 'line',
          borderWidth: 0,
          fill: false
        },
        // Điểm B
        {
          label: 'Xu Hướng Tổng Thể',
          data: [70, 80, 90, 63, 70],
          backgroundColor: 'orange',
          borderColor:'orange',
          pointRadius: 0,
          fill: false
        }
      ]      
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 100,
          title: {
            display: true,
            text: 'Điểm Số(%)',
            color: '#000',
            font: {
              size: 12,
              weight: 'bold'
            }
          }
        },
        x: {
          beginAtZero: true,
          suggestedMax: 100,
          title: {
            display: true,
            text: 'Ngày Làm Bài',
            color: '#000',
            font: {
              size: 12,
              weight: 'bold'
            }
          }
        }
      }
      
    }
  });
};
