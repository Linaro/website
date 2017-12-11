$(document).ready(function(){
    
    
    // Home Twitter Birds  

   function birdSquad(bird, numberOfBirds, parentSelector) {
       
       // Set the container to append to clone to
       var container = $(parentSelector);
       
       // Loop "numberOfBirds" times and append cloned bird to parent container
       for(i=0;i<=numberOfBirds;i++){
           bird.clone().insertAfter(container);
       }
       
    }
    
    // Bird Elements
    var bird = $('.flying-twitter-bird');
    var bigBird = $('.flying-twitter-bird.big');
    var smallBird = $('.flying-twitter-bird.small');
    
    // Initialise Birds
    birdSquad(bigBird, 5, "twitter-row");
    birdSquad(smallBird, 5, "twitter-row");
    
    // Animate Birds from Left to Right Across screen
    // Courtesy of - http://jsfiddle.net/mdesdev/DLTEv/
    $(function() {
      setInterval(function() {
        bird.animate({ left: $(window).width() + 'px' }, 30000, 'linear', function() {
          $(this).css({ left: - $(this).width() + 'px' });
        });
      }, 10);
    });
    
    
});