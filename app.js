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



function changeImage(imagePath, element) {
    // Change the main image source
    document.getElementById('main-image').src = imagePath;

    // Remove 'active' class from all badge-details divs
    var details = document.querySelectorAll('.badge-details');
    details.forEach(function(detail) {
        detail.classList.remove('active');
    });

    // Add 'active' class to the clicked div
    element.classList.add('active');
}
