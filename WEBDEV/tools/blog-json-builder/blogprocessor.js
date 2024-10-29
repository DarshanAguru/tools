var help = document.getElementById("help");
help.addEventListener("click", function() {
 
 if (!document.getElementById("popup")) {
     
 var popup = document.createElement("div");
 popup.id = "popup";
 popup.classList.add("absolute", "top-0", "left-0", "w-screen", "h-screen", "bg-black/80","backdrop-blur-md", "flex", "justify-center", "items-center");
 popup.innerHTML = `
 <div class="bg-[#0f0f0f] rounded-lg p-4 w-2/3 h-2/3 flex flex-col gap-2">
 <h1 class="text-white text-2xl font-bold">Help</h1>    
 <p class="text-white text-sm">
 This tool is designed to help you build a json output for blogging purposes. It will take your text input and convert it into a json output with the following structure:
 <pre class="text-white">
 {
    "title": "Your Title",
    "date": "Your Date",
    "content": "Your Content"
 }
 </pre>
 </p>
 <p class="text-white text-sm leading-6">
 To use this tool, simply enter your text in the textarea and click on the "Process" button. The json output will be generated and you can copy and paste it.<br>
 * For title you can enter <u><b>$$title 'your title here' $$</b></u><br>* For date you can enter <u><b>$$date 'your date here' $$</b></u><br>* For content you can enter <b><u>$$content 'your content here' $$</u></b>.<br>* For images you can add <b><u>#img 'your image link or name here' #alt 'your alt text here' ##</u></b> in your content<br>* For links you can add <b><u>#link 'your link here' #t 'your text here' ##</u></b> in your content<br>which will be replaced by respective html tags with common class "blogImage" for images and "blogLink" for links respectively.
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



const processText = (data)=>{
    try{
    let res= {'title':"", 'date':"", 'content':""}
    let stack = []
    const lines = data.split("\n");
    var i = 0;
    const commands = ['$$title', '$$date','$$content'];

    while (i < lines.length)
    {
        if (lines[i].trim() === "")
        {
            continue;
        }
        var words = lines[i].split(" ");
        
        const commandFound = words.find(word => commands.includes(word));
        if (commandFound)
        {
            const command = commandFound;
            stack.push(command.substring(2));

            const args = words.filter(word => word !== command && word.trim() !== "" && (word !== '$$' || !word.endsWith('$$')));
           
            if (stack[0] === 'title')
            {
                
                res['title'] += args.join(" ");
               
            }
            if (stack[0] === 'date')            
            {
                res['date'] += args.join(" ");
              
            }
            if (stack[0] === 'content')
            {
                
                if (args.length > 0 && args[0].trim() !== '' && args[0].trim() !== '$$')
                {
                    res['content'] += args.join(" ");
                    res['content'] += "<br>";
                }
            }
            if (words.includes('$$'))
            {
                    stack.pop();
            }
        }
        else{
            if(stack.length > 0){
                let vals = words.filter(word => word.trim() !== "" && (word !== '$$' || !word.endsWith('$$')));
                if(vals.length > 0 && vals[0].trim() !== '' && vals[0].trim() !== '$$')
                {
                    res[stack[0]] += vals.join(" ");
                    res[stack[0]] +="<br>";
                }
                
                if (words.includes('$$'))
                {
                    stack.pop();
                }
            }
        }
       
        i++;
       
    }
    res['content'] = res['content'].replace(
        new RegExp(`#img\\s+(.*?)\\s+(?:#alt\\s+(.*?)\\s*)?##`, "g"),
        `<img class="blogImg" src="$1" alt="$2"/>`
      ).replace(
        /<img class="blogImg" src="(.*?)" alt=""/g,
        `<img class="blogImg" src="$1" alt="$1"`
      );
      
     
      res['content'] = res['content'].replace(
        new RegExp(`#link\\s+(.*?)\\s+(?:#t\\s+(.*?)\\s*)?##`, "g"),
        `<a class="blogLink" href="$1">$2</a>`
      ).replace(
        /<a class="blogLink" href="(.*?)"><\/a>/g,
        `<a class="blogLink" href="$1">$1</a>`
      );
    return JSON.stringify(res);
}
catch(e)
{
console.log(e);
return null;
}

}




var process = document.getElementById("process");
process.addEventListener("click", function() {
    if (process.innerText === "Process")
    {
    var inputText = document.getElementById("inputText").value;
    if (inputText.trim() === "")
    {
        alert("Please enter some text before processing");
        return;
    }
    var processed = processText(inputText);
    if(processed === null){
        alert("Error processing text");
        return;
    }
    document.getElementById("inputText").value = `${processed}`;
    document.getElementById("inputText").setAttribute("readonly", true);
    var btn = document.getElementById("process");
    btn.innerText = "Clear";
    }
    else{
        document.getElementById("inputText").value = "";
        document.getElementById("inputText").removeAttribute("readonly");
        var btn = document.getElementById("process");
        btn.innerText = "Process";
    }
    

});

// copyright 2024 by Aguru Darshan
