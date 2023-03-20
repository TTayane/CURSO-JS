function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    msg.innerHTML= `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12){
        //BOM DIA!
        img.src = 'manhaxp.png'
        document.body.style.background= '#ffc955'
    } else if (hora >= 12 && hora <=18){
        //BOA TARDE!
        img.src = 'novatarde.jpg'
        document.body.style.background= '#f3784b'
    } else {
        //BOA NOITE!
        img.src = 'noitexp.png'
        document.body.style.background= '#5577e6e1'
    }
        
}
