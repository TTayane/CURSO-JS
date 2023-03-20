function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.getElementById('res')
    if (fano.value.length == 0 || fano.value >ano) {
        window.alert('[ERRO] Verifique os dados e digite novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero= 'Homem'
            if (idade >=0 && idade<12){
                //criança
                img.setAttribute('src', 'criançaM.xp.png')
            }else if (idade <23){
                //jovem
                img.setAttribute('src', 'jovemMxp.png')
            } else if(idade <50){
                //Adulto
                img.setAttribute('src', 'adultoMxp.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosoMxp.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade<12){
                //criança
                img.setAttribute('src', 'criançaF.xp.png')
            }else if (idade <23){
                //jovem
                img.setAttribute('src', 'jovemFxp.png')
            } else if(idade <50){
                //Adulto
                img.setAttribute('src', 'adultoFxp.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosaFxp.png')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}