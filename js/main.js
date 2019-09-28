let nav = document.getElementById('nav');

window.onscroll = function() {
    if (window.pageYOffset > 230 && window.innerWidth > 768) {
        console.log("window.innerWidth: " + window.innerWidth);
        nav.style.position = 'fixed';
        nav.style.top = 0;
    } else if (window.innerWidth > 768) {
        nav.style.position = 'absolute';
        nav.style.top = "230px";
    }
}