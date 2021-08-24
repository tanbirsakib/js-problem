function centimeterToMeter(centimeter) {
  if (centimeter > 0) {
    var meter = centimeter / 100;
    return meter;
  } else {
    return "Please enter positive value.";
  }
}

var meter = centimeterToMeter(4);
console.log(meter, "meter.");
