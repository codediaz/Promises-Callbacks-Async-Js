const paises = [ 'Francia', 'Spain', 'Portugal', 'Australia']

function mostarPaises(){
    setTimeOut(()=>{
        paises.forEach(pais => {
            console.log(paises)
        })


    },1000);
}