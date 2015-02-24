var Box = function(e) {
	this.element = e;
	this.symbol = "";
};

Box.prototype.listen = function() {
	var self = this;
	this.element.on('click', function() {
		divId = this.id;
		self.mark(divId);
	});
};

Box.prototype.mark = function(divId) {
	if (this.symbol == "" && !window.gameOver) {
		this.symbol = window.turn;
		this.element.text(this.symbol);
		window.turnCount++;
		if (turnCount > 4) {
			if (checkWin(divId, turn)) {
				$('#wins').text("wins!");
				window.gameOver = true;
				return;
			}
		}
		if (this.symbol == "X") {
			turn = "O";
		} else {
			turn = "X";
		}
		if (turnCount > 8) {
			result = $('#turn');
			result.css("font-size","36pt");
			result.text("Draw!");
			return;
		}
		window.turn = turn;
		$('#turn').text(turn);
	}
};

var checkWin = function(divId, turn) {
	row = divId[0];
	col = divId[1];
	console.log(row + " " + col + " " + turn);
	var hori = [$('#' + row + "1").text(), $('#' + row + "2").text(), $('#' + row + "3").text()];
	var vert = [$('#1' + col).text(), $('#2' + col).text(), $('#3' + col).text()];
	var dia1 = [$('#11').text(),$('#22').text(), $('#33').text()];
	var dia2 = [$('#13').text(),$('#22').text(), $('#31').text()];
	var lines = [hori, vert, dia1, dia2];
	var win = false;
	lines.forEach (function(line) {
		if (checkLine(line, turn)) {
			win = true;
		}
	});
	return win;
};

var checkLine = function(line, turn) {
	return (line[0] === turn && line[0] === line[1] && line[1] === line[2]);
};

$(document).ready(function() {
	$('.box').each(function() {
		var turn;
		var box = new Box($(this));
		if (Math.round(Math.random())) {
			turn = "X";
		} else {
			turn = "O";
		}
		window.turnCount = 0;
		window.turn = turn;
		$('#turn').text(turn);
		box.listen();
	});
});