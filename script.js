const students = [
    {
        name: "Rahul Sharma",
        course: "CSE",
        year: "3rd Year",
        cgpa: 8.5
    },
    {
        name: "Priya Singh",
        course: "BCA",
        year: "2nd Year",
        cgpa: 9.1
    }
];

function showTopper() {
    let topper = students[0];

    for (let i = 1; i < students.length; i++) {
        if (students[i].cgpa > topper.cgpa) {
            topper = students[i];
        }
    }

    document.getElementById("result").innerHTML =
        `Topper: ${topper.name} | Course: ${topper.course} | CGPA: ${topper.cgpa}`;
}