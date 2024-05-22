let animals= [
    {category:"cat", name:"Məsican", source:"./images/cat5.jpg"},
    {category:"cat", name:"Ponçik", source:"./images/cat1.jpg"},
    {category:"cat", name:"Məsican", source:"./images/cat2.jpg"},
    {category:"cat", name:"Ponçik", source:"./images/cat3.jpg"},
    {category:"cat", name:"Miyoşi", source:"./images/cat4.jpg"},
    {category:"cat", name:"Məsi", source:"./images/cat6.jpg"},
    {category:"cat", name:"Miyoşi", source:"./images/cat8.jpg"},
    {category:"dog", name:"İtcan", source:"./images/dog1.jpg"},
    {category:"dog", name:"Alabaş", source:"./images/dog2.jpg"},
    {category:"dog", name:"Dino", source:"./images/dog3.jpg"},
    {category:"dog", name:"Kopekcan", source:"./images/dog4.jpg"},
    {category:"dog", name:"Dino", source:"./images/dog3.jpg"},
    {category:"dog", name:"Kopekcan", source:"./images/dog1.jpg"},
    {category:"frog", name:"Qurbağacan", source:"./images/frog1.jpg"},
    {category:"frog", name:"Vrog", source:"./images/frog2.jpg"},
    {category:"frog", name:"Yaşılsu", source:"./images/frog3.jpg"},
    {category:"frog", name:"Frogcan", source:"./images/frog4.jpg"},
    {category:"frog", name:"Yaşılsu", source:"./images/frog5.jpg"},
    {category:"frog", name:"Frogcan", source:"./images/frog1.jpg"},
    {category:"hamster", name:"Siçancan", source:"./images/hamster1.jpg"},
    {category:"hamster", name:"Xamyakcan", source:"./images/hamster2.jpg"},
    {category:"hamster", name:"Pakizə", source:"./images/hamster3.jpg"},
    {category:"hamster", name:"Lətafət", source:"./images/hamster6.jpg"},
    {category:"hamster", name:"Xamyakcan", source:"./images/hamster4.jpg"},
    {category:"hamster", name:"Pakizə", source:"./images/hamster6.jpg"},
    {category:"hamster", name:"Lətafət", source:"./images/hamster7.jpg"},
]

let filterScreen = document.querySelector(".elements");
let text = document.querySelector(".text");
let catP=document.getElementById("catP");
for (const i of text.children) {
    i.classList.remove("selected")
}
window.onload= function Cat(x) {
    catP.click();
 x.classList.add("selected");
        filterScreen.innerHTML="";
        animals.forEach(e=>{
            if (e.category=="cat") {
                filterScreen.innerHTML+=`<div class="image">
                <img src="${e.source}" alt="${e.name}">
                <p>${e.name}</p>
            </div>`
            }
        })
    }

    function Cat(x) {
        for (const i of text.children) {
            i.classList.remove("selected")
        }
        x.classList.add("selected");
        filterScreen.innerHTML="";
        animals.forEach(e=>{
            if (e.category=="cat") {
                filterScreen.innerHTML+=`<div class="image">
                <img src="${e.source}" alt="${e.name}">
                <p>${e.name}</p>
            </div>`
            }
        })
       
    }
function Dog(x) {
    for (const i of text.children) {
        i.classList.remove("selected")
    }
    x.classList.add("selected");
    filterScreen.innerHTML="";
    animals.forEach(e=>{
        if (e.category=="dog") {
            filterScreen.innerHTML+=`<div class="image">
            <img src="${e.source}" alt="${e.name}">
            <p>${e.name}</p>
        </div>`
        }
    })
  
}
function Frog(x) {
    for (const i of text.children) {
        i.classList.remove("selected")
    }
    x.classList.add("selected");
    filterScreen.innerHTML="";
    animals.forEach(e=>{
        if (e.category=="frog") {
            filterScreen.innerHTML+=`<div class="image">
            <img src="${e.source}" alt="${e.name}">
            <p>${e.name}</p>
        </div>`
        }
    })
}
function Hamster(x) {
    for (const i of text.children) {
        i.classList.remove("selected")
    }
    x.classList.add("selected");
    filterScreen.innerHTML="";
    animals.forEach(e=>{
        if (e.category=="hamster") {
            filterScreen.innerHTML+=`<div class="image">
            <img src="${e.source}" alt="${e.name}">
            <p>${e.name}</p>
        </div>`
        }
    })
    
}

