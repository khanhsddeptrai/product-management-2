//buttons status
const buttonStatus = document.querySelectorAll("[button-status]");
if(buttonStatus.length > 0){
    let url = new URL(window.location.href);
    
    buttonStatus.forEach(button => {
        button.addEventListener("click",() => {
            const status = button.getAttribute("button-status");
            if(status){
                url.searchParams.set("status",status);
            }else{
                url.searchParams.delete("status");
            }
            window.location.href = url.href;
        });
    });
}

//pagination
const buttonPaginations = document.querySelectorAll("[button-pagination]");
if(buttonPaginations){
    let url = new URL(window.location.href);

    buttonPaginations.forEach(button =>{
        button.addEventListener("click",()=>{
            const page = button.getAttribute("button-pagination");
            url.searchParams.set("page", page);
            window.location.href = url.href;
        })
    });
}