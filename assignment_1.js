// https://github.com/Abu-Sid/assignment-js-1

/*Kilometer To Meter Conversion Function*/
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "Distance Cannot be Negative"; // error massage, if input is negative
  }
  var meter = 1000 * kilometer;
  return meter;
}

/*Budget Calculator Function*/
function budgetCalculator(a, b, c) {
  var watch = 50;
  var mobile = 100;
  var laptop = 500;
  if (arguments.length == 3) {
    return (totalBudget = watch * a + mobile * b + laptop * c);
  }
  return "Please input three arguments";
}

/*Hotel Cost Function*/
function hotelCost(day) {
  var cost = 0;
  if (day < 1) {
    return "Please select minimum 1 day,Thank you"; // error massage,if input 0 or less
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

/*Longest Name Function*/
function megaFriend(name) {
  var longestName = ""; //Initial comparison value
  for (var i = 0; i < name.length; i++) {
    if (name[i].length > longestName.length) {
      longestName = name[i]; //output: Longest Name
    }
  }
  if (longestName == 0) {
    return "Input is invalid"; // error massage,if input is an empty String/Number
  }
  return longestName;
}
