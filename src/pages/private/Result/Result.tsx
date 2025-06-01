import './result.scss'
export default function Result() {
  return (
    <section className="result-page">
      <section className='result-title'>
        <h3>kết quả kiểm tra giữa kì - lê hiếu nghiêm</h3>
        <p className='result-title__time-info'>thời gian: 60 phút (hoàn thành lúc 2:45PM, thứ ba,15/04/2025)</p>
      </section>
      <section className='result-section'>
        <h4 className='result__section-title'>thông tin chung</h4>
        <p><b>Điểm số</b>: 63.95/100 (Dưới Trung Bình)</p>
      </section>
      <section className='result-section'>
        <h4 className='result__section-title'>phân tích theo chủ đề</h4>
        <table className='result__analysis-table'>
          <thead>
            <tr>
              <th>Chủ Đề</th>
              <th>Điểm Số</th>
              <th>Số Câu Đúng/Tổng</th>
              <th>Phần Trăm</th>
              <th>Nhận Xét</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tìm Kiếm và Sắp Xếp(C2)</td>
              <td>39.8/54</td>
              <td>10/15</td>
              <td>73.7%</td>
              <td>Tốt</td>
            </tr>
            <tr>
              <td>Danh Sách Liên Kết(C3)</td>
              <td>12.75/22</td>
              <td>4/7</td>
              <td>58.0%</td>
              <td>Trung Bình</td>
            </tr>
            <tr>
              <td>Ngăn Xếp và Hàng Đợi(C4)</td>
              <td>15/24</td>
              <td>4/8</td>
              <td>62.5%</td>
              <td>Trung Bình</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='result-section'>
        <h4 className='result__section-title'>phân tích theo chuẩn đầu ra</h4>
        <table className='result__analysis-table'>
          <thead>
            <th>CLO</th>
            <th>Mô Tả</th>
            <th>Điểm Số</th>
            <th>Số Câu Đúng/Tổng</th>
            <th>Phần Trăm</th>
            <th>Nhận Xét</th>
          </thead>
          <tbody>
            <tr>
              <td>CLO1</td>
              <td>Nắm được khái niệm, vai trò của cấu trúc dữ liệu và giải thuật trong chương trình, các tiêu chuẩn đánh giá cấu trúc dữ liệu, các tiêu chuẩn đánh giá giải thuật. Khái niệm về độ phức tạp thuật giải, kỹ thuật tính toán cơ bản, biểu diễn thuật giải.</td>
              <td>39.8/54</td>
              <td>10/15</td>
              <td>73.7%</td>
              <td>Đạt</td>
            </tr>
            <tr>
              <td>CLO2</td>
              <td>Xác định và phát biểu bài toán tìm kiếm, các yếu tố có liên quan, các yếu tố ràng buộc trong bài toán, mô hình hoá bài toán, xác định các phương pháp giải quyết bài toán, phân tích các ưu điểm và hạn chế của các phương pháp giải quyết bài toán.</td>
              <td>20/29</td>
              <td>5/7</td>
              <td>69.0%</td>
              <td>Đạt</td>
            </tr>
            <tr>
              <td>CLO3</td>
              <td>Xác định và phát biểu bài toán sắp xếp, các yếu tô có liên quan, các yếu tố ràng buộc trong bài toán, mô hình hoá bài toán, xác định các phương pháp giải quyết bài toán, phân tích các ưu điểm và hạn chế của các phương pháp giải quyết bài toán.</td>
              <td>19.8/25</td>
              <td>5/8</td>
              <td>79.2%</td>
              <td>Đạt</td>
            </tr>
            <tr>
              <td>CLO4 </td>
              <td>Nắm vững các cấu trúc dữ liệu cơ bản và có khả năng ứng dụng các cấu trúc dữ liệu cơ bản để viết các chương trình ứng dụng đơn giản.</td>
              <td>22.75/36</td>
              <td>6/11</td>
              <td>63.2%</td>
              <td>Đạt</td>
            </tr>
            <tr>
              <td>CLO5</td>
              <td>Nắm vững cách thức cài đặt các cấu trúc dữ liệu, thuật toán và có thể áp dụng để giải quyết các bài toán đơn giản.</td>
              <td>6.2/20</td>
              <td>2/6</td>
              <td>31.0%</td>
              <td>Không Đạt</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='result-section'>
        <h4 className='result__section-title'>nhận xét chung</h4>
        <p className='result__evoluation'>Hiệu suất tổng thể của bạn là 63.95/100 (Dưới Trung Bình).Bạn mạnh ở Tìm Kiếm và Sắp Xếp (Tốt), nhưng cần cải thiện ở Danh Sách Liên Kết và Ngăn Xếp/Hàng Đợi (Trung Bình). Kỹ năng Áp Dụng (42.9%) cần chú trọng; Nhớ và Hiểu cũng cần củng cố. Hãy tập trung vào CLO5(Không Đạt) và thực hành thêm các bài tập cài đặt. Quản lý thời gian trong 60 phút khá tốt.</p>
      </section>
    </section>
  )
}
