// document.querySelector(".container").innerText
// 'HTML box 1\n\nHTML box 2'

// document.querySelector(".container").outerText
// 'HTML box 1\n\nHTML box 2

// document.querySelector(".container").innerHTML
// '\n        <p class="box">HTML box 1 </p>\n        <div class="box">HTML box 2 </div>\n

// document.querySelector(".container").outerHTML
// '<div class="container">\n        <p class="box">HTML box 1 </p>\n        <div class="box">HTML box 2 </div>\n    </div>'

// document.querySelector(".container").tagName
// 'DIV'

// document.querySelector(".box").tagName
// 'P'

// document.querySelector(".container").nodeName
// 'DIV'

// document.querySelector(".box").hasAttribute("style")
// true

// document.querySelector(".box").getAttribute("style")
// 'display: flex;'

// document.querySelector(".box").setAttribute("style", "display: inline")
// undefined

// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

// document.querySelector(".box").removeAttribute("style")
// undefined

// .document.designMode = "on"  Use for edit directly on page 

// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']

// document.querySelector(".container").className
// 'container red bg-green'

// document.querySelector(".container").classList.add("tabish")
// undefined

// document.querySelector(".container").classList.remove("tabish")
// undefined