var area = document.getElementById('area');
var square = document.getElementsByClassName('square')
var win = document.getElementsByClassName("win")

var player = "X";
var winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    
    [1,4,7],
    [2,5,8],
    [3,6,9],

    [1,5,9],
    [3,5,7]
]

for(var i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='square' pos=" + i + "></div>"
}

for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', squareClick, false)
}

function squareClick () {
    var data = [];

    if(!this.innerHTML) {
        this.innerHTML = player;    
    }
    else {
        document.getElementById("now").innerHTML = "Клетка занята!:C"
        return;
    }

    for(var i in square){
        if(square[i].innerHTML == player){
            data.push(parseInt(square[i].getAttribute('pos')))
        }
    }
    
    
    console.log(data)

    if (chechWin(data)) {
        console.log(player)

        document.getElementById("who").innerHTML = player
        document.querySelector(".win").classList.replace("win", "win1")

    }
    
    if (data.length == 5) {
        document.getElementById("winner").innerHTML = "Ничья!"
        document.querySelector(".who").classList.replace("who", "who1")
        document.querySelector(".win").classList.replace("win", "win1")

    }
    player = player == 'X' ? '0' : 'X';
    document.getElementById("now").innerHTML = "Сейчас ходит: " + player

}

function chechWin(data) {
    for(var i in winIndex) {
        var win = true;

        for(var j in winIndex[i]) {
            var id = winIndex[i][j];
            var ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}