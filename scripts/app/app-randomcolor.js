$(document).ready(function(){
  var titleColor = randomColor({luminosity: 'dark'});
  $('#nameTitle').css({"color":titleColor});
  $('#subtitle').css({"color":titleColor});
  var buttonColor = randomColor({luminosity: 'dark'});
  $('.rcolor').css({"background-color":buttonColor,"border-color":buttonColor})
})
