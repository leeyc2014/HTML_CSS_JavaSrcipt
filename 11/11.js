document.addEventListener('DOMContentLoaded', () => {
    //노드 가져오기
    const mainimg = document.querySelector("#mainimg > img");
    const backbt = document.querySelector('#backbt');
    const frontbt = document.getElementById('frontbt');

    //이미지 배열
    const arrImg = ['html.png', 'js.png', 'css.png', 'react.png',];
    let idx = 0;

    //이미지 업데이트
    const updateImg = () => {
        mainimg.setAttribute('src', `../img/${arrImg[idx]}`);
        mainimg.setAttribute('alt', arrImg[idx].split('.')[0]);
        if (idx == 0) backbt.style.display = 'none';
        else backbt.style.display = 'block';
        if (idx == arrImg.length - 1) frontbt.style.display = 'none';
        else frontbt.style.display = 'block';
    }

    frontbt.addEventListener('click', () => {
        idx++;
        if (idx > arrImg.length - 1) idx = arrImg.length - 1;
        updateImg();
    })
    backbt.addEventListener('click', () => {
        idx--;
        if (idx < 0) idx = 0;
        updateImg();
    });
    updateImg();
});