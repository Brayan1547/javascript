// colcoar los nombre etc

const nombres = [

    { nombre: "juan carlos", apellido: "Gomes ", edad: 20, altura: 1.75, peso: 78 },
    { nombre: "Mateo", apellido: "Ramírez", edad: 22, altura: 1.80, peso: 75 },
    { nombre: "Santiago", apellido: "López", edad: 19, altura: 1.70, peso: 68 },
]

for (let i = 0; i < nombres.length; i ++) {

    let imc = calculateIMC(nombres[i].peso, nombres[i].altura);
    console.log(`Nombre: ${nombres[i].nombre} IMC: ${calculateIMC(nombres[i].peso, nombres[i].altura).toFixed(2)}`);
    diagnosticar( imc );
}

// calcular el índice de masa corporal formula
function calculateIMC (peso , altura){
    return peso/ (altura **2);
}


function diagnosticar (imc) {
    if( imc < 18.5 ) {
        console.log ('peso inferior al normal');
    }
    else if (imc >= 18.5 && imc < 24.9 ){
        console.log ('normal');
    }
    else if (imc >= 25 && imc <29.9) {
        console.log ('peso superior al normal');
    }
    else {
        console.log('obesidad')
    }       
}
