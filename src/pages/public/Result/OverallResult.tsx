import './result.scss'
import './overallResult'
import { useEffect, useRef } from 'react';
import { createLineChart } from './overallResult';
export default function OverallResult() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = createLineChart(chartRef.current);
      return () => chart.destroy(); // cleanup
    }
  }, []);
  return (
    <section className="result-page">
      <section className='result-title'>
        <h3>kết quả các bài kiểm tra - lê hiếu nghiêm</h3>
        <p className='result-title__time-info'>ngày cập nhật: 29/05/2025</p>
      </section>
      <section className='result-section'>
        <h4 className='result__section-title'>thông tin chung</h4>
        <p className='result__exam-overall'><b>số bài kiểm tra đã hoàn thành:</b>: 5 (3 bài kiểm tra nhỏ, 2 bài thi giữa kì)</p>
        <p className='result__exam-overall'><b>điểm số</b>: 71.8/100</p>
      </section>
      <section className='result-section'>
        <h4 className='result__section-title'>nhận xét chung</h4>
        <p>Điểm trung bình chung của bạn là 71.8/100 (0.718), được đánh giá ở mức <b>Tốt</b>(0.7-0.9). Tiến độ của bạn cho thấy xu hướng <b>Ổn Định</b>, với cải thiện từ Bài Kiểm Tra Nhỏ (80%) đến đỉnh điểm 90%, nhưng ổn định ở Bài Thi Giữa Kì (66.98%). Hãy tập trung cải thiện CLO5(30%, Không Đạt) và chủ đề Danh Sách Liên Kết (33.3%) để nâng cao hiệu suất tổng thể.</p>
      </section>
      <section className='result-section'>
        <h4 className='result__section-title'>biểu đồ tiến độ chung</h4>
        <canvas height={120} ref={chartRef}></canvas>
      </section>
      <section className='result-section'>
        <h4 className='result__section-title'>tiến độ theo loại bài thi</h4>
        <table className='result__analysis-table'>
          <thead>
            <tr>
              <th>Loại Bài Thi</th>
              <th>Số Lượng</th>
              <th>Số Câu Đúng/Tổng</th>
              <th>Điểm Trung Bình</th>
              <th>Thời Gian Trung Bình</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bài Kiểm Tra Nhỏ (Cấp1/2)</td>
              <td>3</td>
              <td>24/30</td>
              <td>80/100</td>
              <td>20 Phút</td>
            </tr>
            <tr>
              <td>Kiểm Tra Giữa Kì (Cấp 3)</td>
              <td>2</td>
              <td>40/60</td>
              <td>66.98/100</td>
              <td>60 Phút</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  )
}
