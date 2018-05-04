//Business logic
var myPingPong = function(number){

  if (number % 15 ===0) {
  $("#numbers").append("<li>pingpong</li>");
}

else if (number % 5 === 0){
  $("#numbers").append("<li>pong</li>");
}

 else if (number % 3 === 0) {
  $("#numbers").append("<li>ping</li>");
}

 else {
   $("#numbers").append(number);
}
};
//User Interface
$(document).ready(function(){
  $("form#pipo").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = myPingPong(number);


    $("#result").show();
  });
});
