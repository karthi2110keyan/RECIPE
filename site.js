const slide_image =document.getElementById("im")
const pastas =["../recipeImage/pasta/pasta0.jpg", "../recipeImage/pasta/pasta1.jpg", "../recipeImage/pasta/pasta2.jpg", "../recipeImage/pasta/pasta3.jpg"]

for(var i=0;i<pastas.length;i++){
    setInterval(()=>{
        slide_image.style.backgroundImage =`url(${pastas[0]})`
    },3000)

    setInterval(()=>{
        slide_image.style.backgroundImage =`url(${pastas[1]})`
    },6000)
    setInterval(()=>{
        slide_image.style.backgroundImage =`url(${pastas[2]})`
    },9000)
    
    setInterval(()=>{
        slide_image.style.backgroundImage =`url(${pastas[3]})`
    },11000)
slide_image.style.backgroundImage =`url(${pastas[0]})`

}

    const btn=document.querySelector(".share-button")
    
 

    btn.addEventListener("click",function(){
        const url = window.location.href

        if(navigator.share!== undefined){
            navigator.share({
                url
            })
        }
    })




    var bookmark =document.querySelector(".bookmark-im")


    bookmark.addEventListener("click",function(){
        bookmark.classList.toggle("bookmark-im");
    })