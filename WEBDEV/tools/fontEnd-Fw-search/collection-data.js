const fwDataList = [
    {
        id: 1,
        name: "Tailwind CSS",
        description: "One of the most used UI library, Tailwind CSS is a utility-first CSS framework that allows you to style your web application without writing any CSS.",
        hrefId: "tailwindcss",
        cat: "ui"
    },
    {
        id: 2,
        name: "Chakra UI",
        description: "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.",
        hrefId: "chakra-ui",
        cat: "ui"
    },
    {
        id: 3,
        name: "Bootstrap",
        description: "Bootstrap is a free and open-source CSS framework that provides a wide range of pre-built components and styles for building responsive web applications.",
        hrefId: "bootstrap",
        cat: "ui"
    },
    {
        id: 4,
        name: "Material UI",
        description: "Material UI is a React component library that implements Google's Material Design.",
        hrefId: "material-ui",
        cat: "ui"
    },
    {
        id: 5,
        name: "shadcn UI",
        description: "shadcn UI is a collection of accessible, composable, pre-styled components.",
        hrefId: "shadcn-ui",
        cat: "ui"
    },
    {
        id: 6,
        name: "Uiverse",
        description: "uiverse is a collection of accessible, composable, pre-styled components.",
        hrefId: "uiverse",
        cat: "ui-tools"
    },
    {
        id: 7,
        name: "Flowbite",
        description: "flowbite is a collection of accessible, composable, pre-styled components.",
        hrefId: "flowbite",
        cat: "ui-tools"
    },
    {
        id: 8,
        name: "Next.js",
        description: "Next.js is a React framework for server-rendered and statically-exported websites.",
        hrefId: "nextjs",
        cat: "framework-fw"
    },
    {
        id: 9,
        name: "Vue.js",
        description: "Vue.js is a progressive JavaScript framework for building user interfaces.",
        hrefId: "vuejs",
        cat: "framework-fw"
    },
    {
        id: 10,
        name:"Vite",
        description: "vite is a build tool for the modern web.",
        hrefId: "vite",
        cat: "fw-build"
    },
 

]

const fwContentData = {
    "tailwindcss" : {
        name:"Tailwind CSS",
        installation: "> npm install tailwindcss<br> > npx tailwindcss init",
        usage: "You can use its predefined class like:<br>class='bg-blue-500 text-white p-4 rounded-lg shadow-lg'<br>or you can use its utility classes like:<br>class='bg-gradient-to-r from-blue-500 to-pink-500 p-4 rounded-lg shadow-lg'",
        documentation: "https://tailwindcss.com/docs/installation",
        cdn: `<script> src="https://cdn.tailwindcss.com"</script>`,
    },
    "chakra-ui" : {
        name:"Chakra UI",
        installation: "> npm install @chakra-ui/react @emotion/react",
        usage:`You can use its components like:<br>
        import { Button } from "@/components/ui/button"<br>
import { HStack } from "@chakra-ui/react"<br>
const Demo = () => {<br>
  return (<br>
   &lt;HStack&gt;<br>
      &lt;Button&gt;Click me&lt;/Button&gt;<br>
      &lt;Button&gt;Click me&lt;/Button&gt;<br>
    &lt;/HStack&gt;<br>
  )<br>
}`,
        documentation: "https://chakra-ui.com/docs/getting-started",
        cdn: `<script> src="https://unpkg.com/@chakra-ui/react@1.8.8/dist/umd/index.min.js" crossorigin="anonymous"></script>$$
        <script> src="https://unpkg.com/@emotion/react@11.7.1/dist/umd/emotion.production.min.js" crossorigin="anonymous"></script>`,
    },
    "bootstrap" : {
        name:"Bootstrap",
        installation: "> npm install bootstrap",
        usage: `You can use predefined classes or attributes like:<br>
        &lt;button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"&gt;<br>
        &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;<br>
      &lt;/button&gt;`,
        documentation: "https://getbootstrap.com/docs/5.1/getting-started/introduction/",
        cdn: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>$$
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>`,
    },
    "material-ui" : { 
        name:"Material UI",
        installation: "> npm install @mui/material @emotion/react @emotion/styled", 
        usage: `You can add components to ur project like:<br>import * as React from 'react';<br>import Button from '@mui/material/Button';<br>
export default function ButtonUsage() {<br>
  return    &lt;Button variant="contained"&gt;Hello world&lt;/Button&gt;;<br>
}`,
        documentation: "https://mui.com/getting-started/installation/",
        cdn: `<script src="https://cdnjs.cloudflare.com/ajax/libs/mui/3.7.1/js/mui.min.js" integrity="sha512-5LSZkoyayM01bXhnlp2T6+RLFc+dE4SIZofQMxy/ydOs3D35mgQYf6THIQrwIMmgoyjI+bqjuuj4fQcGLyJFYg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
    },
    "shadcn-ui" : {
        name:"shadcn UI",
        installation: "Depends on framework you are using, for next.js<br>> npx shadcn@latest init",
        usage: "You can add components to ur project like:<br> > npx shadcn@latest add button",
        documentation: "https://ui.shadcn.com/docs",
        cdn: "",
    },
    "nextjs" : {
        name:"Next.js",
        installation: "> npx create-next-app@latest",
        usage: `Its a framework for server-rendered and statically-exported websites.<br>You can visit documentation for more details.<br>Example code:<br>
        import { Html, Head, Main, NextScript } from 'next/document'<br>
export default function Document() {<br>
  return (<br>
    &lt;Html&gt;<br>
      &lt;Head /&gt;<br>
      &lt;body&gt;<br>
        &lt;Main /&gt;<br>
        &lt;NextScript /&gt;<br>
      &lt;/body&gt;<br>
    &lt;/Html&gt;<br>
  )<br>
}`,
        documentation: "https://nextjs.org/docs/getting-started",
        cdn: "",
    },
    "vuejs" : {
        name:"Vue.js",
        installation: ">  npm create vue@latest",
        usage: `Its a framework for building user interfaces.<br>You can visit documentation for more details.<br>Example code:<br>
            &lt;script setup&gt;<br>
import { ref } from 'vue'<br>
const count = ref(0)<br>
&lt;/script&gt;<br>
&lt;template&gt;<br>
  &lt;button @click="count++"&gt;Count is: {{ count }}&lt;/button&gt;<br>
&lt;/template&gt;<br>
&lt;style scoped&gt;<br>
button {<br>
  font-weight: bold;<br>
}<br>
&lt;/style&gt;<br>`,
documentation: "https://vuejs.org/guide/introduction.html",
        cdn: `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`,
    },
    "vite":{
        name:"vite",
        installation: "> npm create vite@latest",
        usage: `Its a build tool for the modern web.<br>You can visit documentation for more details.`,
        documentation: "https://vitejs.dev/guide/",
    },
    "uiverse":{
        name: "Uiverse",
        installation: "There is no installation required",
        usage:"visit the website, search for the component you want and copy the code", 
        documentation: "https://uiverse.io/"
    },
    "flowbite":{
        name: "Flowbite",
        installation: "> npm install flowbite",
        usage: `It works on top of tailwindcss, so make sure you have tailwindcss installed.<br>Add flowbite in plugins in tailwind.config.js as:<br> plugins: [require('flowbite/plugin')] <br>  content: ["./node_modules/flowbite/**/*.js"] <br> Then you can use its built-in components. For more details please visit documentation.`,
        documentation: "https://flowbite.com/docs/getting-started/introduction/",
        cdn: `<link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet" />$$
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>`
    }

}

export {fwDataList, fwContentData};