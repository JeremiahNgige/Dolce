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

  //add to cart margherritta button pressed
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
         console.log(toppingPrice1);
       break;
       case "mushrooms":
         toppingPrice1 = 180;
         console.log(toppingPrice1);
       break;
       case "onions":
         toppingPrice1 = 100;
         console.log(toppingPrice1);
      break;
      case"extra cheese":
        toppingPrice1 = 300;
        console.log(toppingPrice1)
      break;
      case"sausages":
        toppingPrice1 = 200;
        console.log(toppingPrice1)
      break;
      case"olives":
        toppingPrice1 = 200;
        console.log(toppingPrice1)
      break;
      case"pepper":
        toppingPrice1 = 200;
        console.log(toppingPrice1)
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
         console.log(price1);
       break;
       case "medium":
         price1 = 700;
         console.log("The price is "+price1);
       break;
       case "large":
         price1 = 1000;
         console.log(price1);
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
          console.log(crustPrice1);
        break;
        case "stuffed":
          crustPrice1 = 180;
          console.log(crustPrice1);
        break;
        case "glutten-free":
          crustPrice1 = 100;
          console.log(crustPrice1);
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
//add to cart neapolitan button clicked
$("#cart1").click(function(){
  let ptopping2 = $("#topping2 option:selected").val();
  let psize2 = $("#size2 option:selected").val();
  let pcrust2 = $("#crust2 option:selected").val();
  let amount2 = $("#amount2").val();
   //switch through toppings list
  switch(ptopping2){
    case "0":
      toppingPrice2 =0;
    break;
    case "pepperoni":
       toppingPrice2 = 200;
       console.log(toppingPrice2);
     break;
     case "mushrooms":
       toppingPrice2 = 180;
       console.log(toppingPrice2);
     break;
     case "onions":
       toppingPrice2 = 100;
       console.log(toppingPrice2);
    break;
    case"extra cheese":
      toppingPrice2 = 300;
      console.log(toppingPrice2)
    break;
    case"sausages":
      toppingPrice2 = 200;
      console.log(toppingPrice2)
    break;
    case"olives":
      toppingPrice2 = 200;
      console.log(toppingPrice2)
    break;
    case"pepper":
      toppingPrice2 = 200;
      console.log(toppingPrice2)
    break;
    default:
       console.log("error"); 
   }
   //switch through size list
  switch(psize2){
    case "0":
      price2 =0;
    break;
    case "regular":
       price2 = 500;
       console.log(price2);
     break;
     case "medium":
       price2 = 700;
       console.log("The price is "+price2);
     break;
     case "large":
       price2 = 1000;
       console.log(price2);
     default:
       console.log("error"); 
   }
   //switch through crust list
   switch(pcrust2){
      case "0":
        crustPrice2 = 0;
      break;
      case "crispy":
        crustPrice2 = 120;
        console.log(crustPrice2);
      break;
      case "stuffed":
        crustPrice2 = 180;
        console.log(crustPrice2);
      break;
      case "glutten-free":
        crustPrice2 = 100;
        console.log(crustPrice2);
      break;
      default:
        console.log("No price"); 
    }
    //if not selected dont show the top alert
 if ((ptopping2== "") && (psize2== "") && (pcrust2== "")){
    console.log("nothing selected");
    alert("please select a size , crust, topping and fill in quantity for your pizza");
 }else{
   $("#alert-top").slideDown(function(){
     $("#neapolitan-total").show();
   });
 }
 //total1 
 total2 = (price2 + toppingPrice2 +crustPrice2)*amount2;
 console.log(total1);

 //display total1 to the page
$("#neapolitan-total").html("neapolitan: ksh" +total2);
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