function main() {
var array = arrays(array)
var Guitarra = new Cuerda("Guitarra", "finas") 
var Bajo = new Cuerda("Bajo", "gruesas") 
var Flauta = new Viento("Flauta", "suave")
var Oboe = new Viento("Oboe", "fuerte")
var Bombo = new Percusion("Bombo", "Cuero")


array[0] = Guitarra
array[1] = Bajo
array[2] = Flauta
array[3] = Oboe
array[4] = Bombo

array[0].emitirsonido()
array[1].emitirsonido()
array[2].emitirsonido()
array[3].emitirsonido()
array[4].emitirsonido()

}
main()
