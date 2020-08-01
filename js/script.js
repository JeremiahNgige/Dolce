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
  $("#cart1").click(function(){
    let ptopping1 = $("#topping1 option:selected").val();
    let psize1 = $("#size1 option:selected").val();
    let pcrust1 = $("#crust1 option:selected").val();
    let amount1 = $("#amount1").val();
     //switch through toppings list
    switch(ptopping1){
      case "0":
        toppingPrice1 =0;
      break;
      case "pepperoni":
         toppingPrice1 = 200;
         console.log(toppingPrice);
       break;
       case "mushrooms":
         toppingPrice1 = 180;
         console.log(toppingPrice);
       break;
       case "onions":
         toppingPrice1 = 100;
         console.log(toppingPrice);
      break;
      case"extra cheese":
        toppingPrice1 = 300;
        console.log(toppingPrice)
      break;
      case"sausages":
        toppingPrice1 = 200;
        console.log(toppingPrice)
      break;
      case"olives":
        toppingPrice1 = 200;
        console.log(toppingPrice)
      break;
      case"pepper":
        toppingPrice1 = 200;
        console.log(toppingPrice)
      break;
      default:
         console.log("error"); 
     }
     //switch through size list
    switch(psize1){
      case "0":
        price1 =0;
      break;
      case "regular":
         price1 = 500;
         console.log(price);
       break;
       case "medium":
         price1 = 700;
         console.log("The price is "+price);
       break;
       case "large":
         price1 = 1000;
         console.log(price);
       default:
         console.log("error"); 
     }
     //switch through crust list
     switch(pcrust1){
        case "0":
          crustPrice1 = 0;
        break;
        case "crispy":
          crustPrice1 = 120;
          console.log(crustPrice);
        break;
        case "stuffed":
          crustPrice1 = 180;
          console.log(crustPrice);
        break;
        case "glutten-free":
          crustPrice1 = 100;
          console.log(crustPrice);
        break;
        default:
          console.log("No price"); 
      }
      //if not selected dont show the top alert
   if ((ptopping1== "") && (psize1== "") && (pcrust1== "")){
      console.log("nothing selected");
      alert("please select a size , crust, topping and fill in quantity for your pizza");
   }else{
     $("#alert-top").slideDown(function(){
       $("#margheritta-total").show();
     });
   }
   //total1 
   total1 = (price1 + toppingPrice1 +crustPrice1)*amount1;
   console.log(total1);

   //display total1 to the page
  $("#margheritta-total").html("margheritta: ksh" +total1);
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

var total1 ,price1 ,crustPrice1, toppingPrice1, total2 ,price2 ,crustPrice2, toppingPrice2, total3 ,price3 ,crustPrice3, toppingPrice3, total4 ,price4 ,crustPrice4, toppingPrice4, total5 ,price5 ,crustPrice5, toppingPrice5, total6 ,price6 ,crustPrice6, toppingPrice6 ;
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