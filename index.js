(document).ready(function() {
    // Initialize the carousel
    $('#carousel1').carousel({
        interval: 3000, // Change slide every 3 seconds (3000 ms)
        wrap: true // Enable wrap behavior to loop through slides
    });
  
    // Handle custom transitions between slides
    $('#carousel1').on('slide.bs.carousel', function(e) {
        var $nextSlide = $(e.relatedTarget); // Next slide
        var $currentSlide = $(e.relatedTarget).prev(); // Previous slide
  
        // Apply custom classes for smooth transitions
        $currentSlide.addClass('carousel-item-prev'); // Slide out previous slide
        $nextSlide.addClass('carousel-item-next'); // Slide in next slide
  
        // Ensure active slide is fully visible with no translation
        setTimeout(function() {
            $nextSlide.removeClass('carousel-item-next'); // Remove slide-in class
            $currentSlide.removeClass('carousel-item-prev'); // Remove slide-out class
        }, 500); // Match the duration of the CSS transition (0.5s = 500ms)
    });
  });