//first row
const bt1 = document.getElementById("b1");
const bt2 = document.getElementById("b2");
const bt3 = document.getElementById("b3");
//second row
const bt4 = document.getElementById("b4");
const bt5 = document.getElementById("b5");
const bt6 = document.getElementById("b6");
//third row
const bt7 = document.getElementById("b7");
const bt8 = document.getElementById("b8");
const bt9 = document.getElementById("b9");

//variable which decides the turn of the player
var turn = 1; //1 for first, 2 for second
var game = false
var count = 0
const wnr = document.getElementById("winner")

function r1c1(){
	if(game == false && bt1.value === ""){
		if(turn===1){
			bt1.value = "X"
			turn = 2
		}
		else if(turn === 2){
			bt1.value = "O"
			turn = 1
		}
		count = count+1
		isgame()
	}
}

function r1c2(){
	if(game == false && bt2.value === ""){
		if(turn===1){
			bt2.value = "X"
			turn = 2
		}
		else if(turn === 2){
			bt2.value = "O"
			turn = 1
		}
		count = count+1
		isgame()
	}
}

function r1c3(){
	if(game == false && bt3.value === ""){
		if(turn===1){
			bt3.value = "X"
			turn = 2
		}
		else if(turn === 2){
			bt3.value = "O"
			turn = 1
		}
		count = count+1
		isgame()
	}
}

function r2c1(){
	if(game == false && bt4.value === ""){
		if(turn===1){
			bt4.value = "X"
			turn = 2
		}
		else if(turn === 2){
			bt4.value = "O"
			turn = 1
		}
		count = count+1
		isgame()
	}
}

function r2c2(){
	if(game == false && bt5.value === ""){
		if(turn===1){
			bt5.value = "X"
			turn = 2
		}
		else if(turn === 2){
			bt5.value = "O"
			turn = 1
		}
		count = count+1
		isgame()
	}
}

function r2c3(){
	if(game == false && bt6.value === ""){
		if(turn===1){
			bt6.value = "X"
			turn = 2
		}
		else if(turn === 2){
			bt6.value = "O"
			turn = 1
		}
		count = count+1
		isgame()
	}
}

function r3c1(){
	if(game == false && bt7.value === ""){
		if(turn===1){
			bt7.value = "X"
			turn = 2
		}
		else if(turn === 2){
			bt7.value = "O"
			turn = 1
		}
		count = count+1
		isgame()
	}
}

function r3c2(){
	if(game == false && bt8.value === ""){
		if(turn===1){
			bt8.value = "X"
			turn = 2
		}
		else if(turn === 2){
			bt8.value = "O"
			turn = 1
		}
		count = count+1
		isgame()
	}
}

function r3c3(){
	if(game == false && bt9.value === ""){
		if(turn===1){
			bt9.value = "X"
			turn = 2
		}
		else if(turn === 2){
			bt9.value = "O"
			turn = 1
		}
		count = count+1
		isgame()
	}
}

function isgame(){
	if(count === 9){
		wnr.textContent = "Match Tied"
		game = true
	}
	else if(bt1.value==="X" && bt2.value==="X" && bt3.value==="X"){
			iswin(1);
	}
	else if(bt1.value==="O" && bt2.value==="O" && bt3.value==="O"){
			iswin(2);
	}
	
	else if(bt1.value==="X" && bt5.value==="X" && bt9.value==="X"){
			iswin(1);
	}
	else if(bt1.value==="O" && bt5.value==="O" && bt9.value==="O"){
			iswin(2);
	}
	
	else if(bt4.value==="X" && bt5.value==="X" && bt6.value==="X"){
			iswin(1);
	}
	else if(bt4.value==="O" && bt5.value==="O" && bt6.value==="O"){
			iswin(2);
	}
	
	else if(bt8.value==="X" && bt9.value==="X" && bt7.value==="X"){
			iswin(1);
	}
	else if(bt8.value==="O" && bt9.value==="O" && bt7.value==="O"){
			iswin(2);
	}
	
	else if(bt3.value==="X" && bt5.value==="X" && bt7.value==="X"){
			iswin(1);
	}
	else if(bt3.value==="O" && bt5.value==="O" && bt7.value==="O"){
			iswin(2);
	}
	
	else if(bt1.value==="X" && bt4.value==="X" && bt7.value==="X"){
			iswin(1);
	}
	else if(bt1.value==="O" && bt4.value==="O" && bt7.value==="O"){
			iswin(2);
	}
	
	else if(bt2.value==="X" && bt5.value==="X" && bt8.value==="X"){
			iswin(1);
	}
	else if(bt2.value==="O" && bt5.value==="O" && bt8.value==="O"){
			iswin(2);
	}
	
	else if(bt3.value==="X" && bt6.value==="X" && bt9.value==="X"){
			iswin(1);
	}
	else if(bt3.value==="O" && bt6.value==="O" && bt9.value==="O"){
			iswin(2);
	}
}

function iswin(player){
	if(player===1){
		wnr.textContent = "Player X Wins";
	}
	else{
		wnr.textContent = "Player O Wins";
	}
	game = true;
}

function reset(){
	bt1.value = ""
	bt2.value = ""
	bt3.value = ""
	bt4.value = ""
	bt5.value = ""
	bt6.value = ""
	bt7.value = ""
	bt8.value = ""
	bt9.value = ""
	game = false
	turn = 1
	count = 0
	wnr.textContent = ""
}