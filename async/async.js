const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const loader = document.getElementById("loader");
let viewUser = [];

async function getUser() {
  try {
    const response = await fetch("./user.json");
    await delay(3000);
    const users = await response.json();
    localStorage.setItem("users", JSON.stringify(users));
    return users;
  } catch (error) {
    console.log("Ошибка загрузки");
  }
}

const userTemplate = document.getElementById("user-template");
const userList = document.getElementById("user-list");

function showUsers(saveUsers) {
  saveUsers.forEach((user) => {
    const userClone = userTemplate.content.cloneNode(true);
    const userContainer = userClone.querySelector(".user-container");
    userContainer.dataset.id = user.id;
    userClone.querySelector(".id").textContent = user.id;
    userClone.querySelector(".name").textContent = user.name;
    userClone.querySelector(".surname").textContent = user.surname;
    userClone.querySelector(".email").textContent = user.email;
    userClone.querySelector(".age").textContent = user.age;
    userList.appendChild(userClone);
  });
}

async function initUsers() {
    try {
  const value = await checkData();
  showUsers(value);
  return value;
    } finally {
      loader.classList.add("hidden");
    }
}

viewUser = await initUsers();

const deleteAllUsers = document.querySelector("#delete-all-cards");
deleteAllUsers.addEventListener("click", () => {
  localStorage.setItem("users", JSON.stringify([]));
  viewUser = [];
  userList.innerHTML = "";
});

async function checkData() {
  const savedUsers = localStorage.getItem("users");
  if (savedUsers && JSON.parse(savedUsers).length > 0) {
    await delay(500);
    loader.classList.add("hidden");
    return JSON.parse(savedUsers);
  } else {
    const users = await getUser();
    localStorage.setItem("users", JSON.stringify(users));
    loader.classList.add("hidden");
    return users;
  }
}

const getAllUsers = document.querySelector("#get-all-cards");
getAllUsers.addEventListener("click", async () => {
  const originalUsers = await getUser();
  const missingUsers = originalUsers.filter((originalUser) => {
    const isAlreadyOnScreen = viewUser.find(
      (u) => String(u.id) === String(originalUser.id),
    );
    return !isAlreadyOnScreen;
  });
  if (missingUsers.length > 0) {
    showUsers(missingUsers);
    viewUser = [...viewUser, ...missingUsers];
  } else {
    console.log("все карточки уже загружены");
  }
});

userList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    const user = event.target.closest(".user-container");
    const id = user.dataset.id;
    viewUser = viewUser.filter((user) => String(user.id) !== String(id));
    localStorage.setItem("users", JSON.stringify(viewUser));
    user.remove();
  }
});
