const paises = [] 

function nuevoPais(pais,callback){
    paises.push(pais)
    console.log(`AGREGADO: ${pais}`);
    callback()

}

function mostrarPais(){
    console.log(paises)

}

function iniciarCallBackHell(){

    setTimeout(()=>{
        nuevoPais('Ecuador', mostrarPais)
    },3000)


}

iniciarCallBackHell();


