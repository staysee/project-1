function newGame(){
  window.location.reload();
}


function createGrid(board){
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for(var i = 0; i < 10; i++){
    var row = document.createElement("tr");
    for(var j = 0; j < 10; j++){
      var col = document.createElement("td");
      row.appendChild(col);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  board.appendChild(tbl);
}
createGrid(document.getElementById("board1"));
createGrid(document.getElementById("board2"))
