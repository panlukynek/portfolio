function intro_overlay_on() {
    document.getElementById("intro_overlay").style.display = "block";
    document.body.classList.add('noscroll');
}

function intro_overlay_off() {
    document.getElementById("intro_overlay").style.display = "none";
    document.body.classList.remove('noscroll');
}

window.addEventListener('scroll', function() {
    const body = document.body;
    const intro_text = document.getElementById("intro_text");
    if (window.scrollY >= window.innerHeight / 2 + intro_text.offsetHeight) {
        body.style.backdropFilter = "blur(0.5rem)";
        body.style.backgroundSize = "100%";
    } else {
        body.style.backdropFilter = "none";
        body.style.backgroundSize = "105%";
    }
});