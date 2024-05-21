import  {foodsNames , populorDishNames ,adds,indian_dish ,breakfast_items }from "./script/product.js"

var slide =document.querySelectorAll(".slide")
var category_container =document.querySelector(".category-box")
var populor_container =document.querySelector(".populor-dish")
var indianDish =document.querySelector(".indian-dish")

var food_boxes ;

for(var s=0;s<slide.length;s++){
    slide[s].style.backgroundImage=`url(${adds[s].add_image})`
    
}





for(var i=0;i<foodsNames.length;i++){
    food_boxes=`<a href="${foodsNames[i].page_file}" style="background-image: url(${foodsNames[i].recipeImage}); background-size:cover; " class="category"><p class="para">${foodsNames[i].recipeNames}</p></a>`

    category_container.innerHTML+=food_boxes
    
}

for(var j=0;j<populorDishNames.length;j++){
    food_boxes=`<a href="${populorDishNames[j].page_file}" style="background-image: url(${populorDishNames[j].populorDishImage});" class="populornames"><p class="para">${populorDishNames[j].dishName}</p></a>`

    populor_container.innerHTML+=food_boxes
    
}

for(var k=0;k<indian_dish.length;k++){
    food_boxes=`<a href="" style="background-image: url(${indian_dish[k].indian_food});" class="dessert"><div class="star"></div><p class="para">${indian_dish[k].indian_dishName}</p></a>`

    indianDish.innerHTML+=food_boxes
    
}

