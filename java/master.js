// Dom Elements
let min_menue_button=document.querySelector(".min-menue .min");
let side_menue=document.querySelector(".side_menue");
let side_menue_close=document.querySelector(".side_menue .heading .close");
let over_lay=document.querySelector(".over_lay");
let line=document.querySelectorAll(".side_menue_details .line")// Div that contains menuName nad ul
let line_menue=document.querySelectorAll(" .line  .line_menue   ") // ul menue in the side menue
let line_menue_open=document.querySelectorAll(".line .line_tools .open")  // +&-  sighn
let line_iso_open_sighn=document.querySelectorAll(".line_iso i");
let line_iso_menue=document.querySelectorAll(".line_iso .line_menue");
let side_menue_category_open=document.querySelector(".min-menue .Categories");
let side_menue_category_close_button=document.querySelector(".side_menue_category .heading .close");
let  side_menue_category_menue=document.querySelector(".side_menue_category");






//function to open Side meue //side_menue_category
min_menue_button.onclick=function(){
   side_menue.classList.add("open");
   over_lay.classList.add("open");
};
side_menue_category_open.onclick=function(){
    side_menue_category_menue.classList.add("open");
    over_lay.classList.add("open");
}

//function to close Side meue
side_menue_close.onclick=function(){
    side_menue.classList.remove("open")
    over_lay.classList.remove("open")
    line_menue.forEach((ele)=>{
        ele.classList.remove("open")
    })
    line.forEach((ele)=>{
        ele.classList.remove("expand")
    })
    line_menue_open.forEach((ele)=>{
        ele.innerHTML="+"
    })
    
}
side_menue_category_close_button.onclick=function(){
    if(side_menue_category_menue.classList.contains("open")){
        side_menue_category_menue.classList.remove("open");
        over_lay.classList.remove("open");
    }
}
//function to open/close  line menue 
line_menue_open.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
    if(e.currentTarget.innerHTML==="+"){
          //to close all open menue
        line_menue.forEach((ele)=>{
            ele.classList.remove("open")
        })
        // to convert all sighn of all  open menue  to +
        line_menue_open.forEach((ele)=>{
            ele.innerHTML="+"
        })
        //to Reduce  the height of all  open menue
        line.forEach((ele)=>{
            ele.classList.remove("expand")
        })
        line_menue.forEach((ele)=>{
            if(ele.dataset.name===e.currentTarget.dataset.name){
             ele.classList.add("open")
             
            }
         })
         line.forEach((ele)=>{
             if(ele.dataset.name===e.currentTarget.dataset.name){
                 ele.classList.add("expand")
             }
         })
         e.currentTarget.innerHTML="-"
    }else if(e.currentTarget.innerHTML==="-"){
        line_menue.forEach((ele)=>{
            if(ele.dataset.name===e.currentTarget.dataset.name){
             ele.classList.remove("open")
             
            }
         })
         line.forEach((ele)=>{
             if(ele.dataset.name===e.currentTarget.dataset.name){
                 ele.classList.remove("expand")
             }
         })
          e.currentTarget.innerHTML="+"
    }
  
    })

})
//function to open/close  line iso  menue 
line_iso_open_sighn.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        line_iso_menue.forEach((ele)=>{
            ele.classList.remove("open")
        })
    })
})
line_iso_open_sighn.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        line_iso_menue.forEach((ele)=>{
          
            if(ele.dataset.name===e.currentTarget.dataset.name){
                if(ele.classList.contains("open")){
                    ele.classList.remove("open")
                }else if(ele.classList.contains("open")===false && e.currentTarget.classList.contains("rotate")===false){
                    ele.classList.add("open")
                   
                }
               
            }
        })
        line_iso_open_sighn.forEach((ele)=>{
            if(ele.dataset.name===e.currentTarget.dataset.name){
                if(ele.classList.contains("rotate")){
                    ele.classList.remove("rotate")
                }else{
                    ele.classList.add("rotate")
                }
               
            }
        })
    })
})




