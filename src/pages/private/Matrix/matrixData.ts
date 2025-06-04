import type { MatrixDataType } from "../../../types/matrix";

export const data: MatrixDataType[] = [
    {
        key: 1,
        title: "Kiểm tra giữa kì 1",
        r_percent: 50,
        u_percent: 30,
        ap_percent: 10,
        an_percent: 10,
        total_ques: 30,
        ques_matrix: [
            [8, 7, 0, 0, 0, 0],  // R
            [5, 4, 0, 0, 0, 0],  // U
            [2, 1, 0, 0, 0, 0],  // AP
            [2, 1, 0, 0, 0, 0],  // AN
        ],
        diff_level: "Level 1 (Easy)",
        disc_level: "0.2 ≤ d ≤ 1",
        question_type: ["MCQ", "FSS", "MP"],
        chapters: ["C1", "C2"],
    },
    {
        key: 2,
        title: "Kiểm tra giữa kì 2",
        r_percent: 40,
        u_percent: 30,
        ap_percent: 20,
        an_percent: 10,
        ques_matrix: [
            [6, 6, 0, 0, 0, 0],  // R
            [5, 4, 0, 0, 0, 0],  // U
            [3, 3, 0, 0, 0, 0],  // AP
            [2, 1, 0, 0, 0, 0],  // AN
        ],
        total_ques: 30,
        diff_level: "Level 2 (Moderate)",
        disc_level: "0.2 ≤ d ≤ 1",
        question_type: ["MCQ", "FN", "MP"],
        chapters: ["C1", "C2"],
    },
    {
        key: 3,
        title: "Kiểm tra cuối kì 1",
        r_percent: 30,
        u_percent: 40,
        ap_percent: 20,
        an_percent: 10,
        ques_matrix: [
            [3, 3, 3, 0, 0, 0],  // R
            [5, 4, 3, 0, 0, 0],  // U
            [3, 2, 1, 0, 0, 0],  // AP
            [2, 1, 0, 0, 0, 0],  // AN
        ],
        total_ques: 30,
        diff_level: "Level 3 (Medium)",
        disc_level: "0.2 ≤ d ≤ 1",
        question_type: ["FN", "FPS", "FNS", "PE"],
        chapters: ["C2", "C3", "C4"],
    },
    {
        key: 4,
        title: "Kiểm tra cuối kì 2",
        r_percent: 20,
        u_percent: 30,
        ap_percent: 30,
        an_percent: 20,
        ques_matrix: [
            [2, 2, 2, 2, 0, 0],  // R
            [3, 3, 2, 1, 0, 0],  // U
            [3, 3, 3, 3, 0, 0],  // AP
            [3, 2, 2, 1, 0, 0],  // AN
        ],
        total_ques: 30,
        diff_level: "Level 4 (Difficult)",
        disc_level: "0.2 ≤ d ≤ 1",
        question_type: ["FN", "FPS", "PE", "FE"],
        chapters: ["C2", "C3", "C4", "C5"],
    },
    {
        key: 5,
        title: "Kiểm tra kết thúc học phần 1",
        r_percent: 10,
        u_percent: 20,
        ap_percent: 30,
        an_percent: 40,
        ques_matrix: [
            [1, 1, 1, 1, 0, 0],  // R
            [2, 2, 2, 0, 0, 0],  // U
            [3, 3, 3, 3, 0, 0],  // AP
            [4, 4, 3, 3, 1, 1],  // AN
        ],
        total_ques: 30,
        diff_level: "Level 5 (Very Difficult)",
        disc_level: "0.2 ≤ d ≤ 1",
        question_type: ["FN", "PE", "MP", "FE"],
        chapters: ["C2", "C3", "C4", "C5"],
    },
    {
        key: 6,
        title: "Kiểm tra kết thúc học phần 2",
        r_percent: 5,
        u_percent: 15,
        ap_percent: 30,
        an_percent: 50,
        ques_matrix: [
            [1, 0, 0, 0, 0, 0],  // R
            [2, 2, 1, 0, 0, 0],  // U
            [3, 3, 3, 3, 0, 0],  // AP
            [5, 4, 4, 3, 2, 2],  // AN
        ],
        total_ques: 30,
        diff_level: "Level 6 (Advance)",
        disc_level: "0.3 ≤ d ≤ 1",
        question_type: ["FN", "PE", "FPS", "MP"],
        chapters: ["C2", "C3", "C4", "C5"],
    },
    {
        key: 7,
        title: "Kiểm tra kết thúc học phần 3",
        r_percent: 0,
        u_percent: 10,
        ap_percent: 30,
        an_percent: 60,
        ques_matrix: [
            [0, 0, 0, 0, 0, 0],  // R
            [2, 2, 1, 1, 0, 0],  // U
            [3, 3, 3, 3, 3, 3],  // AP
            [6, 6, 6, 1, 1, 1],  // AN
        ],
        total_ques: 30,
        diff_level: "Level 7 (Expert)",
        disc_level: "0.4 ≤ d ≤ 1",
        question_type: ["FN", "PE", "FPS", "FE"],
        chapters: ["C1", "C2", "C3", "C4", "C5", "C6"],
    },
];