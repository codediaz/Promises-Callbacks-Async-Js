const paises = [ 'Francia', 'Spain', 'Portugal', 'Australia'];

function mostarPaises(){
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });


    },1000);
}
mostarPaises();