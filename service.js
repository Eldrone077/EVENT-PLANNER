document.querySelectorAll('.service-list li').forEach(item => {
    item .addEventListener('click', () => {
        item.classList.toggle('active');
    });
});