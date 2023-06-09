function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
     // pegue a tag img
     const img = document.querySelector("#profile img")

     // substituir a imagem
        if(html.classList.contains("light")){
    //se tiver light mode, add a img light
    img.setAttribute("src","./assets/css/marrom.png")
        }else{
    //se tiver sem light mode, manter a img normal
    img.setAttribute("src","./assets/css/vinicius-rede.jpg")   
        }
    }
/*
    if(html.classList.contains('light')){
        html.classList.remove('light')
    }else{
        html.classList.add('light')
    }
*/


    // pegue a tag img
    // substituir a imagem
    //se tiver light mode, add a img light
    //se tiver sem light mode, manter a img normal
