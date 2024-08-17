
window.addEventListener('scroll', function() {
    const posisiScroll = window.scrollY;
    const header = document.querySelector('.structure');
    const Beranda2 = document.querySelector('.Beranda2');
    const TextBeranda = document.querySelectorAll('.TeksBeranda');
    const Beranda = document.querySelector('.Beranda')
    const HitBox = posisiScroll
    if (posisiScroll >= 78) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%'
        Beranda2.style.marginTop = 'calc(8% + 62px)';
        Beranda.style.height = 'calc(100vh - 136px)'
    }
    else {
        header.style.position = 'relative';
        header.style.top = 'auto';
        Beranda2.style.marginTop = '8%'
        Beranda.style.height = 'calc(100vh - 198px)'
    }
    const percent = window.innerHeight * 8 / 100
    const height_Teks = parseInt(window.getComputedStyle(TextBeranda[0]).height)
    if (HitBox >= percent + 139) {
        const Transparency = 1-(HitBox - percent - 139)/height_Teks;
        console.log(Transparency)
        TextBeranda.forEach(function(elemen) {
            elemen.style.color = 'rgba(255,255,255,' + Transparency + ')';
        });
    }
    else if (HitBox < percent + 139) {
        TextBeranda.forEach(function(elemen) {
            elemen.style.color = 'rgba(255,255,255,1)';
        });
    }
});
