function comprobador(tablero) {
    var salida = salidas(tablero)
    var x = prompt("Donde quieres introducir la X? posiciones " + "\n" + "1, 2, 3 " + "\n" + "4, 5, 6" + "\n" + "7, 8, 9")
    if (x == "1" && tablero[0][0] != "O") {
        tablero[0][0] = "X"
    }
    else if(x == "2" && tablero[0][1] != "O") {
            tablero[0][1] = "X"
    }
    else if(x == "3" && tablero[0][2] != "O") {
            tablero[0][2] = "X"
    }
    else if(x == "4" && tablero[1][0] != "O") {
            tablero[1][0] = "X"
    }
    else if(x == "5" && tablero[1][1] != "O") {
            tablero[1][1] = "X"
    }
    else if(x == "6" && tablero[1][2] != "O") {
            tablero[1][2] = "X"
    }
    else if(x == "7" && tablero[2][0] != "O") {
            tablero[2][0] = "X"
    }
    else if(x == "8" && tablero[2][1] != "O") {
            tablero[2][1] = "X"
    }
    else if(x == "9" && tablero[2][2] != "O") {
        tablero[2][2] = "X"
        }
        else {
            alert("La casilla está ocupada")
        }
        salida = salidas(tablero)
        console.log(salida)
    var O = prompt("Donde quieres introducir la O? posiciones " + "\n" + "1, 2, 3 " + "\n" + "4, 5, 6" + "\n" + "7, 8, 9")
    if(O == "1" && tablero[0][0] != "X") {
        tablero[0][0] = "O"
    }
    else if(O == "2" && tablero[0][1] != "X") {
        tablero[0][1] = "O"
    }
    else if(O == "3" && tablero[0][2] != "X") {
        tablero[0][2] = "O"
    }
    else if(O == "4" && tablero[1][0] != "X") {
        tablero[1][0] = "O"
    }
    else if(O == "5" && tablero[1][1] != "X") {
        tablero[1][1] = "O"
    }
    else if(O == "6" && tablero[1][2] != "X") {
        tablero[1][2] = "O"
    }
    else if(O == "7" && tablero[2][0] != "X") {
        tablero[2][0] = "O"
    }
    else if(O == "8" && tablero[2][1] != "X") {
        tablero[2][1] = "O"
    }
    else if(O == "9" && tablero[2][2] != "X") {
        tablero[2][2] = "O"
    }
    else {
        alert("La casilla está ocupada")
    }
    salida = salidas(tablero)
    console.log(salida)
    return tablero
}