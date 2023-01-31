const arguments = process.argv;
const average = (args) => {
  if (args.length < 1) {
    return "You did not typed any number(s) to calculate average";
  } else {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      // regular expression to check if inserted value is number or not
      if (args[i].match(/^-?(\d+|\d+\.(\d+)?)$/)) {
        sum += parseFloat(args[i]);
      } else {
        return "Please insert only numeric values!!";
      }
    }
    return sum / args.length;
  }
};
console.log(average(arguments.slice(2)));
