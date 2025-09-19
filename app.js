let friends = [];

function addFriend() {
  const input = document.querySelector(".input-name");

  const newFriendName = input.value.trim();

  if (newFriendName === "") {
    alert("The friend name can't be empty");

    return;
  }

  friends.push(newFriendName);
  input.value = "";
}
