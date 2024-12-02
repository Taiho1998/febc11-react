function sayHello(strings, ...values) {
  console.log(strings);
  console.log(values);
  var msg = "";
  for (let i = 0; i < strings.length; i++) {
    const value = values[i] ? `<strong>${values[i]}</strong>` : "";
    msg += strings[i] + value;
  }
  return msg;
}

const result = sayHello(
  ["안녕하세요. ", "님. 오늘 날씨는 ", " 입니다."],
  "무지",
  "맑음"
);
console.log(result);

const result2 = sayHello(
  ["안녕하세요. ", "님. 오늘 날씨는 ", " 입니다. 즐거운 ", " 보내세요"],
  "데이지",
  "흐림",
  "하루"
);
console.log(result2);

const userName = "무지";
const weather = "맑음";
const str = `안녕하세요 ${userName}님. 오늘 날씨는 ${weather}입니다.`;
const result3 = sayHello(
  ["안녕하세요. ", "님. 오늘 날씨는 ", " 입니다."],
  userName,
  weather
);
const result4 = sayHello`안녕하세요. ${userName} 님. 오늘 날씨는 ${weather} 입니다.`;
console.log("result4", result4);
