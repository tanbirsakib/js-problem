function feetToInch(feet) {
  if (feet > 0) {
    var inch = feet * 12;
    return inch;
  } else {
    return "Please Enter Positive value.";
  }
}

var inch = feetToInch(3);
console.log(inch);
