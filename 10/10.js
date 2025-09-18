document.addEventListener('DOMContentLoaded',()=>{
    //노드 가져오기
    /*const mainimg = document.querySelector('#whatimg');
    const htmlimg = document.querySelector('#htmlimg');
    const cssimg = document.querySelector('#cssimg');
    const jsimg = document.querySelector('#jsimg');
    const reactimg = document.querySelector('#reactimg');
    //이미지가 눌러졌을 때
    htmlimg.addEventListener('click', () => {
        mainimg.setAttribute('src', '../img/html.png');
    });
    cssimg.addEventListener('click', () => {
        mainimg.setAttribute('src', '../img/css.png');
    });
    jsimg.addEventListener('click', () => {
        mainimg.setAttribute('src', '../img/js.png');
    });
    reactimg.addEventListener('click', () => {
        mainimg.setAttribute('src', '../img/react.png');
    });*/
    const mainimg = document.querySelector("#mainimg > img");
    const thumimg = document.querySelectorAll("#thumimg > img");

    for(let thum of thumimg) {
        thum.addEventListener('mouseover', () => {
            mainimg.setAttribute('src', thum.getAttribute('src'));
            mainimg.setAttribute('alt', thum.getAttribute('alt'));
        });
    }
});