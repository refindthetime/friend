function Friend() {

    if (!(this instanceof Friend)) {
        return new Friend();
    }
}

Friend.prototype.friends = [
    {
        name: "Test1",
        photo: "http://www.earthskids.com/images/small-earth-whiteback.jpg",
        scores: ["1","1","1","1","1","1","1","1","1","1"]
    },
    {
        name: "Test3",
        photo: "http://www.earthskids.com/images/small-earth-whiteback.jpg",
        scores: ["3","3","3","3","3","3","3","3","3","3"]
    },
    {
        name: "Test5",
        photo: "http://www.earthskids.com/images/small-earth-whiteback.jpg",
        scores: ["5","5","5","5","5","5","5","5","5","5"]
    }
];

Friend.prototype.getBestMatch = function (newFriend) {
    var newFriendSum = newFriend.scores.reduce(getSum,0);
    var friendsArray = [];

    // use Friend.prototype.friends - 1 to exclude newFriend value
    for(var i = 0; i < Friend.prototype.friends.length - 1; i++){
       var sum = Friend.prototype.friends[i].scores.reduce(getSum,0);
       friendsArray.push(Math.abs(sum - newFriendSum));
    }

    var minDiff = Math.min.apply(null, friendsArray);
    var bestMatchIndex = friendsArray.indexOf(minDiff);

    return Friend.prototype.friends[bestMatchIndex];
}

function getSum(total, num) {
    return parseInt(total) + parseInt(num);
}

module.exports = Friend;