function getFormalFullName(firstName, surName, sex, useFormalName = true) {
  if (
    !/\s/g.test(firstName) &&
    firstName != "" &&
    !/\s/g.test(surName) &&
    surName != ""
  ) {
    if (useFormalName && sex === "Male")
      return "Lord " + firstName + " " + surName;
    else if (useFormalName && sex === "Female")
      return "Lady " + firstName + " " + surName;
    else return firstName + " " + surName;
  } else return "Invalid first name or last name";
}

const formalFullName1 = getFormalFullName(" ", " ", "Male");
console.log(formalFullName1);

const formalFullName2 = getFormalFullName("Katrina", "Hughes", "Female");
console.log(formalFullName2);

const formalFullName3 = getFormalFullName("Katrina", "Hughes", "Female", false);
console.log(formalFullName3);
