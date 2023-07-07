const dob = document.getElementById("dob");
const age = document.getElementById("age");
let selectedDOB, currentAge;

dob.addEventListener("change", () => {
  const today = new Date();
  selectedDOB = new Date(dob.value);
  const cy = today.getFullYear();
  const sy = selectedDOB.getFullYear();

  const cm = today.getMonth();
  const sm = selectedDOB.getMonth();
  let yy = cy - sy;
  let mm = cm - sm;
  if (mm < 0) {
    yy--;
    mm = 12 + mm;
  }
  currentAge = `${yy} years ${mm} month old`;
  age.innerHTML = `${yy} years ${mm} month old`;
});
