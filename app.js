let friendNames = [];

function addFriendNameToList(friendName) {
  const li = document.createElement("li");
  li.textContent = friendName;

  const unorderedList = document.querySelector(".name-list");
  unorderedList.appendChild(li);
}

function addFriend() {
  const input = document.querySelector(".input-name");

  const newFriendName = input.value.trim();

  if (newFriendName === "") {
    alert("The friend name can't be empty");

    return;
  }

  friendNames.push(newFriendName);

  addFriendNameToList(newFriendName);

  input.value = "";
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function cleanFriendsList() {
  friendNames = [];

  const unorderedList = document.querySelector(".name-list");
  unorderedList.replaceChildren();
}

function setResult(selectedFriendName) {
  const li = document.createElement("li");
  li.textContent = `The secret friend is: ${selectedFriendName}`;

  const unorderedList = document.querySelector(".result-list");
  unorderedList.appendChild(li);
}

function pickRandomFriend() {
  if (friendNames.length == 0) {
    alert("At least one friend name is required");

    return;
  }

  const randomIndex = getRandomInt(0, friendNames.length - 1);
  const selectedFriendName = friendNames[randomIndex];

  cleanFriendsList();
  setResult(selectedFriendName);
}
