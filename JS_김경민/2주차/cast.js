// 자료형 구분

let i = 1;
let s = "1";

console.log(i + s); // 1 + "1" = "11"
console.log(s + (i+i)) // "1" + (1+1) = "12"

// (자료)형 변환
console.log(parseInt(s) + parseInt(s));
console.log(parseFloat(s) + parseFloat(s));
// parseAAA(BBB) 사용시 BB형이 AA형으로 바뀐다. (함수의 출력물로)

let pi = 3.141592 // 실수
console.log(pi);
console.log(parseInt(pi)); // 정수로 출력
console.log(pi); // pi 자체를 바꾸는게 아니라 출력물로써 내보내는 것