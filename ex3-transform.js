// Workshop 2 - ข้อ 3
// Transform ข้อมูลด้วย map / filter / reduce

const students = [
    { id: "S001", name: "มิดไนท์", score: 85 },
    { id: "S002", name: "ฮอนด้า", score: 72 },
    { id: "S003", name: "ส้มโอ", score: 65 },
    { id: "S004", name: "จ๋าจืด", score: 48 },
    { id: "S005", name: "บิวกิ้น", score: 91 },
    { id: "S006", name: "คีมมิ", score: 55 }
];


// 1. ดึงเฉพาะชื่อ
const getNames = () => {
    return students.map((student) => student.name);
};


// 2. หานักศึกษาที่สอบผ่าน
const getPassedStudents = () => {
    return students.filter((student) => student.score >= 50);
};


// 3. หาคะแนนรวม
const getTotalScore = () => {
    return students.reduce((total, student) => total + student.score, 0);
};


// 4. หาคะแนนเฉลี่ย
const getAverageScore = () => {
    const total = getTotalScore();
    return total / students.length;
};


// 5. นับจำนวนตามเกรด
const countByGrade = () => {
    return students.reduce((result, student) => {
        let grade;

        if (student.score >= 80) {
            grade = "A";
        } else if (student.score >= 75) {
            grade = "B+";
        } else if (student.score >= 70) {
            grade = "B";
        } else if (student.score >= 65) {
            grade = "C+";
        } else if (student.score >= 60) {
            grade = "C";
        } else if (student.score >= 55) {
            grade = "D+";
        } else if (student.score >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }

        result[grade] = (result[grade] ?? 0) + 1;

        return result;
    }, {});
};


// 6. หานักศึกษาที่ได้คะแนนสูงสุด
const getTopStudent = () => {
    return students.reduce((top, student) => {
        return student.score > top.score ? student : top;
    }, students[0]);
};


// ====================
// ทดสอบ
// ====================

console.log("รายชื่อนักศึกษา:");
console.log(getNames());

console.log("--------------------------------");

console.log("นักศึกษาที่สอบผ่าน:");
console.log(getPassedStudents());

console.log("--------------------------------");

console.log("คะแนนรวม:");
console.log(getTotalScore());

console.log("--------------------------------");

console.log("คะแนนเฉลี่ย:");
console.log(getAverageScore());

console.log("--------------------------------");

console.log("จำนวนตามเกรด:");
console.log(countByGrade());

console.log("--------------------------------");

console.log("นักศึกษาที่ได้คะแนนสูงสุด:");
console.log(getTopStudent());