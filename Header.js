//ヘッダーの背景色変化
function changeColor() {
    let scrollY = window.pageYOffset ;
    let body = document.body;

    if(scrollY < 45) {//スクロール前
        body.classList.remove('bg-is-white');//ヘッダー：白
        body.classList.remove('bg-is-red');//ハンバーガーメニュー：赤
    } else {//スクロール後
        body.classList.add('bg-is-white');//ヘッダー：透明
        body.classList.add('bg-is-red');//ハンバーガーメニュー：透明
    }
}

window.addEventListener('scroll', changeColor);

//ハンバーガーメニューの動き
function hamburger() {
    document.getElementById('inner-line-1').classList.toggle('change-hamburger-inner-line-1');
    document.getElementById('inner-line-2').classList.toggle('change-hamburger-inner-line-2');
    document.getElementById('inner-line-3').classList.toggle('change-hamburger-inner-line-3');
    document.getElementById('nav_f').classList.toggle('fadein');
    document.getElementById('bg_f').classList.toggle('slide');
}

document.getElementById('hamburger_backcolor').addEventListener('click', function () {//ハンバーガメニュークリック時
    hamburger();
});

let list = document.getElementsByClassName('sp-nav-content-link');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        hamburger();
    });
}