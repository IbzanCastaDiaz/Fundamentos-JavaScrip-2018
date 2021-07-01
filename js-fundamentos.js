var nombre="Sacha", apellido ="Lifszyc"
var edad=28

edad="28 años"

console.log("hola " + nombre + " " + apellido)
console.log("tengo " + edad);
var peso =75



//clase dos
var nombre="Sacha", apellido ="Lifszyc"

//modificadores toUpperCase() toLowerCase() charAt() length
var nombreEnMayusculas= nombre.toUpperCase()

nombreEnMayusculas

var apellidosEnMinusculas= apellido.toLowerCase()
apellidosEnMinusculas

var primeraLetraDelNombre=nombre.charAt(0) //(0) indica que letra quieres regresar en este caso la cuenta inica con 0
primeraLetraDelNombre

var cantidadDeLetrasDelNombre= nombre.length
cantidadDeLetrasDelNombre

//si cambiamos el la variale nombre, cantidadDeLetrasDelNombre no se actualiza, la solucion seria invocar nuevamente nombre.length
var nombre="Ibzan"
var cantidadDeLetrasDelNombre= nombre.length
cantidadDeLetrasDelNombre
console.log("Hola " + "soy " + nombre + " y mi nombre tiene " + cantidadDeLetrasDelNombre + " letras");

var primeraLetraDelNombre= nombre.charAt(0)
console.log("Hola " + "soy " + nombre + " y la primer letra de mi nombre es " + primeraLetraDelNombre)


//contatenar dos striming
var nombreCompleto= nombre + " " + apellido
nombreCompleto

//nueva forma de contatenar
var nombreCompleto=`${nombre} ${apellido}`
nombreCompleto

//Cuando se invoca una variable se puede agregar una modificacion ej .toUpperCase()
var nombreCompleto=`${nombre} ${apellido.toUpperCase()}`
nombreCompleto

//ingresar un streming mas pequeño, caracteres de la variable

var str=nombre.charCodeAt(1)+ nombre.charAt(2)
str

var str=nombre.substr(1,2)
str



//Operaciones numericas clase 5

var edad =27
//operacion de incremento edad = edad +1 forma resumida edad +=1
edad = edad + 1
edad +=1
console.log(edad)

var peso =75
peso = peso -2
peso -= 2

var sandwich=2

peso =peso + sandwich


var precioDeVino=200.3
console.log(precioDeVino)
precioDeVino
var total = precioDeVino*3
console.log(total)
//nos da un error en los decimales 600.9000000000001, para solucionar
var total = precioDeVino *100*3/100
total
console.log(total)
// otra solucion para cualquier caso
var total = Math.round(precioDeVino *100*3)/100
total
console.log(total)

//para añadir dicimales utilizamos .toFixed(el numero de decimales que queremos)

var totalStr =total.toFixed(3)
totalStr

//parseFloat transformar o leer un string a un numero
var total2=parseFloat(totalStr)
total2

var pizza= 8
var personas=2
var cantidadDePorcionesPorPersona = pizza /personas
cantidadDePorcionesPorPersona
console.log(cantidadDePorcionesPorPersona)

//funciones clase 6

var nombre="Sacha", edad =28

function imprimirEdad() {
    console.log(`${nombre}tiene ${edad} años`)
}
imprimirEdad
console.log(imprimirEdad)

//ingresar nombre y edad

var nombre="Sacha", edad =28

function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}
imprimirEdad("Vicky", 28)
imprimirEdad("Erick", 24)
imprimirEdad("Darío", 20)


//alcance de las funciones clase 7

var nombre ="Sacha"
function imprimirNombreEnMayusculas() {
    nombre= nombre.toUpperCase()
    console.log(nombre)
}
imprimirNombreEnMayusculas()
//en este ejemplo se modifica la variable global nombre, para evitar ejemplo se puede colocar variables local en la funcion para realizar el cambio unicamente en la funcion

var nombre ="Sacha"
function imprimirNombreEnMayusculas(n) {
    n= n.toUpperCase()
    console.log(n)
}
imprimirNombreEnMayusculas(nombre)

//Objetos clase 8
var nombreSacha ="Sacha"
var nombreDario ="Dario"
function imprimirNombreEnMayusculas(nombre) {
    nombre= nombre.toUpperCase()
    console.log(nombre)
}
imprimirNombreEnMayusculas(nombreSacha)
imprimirNombreEnMayusculas(nombreDario)
//para no realizar este proceso que si son muchos datos que ingresar, es mas funcional utilizar objetos, pues esta hecho para este tipo de procesos
//y este esta compuesto por clave: valor


var sacha={
    nombre:"Sacha",
    apellido: "Lifszyc",
    edad: 28
}
var dario ={
    nombre:"Darío",
    epellido: "Susnisky",
    edad: 27
}
function imprimirNombreEnMayusculas(nombre) {
    nombre= nombre.toUpperCase()
    console.log(nombre)
}
imprimirNombreEnMayusculas(sacha.nombre)
imprimirNombreEnMayusculas(dario.nombre)

//otra forma de escribirlo
var sacha={
    nombre:"Sacha",
    apellido: "Lifszyc",
    edad: 28
}
var dario ={
    nombre:"Darío",
    epellido: "Susnisky",
    edad: 27
}
function imprimirNombreEnMayusculas(persona) {
    var nombre= persona.nombre.toUpperCase()
    console.log(nombre)
}
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

//otra forma
var sacha={
    nombre:"Sacha",
    apellido: "Lifszyc",
    edad: 28
}
var dario ={
    nombre:"Darío",
    epellido: "Susnisky",
    edad: 27
}
function imprimirNombreEnMayusculas(persona) {
    console.log(persona.nombre.toUpperCase())
}
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

//otra forma
var sacha={
    nombre:"Sacha",
    apellido: "Lifszyc",
    edad: 28
}
var dario ={
    nombre:"Darío",
    epellido: "Susnisky",
    edad: 27
}
function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

//Destructurar objetos clase 9
var sacha={
    nombre:"Sacha",
    apellido: "Lifszyc",
    edad: 28
}
var dario ={
    nombre:"Darío",
    epellido: "Susnisky",
    edad: 27
}
function imprimirNombreEnMayusculas(persona) {
    // var nombre=persona.nombre
    var {nombre} =persona
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

//Parámetros como referencia o como valor clase 10
//en esta funcion nos modifica el objeto sacha
var sacha={
    nombre:"Sacha",
    apellido: "Lifszyc",
    edad: 28
}
var dario ={
    nombre:"Darío",
    epellido: "Susnisky",
    edad: 27
}
function imprimirNombreEnMayusculas(persona) {
    var {nombre} =persona
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
function cumpleaños(persona) {
    persona.edad += 1
}
cumpleaños(sacha)
sacha
//otra forma de hacerlo
var sacha={
    nombre:"Sacha",
    apellido: "Lifszyc",
    edad: 28
}
var dario ={
    nombre:"Darío",
    epellido: "Susnisky",
    edad: 27
}
function imprimirNombreEnMayusculas(persona) {
    var {nombre} =persona
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)

function cumpleaños(persona) {
    return {
        ...persona,
        edad:persona.edad +1
    }
}
cumpleaños(sacha)
sacha
var sachaMasViejo=cumpleaños(sacha)
sachaMasViejo
sacha
//como resultado obtendriamos el objeto original y el modificado

//comparaciones en JS clase 11
var x=4, y="4"


var sacha={
    nombre:"Sacha"
}
var otraPersona={
    nombre:"Sacha"
}
sacha==otraPersona
sacha===otraPersona

//en este caso tanto con el == y el === nos da falso, ya que estamos comparando objetos, entonces ningun objeto es igual ya que solo el valor nombre es igual, pero no el objeto
var sacha={
    nombre:"Sacha"
}
var otraPersona={
    ...sacha
}
sacha==otraPersona
//en esta ocacion tambien nos da resultado false, si modificamos otraPersona="pepe" y luego invocamos a sacha, el nombre se cambiara en ambas variables, pues las mismas ocupan el mismo espacio en memoria


//al comparar valores sacha.nombre==otraPersona.nombre si logramos el resultado true
var sacha={
    nombre:"Sacha"
}
var otraPersona={
    ...sacha
}
sacha==otraPersona


//Condicionales clase 12
var sacha ={
    nombre: "Sacha",
    apellido: "Lifszyc",
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false 
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
    if(persona.ingeniero===true){
        console.log("Ingeniero")
    }
    if(persona.cocinero===true){
        console.log("Cocinero")
    }if(persona.cantante===true){
        console.log("Cantante")
    }if(persona.dj===true){
        console.log("Dj")
    }if(persona.guitarrista===true){
        console.log("Guitarrista")
    }if(persona.drone===true){
        console.log("Piloto de Drones")
    }
}
imprimirProfesiones(sacha)






