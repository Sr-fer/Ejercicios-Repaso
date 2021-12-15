function main () {
var jugar = prompt("Quieres Jugar al 3 en raya? 1:Si 2:No")
var tablero = Tablero_3nr()
var salida = salidas(tablero)
if(jugar == 2) {
alert("Adios!")
}
else if(jugar == 1) {
console.log(salida)
for(var i = 0; i < 5; i++) {
tablero = comprobador(tablero)
}
}
}
main()