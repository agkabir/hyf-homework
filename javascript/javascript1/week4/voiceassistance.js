let toDo = [];
let yourName = " ";
const calc = (s) => Function(`return(${s})`)();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getReply(command) {
  if (/[Hh]ello my name is/.test(command)) {
    const words = command.split(" ");
    if (yourName === " ") {
      yourName = words[words.length - 1];
      return "nice to meet you " + yourName;
    } else return "Welcome once again " + yourName;
  } else if (/[Ww]hat is my name/.test(command)) {
    if (yourName != " ") return "Your name is " + yourName;
    else return "Sorry! I do not know you. Tell me your name please!";
  } else if (/^(Add)\s?([\s\S]*?(?=\sto))\s?(to\s?my\s?todo)$/.test(command)) {
    const match = command.match(
      /^(Add)\s?([\s\S]*?(?=\sto))\s?(to\s?my\s?todo)$/
    );
    toDo.push(match[2]);
    return `${match[2]} has been added to your to do list`;
  } else if (
    /^(Remove)\s?([\s\S]*?(?=\sfrom))\s?(from\s?my\s?todo)$/.test(command)
  ) {
    const match = command.match(
      /^(Remove)\s?([\s\S]*?(?=\sfrom))\s?(from\s?my\s?todo)$/
    );
    if (toDo.includes(match[2])) {
      toDo = toDo.filter((e) => e !== match[2]);
      return `${match[2]} has been removed from your todo list`;
    } else return `${match[2]} is not in your todo list`;
  } else if (
    /^(What)\s?([\s\S]*?(?=\son))\s?(on\s?my\s?todo\?)$/.test(command)
  ) {
    if (toDo.length > 0) {
      let toDoString = `You have ${toDo.length} todos -`;
      for (let i = 0; i < toDo.length; i++) {
        toDoString = toDoString + toDo[i];
        if (i + 2 === toDo.length) toDoString = toDoString + " and ";
        else if (i + 1 != toDo.length) toDoString = toDoString + " , ";
      }
      return toDoString;
    } else return `There is nothing in your todo list`;
  } else if (/^(What)\s?([\s\S]*?(?=\sit))\s?(it\s?today\?)$/.test(command)) {
    const today = new Date();
    return `${today.getDate()}. of ${
      months[today.getMonth()]
    } ${today.getFullYear()}`;
  } else if (/[0-9.]+[\*\+\-\%\/][0-9.]+$/.test(command)) {
    const match = command.match(/[0-9.]+[\*\+\-\%\/][0-9.]+$/);
    return calc(match[0]);
  } else if (
    /^(Set)\s?([\s\S]*?(?=\s\d))\s?(\d{1,})\s([a-zA-Z]+)$/.test(command)
  ) {
    const match = command.match(
      /^(Set)\s?([\s\S]*?(?=\s\d))\s?(\d{1,})\s([a-zA-Z]+)$/
    );
    if (match[4] === "minutes") {
      setTimeout(() => {
        console.log("Timer end");
      }, Number(match[3]) * 60 * 1000);
      return `Timer set for ${match[3]} ${match[4]}`;
    } else if (match[4] === "seconds") {
      setTimeout(() => {
        console.log("Timer end");
      }, Number(match[3]) * 1000);
      return `Timer set for ${match[3]} ${match[4]}`;
    }
  } else console.log("false");
}
console.log(getReply("what is my name"));
console.log(getReply("Hello my name is kabir"));
console.log(getReply("Hello my name is kabir"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add shopping to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove singing in the shower from my todo"));
console.log(getReply("Remove singing in the shower from my todo"));
console.log(getReply("What it today?"));
console.log(getReply("What is 5.0*2.5"));
console.log(getReply("Set a timer for 30 seconds"));
