document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the 'note-title-text' and 'note-date' classes for the Notes section
    const noteTitles = document.querySelectorAll('.note-title-text');
    const noteDates = document.querySelectorAll('.note-date');
    
    // Select all elements with the 'article-title-text' and 'article-date' classes for the Articles section
    const articleTitles = document.querySelectorAll('.article-title-text');
    const articleDates = document.querySelectorAll('.article-date');

    // Helper function to add hover behavior to each set of title and date elements
    function addHoverBehavior(titles, dates) {
        titles.forEach((title, index) => {
            const correspondingDate = dates[index];
            title.addEventListener('mouseover', function() {
                title.classList.add('hovered');
                correspondingDate.classList.add('hovered');
            });

            title.addEventListener('mouseout', function() {
                title.classList.remove('hovered');
                correspondingDate.classList.remove('hovered');
            });

            correspondingDate.addEventListener('mouseover', function() {
                title.classList.add('hovered');
                correspondingDate.classList.add('hovered');
            });

            correspondingDate.addEventListener('mouseout', function() {
                title.classList.remove('hovered');
                correspondingDate.classList.remove('hovered');
            });
        });
    }

    // Apply hover behavior to Notes section
    addHoverBehavior(noteTitles, noteDates);

    // Apply hover behavior to Articles section
    addHoverBehavior(articleTitles, articleDates);
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


const scriptURL = "https://script.google.com/macros/s/AKfycbyuBgV0fP8zH1OLD7bQ0L6Qn0oFUXleGUFT06ndkscMW6gHa9jQKunTfYkW78_V5ueR/exec";
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', async e => {
  e.preventDefault();

  try {
    const formData = new FormData(form);
    const response = await fetch(scriptURL, { method: 'POST', body: formData });

    if (response.ok) {
      msg.textContent = "Message sent successfully";
      setTimeout(function () {
        msg.textContent = "";
      }, 5000);
      form.reset();
    } else {
      msg.textContent = "Failed to send message. Please try again.";
    }
  } catch (error) {
    msg.textContent = "An error occurred. Please try again later.";
    console.error('Error!', error.message);
  }
});


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY; 
    var chatLogo = document.getElementById('chat-logo');

    if (scrollPosition > 30) {
        chatLogo.style.display = 'block';
    } else {
        chatLogo.style.display = 'none';
    }
});

function openChatForm() {
    document.getElementById('chat-form').classList.add('open');
}

function closeChatForm() {
    document.getElementById('chat-form').classList.remove('open');
}

