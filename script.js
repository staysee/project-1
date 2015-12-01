function newGame(){
  window.location.reload();
}

//Creates both players' grid
function createGrid(board){
  var tbl = document.createElement('table');
  var tblBody = document.createElement('tbody');

  for(var i = 0; i < 10; i++){
    var row = document.createElement('tr');
    for(var j = 0; j < 10; j++){
      var col = document.createElement('td');
      row.appendChild(col);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  board.appendChild(tbl);
}
createGrid(document.getElementById('board1'));
createGrid(document.getElementById('board2'))


//Get Player Names
function getPlayerName(player){
  var name = prompt("Please enter your player name: ");
  if (name){
    document.getElementById(player).innerHTML = "Player: " + name;
  } else {
    getPlayerName(player);
  }
}
getPlayerName('name1');
getPlayerName('name2');





