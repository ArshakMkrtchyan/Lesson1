let body = document.body;
body.style.background = '#e5e5e5'
body.style.padding = '0'
body.style.margin = '0'

let cont = body.children[0]
cont.style.width = '550px'
// cont.style.border = '2px solid'
cont.style.margin = '0 auto'
cont.style.textAlign = 'center'
cont.children[0].style.fontSize = '45px'
cont.children[1].style.fontSize = '18px'

let divs = body.children[1]
divs.style.width = '1000px'
// divs.style.border = '2px solid'
divs.style.margin = '0 auto'
// divs.style.display = 'flex-wrap'
// divs.style.display.flex = 'flex-wrap'

for(let i = 0; i < divs.children.length; i++){
    divs.children[i].style.width = '320px'
    divs.children[i].style.height = '180px'
    divs.children[i].style.background = 'white'
    // divs.children[i].style.display = 'inline-block'
    divs.children[i].style.margin = '10px'
    divs.children[i].style.padding = '10px'
    // divs.children[i].style.border = '2px solid'
    // divs.children[i].style.justifyContent = 'center'
    divs.children[i].style.textAlign = 'center'
}