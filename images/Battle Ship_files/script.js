function newGame(){
  window.location.reload();
}

//Creates both players' grid
function createGrid(board){
  if (board === 'board1') {
    var prefix = 'P1'
  } else {
    var prefix = 'P2'
  }
  board = document.getElementById(board)
  var letters = ['A', 'B', 'C','D','E','F','G','H','I','J']
  var tbl = document.createElement('table');
  var tblBody = document.createElement('tbody');

  for(var i = 0; i < 10; i++){
    var row = document.createElement('tr');
    for(var j = 0; j < 10; j++){
      var id  = prefix + letters[j] + (i + 1);
      var col = document.createElement('td');
      col.setAttribute('id', id);
      col.setAttribute('class', 'box');
      row.appendChild(col);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  board.appendChild(tbl);


}
createGrid('board1');
createGrid('board2')


//Get Player Names
function getPlayerName(player){
  var name = prompt("Please enter your player name: ");
  if (name){
    document.getElementById(player).innerHTML = "Player: " + name;
  } else {
    getPlayerName(player);
  }
}
//getPlayerName('name1');
//getPlayerName('name2');

//





