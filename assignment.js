// seerToMon
function seerToMon(seer) {
  if (seer < 0) {
    return "Please Enter a positive value";
  } else if (typeof seer == "string") {
    return "Enter a positive number";
  } else {
    const mon = seer / 40;
    return mon;
  }
}

const mon = seerToMon("tow");
console.log(mon);
