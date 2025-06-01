import { ArrowLeftOutlined, ArrowRightOutlined, FileDoneOutlined } from '@ant-design/icons';
import './exam.scss';
export default function Exam() {
  return (
    <section className="exam-page">
      <section className='exam-page__section'>
        <section className="exam-page__section__item exam-info">
          <h2 className="exam-info__title">Bài Kiểm Tra Giữa Kì - Lê Hiếu Nghiêm</h2>
          <p className="exam-info__description">Thời gian làm bài: 60 phút</p>
          <p className="exam-info__description">Số câu hỏi: 30</p>
          <p className="exam-info__description">Thời gian còn lại: 59:59</p>
        </section>
      </section>
      <section className='exam-page__section'>
        <section className="exam-page__section__item question-board">
          <h3 className="question-board__title">Danh sách câu hỏi</h3>
          <hr />
          <div className="question-board__list">
            <div className="question-board__item active">1</div>
            <div className="question-board__item">2</div>
            <div className="question-board__item">3</div>
            <div className="question-board__item">4</div>
            <div className="question-board__item">5</div>
            <div className="question-board__item">6</div>
            <div className="question-board__item">7</div>
            <div className="question-board__item">8</div>
            <div className="question-board__item">9</div>
            <div className="question-board__item">10</div>
            <div className="question-board__item">11</div>
            <div className="question-board__item">12</div>
            <div className="question-board__item">13</div>
            <div className="question-board__item">14</div>
            <div className="question-board__item">15</div>
            <div className="question-board__item">16</div>
            <div className="question-board__item">17</div>
            <div className="question-board__item">18</div>
            <div className="question-board__item">19</div>
            <div className="question-board__item">20</div>
            <div className="question-board__item">21</div>
            <div className="question-board__item">22</div>
            <div className="question-board__item">23</div>
            <div className="question-board__item">24</div>
            <div className="question-board__item">25</div>
            <div className="question-board__item">26</div>
            <div className="question-board__item">27</div>
            <div className="question-board__item">28</div>
            <div className="question-board__item">29</div>
            <div className="question-board__item">30</div>
          </div>
        </section>
        <section className="exam-board">
          <section className="exam-page__section__item exam-board__item exam-question">
            <h3 className="exam-board__current-question">Câu 1</h3>
            <hr />
            <p className="exam-board__question-content">Độ phức tạp của đoạn chương trình sau là bao nhiêu?</p>
            <img className="exam-board__question-image" src="/public/assets/Screenshot 2025-05-31 072108.png" alt="" />
            <section className="exam-board__options">
              <label className="exam-board__options-item">
                <input type="radio" name='option'/>
                𝒪(𝑛<sup>2</sup>)
              </label>
              <label className="exam-board__options-item">
                <input type="radio" name='option'/>
                𝒪(𝑛)
              </label>
              <label className="exam-board__options-item">
                <input type="radio" name='option'/>
                𝒪(&radic;𝑛)
              </label>
              <label className="exam-board__options-item">
                <input type="radio" name='option'/>
                𝒪(𝑛logn)
              </label>
            </section>
          </section>
          <section className="exam-page__section__item exam-board__item navigation">
            <button className="exam-board__navigation-button nav"><ArrowLeftOutlined /> Câu trước</button>
            <button className="exam-board__navigation-button submit"><FileDoneOutlined /> Nộp bài</button>
            <button className="exam-board__navigation-button nav">Câu sau <ArrowRightOutlined /></button>
          </section>
        </section>
      </section>
    </section>
  )
}
