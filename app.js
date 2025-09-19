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
