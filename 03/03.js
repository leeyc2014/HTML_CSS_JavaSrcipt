// 기존 방식
// function Hello(n) {
//     if(n =='1') alert("안녕하세요");
//     else alert('반갑습니다');

//     console.log('콘솔출력입니다.');
// }

// 화살표 함수
const Hello = (n) => {
    if (n == '1') alert("안녕하세요"); // 부등호 2개(==)는 타입 자동 변환, 3개(===)는 변환X
    else alert('반갑습니다');

    console.log('콘솔출력입니다.');
}
const CheckVar = () => {
    // x = 10;
    
    let x;
    x = 'test';

    const y = '20';
    // y = 40;
    //onsole.log('x =' + x);
    console.log(`x = ${typeof(x)}, y = ${typeof(y)}`);
    console.log(`문자열 ${x}은 문자인가요? ${isNaN(x)?'예':'아니요'}`);
    console.log(`문자열 ${y}은 문자인가요? ${isNaN(y)?'예':'아니요'}`);
}