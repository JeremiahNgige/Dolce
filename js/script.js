$("document").ready(function(){ 
 $("#testimoner-yy").hover(
   function(){
  $(".testimoner-img").show()},
  function(){
  $(".testimoner-img").hide()});
  $("#crust").click(function(){
    $("#crust-list").fadeIn(),
    $("#toppins-list").fadeOut(),
    $("#piz-list").fadeOut()
  });
  $("#topins").click(function(){
    $("#crust-list").fadeOut(),
    $("#toppins-list").fadeIn(),
    $("#piz-list").fadeOut()
  });
  $("#piz").click(function(){
    $("#crust-list").fadeOut(),
    $("#toppins-list").fadeOut(),
    $("#piz-list").fadeIn()
  });
  });
//nav-bar scroll color-change
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 100) {
    document.getElementById("navTop").style.background = "#001405";
    document.getElementById("navTop").style.padding = "10px";
     
  } else {
    document.getElementById("navTop").style.background = "rgba(0, 0, 0, 0.196)";
    document.getElementById("navTop").style.padding = "29px";
    
  }
}
//change imgs 

