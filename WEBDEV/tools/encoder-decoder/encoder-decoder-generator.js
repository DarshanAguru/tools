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
 This tool is designed to help you encode and decode text or generate a hash-digest or uuid from given text. It will take your text input and convert it into the selected format and give output in the output section.<br>
 You can select the format from the dropdown menu and enter your text in the textarea and click on the "Process" button. The output will be generated and you can copy and paste it.<br>
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



var button  = document.getElementById("process");
var cpybtn = document.getElementById("cpybtn");
cpybtn.addEventListener("click", function() {
    var outputText = document.getElementById("outputText");
    if (outputText.value.trim() === "")
    {
        return;
    }
    navigator.clipboard.writeText(outputText.value);
    alert("Copied to clipboard 😉");
});

var selectionBox = document.getElementById("selectBox");
selectionBox.addEventListener("change", function() {
    var btn = document.getElementById("process");
    var selected = selectionBox.value;
    if (btn.innerText === "Clear")
    {
        return;
    }
    let ele = document.getElementById("inputText");
    if(selected.split("-")[0] === "uuid"){
        
        ele.value = "";
        ele.setAttribute("placeholder", "No need to enter text for uuid");
        ele.setAttribute("autocomplete", "off");
        ele.setAttribute("readonly", "true");
    }
    else{
        ele.setAttribute("placeholder", "Paste/Enter your text here... (click on help for further instructions)");
        ele.setAttribute("autocomplete", "on");
        ele.setAttribute("readonly", "false");
    }
    btn.innerText = `${selected.split("-")[0]}`;
});

button.addEventListener("click", function() {
    
    var inputText = document.getElementById("inputText").value;
    var selected = document.getElementById("selectBox").value;
    var outputText = document.getElementById("outputText");
    var cpybtn = document.getElementById("cpybtn");
    if (inputText.trim() === "" && selected.split("-")[0] !== "uuid")
    {
        if(!cpybtn.classList.contains('hidden'))
            {
                cpybtn.classList.add('hidden');
            }   
        alert("Please enter some text before processing");
        outputText.value ="";
        document.getElementById("inputText").value = "";
        return;
    }
    const ress  = processText(inputText, selected);
    if (ress === null)
    {
        alert("Error processing text");
        return;
    }
    outputText.value = ress;  
    cpybtn.classList.remove('hidden');
});

const formatMap = {
    'Encode-base64' : (data)=>{
        return btoa(data);
    },
    'Encode-hex' : (data)=>{
        return data.split('').map(function(x) {
            return x.charCodeAt(0).toString(16);
        }).join('');
    },
    'Encode-url' : (data)=>{
        return encodeURIComponent(data);
    },
    'Encode-html' : (data)=>{
        return data.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },
    'Decode-base64' : (data)=>{
        const op = atob(data);
        for (var c of op)
        {
            if (!(c.match(/[A-Za-z0-9\+\/]/)))
            {
                return null;
            }
        }
        return op;
    },
    'Decode-hex' : (data)=>{
        
        for (var c of data)
        {
            if (c.match(/[^0-9a-fA-F]/))
            {
                return null;
            }
        }

        return data.match(/.{1,2}/g).map(function(x) {
            return String.fromCharCode(parseInt(x, 16));
        }).join('');
    },
    'Decode-url' : (data)=>{
        return decodeURIComponent(data);
    },
    'Decode-html' : (data)=>{
        return data.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    },
    'Hash-sha1' : (data)=>{
        return CryptoJS.SHA1(data).toString();
    },
    'Hash-sha256' : (data)=>{
        return CryptoJS.SHA256(data).toString();
    },
    'Hash-sha512' : (data)=>{
        return CryptoJS.SHA512(data).toString();
    },
    'Hash-md5' : (data)=>{
        return CryptoJS.MD5(data).toString();
    },
    'uuid-v4' : ()=>{
        return uuid.v4();
    },
}

window.onload = function() {
    var selectBox = document.getElementById("selectBox");
    var keys = Object.keys(formatMap);
    keys.forEach(key => {
        var option = document.createElement("option");
        option.value = key;
        option.innerHTML = key;
        selectBox.appendChild(option);
    });
}

const processText = (data, format)=>{
    try{
        if(formatMap[format] === undefined){
            return null;
        }
        if(format.split("-")[0] === "uuid"){
            return formatMap[format]();
        }
        const ans = formatMap[format](data);
        if(ans === null){
            return null;
        }
        if (ans === undefined)
        {
            return null;
        }
        if (ans.trim() === "")
        {
            return null;
        }
        return ans.trim();
    }
    catch(e)
    {
        console.log(e);
        return null;
    }

}

// copyright 2024 by Aguru Darshan