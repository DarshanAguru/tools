import { fwDataList , fwContentData } from "./collection-data.js";



window.onload = function() {
    const namearr = fwDataList.map(fw => fw.hrefId);
    var url = new URL(window.location.href);
    var name = url.searchParams.get("name");
    if (name === null || name.trim() === "" || !namearr.includes(name))
    {
        window.location.replace("./fe-fw-search.html");
    }
    processMain(name);
}


const processMain = (name)=>{
    var details = fwContentData[name];
    var title = document.getElementById("title");
    title.innerText = details.name;
    var instDesc = document.getElementById("instDesc");
    instDesc.innerHTML = details.installation;
    var usageDesc = document.getElementById("usageDesc");
    usageDesc.innerHTML = details.usage;
    var docsUrl = document.getElementById("docsUrl");
    docsUrl.innerHTML = `<a class="text-sm text-cyan-300 font-semibold hover:font-bold duration-150 hover:underline hover:underline-offset-2" target="_blank" href="${details.documentation}">${details.documentation}</a>`;
    var cdn = document.querySelector("#cdn");
    if (details.cdn === undefined || details.cdn.trim() === "")
    {
        cdn.classList.add("hidden");
    }
    else{
    var cdnDesc = document.getElementById("cdnDesc");
    cdnDesc.innerHTML = details.cdn.replace( /</g, "&lt;").replace( />/g, "&gt;").replace( /\$\$/g, "<br/>");
    }
   
}

//copyright 2024 by Aguru Darshan