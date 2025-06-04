import { Button, Checkbox, Col, Form, Input, Row, Select, Space } from "antd";
import './add_ques_form.scss'
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";

type ChildProps = {
    setAddFormState: () => void;
  };

  export default function Add_ques_form({ setAddFormState }: ChildProps) {
    const [form] = Form.useForm();
    const [expandType , setExpandType] = useState("")
    const [selectedBloom , setSelectedBloom] = useState("")
    const [selectedChapter , setSelectedChapter] = useState("")
    const onTypeSelectChange = (value:string) => {
        setExpandType(value);
    }
    const onBloomSelectChange = (value:string) => {
        setSelectedBloom(value)
    }
    const onChapterSelectChange = (value:string) => {
        setSelectedChapter(value);
    }
    return (
        <div className='add-ques-form-container'>
            <Form
                className='add-ques-form'
                layout="vertical"
                form={form}
                initialValues={{ layout: "vertical" }}
            >
                <h3>Thêm câu hỏi mới</h3>

                <Form.Item label="Chương">
                    <Select
                        className="form-item"
                        showSearch
                        placeholder="Chọn chương"
                        optionFilterProp="label"
                        onChange={onChapterSelectChange}
                        options={[
                            {
                                value: 'CLO1',
                                label: 'Chương 1: Tổng quát',
                            },
                            {
                                value: 'CLO2',
                                label: 'Chương 2: Tìm kiếm và sắp xếp',
                            },
                            {
                                value: 'CLO2',
                                label: 'Chương 3: Danh sách liên kết',
                            },
                            {
                                value: 'CLO4',
                                label: 'Chương 4: Ngăn xếp và hàng chờ',
                            },
                            {
                                value: 'CLO5',
                                label: 'Chương 5: Cây',
                            },
                            {
                                value: 'CLO6',
                                label: 'Chương 6: Bảng băm',
                            }
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Bloom">
                    <Select
                        className="form-item"
                        showSearch
                        placeholder="Chọn Bloom"
                        optionFilterProp="label"
                        onChange={onBloomSelectChange}
                        options={[
                            {
                                value: 'r',
                                label: 'Nhớ',
                            },
                            {
                                value: 'u',
                                label: 'Hiểu',
                            },
                            {
                                value: 'ap',
                                label: 'Vận dụng',
                            },
                            {
                                value: 'an',
                                label: 'Phân tích',
                            }
                        ]}
                    />
                </Form.Item>
                <Form.Item className='add-ques-form-item type-choice' label="Kiểu câu hỏi">
                    <Select
                        className="form-item"
                        showSearch
                        placeholder="Chọn kiểu câu hỏi"
                        optionFilterProp="label"
                        onChange={onTypeSelectChange}
                        options={[
                            {
                                value: 'mcq',
                                label: 'MCQ',
                            },
                            {
                                value: 'fn',
                                label: 'FN',
                            },
                            {
                                value: 'fns',
                                label: 'FNS',
                            },
                            {
                                value: 'fss',
                                label: 'FSS',
                            },
                            {
                                value: 'fe',
                                label: 'FE',
                            },
                            {
                                value: 'mp',
                                label: 'MP',
                            },
                            {
                                value: 'pe',
                                label: 'PE',
                            }
                        ]}
                    />
                </Form.Item>
                <p>Độ khó mặc định : 0.5, Độ phân biệt mặc định</p>
                {
                    expandType == 'mcq' && 
                    <div className='add-ques-form-item mcq'>
                    <h3 className="add-ques-form-item__title">Kiểu trắc nghiệm</h3>
                    
                    <Form.Item label="Nội dung câu hỏi">
                        <Input placeholder="Nhập nội dung câu hỏi" />
                    </Form.Item>
                    <Form.List name="answers" initialValue={[{}, {}, {}, {}]}>
                        {(fields) => (
                            <>
                                <Form.Item label="Danh sách đáp án (check vào các đáp án đúng)">
                                    <Checkbox.Group>
                                        <Space direction="vertical">
                                            {fields.map(({ key, name }) => (
                                                <Space key={key} align="baseline">
                                                    <Form.Item noStyle shouldUpdate>
                                                        {() => (
                                                            <Form.Item name="correctAnswers" valuePropName="checked" noStyle>
                                                                <Checkbox value={name}></Checkbox>
                                                            </Form.Item>
                                                        )}
                                                    </Form.Item>
                                                    <Form.Item
                                                        name={[name, 'text']}
                                                        rules={[{ required: true, message: 'Không được để trống!' }]}
                                                        style={{ width: 300 }}
                                                    >
                                                        <Input placeholder={`Đáp án ${name + 1}`} />
                                                    </Form.Item>
                                                </Space>
                                            ))}
                                        </Space>
                                    </Checkbox.Group>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                    </div>
                }
                {
                    expandType == 'fn' && 
                    <div className='add-ques-form-item fn'>
                    <h3 className="add-ques-form-item__title">Kiểu điền khuyết (số)</h3>
                    <Form.Item label="Nội dung câu hỏi (Kí hiệu phần khuyết [*])">
                        <Input placeholder="Nhập nội dung câu hỏi" />
                    </Form.Item>
                    <Form.Item label="Đáp án">
                        <Input placeholder="Nhập đáp án đúng" />
                    </Form.Item>
                    <Form.Item label="Sai số">
                        <Input placeholder="Nhập sai số (nếu có)" />
                    </Form.Item>
                    </div>
                }
                {
                    expandType == 'fns' && 
                    <div className='add-ques-form-item fns'>
                        <h3 className="add-ques-form-item__title">Kiểu điền khuyết (dãy số)</h3>
                        <Form.Item label="Nội dung câu hỏi (Kí hiệu phần khuyết [*])">
                            <Input placeholder="Nhập nội dung câu hỏi" />
                        </Form.Item>
                        <Form.Item label="Đáp án">
                            <Input placeholder='Nhập đáp án đúng dãy số cách nhau bằng dấu ","' />
                        </Form.Item>
                        <Form.Item label="Sai số">
                            <Input placeholder="Nhập sai số (nếu có)" />
                        </Form.Item>
                    </div>
                }
                {
                    expandType == 'fps' && 
                    <div className='add-ques-form-item fps'>
                        <h3 className="add-ques-form-item__title">Kiểu điền khuyết (cú pháp)</h3>
                        <Form.Item label="Nội dung câu hỏi (Kí hiệu phần khuyết [*])">
                            <Input placeholder="Nhập nội dung câu hỏi" />
                        </Form.Item>
                        <Form.Item label="Đáp án">
                            <Input placeholder='Nhập đáp án đúng' />
                        </Form.Item>
                        <Form.Item label="Syntax variants">
                            <Input placeholder="Nhập biến cú pháp (nếu có)" />
                        </Form.Item>
                    </div>
                }
                {
                    expandType == 'fss' && 
                    <div className='add-ques-form-item fss'>
                        <h3 className="add-ques-form-item__title">Kiểu điền khuyết (chuỗi)</h3>
                        <Form.Item label="Nội dung câu hỏi (Kí hiệu phần khuyết [*])">
                            <Input placeholder="Nhập nội dung câu hỏi" />
                        </Form.Item>
                        <Form.Item label="Đáp án">
                            <Input placeholder='Nhập đáp án đúng' />
                        </Form.Item>
                        <Form.Item label="Từ tương đồng (cách nhau bằng dấu phẩy)">
                            <Input placeholder="Nhập các từ tương đồng" />
                        </Form.Item>
                    </div>
                }
                {
                    expandType == 'fe' && 
                    <div className='add-ques-form-item fe'>
                        <h3 className="add-ques-form-item__title">Kiểu điền khuyết (biểu thức)</h3>
                        <Form.Item label="Nội dung câu hỏi (Kí hiệu phần khuyết [*])">
                            <Input placeholder="Nhập nội dung câu hỏi" />
                        </Form.Item>
                        <Form.Item label="Đáp án">
                            <Input placeholder='Nhập đáp án đúng' />
                        </Form.Item>
                        <Form.Item label="Các biểu thức tương đồng (cách nhau bằng dấu phẩy)">
                            <Input placeholder="Nhập các biểu thức tương đồng" />
                        </Form.Item>
                    </div>
                }
                {
                    expandType == 'mp' && 
                    <div className='add-ques-form-item mp'>
                        <h3 className="add-ques-form-item__title">Kiểu điền khuyết (biểu thức)</h3>
                        <Form.Item label="Nội dung câu hỏi (Kí hiệu phần khuyết [*])">
                            <Input placeholder="Nhập nội dung câu hỏi" />
                        </Form.Item>
                        <Form.Item label="Đáp án">
                            <Row style={{padding:"10px 0"}}>
                                <Col span={11}>
                                    <Input placeholder="Nhập nội dung câu hỏi" />
                                </Col>
                                <Col span={2} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                }}>
                                    <ArrowRightOutlined/>
                                </Col>
                                <Col span={11}>
                                    <Input placeholder="Nhập nội dung câu hỏi" />
                                </Col>
                            </Row>
                            <Row style={{padding:"10px 0"}}>
                                <Col span={11}>
                                    <Input placeholder="Nhập nội dung câu hỏi" />
                                </Col>
                                <Col span={2} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                }}>
                                    <ArrowRightOutlined/>
                                </Col>
                                <Col span={11}>
                                    <Input placeholder="Nhập nội dung câu hỏi" />
                                </Col>
                            </Row>
                            <Row style={{padding:"10px 0"}}>
                                <Col span={11}>
                                    <Input placeholder="Nhập nội dung câu hỏi" />
                                </Col>
                                <Col span={2} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                }}>
                                    <ArrowRightOutlined/>
                                </Col>
                                <Col span={11}>
                                    <Input placeholder="Nhập nội dung câu hỏi" />
                                </Col>
                            </Row>
                            <Row style={{padding:"10px 0"}}>
                                <Col span={11}>
                                    <Input placeholder="Nhập nội dung câu hỏi" />
                                </Col>
                                <Col span={2} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                }}>
                                    <ArrowRightOutlined/>
                                </Col>
                                <Col span={11}>
                                    <Input placeholder="Nhập nội dung câu hỏi" />
                                </Col>
                            </Row>
                        </Form.Item>
                    </div>
                }
                {
                    expandType == 'pe' && 
                    <div className='add-ques-form-item pe'>
                        <h3 className="add-ques-form-item__title">Bài tập lập trình</h3>
                        <Form.Item label="Nội dung câu hỏi">
                            <Input placeholder="Nhập nội dung câu hỏi" />
                        </Form.Item>
                        <Form.Item label="Đáp án">
                            <Input placeholder='Nhập đáp án đúng' />
                        </Form.Item>
                    </div>
                }
                {
                    expandType != '' 
                    ? 
                    <Space style={{display:"flex",justifyContent:"flex-end"}}>
                        <Button type="primary">Thêm mới</Button>
                        <Button onClick={setAddFormState}>Huỷ bỏ</Button>
                    </Space>
                    :
                    <Space style={{display:"flex",justifyContent:"flex-end"}}>
                        <Button onClick={setAddFormState}>Đóng</Button>
                    </Space>
                }
            </Form>
        </div>
    )
}
