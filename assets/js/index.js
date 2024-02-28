const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-moon'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})





window.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    let slideIndex = 0;
    const slideWidth = slides[0].clientWidth;
    const slideCount = slides.length;
    const maxOffset = (slideCount - 1) * slideWidth;
    let clickCounter = 0;

    function slide() {
        const offset = -slideIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        if (slideIndex < slideCount - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        slide();
    }

    function prevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = slideCount - 1;
        }
        slide();
    }



    
});

let slideInterval;

function startAutoSlide() {
    slideInterval = setInterval(() => {
        plusSlides(1); // Advance to the next slide
    }, 3000); // Adjust the interval duration as needed (in milliseconds)
}





function openModal1() {
    document.getElementById("myModal1").style.display = "block";
    document.getElementById("header").classList.add("hide-header");
    document.body.classList.add("modal-open"); // Remove modal-open class from body
    
    startAutoSlide(); // Start auto-slide when modal is opened


  }
  
  function closeModal1() {
    document.getElementById("myModal1").style.display = "none";
    document.getElementById("header").classList.remove("hide-header");
    document.body.classList.remove("modal-open"); // Remove modal-open class from body
    clearInterval(slideInterval); // Stop auto-slide when modal is closed


  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;


  }
 
  