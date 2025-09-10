document.addEventListener('DOMContentLoaded',()=>{
    //노드 가져오기
    const img = document.querySelector('img');
    const bt = document.querySelector('button');
    const txt1 = document.querySelector('#txt1');
    let flag = false;
    let n; 
    //버튼이 눌러졌을 때
    bt.addEventListener('click', (e) => {
        e.preventDefault();
        //처음 눌러졌는지 확인해서 랜덤수 생성
        if(!flag)   {
            n = Math.floor(Math.random() * 100) + 1;
            flag = true;
            txt1.value = '';
            txt1.style.display = 'block';
            bt.textContent = '확인';
            img.setAttribute('src', '../img/what.png');
        }
        console.log(`n=${n}`);
        //랜덤수와 입력 값을 비교해서 업다운 이미지 보여주기
        if(parseInt(txt1.value) < n)  img.setAttribute('src', '../img/up.png');
        else if(parseInt(txt1.value) > n)  img.setAttribute('src', '../img/down.png');
        //숫자를 맞추면 처음부터 다시 하도록
        else if(parseInt(txt1.value) == n) {
            flag = false;
            img.setAttribute('src', '../img/good.png');
            txt1.value = '';
            txt1.style.display = 'none';
            bt.textContent = '숫자 다시 생성';
        }
    });
});