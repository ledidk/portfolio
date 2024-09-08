document.addEventListener('DOMContentLoaded', function() {
    const titleLink = document.querySelector('.title');
    const dateLink = document.querySelector('.dates');

    // Add event listeners to both the title and date
    titleLink.addEventListener('mouseover', function() {
        titleLink.classList.add('hovered');
        dateLink.classList.add('hovered');
    });

    titleLink.addEventListener('mouseout', function() {
        titleLink.classList.remove('hovered');
        dateLink.classList.remove('hovered');
    });

    dateLink.addEventListener('mouseover', function() {
        titleLink.classList.add('hovered');
        dateLink.classList.add('hovered');
    });

    dateLink.addEventListener('mouseout', function() {
        titleLink.classList.remove('hovered');
        dateLink.classList.remove('hovered');
    });
});
