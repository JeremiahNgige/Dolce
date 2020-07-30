$("document").ready(()=> 
$("#testimoner-yy").hover(()=>
  $(".testimoner-img").show(),()=>
  $(".testimoner-img").hide())
);
//nav-bar scroll color-change
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 100) {
    document.getElementById("navTop").style.background = "black";
    document.getElementById("navTop").style.padding = "15px";
     
  } else {
    document.getElementById("navTop").style.background = "rgba(0, 0, 0, 0.196)";
    document.getElementById("navTop").style.padding = "29px";
    
  }
}
//change imgs

