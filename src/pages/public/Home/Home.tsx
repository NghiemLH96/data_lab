import {BarChartOutlined, BulbOutlined, ClockCircleOutlined, DoubleRightOutlined} from "@ant-design/icons";
import './home.scss'

export default function Home() {
  return (
    <section className='home-page'>
        <section className='home-page__hero-container'>
            <h2 className="home-page__hero-container__title">Tự tin làm chủ kỳ thi của bạn</h2>
            <p className="home-page__hero-container__description">DataLab mang đến một môi trường luyện thi đơn giản, không xao nhãng, giúp bạn tập trung ôn luyện và đạt kết quả cao trong các kỳ thi sắp tới. Hãy chuẩn bị một cách hiệu quả, theo dõi tiến trình của bạn, và chinh phục mục tiêu học tập.</p>
            <button className="home-page__nav-buttons">Bắt đầu làm bài ngay <DoubleRightOutlined /></button>
        </section>
        <section className="home-page__features-container">
            <h2 className="home-page__features-container__title">Tính năng được thiết kế để giúp bạn thành công</h2>
            <section className="home-page__features">
                <section className="home-page__feature">
                    <ClockCircleOutlined className="home-page__feature__icon"/>
                    <h3 className="home-page__feature__title">Môi trường lý tưởng, không bị phân tâm</h3>
                    <p className="home-page__feature__description">Giao diện tối giản giúp bạn tập trung tuyệt đối vào bài thi.</p>
                </section>
                <section className="home-page__feature">
                    <BulbOutlined className="home-page__feature__icon"/>
                    <h3 className="home-page__feature__title">Theo dõi quá trình học tập</h3>
                    <p className="home-page__feature__description">Giám sát kết quả học tập và nhận diện các lĩnh vực cần cải thiện.</p>
                </section>
                <section className="home-page__feature">
                    <BarChartOutlined className="home-page__feature__icon"/>
                    <h3 className="home-page__feature__title">Phản hồi nhanh chóng</h3>
                    <p className="home-page__feature__description">Kết quả tức thì để bạn dễ dàng đánh giá ưu, nhược điểm của bản thân.</p>
                </section>
            </section>
        </section>
        <section className="home-page__cta-container">
            <h2 className="home-page__cta-container__title">Bạn đã sẵn sàng đạt điểm tuyệt đối trong kỳ thi?</h2>
            <p className="home-page__cta-container__description">Tham gia cùng hàng ngàn bạn trẻ đã tin dùng Data Lab<br/> để ôn luyện thi.</p>
            <button className="home-page__nav-buttons">Vào thi ngay <DoubleRightOutlined /></button>
        </section>
    </section>
  )
}
