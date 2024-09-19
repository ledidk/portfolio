document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the 'note-title-text' and 'note-date' classes for the Notes section
    const noteTitle = document.querySelector('.note-title-text');
    const noteDate = document.querySelector('.note-date');
    
    // Select all elements with the 'article-title-text' and 'article-date' classes for the Articles section
    const articleTitle = document.querySelector('.article-title-text');
    const articleDate = document.querySelector('.article-date');

    // Notes Section Hover Behavior
    noteTitle.addEventListener('mouseover', function() {
        noteTitle.classList.add('hovered');
        noteDate.classList.add('hovered');
    });

    noteTitle.addEventListener('mouseout', function() {
        noteTitle.classList.remove('hovered');
        noteDate.classList.remove('hovered');
    });

    noteDate.addEventListener('mouseover', function() {
        noteTitle.classList.add('hovered');
        noteDate.classList.add('hovered');
    });

    noteDate.addEventListener('mouseout', function() {
        noteTitle.classList.remove('hovered');
        noteDate.classList.remove('hovered');
    });

    // Articles Section Hover Behavior
    articleTitle.addEventListener('mouseover', function() {
        articleTitle.classList.add('hovered');
        articleDate.classList.add('hovered');
    });

    articleTitle.addEventListener('mouseout', function() {
        articleTitle.classList.remove('hovered');
        articleDate.classList.remove('hovered');
    });

    articleDate.addEventListener('mouseover', function() {
        articleTitle.classList.add('hovered');
        articleDate.classList.add('hovered');
    });

    articleDate.addEventListener('mouseout', function() {
        articleTitle.classList.remove('hovered');
        articleDate.classList.remove('hovered');
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