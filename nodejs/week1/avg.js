const cmdAargs = process.argv;
const average = (args) => {
  if (args.length < 1) {
    return "You did not typed any number(s) to calculate average";
  } else {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < args.length; i++) {
      // regular expression to check if inserted value is number or not
      if (String(args[i]).match(/^-?(\d+|\d+\.(\d+)?)$/)) {
        sum += parseFloat(args[i]);
        count += 1;
      }
    }
    if (count > 0) {
      return sum / count;
    } else {
      return "Not possible to calculate average from inserted values!!";
    }
  }
};
console.log(average(cmdAargs.slice(2)));
