var calculer = document.querySelector('.bttntwo');
var calculer1 = document.querySelector('.bttntwo1');
var calculer2 = document.querySelector('.bttntwo2');
var value1 = document.querySelector('.result');
var value2 = document.querySelector('.result1');
var value3 = document.querySelector('.result2');
var poids = document.getElementById('poids');
var  Frais = document.querySelector('.input');


fetch("data.json").then(Response => Response.json())
.then(data => {
    var distance = data.marjane.Légumes.massafa
    for(e in distance){
        Frais.innerHTML += ` <option value="${e}">${e}</option>`
    }
calculer.addEventListener('click',function(){
    if(poids.value !== ''){
    let fraisv2 = 0
    switch(Frais.value){
        case "moins de 15 km":
            fraisv2 =3
            break;
        case "entre 15km et 30km":
            fraisv2 = 5
            break;
        case "plus de 30km":
            fraisv2 = 12
            break;        
    }
    console.log(fraisv2)
    console.log(Frais.value)
    
    value1.innerHTML =`MAD ${ +poids.value + data.marjane.Légumes.poids + fraisv2}`
    console.log( +poids.value + data.marjane.Légumes.poids + fraisv)
    value2.innerHTML =`MAD ${ +poids.value + data.marjane.fruits.poids + fraisv2}`
    value3.innerHTML =`MAD ${ +poids.value + data.marjane.zitoun.poids + fraisv2}`

}else{
    alert("completer les donez")
}}
)

calculer1.addEventListener('click',function(){
    if(poids.value !== ''){
    let fraisv2 = 0
    switch(Frais.value){
        case "moins de 15 km":
            fraisv2 =3
            break;
        case "entre 15km et 30km":
            fraisv2 = 5
            break;
        case "plus de 30km":
            fraisv2 = 12
            break;        
    }
    console.log(fraisv2)
    console.log(Frais.value)
    
    value1.innerHTML =`MAD ${ +poids.value + data.marjane.Légumes.poids + fraisv2}`
    console.log( +poids.value + data.marjane.Légumes.poids + fraisv)
    value2.innerHTML =`MAD ${ +poids.value + data.marjane.fruits.poids + fraisv2}`
    value3.innerHTML =`MAD ${ +poids.value + data.marjane.zitoun.poids + fraisv2}`

}else{
    alert("completer les donez")
}}
)

})


