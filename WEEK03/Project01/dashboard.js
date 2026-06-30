function calculateResult() {

    let marks = [];
    let credits = [];

    for (let i = 1; i <= 6; i++) {

        marks.push(
            Number(document.getElementById(`sub${i}`).value)
        );

        credits.push(
            Number(document.getElementById(`sub${i}Credit`).value)
        );
    }


    let totalCredits = 0;
    let weightedMarks = 0;

    for (let i = 0; i < 6; i++) {

        if (marks[i] < 0 || marks[i] > 100 || isNaN(marks[i])) {
            alert("Marks should be between 0 and 100");
            return;
        }

        if (credits[i] <= 0 || isNaN(credits[i])) {
            alert("Invalid credits");
            return;
        }

        weightedMarks += marks[i] * credits[i];
        totalCredits += credits[i];
    }

    // ===============================
    // CGPA Calculation
    // ===============================

    let cgpa = 0;

    if (totalCredits > 0) {
        cgpa = weightedMarks / (totalCredits * 100) * 10;
    }

    // ===============================
    // Show Result
    // ===============================

    document.getElementById("resultBox").innerHTML = `
        <h2>Result</h2>

        <h3>Total Credits: ${totalCredits}</h3>
        <h3>CGPA: ${cgpa.toFixed(2)}</h3>
    `;
}