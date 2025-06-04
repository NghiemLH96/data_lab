import { CheckCircleOutlined, CloseCircleOutlined, QuestionCircleOutlined, UserOutlined } from '@ant-design/icons'
import './overview.scss'
import { useEffect, useRef } from 'react';
import type { Chart } from 'chart.js';
import { createBarChart, createPieChart } from './overViewChart';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

export default function Overview() {

    const dataSource = [
        {
          key: '1',
          date: '2025-05-29',
          exam: "Kiểm tra giữa kì lần 4",
          createby: 'Nghiêm',
        },
        {
          key: '2',
          date: '2025-05-28',
          exam: "Kiểm tra giữa kì lần 3",
          createby: 'Nghiêm',
        },
        {
          key: '3',
          date: '2025-05-27',
          exam: "Kiểm tra giữa kì lần 2",
          createby: 'Nghiêm',
        },
        {
            key: '4',
            date: '2025-05-26',
            exam: "Kiểm tra giữa kì lần 1",
            createby: 'Nghiêm',
          },
      ];
      
      const columns = [
        {
          title: 'Ngày tháng',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Tên bài thi',
          dataIndex: 'exam',
          key: 'exam',
        },
        {
          title: 'Cập nhật bởi',
          dataIndex: 'createby',
          key: 'createby',
        }
      ];

      const chapterChartRef = useRef<HTMLCanvasElement>(null);
      const bloomChartRef = useRef<HTMLCanvasElement>(null);

      useEffect(() => {
        const chapterLabels = ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5', 'Chương 6'];
        const chapterData = [75, 85, 90, 80, 65, 55];
      
        const bloomLabels = ['Nhận biết', 'Thông hiểu', 'Vận dụng', 'Vận dụng cao'];
        const bloomData = [60, 70, 80, 50];
      
        let chapterChart: Chart | null = null;
        let bloomChart: Chart | null = null;
      
        if (chapterChartRef.current) {
          chapterChart = createBarChart(chapterChartRef.current, chapterLabels, chapterData, 'Thống kê số câu hỏi theo chương');
        }
      
        if (bloomChartRef.current) {
          bloomChart = createPieChart(bloomChartRef.current, bloomLabels, bloomData, 'Thống kê số câu hỏi theo cấp độ Bloom');
        }
      
        return () => {
          chapterChart?.destroy();
          bloomChart?.destroy();
        };
      }, []);
      
      
    return (
        <section className='overview-page'>
            <section className='overview-section statistics'>
                <h2 className='section__title'>Thống kê tổng quát</h2>
                <section className='statistics__container'>
                    <div className='statistics__item'>
                        <div className='statistics__item__title'>
                            <span>Số câu đúng</span>
                            <CheckCircleOutlined />
                        </div>
                        <span className='statistics__item__parameter'>85</span>
                        <span className='statistics__item__parameter-desc'>85% trên tổng số câu hỏi</span>
                        <progress className='statistics__item__progress-bar correct' value={85} max={100}></progress>
                    </div>
                    <div className='statistics__item'>
                        <div className='statistics__item__title'>
                            <span>Số câu sai</span>
                            <CloseCircleOutlined />
                        </div>
                        <span className='statistics__item__parameter'>85</span>
                        <span className='statistics__item__parameter-desc'>85% trên tổng số câu hỏi</span>
                        <progress className='statistics__item__progress-bar incorrect' value={15} max={100}></progress>
                    </div>
                    <div className='statistics__item'>
                        <div className='statistics__item__title'>
                            <span>Tổng số câu hỏi</span>
                            <QuestionCircleOutlined />
                        </div>
                        <span className='statistics__item__parameter'>85</span>
                        <span className='statistics__item__parameter-desc'>85% trên tổng số câu hỏi</span>
                        <progress className='statistics__item__progress-bar' value={100} max={100}></progress>
                    </div>
                    <div className='statistics__item'>
                        <div className='statistics__item__title'>
                            <span>Tổng số người dùng</span>
                            <UserOutlined />
                        </div>
                        <span className='statistics__item__parameter'>85</span>
                        <span className='statistics__item__parameter-desc'>85% trên tổng số câu hỏi</span>
                        <progress className='statistics__item__progress-bar' value={100} max={100}></progress>
                    </div>
                </section>
            </section>
            <section className='overview-section chart-section'>
                <h2 className='section__title'>Biểu đồ thống kê</h2>
                <section className='chart-section__chart-container'>
                    <section className='chart-section__chart chapter'>
                        <canvas height={120} ref={chapterChartRef}></canvas>
                    </section>
                    <section className='chart-section__chart bloom'>
                        <canvas height={120} ref={bloomChartRef}></canvas>
                    </section>
                </section>
            </section>
            <section className='overview-section suggestion'>
                <section className='suggestion__container'>
                    <section className='suggestion__item'>
                        <h2 className='section__title'>Gợi ý bài kiểm tra</h2>
                        <ul className='suggestion__exams-list'>
                            <li className='suggestion__exam'>
                                <span className='suggestion__exam__title'>Kiểm tra nhỏ 1</span>
                                <span>Mức 1</span>
                                <Link className='suggestion__exam__nav' to={'/'}>Xem chi tiết</Link>
                            </li>
                            <li className='suggestion__exam'>
                                <span className='suggestion__exam__title'>Kiểm tra giữa kì lần 1</span>
                                <span>Mức 1</span>
                                <Link className='suggestion__exam__nav' to={'/'}>Xem chi tiết</Link>
                            </li>
                            <li className='suggestion__exam'>
                                <span className='suggestion__exam__title'>Kiểm tra cuối kì lần 1</span>
                                <span>Mức 3</span>
                                <Link className='suggestion__exam__nav' to={'/'}>Xem chi tiết</Link>
                            </li>
                            <li className='suggestion__exam'>
                                <span className='suggestion__exam__title'>Kiểm tra nhỏ 2</span>
                                <span>Mức 2</span>
                                <Link className='suggestion__exam__nav' to={'/'}>Xem chi tiết</Link>
                            </li>
                        </ul>
                    </section>
                    <section className='suggestion__item'>
                        <h2 className='section__title'>Cập nhật bài kiểm tra</h2>
                        <Table dataSource={dataSource} columns={columns} />
                    </section>
                </section>
            </section>
        </section>
    )
}
