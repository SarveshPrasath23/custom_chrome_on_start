const displayTime = document.querySelector(".display-time");
function showTime() {
  let time = new Date();
  displayTime.innerHTML = time.toLocaleTimeString("en-us", {
    hour12: true,
  });
  setTimeout(showTime, 1000);
}
showTime();
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();
const greetings = document.querySelector("#greeting");
function getGreeting() {
  timeCondition = new Date();
  timeHours = timeCondition.getHours();
  console.log(timeHours);
  if (timeHours > 5 && timeHours < 12) {
    greetings.innerHTML = "Good Morning , Sarvesh";
  } else if (timeHours > 12 && timeHours < 18) {
    greetings.innerHTML = "Good Afternoon , Sarvesh";
  } else if (timeHours > 19 && timeHours < 24) {
    greetings.innerHTML = "Good Night , Sarvesh";
  }
}
getGreeting();
const quoteh3 = document.querySelector("#quote");
function getQuotes() {
  var myArray = [
    "Coding like poetry should be short and concise",
    "It’s not a bug; it’s an undocumented feature.",
    "First, solve the problem. Then, write the code.",
    "Code is like humor. When you have to explain it, it’s bad",
    "Make it work, make it right, make it fast.",
    "Clean code always looks like it was written by someone who cares",
    "Of course, bad code can be cleaned up. But it’s very expensive.",
    "Programming is the art of algorithm design and the craft of debugging errant code",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    "Experience is the name everyone gives to their mistakes.",
    "Confusion is part of programming.",
    "Innovation is the lifeblood of any organization.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Innovation distinguishes between a leader and a follower",
    "The biggest risk is not taking any risk.",
  ];
  const random = Math.floor(Math.random() * myArray.length);
  quoteh3.innerHTML = myArray[random];
}
getQuotes();
