import axios from 'axios';

// Kiểu dữ liệu thô từ API
export interface RawQuestion {
  id: number;
  type: string;
  content: string;
  image: string | null;
  ans: string;
  correctAns: string;
  cloId: number;
  diffLevel: number;
  discLevel: number;
  bloomLevel: string;
  toleranceRange: number;
  partialCredit: number | null;
  synonyms: string[] | null;
  syntaxVariants: string[] | null;
  formatVariants?: any;
  testcases?: any;
}

// Kiểu dữ liệu sau khi xử lý
export interface TransformedQuestion {
  key: number;
  question_type: string;
  question_content: string;
  question_image: string;
  chapter: string;
  answers: string[];
  correct_answers: string[];
  diff_level: number;
  disc_level: number;
  bloom_level: string;
  tolerance_range: number;
  partial_credit: number;
  synonyms: string[];
  syntax_variants: string[];
}

const API_URL = 'http://localhost:8080/api/questions';

const mapCloIdToChapter = (cloId: number): string => {
  const chapters: Record<number, string> = {
    1: "Tổng quan",
    2: "Tìm kiếm và Sắp xếp",
    3: "Danh sách liên kết",
    4: "Ngăn xếp và Hàng chờ",
    5: "Cây",
    6: "Bảng băm"
  };
  return chapters[cloId] || "Chương không xác định";
};

const transformQuestionData = (rawData: RawQuestion[]): TransformedQuestion[] => {
  return rawData.map((item, index) => ({
    key: index + 1,
    question_type: item.type,
    question_content: item.content,
    question_image: item.image || "null",
    chapter: mapCloIdToChapter(item.cloId),
    answers: JSON.parse(item.ans),
    correct_answers: [item.correctAns],
    diff_level: Math.round(item.diffLevel * 4),
    disc_level: item.discLevel,
    bloom_level: item.bloomLevel?.toUpperCase() || "",
    tolerance_range: item.toleranceRange ?? 0,
    partial_credit: item.partialCredit ?? 0,
    synonyms: item.synonyms ?? [],
    syntax_variants: item.syntaxVariants ?? [],
  }));
};

const QuestionService = {
  async fetchQuestions(): Promise<TransformedQuestion[]> {
    try {
      const response = await axios.get<RawQuestion[]>(API_URL);
      return transformQuestionData(response.data);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      throw error;
    }
  }
};

export default QuestionService;
