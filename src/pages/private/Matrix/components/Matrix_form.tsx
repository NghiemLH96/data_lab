import { Button, Checkbox, Col, Form, Input, Row, Select, Space, Table, Tag, type GetProp } from 'antd'
import './matrix_form.scss'
import type { DiffLevelDataType } from '../../../../types/diff_level';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';
import { useState } from 'react';
type ChildProps = {
    setAddFormState: () => void;
  };

export default function Matrix_form({ setAddFormState }: ChildProps) {
    const [form] = Form.useForm();

    const onDiffSelectChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onDiffSelectSearch = (value: string) => {
        console.log('search:', value);
    };

    const onChapterChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    //Cấu hình bảng thống kê câu hỏi
    // Mảng số câu hỏi cần chọn (dữ liệu tĩnh)
    const questionsRequired = [12, 5, 8, 2];

    // Mảng số câu hỏi đã chọn (dùng useState)
    const [questionsSelected, setQuestionsSelected] = useState([10, 4, 7, 1]);
    // Cấu hình cột cho bảng
    const columns = [
        {
            title: '',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: `Nhớ`,
            dataIndex: `col0`,
            key: `col0`,
            align: 'center' as const,
        }
        ,
        {
            title: `Hiểu`,
            dataIndex: `col1`,
            key: `col1`,
            align: 'center' as const,
        }
        ,
        {
            title: `Vận dụng`,
            dataIndex: `col2`,
            key: `col2`,
            align: 'center' as const,
        }
        ,
        {
            title: `Phân tích`,
            dataIndex: `col3`,
            key: `col3`,
            align: 'center' as const,
        },
    ];
    // Dữ liệu hàng của bảng (2 dòng)
    const dataSource = [
        {
            key: 'required',
            label: 'Số câu hỏi cần chọn',
            ...questionsRequired.reduce((acc: Record<string, number>, curr, idx) => {
                acc[`col${idx}`] = curr;
                return acc;
            }, {}),
        },
        {
            key: 'selected',
            label: 'Số câu hỏi đã chọn',
            ...questionsSelected.reduce((acc: Record<string, number>, curr, idx) => {
                acc[`col${idx}`] = curr;
                return acc;
            }, {}),
        },
    ];

    const data: DiffLevelDataType[] = [
        {
            key: 1,
            title: "Level 5 (Very Difficult)",
            r_percent: 10,
            u_percent: 20,
            ap_percent: 30,
            an_percent: 40,
            diff_level: "p < 0.3",
            disc_level: "0.2 ≤ d ≤ 1",
        }
    ];

    return (

        <div className='matrix-add-form-container'>
            <Form
                className='matrix-add-form'
                layout="vertical"
                form={form}
                initialValues={{ layout: "vertical" }}
            >
                <h3>Thêm ma trận mới</h3>
                <Form.Item className='matrix-form-info overal' label="Tên ma trận">
                    <Input placeholder="Nhập tên ma trận (tối đa 30 kí tự)" maxLength={30} />
                </Form.Item>
                <Form.Item className='matrix-form-info ques_count' label="Số lượng câu hỏi">
                    <Input placeholder="Nhập số lượng câu hỏi (tối đa 70)" max={70} />
                </Form.Item>
                <Form.Item className='matrix-form-info diff' label="Mức">
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="label"
                        onChange={onDiffSelectChange}
                        onSearch={onDiffSelectSearch}
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'tom',
                                label: 'Tom',
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item className='matrix-form-info chapter' label="Chương">
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChapterChange}>
                        <Row>
                            <Col span={12}>
                                <Checkbox value="A">Chương 1: Tổng quan</Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox value="B">Chương 2: Tìm kiếm và sắp xếp</Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox value="C">Chương 3: Danh sách liên kết</Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox value="D">Chương 4: Ngăn xếp và hàng chờ</Checkbox>
                            </Col>
                            <Col span={12}>
                                <Checkbox value="E">Chương 5: Bảng băm</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
                <Table<DiffLevelDataType> dataSource={data} pagination={false}>
                    <Column title="Độ khó bài kiểm tra" dataIndex="title" key="title" />
                    <ColumnGroup title="Tỉ lệ các câu hỏi theo bảng Bloom">
                        <Column title="Nhớ" dataIndex="r_percent" key="r_percent" render={(r_percent) => (`${r_percent}%`)} />
                        <Column title="Hiểu" dataIndex="u_percent" key="u_percent" render={(u_percent) => (`${u_percent}%`)} />
                        <Column title="Vận dụng" dataIndex="ap_percent" key="ap_percent" render={(ap_percent) => (`${ap_percent}%`)} />
                        <Column title="Phân tích" dataIndex="an_percent" key="an_percent" render={(an_percent) => (`${an_percent}%`)} />
                    </ColumnGroup>
                    <Column title="Độ khó câu hỏi" dataIndex="diff_level" key="diff_level" />
                    <Column title="Độ phân biệt" dataIndex="disc_level" key="disc_level" />
                </Table>
                <Table columns={columns} dataSource={dataSource} pagination={false} bordered />
                <Space style={{display:"flex",justifyContent:"flex-end",marginTop:"10px"}}>
                    <Button type='primary'>Thêm mới</Button>
                    <Button onClick={setAddFormState}>Huỷ bỏ</Button>
                </Space>
            </Form>
        </div>
    )
}
