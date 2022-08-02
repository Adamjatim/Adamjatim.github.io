window.addEventListener('DOMContentLoaded', () => {
    VANTA.NET({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        points: 5.00,
        maxDistance: 20.00,
        spacing: 25.00
    })

    setTimeout(() => {
        const main = document.querySelector('main');
        main.style.opacity = 1;
        main.style.filter = 'blur(0px)';
    }, 1000)
})