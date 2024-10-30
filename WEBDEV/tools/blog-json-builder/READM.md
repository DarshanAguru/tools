# Blog JSON Builder

  This is a tool to build a json file for blogging purposes. It will take your text input and convert it into a json output with the following structure:

 ```
 {
    "title": "Your Title",
    "date": "Your Date",
    "content": "Your Content"
  }
  ``` 
  Made using tailwindcss for styling and javascript for functionality. The tool is designed to be used on a web browser in desktop mode.

url : https://darshanaguru.github.io/tools/tools/blog-json-builder/blog-json-builder.html

## Usage
You can enter your text in the textarea and click on the "Process" button. The json output will be generated and you can copy and paste it.
- For title you can enter \$$title 'your title here' $$
- For date you can enter \$$date 'your date here' $$
- For content you can enter \$$content 'your content here' $$
- For images you can add #img 'your image link or name here' #alt 'your alt text here' ##
- For links you can add #link 'your link here' #t 'your text here' ##

*Images and Links will be replaced by respective html tags with common class "blogImage" for images and "blogLink" for links respectively.
