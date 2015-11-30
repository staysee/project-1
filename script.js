$(function(){
  alert("Everything is ready, let's do this");
});

function newGame(){
  window.location.reload();
}


function createGrid(){
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for(var i = 0; i < 10; i++){
    var row = document.createElement("tr");
    for(var j = 0; j < 10; j++){
      var col = document.createElement("td");
      row.appendChild(col);
    }


  }

}
