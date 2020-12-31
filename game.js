console.log('connected');

var squares = document.querySelectorAll('td');

var restart = document.querySelector('#b');

var playername = document.querySelector('#plr');


function clearsquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].textContent = "";
		playername.textContent = "Player1";
	}
}

restart.addEventListener('click',clearsquares);

function playgame(){
	if (this.textContent === '' && playername.textContent == 'Player1') {
		this.textContent = 'X';
		playername.textContent = 'Player2';
	}else if (this.textContent === '' && playername.textContent == 'Player2') {
		this.textContent = 'O';
		playername.textContent = 'Player1';
	}else{
		console.log('try another block');
	}
}


for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click',playgame);
	squares[i].addEventListener('click',checkwin);
}

function checkwin(){
	if (squares[0].textContent === 'X' && squares[1].textContent === 'X' && squares[2].textContent === 'X') {
		alert("player 1 win");
	}else if (squares[3].textContent === 'X' && squares[4].textContent === 'X' && squares[5].textContent === 'X') {
		alert("player 1 win");
	}else if (squares[6].textContent === 'X' && squares[7].textContent === 'X' && squares[8].textContent === 'X') {
		alert("player 1 win");
	}else if (squares[0].textContent === 'X' && squares[3].textContent === 'X' && squares[6].textContent === 'X') {
		alert("player 1 win");
	}else if (squares[1].textContent === 'X' && squares[4].textContent === 'X' && squares[7].textContent === 'X') {
		alert("player 1 win");
	}else if (squares[2].textContent === 'X' && squares[5].textContent === 'X' && squares[8].textContent === 'X') {
		alert("player 1 win");
	}else if (squares[0].textContent === 'X' && squares[4].textContent === 'X' && squares[8].textContent === 'X') {
		alert("player 1 win");
	}else if (squares[2].textContent === 'X' && squares[4].textContent === 'X' && squares[6].textContent === 'X') {
		alert("player 1 win");
	}else if (squares[0].textContent === 'O' && squares[1].textContent === 'O' && squares[2].textContent === 'O') {
		alert("player 2 win");
	}else if (squares[3].textContent === 'O' && squares[4].textContent === 'O' && squares[5].textContent === 'O') {
		alert("player 2 win");
	}else if (squares[6].textContent === 'O' && squares[7].textContent === 'O' && squares[8].textContent === 'O') {
		alert("player 2 win");
	}else if (squares[0].textContent === 'O' && squares[3].textContent === 'O' && squares[6].textContent === 'O') {
		alert("player 2 win");
	}else if (squares[1].textContent === 'O' && squares[4].textContent === 'O' && squares[7].textContent === 'O') {
		alert("player 2 win");
	}else if (squares[2].textContent === 'O' && squares[5].textContent === 'O' && squares[8].textContent === 'O') {
		alert("player 2 win");
	}else if (squares[0].textContent === 'O' && squares[4].textContent === 'O' && squares[8].textContent === 'O') {
		alert("player 2 win");
	}else if (squares[2].textContent === 'O' && squares[4].textContent === 'O' && squares[6].textContent === 'O') {
		alert("player 2 win");		
	}else{
		console.log('test');
	}
}

/*for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click',checkwin);
}*/
