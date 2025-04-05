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
    if (window.scrollY >= window.innerHeight) {
        body.style.backdropFilter = "blur(0.5rem)";
    } else {
        body.style.backdropFilter = "none";
    }
});