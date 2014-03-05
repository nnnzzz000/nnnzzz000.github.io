$(function(){
  var $leftEye = $('.left-eye');
  var $rightEye = $('.right-eye');
  var $mouth = $('.mouth');
  var $win = $(window)
  
  $('body').on('mousemove',function(e){
    var center_x = $win.width() / 2;
    if (e.clientX >= center_x){
      $leftEye.css('left', '70px')
      $rightEye.css('left', '70px')
    } else if (e.clientX >= center_x - 150 && e.clientX <= center_x + 150) {
      $leftEye.css('left', '35px')
      $rightEye.css('left', '35px')
    } else {
      $leftEye.css('left', '0')
      $rightEye.css('left', '0')
    }
    
    var center_y = $win.height() / 2;
    if (e.clientY >= center_y){
      $leftEye.css('top', '70px')
      $rightEye.css('top', '70px')
    } else if (e.clientY >= center_y - 200 && e.clientY <= center_y + 200) {
      $leftEye.css('top', '35px')
      $rightEye.css('top', '35px')
    } else {
      $leftEye.css('top', '0')
      $rightEye.css('top', '0')
    }
    
    if (e.clientX >= center_x - 150 && e.clientX <= center_x + 150 && e.clientY >= center_y - 200 && e.clientY <= center_y + 200) {
      $mouth.css('height', '2px')
    } else {
      $mouth.css('height', '50px')
    }
  })
})