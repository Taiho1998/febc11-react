function sayHello(strings, ...values) {
  console.log(strings);
  console.log(values);
  var msg = "";
  for (let i = 0; i < strings.length; i++) {
    msg += strings[i];
    values[i] ? (msg += "<strong>" + values[i] + "</strong>") : null;
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
