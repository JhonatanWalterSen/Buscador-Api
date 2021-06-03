// add & remove
const icon = document.querySelector('.icon')
const search = document.querySelector('.section--search')
icon.onclick = function(){
    search.classList.toggle('active')
}


const formulario = document.querySelector('#formulario');
// const boton = document.querySelector('#boton');
const url = 'https://restcountries.eu/rest/v2/all';
const resultado = document.querySelector('#elementos');
const filtrar = ()=>{
    resultado.innerHTML= '';
    fetch(url)
    .then(response => response.json() )
    .then(data =>{
        // console.log(formulario.value)
        const texto = formulario.value.toLowerCase();
        console.log(texto)
        for(let pais of data){
             // console.log(pais)
            let name = pais.name.toLowerCase();
            // console.log(name)
            if(name.indexOf(texto) !== -1){
                console.log('ingresó')
                resultado.innerHTML +=
                `<div class="card showCards__details">
                <div class="flag">
                    <img src="${pais.flag}" alt="">
                </div>
                <div class="text-center">
                    <p><b>${pais.name} - ${pais.capital}</b></p>
                </div>
                <div>
                    <p><b>NOMBRE COMPLETO:</b> ${pais.altSpellings[2]}</p>
                </div>
                <div>
                    <p><b>Región:</b> ${pais.region}</p>
                </div>
                <div>
                    <p class="limit"><b>PAISES LIMÍTROFES:</b> <span class="limitrofe">${pais.borders}</span></p>
                </div>
                <div>
                    <p><b>LENGUA:</b> ${pais.languages[0].nativeName}</p>
                </div>
                <div class="coin">
                    <p><b>MONEDA:</b> ${pais.currencies[0].name}</p>
                    
                    <p><b>SÍMBOLO:</b> ${pais.currencies[0].symbol}</p>
                </div>
                </div>
                `
                ;
            }
        }
        console.log('CARGADO')
        if(resultado.innerHTML === ''){
            resultado.innerHTML += `<p class="not-find">Pais no encontrado </p>`;
        }
    }) 
}
// boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);
// filtrar();




