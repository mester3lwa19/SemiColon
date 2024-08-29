const students = [
  {
    name: "Ahmed",
    score: 68,
  },
  {
    name: "Ali",
    score: 24,
  },
  {
    name: "Mariam",
    score: 85,
  },
  {
    name: "Amr",
    score: 54,
  },
  {
    name: "Sara",
    score: 99,
  },
];

// Create a function that takes the array of students and prints each student and their grade to the console.

// The grade is calculated as follows:
// If the score is less than 50, the grade is 'F'.
// If the score is between 50 and 60, the grade is 'D'.
// If the score is between 60 and 70, the grade is 'C'.
// If the score is between 70 and 80, the grade is 'B'.
// If the score is higher than 80, the grade is 'A'.

// The output for each student should look like this: "Name: -student name-, Grade: -student grade-"

// Bonus: Sort the students by their grade in descending order into a new array and print the new array to the console. (Hint: Use the sort method)

// Write your code here
let sortedArray = students.sort((a, b) => b.score - a.score);

function showStudentsGrades(students) {
  for (let student of students) {
    if (student.score < 50) console.log(`Name : ${student.name} Score : ${student.score} Grade : F`);
    else if (student.score > 50 && student.score < 60)
      console.log(`Name : ${student.name} Score : ${student.score} Grade : D`);
    else if (student.score > 60 && student.score < 70)
      console.log(`Name : ${student.name} Score : ${student.score} Grade : C`);
    else if (student.score > 70 && student.score < 80)
      console.log(`Name : ${student.name} Score : ${student.score} Grade : B`);
    else console.log(`Name : ${student.name} Score : ${student.score} Grade : A`);
  }
}

showStudentsGrades(sortedArray);
