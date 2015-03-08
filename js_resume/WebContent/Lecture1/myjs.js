//예제1

$("#sub").append("yourName");
// string.replace(old, new);

var email = "younghee@hanmail.net";
var newEmail = email.replace("hanmail", "naver");

console.log(email);
console.log(newEmail);

// 예제 2

var sCan = "wecanDoIt";

var youPlus = function() {
	// 지금은 변수 값이 === "wecanDoIt"
	// 아래 줄부터 sCan 의 값을 "CanDoIt" 이렇게 변경해 보세요.
	// console.log(sCan);
	sCan = sCan.slice(3, 9);
	sCan = "C" + sCan;
	// or ---> s = s[2].toUpperCase() + s.slice(2);
	console.log(sCan);
	return sCan;
};
youPlus();

// 예제 3

var niceFriend = "You are beautiful and I am handsome!";
var goodFriend = niceFriend.replace("handsome", "kind");
// console.log(goodFriend);

$("#main").append(goodFriend);
