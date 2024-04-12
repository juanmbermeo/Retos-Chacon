//Inicializacio de varibles
let TarjetasDestapadas = 0;
let Tarjeta1 = null;
let Tarjeta2 = null;
let PrimerResultado = null;
let SegundoResultado = null;

//Generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

//Funcion principal
function destapar(id){
    TarjetasDestapadas++;
    console.log(TarjetasDestapadas);

    if(TarjetasDestapadas == 1){
        //mostrar el primer numero 
        Tarjeta1 = document.getElementById(id);
        PrimerResultado = numeros[id]
        Tarjeta1.innerHTML = numeros[id];

        //Deshabilitar primer boto
        Tarjeta1.disabled = true;
    }
    else if(TarjetasDestapadas ==2){
        //Mostrar segundo numero
        Tarjeta2 = document.getElementById(id);
        SegundoResultado = numeros[id];
        Tarjeta2.innerHTML = SegundoResultado;

        //Deshabilitar segundo boton
        Tarjeta2.disabled = true;
    }
}