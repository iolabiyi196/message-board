const body = document.body;
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const username = document.getElementById("name");
const userMessage = document.getElementById("message");
const messagesList = document.querySelector(".messages-list");

const addMessage = (name, userMessage) => {
  if (!name.value || !userMessage.value) {
    clear.style.display = "none";
    alert("Please fill in both fields.");
    return;
  }

  clear.style.display = "block";
  const messageItem = document.createElement("li");
  messageItem.classList.add("message-item");
  messageItem.innerHTML = `<strong>${name.value}:</strong> ${userMessage.value}`;

  messagesList.appendChild(messageItem);

  name.value = "";
  userMessage.value = "";
};

const clearMessage = () => {
  messagesList.innerHTML = "";
};

submit.addEventListener("click", function (e) {
  e.preventDefault();
  addMessage(username, userMessage);
});

clear.addEventListener("click", function (e) {
  e.preventDefault();
  clear.style.display = "none";
  clearMessage();
});
