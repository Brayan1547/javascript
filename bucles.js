// colcoar los nombre etc

const nombres = [

    { nombre: "juan carlos", apellido: "Gomes ", edad: 20, altura: 1.75, peso: 78 },

    { nombre: "Mateo", apellido: "Ramírez", edad: 22, altura: 1.80, peso: 75 },

    { nombre: "Santiago", apellido: "López", edad: 19, altura: 1.70, peso: 68 },
]

for (let i = 0; i < nombres.length; i ++) {

    console.log(`Nombre: ${nombres[i].nombre} IMC: ${calculateIMC(nombres[i].peso, nombres[i].altura).toFixed(2)}`);

}

// calcular el índice de masa corporal formula

function calculateIMC (peso , altura){
    return peso/ (altura **2);
}

