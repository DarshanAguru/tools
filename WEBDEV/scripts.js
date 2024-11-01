import toolsList from "./tools.js";

var cards = document.getElementById("cards");
toolsList.forEach(tool => {
    var card = document.createElement("div");
    card.classList.add("card","hover:cursor-pointer", "hover:shadow-[0_0_6px_-1px_rgba(255,255,255,0.75)]", "bg-[#3f3f3f]","flex","flex-col","gap-2" ,"rounded-lg", "m-1", "p-4");
    var cardHeader = document.createElement("h2");
    cardHeader.classList.add("text-xl", "font-bold", "text-white", "underline", "decoration-1", "underline-offset-2");
    cardHeader.innerText = tool.name;
    var cardDescription = document.createElement("p");
    cardDescription.classList.add("text-sm", "text-white");
    cardDescription.innerText = tool.description;
    var cardLink = document.createElement("a");
    cardLink.classList.add("text-cyan-400", "hover:tracking-widest", "hover:font-semibold","duration-150", "ease-out","hover:ease-in");
    cardLink.href = tool.href;
    cardLink.target = "_blank";
    cardLink.innerText = "Have a look?";
    card.appendChild(cardHeader);
    card.appendChild(cardDescription);
    card.appendChild(cardLink);
    cards.appendChild(card);
});


// copyright 2024 by Aguru Darshan
