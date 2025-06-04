import { Button, Col, Row, Space, Table, type TableColumnsType } from 'antd';
import './question_manager.scss'
import type { QuestionDataType } from '../../../types/questions';
import { useState } from 'react';
import Add_ques_form from './components/add_ques_form/Add_ques_form';
import { CheckCircleOutlined, CheckOutlined } from '@ant-design/icons';
export default function Questions_manager() {
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

  const data: QuestionDataType[] = [
    {
      key: 1,
      question_type: "mcq",
      question_content: "Trong các thuật toán sau, thuật toán nào có độ phức tạp thời gian tốt nhất trong trường hợp trung bình?",
      question_image: "null",
      chapter: "Tổng quan",
      answers: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
      correct_answers: ["Merge Sort"],
      diff_level: 2,
      disc_level: 0.5,
      bloom_level: "U",
      tolerance_range: 0,
      partial_credit: 0,
      synonyms: [],
      syntax_variants: []
    },
    {
      key: 2,
      question_type: "fn",
      question_content: "Thuật toán tìm kiếm nhị phân có độ phức tạp thời gian là bao nhiêu (log2 làm cơ số)?",
      question_image: "null",
      chapter: "Tìm kiếm và sắp xếp",
      answers: [],
      correct_answers: [],
      correct_number: 0.3, // bạn có thể tùy chỉnh hiển thị là log2(n)
      diff_level: 2,
      disc_level: 0.4,
      bloom_level: "U",
      tolerance_range: 0.01,
      partial_credit: 0,
      synonyms: [],
      syntax_variants: []
    },
    {
      key: 3,
      question_type: "fns",
      question_content: "Nhập vào 5 phần tử đầu tiên của dãy Fibonacci.",
      question_image: "null",
      chapter: "Tổng quan",
      answers: [],
      correct_answers: [],
      correct_sequence: [0, 1, 1, 2, 3],
      diff_level: 2,
      disc_level: 0.4,
      bloom_level: "U",
      tolerance_range: 0,
      partial_credit: 1,
      synonyms: [],
      syntax_variants: []
    },
    {
      key: 4,
      question_type: "fps",
      question_content: "Điền cú pháp khai báo một nút trong danh sách liên kết đơn bằng C++.",
      question_image: "null",
      chapter: "Danh sách liên kết",
      answers: [],
      correct_answers: [],
      correct_syntax: "struct Node { int data; Node* next; };",
      syntax_variants: [
        "struct Node { int data; Node *next; };",
        "typedef struct Node { int data; Node* next; } Node;"
      ],
      diff_level: 3,
      disc_level: 0.5,
      bloom_level: "U",
      tolerance_range: 0,
      partial_credit: 0,
      synonyms: []
    },
    {
      key: 5,
      question_type: "fe",
      question_content: "Viết biểu thức tính chiều cao của cây nhị phân tính từ nút gốc (node).",
      question_image: "null",
      chapter: "Cây",
      answers: [],
      correct_answers: [],
      correct_expression: "1 + max(height(node->left), height(node->right))",
      syntax_variants: ["max(height(node->left), height(node->right)) + 1"],
      diff_level: 3,
      disc_level: 0.6,
      bloom_level: "A",
      tolerance_range: 0,
      partial_credit: 0,
      synonyms: []
    },
    {
      key: 6,
      question_type: "fss",
      question_content: "Từ khóa nào được dùng để khai báo một hằng số trong C++?",
      question_image: "null",
      chapter: "Tổng quan",
      answers: [],
      correct_answers: [],
      correct_string: "const",
      synonyms: ["CONST"],
      syntax_variants: [],
      diff_level: 1,
      disc_level: 0.2,
      bloom_level: "R",
      tolerance_range: 0,
      partial_credit: 0
    },
    {
      key: 7,
      question_type: "pe",
      question_content: "Viết hàm C++ để đảo ngược một hàng đợi (queue) sử dụng ngăn xếp (stack).",
      question_image: "null",
      chapter: "Hàng chờ và ngăn xếp",
      answers: [],
      correct_answers: [],
      programming_data: {
        initial_code: `#include <iostream>
  #include <queue>
  #include <stack>
  using namespace std;
  
  void reverseQueue(queue<int> &q) {
    // Viết mã ở đây
  }`,
        language: "cpp",
        test_cases: [
          { input: "queue = [1, 2, 3]", expected_output: "[3, 2, 1]" },
          { input: "queue = [5, 10]", expected_output: "[10, 5]" }
        ]
      },
      diff_level: 4,
      disc_level: 0.7,
      bloom_level: "C",
      tolerance_range: 0,
      partial_credit: 1,
      synonyms: [],
      syntax_variants: []
    },
    {
      key: 8,
      question_type: "mp",
      question_content: "Ghép cặp các cấu trúc dữ liệu với độ phức tạp tra cứu trung bình.",
      question_image: "null",
      chapter: "Bảng băm",
      answers: ["Array", "Linked List", "Hash Table", "Binary Search Tree"],
      correct_answers: [],
      matching_pairs: [
        { left: "Array", right: "O(1)" },
        { left: "Linked List", right: "O(n)" },
        { left: "Hash Table", right: "O(1)" },
        { left: "Binary Search Tree", right: "O(log n)" }
      ],
      diff_level: 3,
      disc_level: 0.6,
      bloom_level: "U",
      tolerance_range: 0,
      partial_credit: 1,
      synonyms: [],
      syntax_variants: []
    }
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
        dataSource={data} />
    </section>
  )
}
