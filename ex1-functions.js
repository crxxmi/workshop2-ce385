const isValidScore = (score) => {
    return typeof score === "number" && score >= 0 && score <= 100;
};

const toGrade = (score) => {
    if (score >= 80) return "A";
    if (score >= 75) return "B+";
    if (score >= 70) return "B";
    if (score >= 65) return "C+";
    if (score >= 60) return "C";
    if (score >= 55) return "D+";
    if (score >= 50) return "D";
    return "F";
};

const calculateWorkshopScore = (raw, full = 60, weight = 20) => {
    return (raw / full) * weight;
};

const calculateTotal = (workshop, attendance, project, midterm, final) => {
    return workshop + attendance + project + midterm + final;
};

const students = [
    {
        id: "S001",
        name: "บิวกิ้น",
        workshop: 18,
        attendance: 9,
        project: 18,
        midterm: 20,
        final: 25
    },
    {
        id: "S002",
        name: "ส้มโอ",
        workshop: 15,
        attendance: 8,
        project: 16,
        midterm: 18,
        final: 22
    },
    {
        id: "S003",
        name: "จ๋าจืด",
        workshop: 10,
        attendance: 7,
        project: 12,
        midterm: 15,
        final: 18
    }
];


console.log("ผลการคำนวณคะแนน");
console.log("--------------------------------");


students.forEach((student) => {
    const total = calculateTotal(
        student.workshop,
        student.attendance,
        student.project,
        student.midterm,
        student.final
    );

    console.log({
        id: student.id,
        name: student.name,
        total: total,
        grade: toGrade(total)
    });
});

console.log("--------------------------------");
console.log("ทดสอบ calculateWorkshopScore()");

console.log(
    "calculateWorkshopScore(48) =",
    calculateWorkshopScore(48)
);

console.log(
    "calculateWorkshopScore(48, 60, 20) =",
    calculateWorkshopScore(48, 60, 20)
);

console.log(
    "ผลเท่ากันหรือไม่ =",
    calculateWorkshopScore(48) === calculateWorkshopScore(48, 60, 20)
);

console.log(
    "calculateWorkshopScore(48, undefined, 25) =",
    calculateWorkshopScore(48, undefined, 25)
);