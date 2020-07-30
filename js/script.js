$("document").ready(()=> 
$("#testimoner-yy").hover(()=>
  $(".testimoner-img").show(),()=>
  $(".testimoner-img").hide())
);
//nav-bar scroll color-change
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navTop").style.background = "black";
    
  } else {
    document.getElementById("navTop").style.background = "rgba(0, 0, 0, 0.26)";
  }
}
//hover testimoner img 
