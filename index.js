document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('welcomeOverlay');
    const btn = document.getElementById('welcome-btn');

    if (sessionStorage.getItem('hasSeenWelcome')) {
        overlay.style.display = 'none';
    }

    btn.addEventListener('click', function() {
        overlay.classList.add('slide-out');
        sessionStorage.setItem('hasSeenWelcome', 'true');

        setTimeout(function() {
            overlay.style.display = 'none';
        }, 800);
    });
});


document.addEventListener('DOMContentLoaded', function (){
    const revealItems = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add('is-visible');
            } else {
               entry.target.classList.remove('is-visible');
            }
            //     observer.unobserve(entry.target);
            // }
        });
    }, {
        threshold: 0,
        rootMargin: '-15% 0px -15% 0px'
    });

    revealItems.forEach(item => observer.observe(item));
});
