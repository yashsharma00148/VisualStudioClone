console.log("I am javascript")
let navlist=document.querySelector(".responsive-navlist")
let hamburger=document.querySelector("#hamburger")
hamburger.addEventListener("click",()=>{
    if(hamburger.classList.contains("fa-bars")){
        
        hamburger.classList.add("rotate")
       setTimeout(() => {
        hamburger.classList.remove("rotate")
       }, 1000 );
      
        hamburger.classList.remove("fa-bars")
        hamburger.classList.add("fa-x")
        navlist.style.top="70px"
    }
    else{
        hamburger.classList.add("rotate")
        setTimeout(() => {
         hamburger.classList.remove("rotate")
        }, 1000 );
        hamburger.classList.add("fa-bars")
        hamburger.classList.remove("fa-x")
        navlist.style.top="-400px"

    }
})