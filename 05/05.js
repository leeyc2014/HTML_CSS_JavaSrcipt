//로또번호 생성
const Lotto = () => {
    //0. 숫자 저장 배열
    let nums = [];
    //1. 숫자 7개 중복 없이 생성
    while(nums.length < 7) {
        let n = Math.floor((Math.random() * 45) + 1); //1~45 생성
        //숫자배열에 있는지 확인
        if(nums.includes(n))    continue;    
        nums.push(n);
    }
    //보너스 배열
    const bonus = nums.pop();
    //숫자 정렬
    nums.sort((a,b) => a - b);
    // console.log(nums);
    // console.log(bonus);

    //2. 태그 생성(+도 태그 생성)
    let tags = [];
    for (let item of nums) {
        tags.push(`<span class="sp${Math.floor(item / 10)}">${item}</span>`);
    }
    tags.push('<span class="spplus">+</span>');
    tags.push(`<span class="sp${Math.floor(bonus / 10)}">${bonus}</span>`);
    // console.log(tags);

    //3. 화면에 출력
    document.getElementById('spDiv').innerHTML = tags.join('');
}