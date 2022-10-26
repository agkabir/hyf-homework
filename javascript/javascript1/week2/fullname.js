// Part 1 getFullName
function getFullName(firstName, surName) {
  return firstName + " " + surName;
}

const fullName1 = getFullName("Benjamin", "Hughes");
console.log(fullName1);
const fullName2 = getFullName("Mark", "Anthony");
console.log(fullName2);

// Part 2 Formal fullname
function getFormalFullName(firstName, surName, useFormalName) {
  if (firstName != "" && surName != "") {
    if (useFormalName) return "Lord " + firstName + " " + surName;
    else return firstName + " " + surName;
  } else return "Invalid first name or last name";
}

const formalFullName1 = getFormalFullName("Benjamin", "Hughes", true);
console.log(formalFullName1);
const formalFullName2 = getFormalFullName("Benjamin", "Hughes", false);
console.log(formalFullName2);

//  Part 3 if useFormalName is not given as an argument?
function getFormalFullNameUpdated(firstName, surName, useFormalName = true) {
  if (firstName != "" && surName != "") {
    if (useFormalName) return "Lord " + firstName + " " + surName;
    else return firstName + " " + surName;
  } else return "Invalid first name or last name";
}

const formalFullNameUpdated1 = getFormalFullNameUpdated("Benjamin", "Hughes");
console.log(formalFullNameUpdated1);
const formalFullNameUpdated2 = getFormalFullNameUpdated(
  "Benjamin",
  "Hughes",
  false
);
console.log(formalFullNameUpdated2);

// To solve the gender issue we have to introduce one more parameter
// which will distinguish men and women.
