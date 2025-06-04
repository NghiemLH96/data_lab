export interface MatrixDataType{
    key: React.Key;
    title: string;
    r_percent: number;
    u_percent: number;
    ap_percent: number;
    an_percent: number;
    ques_matrix: number[][];
    total_ques: number;
    diff_level: string;
    disc_level: string;
    question_type: string[];
    chapters: string[];
}