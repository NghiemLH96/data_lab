import { Button, Space, Table, type TableColumnsType } from 'antd';
import './matrix_management.scss'
import type { MatrixDataType } from '../../../types/matrix';
import { data } from './matrixData';
import { Link } from 'react-router-dom';
import Matrix_form from './components/Matrix_form';
import { useState } from 'react';
export default function Matrix_management() {
    const [addFormState,setAddFormState] = useState(false)

    const MatrixColumns: TableColumnsType<MatrixDataType> = [
        { title: 'Tiêu đề', dataIndex: 'title', key: 'title' },
        { title: 'Độ khó', dataIndex: 'diff_level', key: 'diff_level' },
        { title: 'Độ phân biệt', dataIndex: 'disc_level', key: 'disc_level' },
        { title: 'Nội dung chương', dataIndex: 'chapters', key: 'chapters', render: (chapters: string[]) => <span>{chapters.join(",")}</span> },
        { title: 'Tổng số câu', dataIndex: 'total_ques', key: 'total_ques' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => (
                <Space size="middle">
                    <a >Cập nhật</a>
                    <a style={{ color: 'red' }}>Xoá</a>
                </Space>
            ),
        },
    ];

    
    return (
        <section className="matrix-mng-page">
            <h2 className='matrix-mng-page__title'>Quản lý ma trận</h2>
            {addFormState && <Matrix_form setAddFormState={() => setAddFormState(false)}/>}
            <Button onClick={() => { setAddFormState(true) }} type='primary'>Thêm ma trận</Button>
            <section className='matrix-form-container'>
                <section className='matrix-table-container'>
                    <h2 className='matrix-table-container__title'>Danh sách ma trận tri thức</h2>
                    {/*Bảng danh sách ma trận tri thức */}
                    <Table<MatrixDataType>
                        columns={MatrixColumns}
                        expandable={{
                            expandedRowRender: (record) => {
                                {/*Cấu hình bảng độ khó */ }
                                const difficultyColumns = [
                                    {
                                        title: 'Nhớ',
                                        dataIndex: 'r_percent',
                                        key: 'r_percent',
                                        render: (value: number) => `${value}%`
                                    },
                                    {
                                        title: 'Hiểu',
                                        dataIndex: 'u_percent',
                                        key: 'u_percent',
                                        render: (value: number) => `${value}%`
                                    },
                                    {
                                        title: 'Vận dụng',
                                        dataIndex: 'ap_percent',
                                        key: 'ap_percent',
                                        render: (value: number) => `${value}%`
                                    },
                                    {
                                        title: 'Phân tích',
                                        dataIndex: 'an_percent',
                                        key: 'an_percent',
                                        render: (value: number) => `${value}%`
                                    },
                                    
                                ];

                                const difficultyData = [
                                    {
                                        key: '1',
                                        r_percent: record.r_percent,
                                        u_percent: record.u_percent,
                                        ap_percent: record.ap_percent,
                                        an_percent: record.an_percent,
                                    },
                                ];
                                {/*Cấu hình bảng thống kê câu hỏi */ }
                                const bloomKeys = ['r_percent', 'u_percent', 'ap_percent', 'an_percent'];
                                const quesDetailData = Array.from({ length: 6 }).map((_, colIdx) => {
                                    const rowData: any = {
                                        key: `chapter-${colIdx}`,
                                        chapter: `Chương ${colIdx + 1}`,
                                    };

                                    let total = 0;
                                    bloomKeys.forEach((bloomKey, rowIdx) => {
                                        const val = record.ques_matrix?.[rowIdx]?.[colIdx] ?? 0;
                                        rowData[bloomKey] = val;
                                        total += val;
                                    });

                                    rowData.total = total;

                                    return rowData;
                                });
                                const quesDetailColumns = [
                                    {
                                        title: 'Chương',
                                        dataIndex: 'chapter',
                                        key: 'chapter'
                                    },
                                    {
                                        title: 'Nhớ',
                                        dataIndex: 'r_percent',
                                        key: 'r_percent',
                                    },
                                    {
                                        title: 'Hiểu',
                                        dataIndex: 'u_percent',
                                        key: 'u_percent',
                                    },
                                    {
                                        title: 'Vận dụng',
                                        dataIndex: 'ap_percent',
                                        key: 'ap_percent',
                                    },
                                    {
                                        title: 'Phân tích',
                                        dataIndex: 'an_percent',
                                        key: 'an_percent',
                                    },
                                    {
                                        title: 'Tổng',
                                        dataIndex: 'total',
                                        key: 'total'
                                    },
                                ];
                                return (
                                    <div className='ques-expand-row'>
                                        <h3 className='ques-expand-row__table_caption'>Tỉ lệ câu hỏi phân chia theo bảng Bloom</h3>
                                        <Table
                                            columns={difficultyColumns}
                                            dataSource={difficultyData}
                                            pagination={false}
                                            size="small"
                                        />
                                        <h3 className='ques-expand-row__table_caption'>Bảng thống kê câu hỏi</h3>
                                        <Table
                                            columns={quesDetailColumns}
                                            dataSource={quesDetailData}
                                            pagination={false}
                                            size="small"
                                        />
                                    </div>
                                );
                            }
                            ,
                            rowExpandable: (record) => record.title !== 'Not Expandable',
                        }}
                        dataSource={data} />
                </section>
            </section>
        </section>
    )
}
