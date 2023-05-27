const ham = document.getElementById("ham");
let count = 0;
ham.addEventListener("click", ()=>{
    let element = document.getElementById("ulist");
    let element2 = document.getElementById("about");
    if(count==0){
    element.style.setProperty("display", "flex");
    element2.style.setProperty("padding-top", "60%");
    count ++;
    }else{
        element.style.setProperty("display", "none");
        element2.style.setProperty("padding-top", "20%");
        count=0;
    }
    
})