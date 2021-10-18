
// Preloader 
function preloader(){
    paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
    };

    Pace.on('done', function() {
    TweenMax.from(".title", 2, {
              y: 10,
              opacity: 0,
              ease: Expo.easenOut
        })
   });
}

//Get the button
var mybutton = document.getElementById("myBtn");
var a = document.getElementById("myheader");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    myheader.style.backgroundColor = "#112233de";
  } else {
    mybutton.style.display = "none";
    myheader.style.backgroundColor = "#123";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}