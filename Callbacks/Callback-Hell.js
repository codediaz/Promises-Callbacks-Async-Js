const paises = [] 

function nuevopais(pais,callback){
    paises.push(pais)
    console.log(`AGREGADO: ${pais}`);
    callback()

}

function mostrarPais(){

}

function iniciarCallBackHell(){

    setTimeout(()=>{
        nuevoPais('Alemania', mostrarPais)
    },3000)


}

iniciarCallBackHell();


