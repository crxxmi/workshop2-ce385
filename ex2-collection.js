const students = [
    {
        id: "S001",
        name: "สมชาย",
        major: "Computer Engineering",
        score: 85,
        contact: {
            email: "somchai@example.com",
            phone: "0811111111"
        }
    },
    {
        id: "S002",
        name: "สมหญิง",
        major: "Computer Engineering",
        score: 72,
        contact: {
            email: "somying@example.com",
            phone: "0822222222"
        }
    },
    {
        id: "S003",
        name: "มานะ",
        major: "Information Technology",
        score: 65,
        contact: {
            email: "mana@example.com",
            phone: "0833333333"
        }
    },
    {
        id: "S004",
        name: "มานี",
        major: "Information Technology",
        score: 48,
        contact: {
            email: "manee@example.com",
            phone: "0844444444"
        }
    },
    {
        id: "S005",
        name: "ปิติ",
        major: "Software Engineering",
        score: 91,
        contact: {
            email: "piti@example.com",
            phone: "0855555555"
        }
    },
    {
        id: "S006",
        name: "วิภา",
        major: "Software Engineering",
        score: 55,
        contact: {
            email: "wipa@example.com",
            phone: "0866666666"
        }
    }
];


// ค้นหานักศึกษาจาก ID
const findById = (id) => {
    return students.find((student) => student.id === id);
};

const findByMajor = (major) => {
    return students.filter((student) => student.major === major);
};

const hasFailingStudent = () => {
    return students.some((student) => student.score < 50);
};

const getEmail = (id) => {
    return students.find((student) => student.id === id)?.contact?.email
        ?? "ไม่มีอีเมล";
};

console.log("ค้นหาจาก ID:");
console.log(findById("S001"));

console.log("--------------------------------");

console.log("ค้นหาตามสาขา:");
console.log(findByMajor("Computer Engineering"));

console.log("--------------------------------");

console.log("มีนักศึกษาที่สอบตกหรือไม่:");
console.log(hasFailingStudent());

console.log("--------------------------------");

console.log("Email ของ S001:");
console.log(getEmail("S001"));

console.log("--------------------------------");

console.log("Email ของ ID ที่ไม่มีอยู่:");
console.log(getEmail("S999"));