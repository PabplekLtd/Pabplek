document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded!');
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert('You clicked a navigation link!');
        });
    });
});
