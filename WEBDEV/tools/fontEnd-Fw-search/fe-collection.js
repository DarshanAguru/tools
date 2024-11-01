import { fwDataList } from "./collection-data.js";

var help = document.getElementById("help");
help.addEventListener("click", function() {
 
 if (!document.getElementById("popup")) {
     
 var popup = document.createElement("div");
 popup.id = "popup";
 popup.classList.add("absolute", "top-0", "left-0", "w-screen", "h-screen", "bg-black/80","backdrop-blur-md", "flex", "justify-center", "items-center");
 popup.innerHTML = `
 <div class="bg-[#0f0f0f] rounded-lg p-4 w-1/3 h-1/3 flex flex-col gap-2">
 <h1 class="text-white text-2xl font-bold">Help</h1>    
 <p class="text-white text-sm">
 This tool is a collection of frameworks, ui-websites, ui-frameworks and build tools for front-end development.<br>You can search for the framework or ui tool you want and <br>
 can have a brief description of it and learn more about it by clicking on the "Learn More" button.<br>
 </p>
 <button id="popupClose" class="mt-1 self-center w-32 rounded-md p-2 hover:cursor-pointer text-white border border-white hover:shadow-[0_0_6px_-1px_rgba(255,255,255,0.75)] bg-[#3f3f3f]">close</button>
 </div>
 `;
 document.body.appendChild(popup);
 var close = document.getElementById("popupClose");
 close.addEventListener("click", function() {
     document.body.removeChild(popup);
 });
 } else {
     document.body.removeChild(popup);
 }
});

var cards = document.getElementById("cards");


const renderCards = (fw)=>{
    var card = document.createElement("div");
        card.setAttribute("id", fw.id);
        card.classList.add("card","hover:cursor-pointer", "hover:shadow-[0_0_4px_0px_rgba(255,255,255,0.75)]", "bg-[#3f3f3f]","flex","flex-col","gap-2" ,"rounded-lg", "m-1", "p-4", "duration-75", "ease-out", "hover:ease-in");
        var cardHeader = document.createElement("h2");
        cardHeader.classList.add("text-xl", "font-bold", "text-white", "underline", "decoration-1", "underline-offset-2");
        cardHeader.innerText = fw.name;
        var cardDescription = document.createElement("p");
        cardDescription.classList.add("text-sm", "text-white");
        cardDescription.innerText = fw.description;
        var cardLink = document.createElement("a");
        cardLink.classList.add("text-sm", "hover:tracking-widest", "duration-150", "ease-out","hover:ease-in", "font-semibold","text-cyan-300");
        cardLink.href = "./info.html?name=" + fw.hrefId;
        cardLink.innerText = "Learn More";
        card.appendChild(cardHeader);
        card.appendChild(cardDescription);
        card.appendChild(cardLink);
        return card;
}

window.onload = function() {
    fwDataList.forEach(fw => {
        const card = renderCards(fw);
        cards.appendChild(card);
    });
}


const search = (searchText, kw)=>{
    var res = new Set();
    searchText = searchText.split(" ");
    fwDataList.forEach(fw => {
       if(searchText.some(word=> (word.trim() === "")?false:fw.cat.split("-").some(c=> c.toLowerCase().startsWith(word.trim().toLowerCase())))){
           res.add(fw);
       }
       if(searchText.some(word=> (word.trim() === "")?false:fw.name.trim().toLowerCase().startsWith(word.trim().toLowerCase()))){
           res.add(fw);
       }
    });
    return Array.from(res);
}

const searchFromData = async (searchText)=>{
    const kw = ["ui", "framework", "build", "tools", "fw"];
    const res= search(searchText, kw);
    //render components
    if (res === null || res === undefined || res.length === 0)
    {
        cards.innerHTML = "";
        var noDataFoundDiv = document.createElement("div");
        noDataFoundDiv.classList.add("flex", "flex-col", "justify-center", "items-center", "h-full", "w-full");
        noDataFoundDiv.innerHTML = `<h1 class="text-white text-3xl font-bold">Ahh! Don't have it yet! I'll try to add it asap😉</h1>`;
        cards.appendChild(noDataFoundDiv);
    }
    else{
        cards.innerHTML = "";
        res.forEach(fw => {
            const card = renderCards(fw);
            cards.appendChild(card);
        });
    }
   

}



var searchBox = document.getElementById("search");

searchBox.addEventListener("input", (event)=> {
    var searchText = event.target.value;
    if (searchText.trim() === "")
    {  
        cards.innerHTML = "";
        fwDataList.forEach(fw => {
            const card = renderCards(fw);
            cards.appendChild(card);
        });
        return;
    }
    else{
        searchFromData(event.target.value);
    }
});

//copyright 2024 by Aguru Darshan