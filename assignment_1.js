function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    // error massage, if input is negative
    return "Distance Cannot be Negative";
  }
  var meter = 1000 * kilometer;
  return meter;
}
var result = kilometerToMeter(0);
// console.log(result);

function budgetCalculator(a, b, c) {
  var watch = 50;
  var mobile = 100;
  var laptop = 500;

  return (totalBudget = watch * a + mobile * b + laptop * c);
}

console.log(budgetCalculator(1, 1, 1, 33));

function hotelCost(day) {
  var cost = 0;
  if (day < 1) {
    // error massage,if input 0 or less
    return "Please select minimum 1 day,Thank you";
  } else if (day <= 10) {
    cost = day * 100;
  } else if (day <= 20) {
    previousDay = 10 * 100; //First 10 days cost
    remainingDay = day - 10; //No. of days after first 10 days
    cost = previousDay + remainingDay * 80;
  } else if (day > 20) {
    previousDay = 10 * 100 + 10 * 80; // First 20 days cost
    remainingDay = day - 20; //No. of days after first 20 days
    cost = previousDay + remainingDay * 50;
  }
  return cost;
}
var totalCost = hotelCost(20);
// console.log(totalCost);

function megaFriend(name) {
  var longestName = ""; //Initial comparison value
  for (var i = 0; i < name.length; i++) {
    if (name[i].length > longestName.length) {
      longestName = name[i]; //output:maximum length of name
    }
  }
  if (longestName == "") {
    return "There is no Name"; // error massage,if input is an empty String/Array
  }
  return longestName;
}
// console.log(megaFriend(['']));
