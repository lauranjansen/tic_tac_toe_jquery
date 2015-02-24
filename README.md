# tic_tac_toe_jquery
Using jQuery to create a web-based version of tic tac toe

Setup:
9 divs in rows of 3, attaching an object for each.
A listener will detect when the div is clicked,
and the "mark" function will then be triggered.
If the div is empty, the current turn symbol will
be added, and if this is turn 5 or more, the move
will be checked for a possible win by passing the
coordinates and the current turn into the checkWin
function. This function checks each possible line
to see if all of the divs in it have the same and
current turn symbol.