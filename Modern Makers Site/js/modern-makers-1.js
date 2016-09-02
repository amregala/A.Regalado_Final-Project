/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*var scrolltpoint = document.getElementById ("#dd-hh, #dd-tc, #dd-sr, #dd-sa, #dd-pw");


$('#dd-hh').click(function(){
  $.scrollTo('#start-hh', 600);
});

$('#dd-tc').click(function(){
  $.scrollTo('#start-tc', 600);
});

$('.active dd-sr').click(function()){
  $.scrollTo('#start-sr',600);
});

$('#dd-sa').click(function()){
  $.scrollTo('#start-sa',600);
});

$('#dd-pw').click(function()){
  $.scrollTo('#start-pw',600);
});

/*var scrolltopoint= ["Handmade Habitat", "Typecase Industries", 
          "Stitch & Rivet", "Sharlaine Anapu", "Printed Wild"];
  $(document).ready(function() {
    for(i=0; i<scrolltopoint.length:)*/

