function checkLang() {
    document.getElementById("lang").innerHTML = navigator.language;
}

function showPage(id, side) {
    var pages = document.querySelectorAll('.page');
    var decoration = document.querySelectorAll('.underline')
    for (let i = 0; i < decoration.length; i++) {
        decoration[i].classList.remove('underline');
    }
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    side.classList.add('underline')
    id.classList.add('active');
}

function backtrack(event) {
    event.preventDefault();
    const fieldset = document.getElementById('fieldset');
    fieldset.classList.add('shrink');
    const nav = document.getElementById('nav');
    nav.classList.add('exit');
    const text = document.getElementById('wait');
    text.classList.add('out');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}