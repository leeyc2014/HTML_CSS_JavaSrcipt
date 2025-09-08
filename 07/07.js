document.addEventListener('DOMContentLoaded',()=>{
    //노드 가져오기
    //주사위 이미지 가져오기
    const com = document.querySelector('#com');
    const user = document.querySelector('#user');
    //버튼 가져오기
    const bts = document.querySelectorAll('button');
    //메시지 영역 가져오기
    const TF = document.querySelector('#TF');
    //버튼 클릭
    for(let bt of bts) {
        bt.addEventListener('click', ()=>{
            const userNum = parseInt(bt.innerHTML.charAt(0));
            const comNum = Math.floor(Math.random() * 6) + 1;    //1~6
            com.setAttribute('src', `../img/${comNum}.png`);
            user.setAttribute('src', `../img/${userNum}.png`);

            (userNum === comNum) ? TF.innerHTML = "<span>맞음</span>" : TF.innerHTML = "<span>틀림</span>"
        });
    }
});