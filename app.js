const btn = document.getElementById("menu-btn")
const menuBc = document.querySelector(".menu-body")
const menu = menuBc.querySelector("ul")
const exitbtn = menu.querySelector(".exit")

const menuOpen = ()=>{
    menuBc.classList.remove("delete")
    menuBc.classList.remove("hide")
    menu.classList.remove("close-ul")
}

const menuClose =()=>{
    setTimeout(()=>{
        menuBc.classList.add("delete")
    } , 600)
    menuBc.classList.add("hide")
    menu.classList.add("close-ul")
}

btn.addEventListener("click" , menuOpen)

exitbtn.addEventListener("click" , menuClose)
menuBc.addEventListener("click" , menuClose)