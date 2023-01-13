let savedScreenshots = [];
let loggedIn = false;
let createdUsersList = [];
//
const urlEl = document.getElementById("url");
const btnCreateScreenshotEl = document.getElementById("btnCreateScreenshot");
const displaySavedScreenshot = document.getElementById("screenshot-container");

// settings for API's
const BASE_URL = `https://crudcrud.com/api/${API_KEY}`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": XRapidAPIKey,
    "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
  },
};
// function for creating div to display created screenshot
const createDisplayScreenshotDiv = (savedScreenshot) => {
  return `<div class="screenshot-post">
                <img class="blog-post-img" src=${savedScreenshot.imageUrl}>
                <button onclick="handleDeleteScreenshot('${savedScreenshot._id}')" class="button">Delete</button>
            </div>`;
};

// API call for accessing all saved screenshot
const getSavedScreenshot = async () => {
  const response = await fetch(`${BASE_URL}/blog`);
  const data = await response.json();
  savedScreenshots = data;
  displaySavedScreenshot.innerHTML = "";
  data.forEach((element) => {
    displaySavedScreenshot.innerHTML += createDisplayScreenshotDiv(element);
  });
};

// Function to save created screenshot at crudcrud
const handleSaveScreenshot = async (data) => {
  //console.log(data);
  const body = {
    imageUrl: data.screenshotUrl,
    userEmail: loginEmail.value,
  };
  try {
    const response = await fetch(`${BASE_URL}/blog`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const postedScreenshot = await response.json();
    savedScreenshots.push(postedScreenshot);
    displaySavedScreenshot.innerHTML +=
      createDisplayScreenshotDiv(postedScreenshot);
  } catch (error) {
    return error.message;
  }
};

// function to delete a screenshot
const handleDeleteScreenshot = async (screenshotId) => {
  await fetch(`${BASE_URL}/blog/${screenshotId}`, {
    method: "DELETE",
  });

  savedScreenshots = savedScreenshots.filter((savedScreenshot) => {
    if (savedScreenshot._id !== screenshotId) {
      return savedScreenshot;
    }
  });

  displaySavedScreenshot.innerHTML = "";

  savedScreenshots.forEach((savedScreenshot) => {
    displaySavedScreenshot.innerHTML +=
      createDisplayScreenshotDiv(savedScreenshot);
  });
};

// function to create and save screenshot
const createAndSaveScreenshot = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(
      `https://website-screenshot6.p.rapidapi.com/screenshot?url=${urlEl.value}&width=400&height=400&fullscreen=false`,
      options
    );
    if (response.status !== 200) {
      return `something went wrong ${response.status.toString()}!`;
    }
    const data = await response.json();
    await handleSaveScreenshot(data);
  } catch (error) {
    return error.message;
  }
};
// function call for displaying all created and saved screenshot
getSavedScreenshot();
btnCreateScreenshotEl.addEventListener("click", (event) =>
  createAndSaveScreenshot(event)
);

// extra part
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const btnCreateUser = document.getElementById("createUser");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const btnloginUser = document.getElementById("loginUser");
const btnlogoutUser = document.getElementById("logoutUser");
const displayUsers = document.getElementById("displayUsers");

const createDisplayUsersDiv = (createdUser) => {
  return `<div>
                <p> User email: ${createdUser.email}</p>
                <p> Password: ${createdUser.password}</p>
            </div>`;
};

const handleCreateUsers = async (event) => {
  event.preventDefault();

  const body = {
    email: userEmail.value,
    password: userPassword.value,
  };

  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  createdUsersList.push(data);
  displayUsers.innerHTML += createDisplayUsersDiv(data);
};

const getCreatedUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  createdUsersList = data;
  data.forEach((element) => {
    displayUsers.innerHTML += createDisplayUsersDiv(element);
  });
};
getCreatedUsers();
btnCreateUser.addEventListener("click", (event) => handleCreateUsers(event));

// loged in check
const handleLogedInUser = () => {
  const logEmail = loginEmail.value;
  const logPassword = loginPassword.value;
  //console.log("password", logPassword);

  if (logEmail !== "" && logPassword !== "") {
    createdUsersList.forEach((user) => {
      if (user.email === logEmail && user.password === logPassword) {
        loggedIn = true;
        //console.log("password", loggedIn);
      }
    });
  }
  if (loggedIn) {
    document.getElementById("loginDiv").style.display = "none";
    document.getElementById("legendLoginUser").innerHTML = "LoggedIn User";
    document.getElementById("logoutDiv").style.display = "block";
    document.getElementById("welcomeDiv").innerHTML = `Welcome ${logEmail}`;
    document.getElementById("screenshotDiv").style.display = "block";

    savedScreenshots = savedScreenshots.filter((savedScreenshot) => {
      if (savedScreenshot.userEmail === logEmail) {
        return savedScreenshot;
      }
    });
    displaySavedScreenshot.innerHTML = "";
    savedScreenshots.forEach((savedScreenshot) => {
      displaySavedScreenshot.innerHTML +=
        createDisplayScreenshotDiv(savedScreenshot);
    });
  }
};

const handleLogedOutUser = () => {
  loggedIn = false;
  document.getElementById("legendLoginUser").innerHTML = "User Login";
  document.getElementById("logoutDiv").style.display = "none";
  document.getElementById("screenshotDiv").style.display = "none";
  document.getElementById("loginDiv").style.display = "block";
  getSavedScreenshot();
};

btnloginUser.addEventListener("click", handleLogedInUser);
btnlogoutUser.addEventListener("click", handleLogedOutUser);
