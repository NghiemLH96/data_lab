import { Button, Space, Table, type TableColumnsType } from 'antd';
import './question_manager.scss'
import type { QuestionDataType } from '../../../types/questions';
import { useEffect, useState } from 'react';
import Add_ques_form from './components/add_ques_form/Add_ques_form';
import { CheckCircleOutlined } from '@ant-design/icons';
import type { TransformedQuestion } from '../../../services/QuestionService';
import QuestionService from '../../../services/QuestionService';
export default function Questions_manager() {

  const [questions, setQuestions] = useState<TransformedQuestion[]>([]);

  useEffect(() => {
    QuestionService.fetchQuestions()
      .then(data => setQuestions(data))
      .catch(error => console.error("Lỗi khi tải câu hỏi:", error));
  }, []);

  useEffect(()=>{
    console.log(questions);
    
  },[questions])
  const [addFormState, setAddFormState] = useState(false);
  const columns: TableColumnsType<QuestionDataType> = [
    { title: 'Kiểu câu hỏi', dataIndex: 'question_type', key: 'question_type', render: (question_type) => question_type.toUpperCase() },
    { title: 'Nội dung', dataIndex: 'question_content', key: 'question_content' },
    { title: 'Độ khó', dataIndex: 'diff_level', key: 'diff_level' },
    { title: 'Độ phân biệt', dataIndex: 'disc_level', key: 'diff_level' },
    { title: 'Bloom', dataIndex: 'bloom_level', key: 'bloom_level' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => (
        <Space size="middle">
          <a >Edit</a>
          <a style={{ color: 'red' }}>Delete</a>
        </Space>
      ),
    },
  ];


  return (
    <section className="ques-manager-page">
      {addFormState && <Add_ques_form setAddFormState={() => setAddFormState(false)} />}
      <h2 className='ques-manager-page__title'>Quản lý câu hỏi</h2>
      <Button onClick={() => { setAddFormState(true) }} type='primary'>Thêm câu hỏi</Button>
      <Table<QuestionDataType>
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <div className='ques-expand-row'>
              <div className="ques-info">
                <p style={{ margin: 0 }}><b>Mã câu hỏi:</b> {record.key}</p>
                <p style={{ margin: 0 }}><b>Kiểu câu hỏi:</b> {record.question_type.toUpperCase()}</p>
                <p style={{ margin: 0 }}><b>Nội dung:</b> {record.question_content}</p>
                <p style={{ margin: 0 }}><b>Chương:</b> {record.chapter}</p>
                <p style={{ margin: 0 }}><b>Độ khó:</b> {record.diff_level}</p>
                <p style={{ margin: 0 }}><b>Độ phân biệt:</b> {record.disc_level}</p>
                <p style={{ margin: 0 }}><b>Bloom:</b> {record.bloom_level}</p>
                <p style={{ margin: 0 }}><b>Độ sai số:</b> {record.tolerance_range}</p>
                <p style={{ margin: 0 }}><b>Partial credit:</b> {record.partial_credit}</p>
                <p style={{ margin: 0 }}><b>Các từ tương đồng:</b> {Array.isArray(record.synonyms) && record.synonyms.length > 0 ? record.synonyms.join(", ") : "Không có từ tương đồng"}</p>
                <p style={{ margin: 0 }}><b>Biến thể cú pháp:</b> {Array.isArray(record.syntax_variants) && record.syntax_variants.length > 0 ? record.syntax_variants.join(", ") : "Không có"}</p>

              </div>

              {/*Phần riêng của loại câu hỏi MCQ */
                record.question_type == 'mcq' &&
                (
                  <div className="mcq-details">
                    <p><b>Danh sách đáp án:</b></p>
                    <ul className='mcq-details__answers-list'>
                      {record.answers?.map((ans, index) => (
                        <li key={index}>
                          {ans}
                          {record.correct_answers?.includes(ans) && (
                            <span style={{ color: 'green', fontWeight: 'bold' }}> <CheckCircleOutlined /></span>
                          )}
                        </li>
                      ))}
                    </ul>
                    <p>
                      <b>Partial credit:</b> {record.partial_credit ?? 0}
                    </p>
                  </div>
                )
              }
              {/*Phần riêng của loại câu hỏi MCQ */
                //'fn','fns','fps','pe','fss'
                ['fn', 'fns', 'fps', 'fe', 'fss'].includes(record.question_type) &&
                (
                  <p style={{ margin: 0 }}><b>Đáp án:</b> {
                    record.question_type == 'fn' ? record.correct_number :
                      record.question_type == 'fns' ? record.correct_sequence :
                        record.question_type == 'fps' ? record.correct_syntax :
                          record.question_type == 'fe' ? record.correct_expression :
                            record.correct_string
                  }</p>
                )
              }
              {/*Phần riêng của loại câu hỏi PE */
                record.question_type === "pe" && record.programming_data && (
                  <div className="programming-data" style={{ marginTop: 8 }}>
                    <p><b>Ngôn ngữ:</b> {record.programming_data.language.toUpperCase()}</p>

                    <p><b>Mã nguồn ban đầu:</b></p>
                    <pre style={{
                      backgroundColor: "#f5f5f5",
                      padding: "10px",
                      borderRadius: "4px",
                      overflowX: "auto",
                      fontFamily: "monospace"
                    }}>
                      {record.programming_data.initial_code}
                    </pre>

                    <p><b>Test Cases:</b></p>
                    <ul style={{ paddingLeft: 20 }}>
                      {record.programming_data.test_cases.map((testCase, index) => (
                        <li key={index}>
                          <div><b>Input:</b> <code>{testCase.input}</code></div>
                          <div><b>Expected Output:</b> <code>{testCase.expected_output}</code></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              {record.question_type === "mp" && Array.isArray(record.matching_pairs) && (
                <div className="matching-pairs" style={{ marginTop: 8 }}>
                  <p><b>Câu hỏi ghép cặp:</b></p>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Cột A (Thuật ngữ)</th>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Cột B (Mô tả)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {record.matching_pairs.map((pair, index) => (
                        <tr key={index}>
                          <td style={{ border: '1px solid #ccc', padding: '8px' }}>{pair.left}</td>
                          <td style={{ border: '1px solid #ccc', padding: '8px' }}>{pair.right}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}


              {/*record.question_image !== "null" && (
                <div className="ques-image">
                  <img src={record.question_image} alt="Question related" />
                </div>
              )*/}
            </div>
          ),
          rowExpandable: (record) => record.question_type !== 'Not Expandable',
        }}
        dataSource={questions} />
    </section>
  )
}
