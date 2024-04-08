// for문
for(let i=1 ; i<=5 ; i++) {
    console.log("for " + i++);
}

// while 문
let j = 1;
while(j <= 5) {
    console.log("while " + j++);
}

// break 사용
let k = 1; // 전역
while(true) {
    var iii = 3; // 지역
    console.log(k + "번째 실행되고 있습니다.");
    
    if(k == 200) {
        break;
    }

    k++;
}

// = while(true) 무한 반복 끊으려면 break 로 나와야함
for(;;) {
    console.log("아아")
}
