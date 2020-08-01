$("document").ready(function(){ 

  //hover effect on testimoner
 $("#testimoner-yy").hover(
   function(){
  $(".testimoner-img").show()},
  function(){
  $(".testimoner-img").hide()});

  //fade effect on home page offer service section
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

  //add to cart button pressed
  $("button.#cart1").click(function(){
    let ptopping = $("#topping1 option:selected").val();
    let psize = $("#size1 option:selected").val();
    let pcrust = $("#crust1 option:selected").val();
     //switch through toppings list
    switch(ptopping){
      case "0":
        toppingPrice =0;
      break;
      case "pepperoni":
         toppingPrice = 200;
         console.log(toppingPrice);
       break;
       case "mushrooms":
         toppingPrice = 180;
         console.log(toppingPrice);
       break;
       case "onions":
         toppingPrice = 100;
         console.log(toppingPrice);
      break;
      case"extra cheese":
        toppingPrice = 300;
        console.log(toppingPrice)
      break;
      case"sausages":
        toppingPrice = 200;
        console.log(toppingPrice)
      break;
      case"olives":
        toppingPrice = 200;
        console.log(toppingPrice)
      break;
      case"pepper":
        toppingPrice = 200;
        console.log(toppingPrice)
      break;
      default:
         console.log("error"); 
     }
     //switch through size list
    switch(psize){
      case "0":
        price =0;
      break;
      case "regular":
         price = 1200;
         console.log(price);
       break;
       case "medium":
         price = 700;
         console.log("The price is "+price);
       break;
       case "large":
         price = 1000;
         console.log(price);
       default:
         console.log("error"); 
     }
     //switch through crust list
     switch(pcrust){
        case "0":
          crustPrice = 0;
        break;
        case "Crispy":
          crustPrice = 200;
        break;
        case "Stuffed":
          crustPrice = 150;
        break;
        case "Gluten-free":
          crustPrice = 180;
        break;
        default:
          console.log("No price"); 
      }
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


//business logic 

var a ,b ,c , d ,e , f, k, u, z ,price ,crustPrice, toppingPrice  ;
/*a = function(){
  var sizeArray = [getElementById("size1")] ;
  var pizzaSize = sizeArray.options[sizeArray.selectedIndex].value;
  if(pizzaSize==1){
    //ksh 500 regular
    b = "500";
  }else if(pizzaSize == 2){
    b = "700";
    //ksh 700 medium
  }else{
    b = "1000";
    //ksh1000 large
  }
  console.log(b);
  return b;
};
class pizzaType{
constructor(type){
  this.type =type;
}
}
class pizzaAttributes extends pizzaType {
    constructor(size, crust,toppings){
      super("pepperoni");
      this.size =size;
      this.crust =crust;
      this.toppings =toppings
    }
}

let m = getElementById('cart1');
m.addEventListener('click',()=>{
  pizzaAttributes(a,a,a);
})
*/