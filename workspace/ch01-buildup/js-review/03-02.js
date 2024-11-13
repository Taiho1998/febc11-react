var item = { no: 1, todo: "두부", done: true };

// 1. 대입 연산자로 newItem 생성
var newItem = item;

// 2. Object.assign() 사용해서 속성 추가
// Object.assign()(target, ...source); target 객체에 source 객체의 속성을 추가하여 target을 반환
var newItem = Object.assign(item, { delete: true });
var newItem = Object.assign({}, item, { delete: true }); // 위와 다르게 새로운 메모리의 객체를 생성한다는 뜻

// 3. item의 속성으로 새로운 객체 생성
var newItem = { no: item.no, done: item.done, todo: item.todo };

// 4. 전개 연산자를 이용한 복사
var newItem = { ...item, done: false };

// newItem.done = false;
console.log(item, newItem);
console.log(item === newItem);
