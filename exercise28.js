// exercise 28 JS

function passExam() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const grade = 55;

      if (grade >= 60) {
        resolve("You passed the exam");
      } else {
        reject("You failed the exam");
      }
    }, 2000);
  });
}

// passExam()

// .then((pass) => console.log(pass))
// .catch((fail) => console.log(fail))

// as async and await

async function displayStudentGrade() {
  try {
    const studentGrade = await passExam();
    console.log(studentGrade);
  } catch (fail) {
    console.log(fail);
  }
}

displayStudentGrade();
