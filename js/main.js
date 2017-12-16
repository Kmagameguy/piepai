$(document).mousemove(function(e) {
  $("#thePie").css({left:e.pageX-thePie.width/2, top:e.pageY-thePie.height/2});
});

$(document).mouseup(function(clicker) {
  if(!$('#thePie').hasClass('pieClass')) {
    $('#thePie').attr('src', 'images/pie.png');
    $('#thePie').addClass('pieClass');
  }
  else {
    $('#thePie').attr('src', 'images/finger.png');
    $('#thePie').removeClass('pieClass');
  }
});
