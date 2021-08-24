function bestFriends(friends) {
  let longName = "";
  for (let friend of friends) {
    if (friend.length > longName.length) {
      longName = friend;
    }
  }
  return longName;
}

const friends = ["Tuhin", "Younus", "Jubaid", "Hemel", "Askander"];
var longName = bestFriends(friends);
console.log(longName);
