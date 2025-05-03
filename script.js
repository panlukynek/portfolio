const lenis = new Lenis({
    autoRaf: true,
    duration: 0.6,
});

window.addEventListener('scroll', function(){
    const scrollpos = Math.min(window.scrollY / window.innerHeight, 1);
    const blur = scrollpos * 0.5;
    const bgsize = 105 - (scrollpos * 5);
    
    document.body.style.backdropFilter = `blur(${blur}rem)`;
    document.body.style.backgroundSize = `${bgsize}%`;
});