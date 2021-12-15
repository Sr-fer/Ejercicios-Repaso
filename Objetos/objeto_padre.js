var Instrumento = function() {
}

Instrumento.prototype.timbre = ""
Instrumento.prototype.nombre = ""
Instrumento.prototype.emitirsonido = function() {
console.log("Que sonido más chulo emite " + this.nombre)
}

var Cuerda = function(nombre, cuerdas) { 
    this.nombre = nombre   
    this.cuerdas = cuerdas
}

Cuerda.prototype.caracteristicas = function() { 
console.log("Suena bien estas cuerdas " + this.cuerdas + " del/de la/el " + this.nombre)
}

var Viento = function(nombre, fuerza) {
    this.nombre = nombre
    this.fuerza = fuerza
}

Viento.prototype.caracteristicas = function() { 
    console.log("Que " + this.fuerza + " suena el/la " + this.nombre)
    }

var Percusion = function(nombre, material) {
    this.nombre = nombre
    this.material = material
}

Percusion.prototype.caracteristicas = function() { 
    console.log("Este/Esta " + this.nombre + " esta hecha/hecho de " + this.material)
    }

for (id in Instrumento.prototype){
Cuerda.prototype[id] = Instrumento.prototype[id];
}

for (id in Instrumento.prototype){
Viento.prototype[id] = Instrumento.prototype[id];
}

for (id in Instrumento.prototype){
Percusion.prototype[id] = Instrumento.prototype[id];
}

var Guitarra = new Cuerda("Guitarra", "finas") 
var Bajo = new Cuerda("Bajo", "gruesas") 
//Cuerda.prototype.nombre = " la Guitarra"
var Flauta = new Viento("Flauta", "suave")
var Oboe = new Viento("Oboe", "fuerte")
//Viento.prototype.nombre = " la Trompeta"
var Bombo = new Percusion("Bombo", "Cuero")
var Marimba = new Percusion("Marimba", "Tela")
//Percusion.prototype.nombre = " el Xilofono"


Guitarra.caracteristicas()
Bajo.caracteristicas()
Flauta.caracteristicas()
Oboe.caracteristicas()
Bombo.caracteristicas()
Marimba.caracteristicas()

Guitarra.emitirsonido()
Flauta.caracteristicas()
Bombo.caracteristicas()

//Cuerda.prototype.emitirsonido()
//Viento.prototype.emitirsonido()
//Percusion.prototype.emitirsonido()