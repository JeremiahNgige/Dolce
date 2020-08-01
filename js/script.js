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

  //add to cart margherritta 
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
  $("#margheritta-total").html(total1);
  });
//add to cart neapolitan 
$("#cart2").click(function(){
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
 console.log(total2);

 //display total1 to the page
$("#neapolitan-total").html(total2);
}); 
//add to cart meat- deluxe 
$("#cart3").click(function(){
  let ptopping3 = $("#topping3 option:selected").val();
  let psize3 = $("#size3 option:selected").val();
  let pcrust3 = $("#crust3 option:selected").val();
  let amount3 = $("#amount3").val();
   //switch through toppings list
  switch(ptopping3){
    case "0":
      toppingPrice3 =0;
    break;
    case "pepperoni":
       toppingPrice3 = 200;
       console.log(toppingPrice3);
     break;
     case "mushrooms":
       toppingPrice3 = 180;
       console.log(toppingPrice3);
     break;
     case "onions":
       toppingPrice3 = 100;
       console.log(toppingPrice3);
    break;
    case"extra cheese":
      toppingPrice3 = 300;
      console.log(toppingPrice3)
    break;
    case"sausages":
      toppingPrice3 = 200;
      console.log(toppingPrice3)
    break;
    case"olives":
      toppingPrice3 = 200;
      console.log(toppingPrice3)
    break;
    case"pepper":
      toppingPrice3 = 200;
      console.log(toppingPrice3)
    break;
    default:
       console.log("error"); 
   }
   //switch through size list
  switch(psize3){
    case "0":
      price3 =0;
    break;
    case "regular":
       price3 = 500;
       console.log(price3);
     break;
     case "medium":
       price3 = 700;
       console.log("The price is "+price3);
     break;
     case "large":
       price3 = 1000;
       console.log(price3);
     default:
       console.log("error"); 
   }
   //switch through crust list
   switch(pcrust3){
      case "0":
        crustPrice3 = 0;
      break;
      case "crispy":
        crustPrice3 = 120;
        console.log(crustPrice3);
      break;
      case "stuffed":
        crustPrice3 = 180;
        console.log(crustPrice3);
      break;
      case "glutten-free":
        crustPrice3 = 100;
        console.log(crustPrice3);
      break;
      default:
        console.log("No price"); 
    }
    //if not selected dont show the top alert
 if ((ptopping3== "") && (psize3== "") && (pcrust3== "")){
    console.log("nothing selected");
    alert("please select a size , crust, topping and fill in quantity for your pizza");
 }else{
   $("#alert-top").slideDown(function(){
     $("#meat-deluxe-total").show();
   });
 }
 //total
 total3 = (price3 + toppingPrice3 +crustPrice3)*amount3;
 console.log(total3);

 //display total to the page
$("#meat-deluxe-total").html(total3);
});
//add to cart pepperoni 
$("#cart4").click(function(){
  let ptopping4 = $("#topping4 option:selected").val();
  let psize4 = $("#size4 option:selected").val();
  let pcrust4 = $("#crust4 option:selected").val();
  let amount4 = $("#amount4").val();
   //switch through toppings list
  switch(ptopping4){
    case "0":
      toppingPrice4 =0;
    break;
    case "pepperoni":
       toppingPrice4 = 200;
       console.log(toppingPrice4);
     break;
     case "mushrooms":
       toppingPrice4 = 180;
       console.log(toppingPrice4);
     break;
     case "onions":
       toppingPrice4 = 100;
       console.log(toppingPrice4);
    break;
    case"extra cheese":
      toppingPrice4 = 300;
      console.log(toppingPrice4)
    break;
    case"sausages":
      toppingPrice4 = 200;
      console.log(toppingPrice4)
    break;
    case"olives":
      toppingPrice4 = 200;
      console.log(toppingPrice4)
    break;
    case"pepper":
      toppingPrice4 = 200;
      console.log(toppingPrice4)
    break;
    default:
       console.log("error"); 
   }
   //switch through size list
  switch(psize4){
    case "0":
      price4 =0;
    break;
    case "regular":
       price4 = 500;
       console.log(price4);
     break;
     case "medium":
       price4 = 700;
       console.log("The price is "+price4);
     break;
     case "large":
       price4 = 1000;
       console.log(price4);
     default:
       console.log("error"); 
   }
   //switch through crust list
   switch(pcrust4){
      case "0":
        crustPrice4 = 0;
      break;
      case "crispy":
        crustPrice4 = 120;
        console.log(crustPrice4);
      break;
      case "stuffed":
        crustPrice4 = 180;
        console.log(crustPrice4);
      break;
      case "glutten-free":
        crustPrice4 = 100;
        console.log(crustPrice4);
      break;
      default:
        console.log("No price"); 
    }
    //if not selected dont show the top alert
 if ((ptopping4== "") && (psize4== "") && (pcrust4== "")){
    console.log("nothing selected");
    alert("please select a size , crust, topping and fill in quantity for your pizza");
 }else{
   $("#alert-top").slideDown(function(){
     $("#pepperoni-total").show();
   });
 }
 //total 
 total4 = (price4 + toppingPrice4 +crustPrice4)*amount4;
 console.log(total4);

 //display total to the page
$("#pepperoni-total").html(total4);
});
//add to cart chicken-beef
$("#cart5").click(function(){
  let ptopping5 = $("#topping5 option:selected").val();
  let psize5 = $("#size5 option:selected").val();
  let pcrust5 = $("#crust5 option:selected").val();
  let amount5 = $("#amount5").val();
   //switch through toppings list
  switch(ptopping5){
    case "0":
      toppingPrice5 =0;
    break;
    case "pepperoni":
       toppingPrice5 = 200;
       console.log(toppingPrice5);
     break;
     case "mushrooms":
       toppingPrice5 = 180;
       console.log(toppingPrice5);
     break;
     case "onions":
       toppingPrice5 = 100;
       console.log(toppingPrice5);
    break;
    case"extra cheese":
      toppingPrice5 = 300;
      console.log(toppingPrice5)
    break;
    case"sausages":
      toppingPrice5 = 200;
      console.log(toppingPrice5)
    break;
    case"olives":
      toppingPrice5 = 200;
      console.log(toppingPrice5)
    break;
    case"pepper":
      toppingPrice5 = 200;
      console.log(toppingPrice5)
    break;
    default:
       console.log("error"); 
   }
   //switch through size list
  switch(psize5){
    case "0":
      price5 =0;
    break;
    case "regular":
       price5 = 500;
       console.log(price5);
     break;
     case "medium":
       price5 = 700;
       console.log("The price is "+price5);
     break;
     case "large":
       price5 = 1000;
       console.log(price5);
     default:
       console.log("error"); 
   }
   //switch through crust list
   switch(pcrust5){
      case "0":
        crustPrice5 = 0;
      break;
      case "crispy":
        crustPrice5 = 120;
        console.log(crustPrice5);
      break;
      case "stuffed":
        crustPrice5 = 180;
        console.log(crustPrice5);
      break;
      case "glutten-free":
        crustPrice5 = 100;
        console.log(crustPrice5);
      break;
      default:
        console.log("No price"); 
    }
    //if not selected dont show the top alert
 if ((ptopping5== "") && (psize5== "") && (pcrust5== "")){
    console.log("nothing selected");
    alert("please select a size , crust, topping and fill in quantity for your pizza");
 }else{
   $("#alert-top").slideDown(function(){
     $("#chicken-beef-total").show();
   });
 }
 //total 
 total5 = (price5 + toppingPrice5 +crustPrice5)*amount5;
 console.log(total5);

 //display total to the page
$("#chicken-beef-total").html(total5);
});
//add to cart veg feast
$("#cart6").click(function(){
  let ptopping6 = $("#topping6 option:selected").val();
  let psize6 = $("#size6 option:selected").val();
  let pcrust6 = $("#crust6 option:selected").val();
  let amount6 = $("#amount6").val();
   //switch through toppings list
  switch(ptopping6){
    case "0":
      toppingPrice6 =0;
    break;
    case "pepperoni":
       toppingPrice6 = 200;
       console.log(toppingPrice6);
     break;
     case "mushrooms":
       toppingPrice6 = 180;
       console.log(toppingPrice5);
     break;
     case "onions":
       toppingPrice6 = 100;
       console.log(toppingPrice6);
    break;
    case"extra cheese":
      toppingPrice6 = 300;
      console.log(toppingPrice6)
    break;
    case"sausages":
      toppingPrice6 = 200;
      console.log(toppingPrice5)
    break;
    case"olives":
      toppingPrice6 = 200;
      console.log(toppingPrice6)
    break;
    case"pepper":
      toppingPrice6 = 200;
      console.log(toppingPrice6)
    break;
    default:
       console.log("error"); 
   }
   //switch through size list
  switch(psize6){
    case "0":
      price6 =0;
    break;
    case "regular":
       price6 = 500;
       console.log(price6);
     break;
     case "medium":
       price6 = 700;
       console.log("The price is "+price6);
     break;
     case "large":
       price6 = 1000;
       console.log(price6);
     default:
       console.log("error"); 
   }
   //switch through crust list
   switch(pcrust6){
      case "0":
        crustPrice6 = 0;
      break;
      case "crispy":
        crustPrice6 = 120;
        console.log(crustPrice6);
      break;
      case "stuffed":
        crustPrice6 = 180;
        console.log(crustPrice6);
      break;
      case "glutten-free":
        crustPrice6 = 100;
        console.log(crustPrice6);
      break;
      default:
        console.log("No price"); 
    }
    //if not selected dont show the top alert
 if ((ptopping6== "") && (psize6== "") && (pcrust6== "")){
    console.log("nothing selected");
    alert("please select a size , crust, topping and fill in quantity for your pizza");
 }else{
   $("#alert-top").slideDown(function(){
     $("#veg-feast-total").show();
   });
 }
 //total 
 total6 = (price6 + toppingPrice6 +crustPrice6)*amount6;
 console.log(total6);

 //display total to the page
$("#veg-feast-total").html(total6);
});

//add the total on cart
$("#checkout").click(function(){
  let totalArray = [total1 ,total2,total3, total4, total5,total6];
  let newArray   = totalArray.filter(function(num){
                    if(num!=NaN){
                      var x = num;
                    }
                    return x;
                   })
  console.log(newArray); 
  let totaly =0;  
  for (var i=0;i<((newArray.length)+1);i++){
      let newNum = parseInt(newArray[i]);
       if(newArray[i]>0){
         totaly +=newNum;
         console.log(totaly)
       }
  } 

  let totalCost= totaly +250;
  //prompt location
 let locale   = prompt("where do you want us to deliver your pizza");   

 //if locale entered alert final amount
 if(locale!=""){
   alert("your Pizza to be delivered at"+" "+locale +" "+"costs ksh"+" "+totalCost) 
 } else{
   alert("your pizza ordered to be picked costs ksh"+" "+totaly)
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