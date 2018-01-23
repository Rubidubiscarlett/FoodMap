$(document).ready(function() {
  setTimeout(function() {
       $(".splash").fadeOut(1500);
    },3000);
});

$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
  })
  .keyup();
