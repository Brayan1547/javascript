// console.log("hola")


// 1_PRACTICA

// let edad = Number(prompt ("dime tu nombre"))
// console.log(edad)

// let nombre = prompt ("cual es tu nombre");

// let edad = Number (prompt ("cual es tu edad"));

// let correo = prompt ( "cual es tu correo");

// console.log(nombre,edad,correo);



// 2_PRACTICA

// let nombre = prompt ("cual es tu nombre")

// let precio =  prompt ("el precio es de :") 

// let descuento = Number(prompt ("esgoje tu descuento"))

// let precioDe=(precio*descuento)/100
// alert ( "tu precio con descuento es del" + precioDe)

// let precioF=(precio-precioDe)
// alert("tu precio final es de" + precioF)


// let m = Number (prompt("dame tu numero en metros"))



// metros a kilometros

// let m = Number (prompt("metros"))
// let km = (m/1000)
// alert (km+"kilometros")


// kilometros a metros

// let km2 = Number(prompt("kilometros"))
// let m2 = (km2*1000)
// alert (m2+" metros")


// convertir a edad canina

// let edad = Number(prompt("cual es tu edad humana"))
// let canina = (edad*7)
// alert (canina+"edad")


// convertir de peso a dolares

// let pesos = Number(prompt("pesos colombianos"))
// let dolares = (pesos*0.00027)
// alert (dolares+" pesos")

// let dolar = Number(prompt("dolares"))
// let cop = (dolar*3.694)
// alert (cop+ " dolar")


// convertir de grados celsios a farenheit

// let celsios = Number(prompt("celsios a farenheit"))
// let farenheit = (celsios*9/5)+ 32
// alert (farenheit+ "celsios")

// let farenheit1 = Number(prompt("farenheit a celsios"))
// let celsios1 = (farenheit1-32)*5/9
// alert(celsios1+ "farenheit1")


// calcular el area de un cuadrado

// let lado = Number(prompt ("ingresa la medida de un lado del cuadrado"))
// let area = (lado * lado)
// alert("el area de un cuadraro es:"+ area)

// calcular el perimetro de un cuadrado

// let p = Number(prompt("perimetro de un cuadrado"))
// let l = (p*4)
// alert(l+ "p")


// convertir de minutos segundos 

// let minutos = Number(prompt("minutos a segundos"))
// let segundos = (minutos*60)
// alert (segundos+ "segundos")


// convertir de segundos a minutos

// let segundos1 = Number(prompt("de segundos a minutos"))
// let minutos1 = (segundos1/60)
// alert(minutos1+ "minuto1")


// area de un triangulo

// let b = Number(prompt("ingresa la base del triangulo"))
// let h = Number(prompt("ingresa la altura del triangulo"))
// let area = (b*h)/2
// alert(area)


// convertidor de milimetros a centimetros

// let milimetros = Number(prompt("ingresa los milimetros"))
// let centimetros = (milimetros/10)
// alert(centimetros + "cm")




// let nombre = 'juan'
// let edad = '33'
// let correo = 'juan@gmail.com'

// console.log ('hola, tu nombre es: ' + nombre + 'tienes' + edad + 'años y tu correo es:' + correo)



// let juan = (prompt("tiene que pagar el doble porque fue el que mas comio"))
// let personas = (prompt(""))

// let juan = (prompt("cuanto  fue costo la cena"))

// cual fue el que mas comio

// numero de peronas



// ejercicio en clase

// let peronas = Number(prompt("numero de perosnas"));
// let comida = (prompt("¡quien fue el que mas comio?"));
// let valor = Number(prompt(" el valor de la cena fue de"));

// let pagoNormal = valor/(peronas + 1);
// let pagoDoble = pagoNormal * 2

// console.log ("numero de personas:" + peronas );
// console.log ("valor total:" + valor)
// console.log ("los que pagan normal ponen:" + pagoNormal)
// console.log ("el que comio mas:" + comida +  "paga el doble" + pagoDoble)



// usuario un monto , cauntos meses, despues de 6 meses vas a gnar de inteeres al 10 %

// let monto = Number (prompt("cuanta plata va meter"))
// let meses = Number (prompt("cuantos meses"))
// let interesAldies = 0.10

// let totalInteres = monto * interesAlDies + meses;

// let montoTotal = monto + totalInteres

// alert("En" + meses + "meses ganaras" + totalInteres + "por interes")
// alert("tu saldo total sera de" + montoTotal)


// agregar 3 producatos y que mostrara cuantos avian

// let producto = [];

// let pro1 = prompt ('ingresa el objeto_1')
// let pro2 = prompt ('ingresa el objeto_2')
// let pro3 = prompt ('ingresa el objeto_3')

// producto.push(pro1, pro2, pro3)

// console.log(producto)


//5 notas y sacar el promedio es de ?

// let notas = [];

// let nota1 =Number(prompt ('ingresa la nota1'))
// let nota2 =Number(prompt ('ingresa la nota2'))
// let nota3 =Number(prompt ('ingresa la nota3'))
// let nota4 =Number(prompt ('ingresa la nota4'))
// let nota5 =Number(prompt ('ingresa la nota5'))

// notas.push(nota1, nota2, nota3, nota4, nota5)

// let promedio = (notas[0] +notas[1] + nota1[2] + nota1[3] + nota1[4] ) / notas.length

// console.log('el promedio es de:' + promedio)


//cuanto costo el producto si el produnto cuesta menos de 100 le van a dar un aumenta un 10% (por costos de envio)si cuesta entre 100 y 200 se hace un descuento del 10% pero si es mayor de 200 se hace un descuento del 25%


// let precio = Number(prompt('precio del producto'));


// if (precio < 100 ) {
//     precioFinal = (precio * 0.80) + precio
//     console.log('tu precio ' +  precioFinal)


// } else if (precio <= 200) {
//     precioFinal = (precio * 1.10)
//     console.log('tu precio ' +  precioFinal)

// } else if (precio > 200){
//     precioFinal = (precio * 1.25)
//     console.log('tu precio ' +  precioFinal)


// }else{
// console.log('el precio no existe')}


// let  Number1= Number(prompt('dijite un numero'))
// let Number2= Number (prompt ('dijite otro numero'))

// let  selecciona = Number(prompt(`
//     que operacion quieres hacer?
//     1 = suma 
//     2 = resta 
//     3 = multiplicacion
//     4 = dividir
// `))


// piedra pepel o tijera

// let options = ['piedra', '´pepel', 'tijera'];
// let azar = Math.floor(Math.random() * 3);
// let pc = options [azar]

// let user = prompt('piedra, papel o tijera?');

// if(user === pc) {

// } else if (
//     (user == 'tijera' && pc == 'papel')||
//     (user == 'piedra' && pc == 'tijera')||
//     (user == 'papel' && pc == 'piedra')
    
// ){
//     console.log('ganaste')

// } else{
//     console.log('perdiste')
// }


// pares y impares

// let numeros = [8, 18, 21, 57, 48, 36, 71, 5] ;
// let pares = [] ;
// let impares = [] ;

// for(i =0 ; i < numeros.length ; i++){
//     if(numeros[i] % 2 === 0){ 
//     pares.push(numeros[i])
// } else {
//     impares.push(numeros[i])
// }
// }

// console.log ("los numeros pares son" + pares)
// console.log ("numeros impares son" + impares)



// tablas de multiplicar

// let tabla = Number (prompt('ingresa la tabla')); 
// let rango = Number(prompt('ingresa el limite '))

// if( tabla < 1 || rango < 1 ){
//     console.log('los valores deben ser posotivos');
// } else if(tabla > 10) {
//     console.log('la tabla debe ser entre 1 y 10');
// } else {
//     for(let i = 1 ; i <=rango ; i++){
//         console.log(` ${tabla} * ${i} = ${i*tabla}`)
//     }
// }


// let numeros = [1, 5, 7, 8, 18, 26, 34] ;
// let suma = 0 ;
// let max = 0 ;

// for(let i = 0 ; 1 < numeros.length ; i++) {
//     let num = numeros [i]
//     suma = suma + num

//     if(max < num) {
//         max = num
//     }
// }
// console.log('la suma es' + suma)
// console.log('el mayor es' + max)



// let palabras = ["sol", "luna", "estrella", "cielo", "mar", "tierra", "fuego", "aire", "nube", "viento"];
// let larga = palabras [0];
// let corta = palabras [0];


// 1.mostrar cuantas palabras tiene cada palabra

// for(let i = 0 ; i < palabras.length ; i++){ 
//     let palabra =  palabras [i];
//     console.log(`la palabra ${palabra} tiene ${palabra.length} letras`);

// 2.mostrar la palabra mas corta y mas larga

// if(palabra.length > larga.length) {
//     larga = palabra; }
    
//     if (palabra.length < corta.length) {
//         corta = palabra;
//     }
    
// }

// console.log ("palabra mas larga:" , larga);
// console.log ("la palabra mas corta:" , corta);




// const estudiantes = [
//   { nombre: "Juan", apellido: "Pérez", nota: 2.2 },
//   { nombre: "María", apellido: "Gómez", nota: 3.8 },
//   { nombre: "Carlos", apellido: "Rodríguez", nota: 4.2 },
//   { nombre: "Ana", apellido: "Martínez", nota: 5.0 },
//   { nombre: "Luis", apellido: "Fernández", nota: 1.5 }
// ];

// for (let i = 0 ; i < estudiantes.length; i++){
//     let estudiante = estudiantes [i] ;
//      if (estudiante.nota >= 3){
//           console.log(`el estudiante ${estudiante.nombre} ${estudiante.apellido} pasó ${estudiante.nota}`);
//      } else {
//         console.log(`el estudiante`) $ {estudiante.nombre} ${estudiante.apellido} perdio 
//      }

// } 

// switch (..) {
//      case 1:
//           console.log('...')
//           break;
// }


// let azar = Math.floor( (Math.random() *10 ) +1 );

// let estado = true
// let intentos = 1;


// while (estado){
//      let n = Number(prompt ('Digite un numero'));
     
//      if(n === azar) {
//           alert('ganaste en el intento: ${intentos}');
//           estado = false;

//      } else if (intentos >=5) {
//           alert('perdiste, ya no tienes mas intentos');
//           estado = false

//      } else {
//           alert ('ese no era')
//      }
      
//      intentos++
// }


// dijite un mes : N5
// que estacion es :?

// un año es visiesto

let mes = Number(prompt('ingresa un mes '));

switch (mes) {
     case 1:  case 2:  case 12:
          alert(`es invierno`)
          break;
        
     case 3: case 4: case 5:
          alert(`estacion primavera`)
          break;
     
     case 6: case 7: case 8:
          alert(`estacion verano`)
   
     case 9: case 10: case 11:
          alert(`estacion otoño`)
          break;
          
     default : 
     alert(`no existe año`)
     
}

