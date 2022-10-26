function getEventeekday(inDays) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // getting todays day from system
  const todays = new Date().getDay();
  const idx = (todays + inDays) % weekDays.length;
  return weekDays[idx];
}

console.log(getEventeekday(9));
