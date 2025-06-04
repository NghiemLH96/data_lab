export interface QuestionDataType {
    key: React.Key;
    question_type: string;
    question_content: string;
    question_image?: string;
    chapter: string;
  
    // Dữ liệu chung cho các loại câu hỏi
    diff_level: number;
    disc_level: number;
    bloom_level: string;
    tolerance_range?: number; // Áp dụng cho FILL_NUMBER
    partial_credit?: number; // Áp dụng cho MULTIPLE_CHOICE nhiều đáp án, MATCHING
    synonyms?: string[]; // Áp dụng cho FILL_STRING
    syntax_variants?: string[]; // Áp dụng cho FILL_SYNTAX
  
    // Các trường riêng biệt theo loại câu hỏi:
    answers?: string[]; // MULTIPLE_CHOICE, MATCHING (cho cả cột trái/phải)
    correct_answers?: string[]; // MULTIPLE_CHOICE: ["A"], hoặc nhiều đáp án
  
    correct_number?: number; // FILL_NUMBER
    correct_sequence?: (number | string)[]; // FILL_SEQUENCE
    correct_syntax?: string; // FILL_SYNTAX
    correct_expression?: string; // FILL_EXPRESSION
    correct_string?: string; // FILL_STRING

    programming_data?: {
      initial_code: string;
      language: string;
      test_cases: {
        input: string;
        expected_output: string;
      }[];
    };
  
    matching_pairs?: {
      left: string;
      right: string;
    }[]; // MATCHING
  }
  