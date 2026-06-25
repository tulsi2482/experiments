function calculate() {
    let n = document.getElementById("subjects").value;
    let total = 0;

    if (n <= 0 || isNaN(n)) {
        alert("Enter valid number of subjects");
        return;
    }

    for (let i = 1; i <= n; i++) {
        let marks = prompt("Enter marks for subject " + i + ":");
        marks = Number(marks);

        if (marks < 0 || marks > 100 || isNaN(marks)) {
            alert("Invalid marks! Enter between 0-100");
            return;
        }

        total += marks;
    }

    let average = total / n;
    let grade = "";
    let resultStatus = "";

    // Grade Calculation
    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "F";

    // Pass/Fail
    if (average >= 50) resultStatus = "Pass";
    else resultStatus = "Fail";

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + resultStatus;
}