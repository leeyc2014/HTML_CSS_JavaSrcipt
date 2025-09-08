//리터럴 표기법
let arr1 = [1,2,3];

//Array 생성자를 이용
let arr2 = new Array(1,2,3);

//배열의 크기
console.log(arr1);
console.log(`arr1 = ${arr1}`);
console.log(`arr1의 요소개수 : ${arr1.length}`);

//배열요소 제거
console.log(arr2);
// arr2 = [];
arr2.length = 0;
console.log(arr2);

//배열요소 추가
console.log(arr1);
arr1.push('가');
console.log(arr1);
let arr1pop = arr1.pop();
console.log(arr1, typeof(arr1));
console.log(arr1pop);

//배열의 순회
//1.
for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

//2.index값 가져오기
for(let i in arr1) {
    console.log(arr1[i]);
}

//3. value값 가져오기
for(let item of arr1) {
    console.log(item);
}

//4. foreach 메소드
arr1.forEach((item, i) => {
    console.log(item, i);
});

//배열 map 메소드
const arr3 = arr1.map((item) => {
    return item*2;
});
console.log(arr3);

/*onst arr3 = arr1.map(item => item*2);     //콜백함수는 파라미터가 1개이면 () 생략 가능
console.log(arr3); */                       //return 문만 있으면 {}와 return 생략 가능

//콜백함수는 파라미터가 2개가 되면 인덱스를 가져옴
const arr4 = arr1.map((item, i) => {
    return item*i;
});
console.log(arr4);

//filter
const arr5 = arr1.filter(item => item % 2 == 0);
console.log(arr5);

//map 함수
let arr6 = [];
for(let c of arr1) {
    arr6.push(c*2);
}
console.log(arr6);

//fileter 함수
let arr7 = [];
for(let c of arr1) {
    if(c % 2 == 0) arr7.push(c);
}
console.log(arr7);

//concat 함수
const arr8 = arr6.concat(arr7);
console.log('concat 함수');
console.log(arr8);

//전개연산자
const arr10 = [...arr6, ...arr7];
console.log('전개연산자');
console.log(arr10);

//join 함수
const s = arr8.join('-');
console.log('join 함수');
console.log(s);
s1 = arr8.join('');
console.log(s1);

//slice 함수
console.log('slice 함수');
console.log(arr8.slice(1,3));

//splice 함수
console.log('splice 함수');
arr8.splice(2,0, 'A');
console.log(arr8);

//sort 함수
console.log('sort 함수');
arr8.sort();
console.log(arr8);

//tailling 쉼표
console.log('tailing 쉼표');
let arr9 = [1,2,];
console.log(arr9);

//구조분해
let [x, y] = arr9;
console.log(`x = ${x}, y = ${y}`);
