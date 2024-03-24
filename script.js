let tabs = document.querySelectorAll(".tabs h3");
let tabContents  =document.querySelectorAll(".tab-content div");

console.log(tabContents);
console.log(tabs);
tabs.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
        tabContents.forEach((content)=>{
            content.classList.remove("active");
        });
        tabs.forEach(tab=>{
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tab[index].classList.add("active");
    })
})