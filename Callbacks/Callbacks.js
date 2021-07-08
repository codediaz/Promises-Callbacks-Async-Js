const paises = [ 'Francia', 'Spain', 'Portugal', 'Australia'];

function nuevoPais(pais,callback){
   setTimeout(() =>{
       paises.push(pais);
       callback()
   },2000) 

}


function mostarPaises(){
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });


    },1000);
}
mostarPaises();

nuevoPais('Ecuador', mostarPaises)

//Callkback => Funcion dentro de una funcion, el callback llama la otra función, agrega un valor en este caso 