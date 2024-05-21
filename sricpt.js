import  {foodsNames , populorDishNames ,adds,indian_dish ,breakfast_items }from "./script/product.js"
var food_boxes;

var break_n=document.querySelector(".br-name")
for(var m=0;m<breakfast_items.length;m++){
   food_boxes=`<a class="boxes" href="">
    <div class="b-image" style="background-image:url(${breakfast_items[m].breakfast_images});" ></div>

    <div class="icon-name">
        <p class="break-name">${breakfast_items[m].breakfast_names}</p>
        <p class="break-name">${breakfast_items[m].breakfast_times}</p>
          </div>
      </a>`

    break_n.innerHTML+=food_boxes
   
    
}

