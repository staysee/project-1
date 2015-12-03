function newGame(){
  window.location.reload();
}

var soundID = "thunder";
function loadSound(){
  createjs.Sound.registerSound("thunder.mp3", soundID);
}
function playSound(){
  createjs.Sound.play(soundID);
}


/*****Get Player Names*****/
function getPlayerName(player){
  var name = prompt("Please enter your player name: ");
  if (name){
    document.getElementById(player).innerHTML = "Player: " + name;
  } else {
    getPlayerName(player);
  }
}
// getPlayerName('name1');
// getPlayerName('name2');


/*****Show messages*****/
var view = {
  displayMessage: function (msg){
    var messageArea = document.getElementById("message");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location){
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location){
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
}
/*checks if above functions are working
view.displayHit("P1A1");
view.displayMiss("P1C3");
view.displayMessage("Hello there")


/*****Set Ships to P1 & P2 Board*****/
var p1ships = [
  ["P1F8","P1G8","P1H8","P1I8","P1J8"],
  ["P1A1","P1A2","P1A3","P1A4"],
  ["P1C3","P1D3","P1E3"],
  ["P1H4","P1H5","P1H6"],
  ["P1C9","P1D9"]
];

var p2ships = [
  ["P2J5","P2J6","P2J7","P2J8","P2J9"],
  ["P2D3","P2E3","P2F3","P2G3"],
  ["P2B6","P2B7","P2B8"],
  ["P2G7","P2G8","P2G9"],
  ["P2I1","P2J1"]
];



/****Creates both players' grid****/
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

//make the grid rows and columns
  for(var i = 0; i < 10; i++){
    var row = document.createElement('tr');
    for(var j = 0; j < 10; j++){
      var id  = prefix + letters[j] + (i + 1);
      var col = document.createElement('td');
      col.setAttribute('id', id); //make new ID for each box
      col.setAttribute('class', 'box'); //make class for each box
      //setupMouseEvent(col, prefix, letters, i, j);
      col.addEventListener('click', function () {
        clickHandler(event.target);
      });
      row.appendChild(col);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  board.appendChild(tbl);

  console.log(board);
}
createGrid('board1');
setBoard(p1ships);
createGrid('board2');
setBoard(p2ships);



function setBoard(shipArray) {
  for (i in shipArray) {
    for(j in shipArray[i]){
      $('#'+shipArray[i][j]).addClass('occupied')
    }
  }
}


//var hits = 0;
var hitsOne = 0;
var hitsTwo = 0;

function checkOccupied (id, grid){
  var classList = $('#'+id).attr('class').split(/\s+/);
  var playerOne = $('#P1'+grid);
  var playerTwo = $('#P2'+grid);

  if (classList[1] == 'occupied'){
      console.log(event);
      if(((event.target.style.backgroundColor !== "rgb(147, 32, 32)") && (hitsOne == 16)) || ((event.target.style.backgroundColor !== "rgb(147, 32, 32)") && (hitsTwo == 16))){

        document.getElementById(id).style.backgroundColor = "#932020";
        document.getElementById(id).style.backgroundImage = "url(images/fire.png)";
        playSound("thunder");

          if(playerOne){
            hitsOne += 1;
            view.displayMessage("Congratulations! Player 1 WINS!");
          } else {
            hitsTwo += 1;
            view.displayMessage("Congratulations! Player 2 WINS!");
          }
      } else if (event.target.style.backgroundColor != "rgb(147, 32, 32)"){
        document.getElementById(id).style.backgroundColor = "#932020";
        document.getElementById(id).style.backgroundImage = "url(images/fire.png)";
        playSound("thunder");
          if(playerOne){
            hitsOne += 1;
            view.displayMessage("You hit my ship!");
          } else{
            hitsTwo += 1;
            view.displayMessage("You hit my ship!");
          }
      } else{
        view.displayMessage("You've already sent a missile to this location. Please aim somewhere else!")
      }
  } else{
        console.log('miss!');
        document.getElementById(id).style.backgroundImage = "url(images/water.png)";
        view.displayMessage("You missed!");
      }
}





// //Hide or Show ships
// $('.toggle').click(function(){
//   $('.occupied').css('background','transparent');
//   $(this).hide();
// });




// // ------SHIP PLACEMENT--------//
// function setupMouseEvent(col, prefix, letters, rowId, columnId){
//   col.onmouseover = function(){
//     if (prefix !== 'P1') {return};
//     for(var i = 1; i < 4; i++){
//       var id  = prefix + letters[columnId] + (rowId + i + 1);
//       if (document.getElementById(id).style.backgroundColor !== "blue") {
//         document.getElementById(id).style.backgroundColor = "white";
//       }
//     }
//     if (document.getElementById(id).style.backgroundColor !== "blue") {
//       col.style.backgroundColor = "white";
//     }
//   };
//   col.onmouseout = function(){
//     for(var i = 1; i < 4; i++){
//       var id  = prefix + letters[columnId] + (rowId + i + 1);
//       if (document.getElementById(id).style.backgroundColor !== "blue") {
//         document.getElementById(id).style.backgroundColor = "transparent";
//       }
//     }
//     if (document.getElementById(id).style.backgroundColor !== "blue") {
//       col.style.backgroundColor = "transparent";
//     }
//   };
// }

// function placeShip (col, player, letter, number) {
//   number = Number(number)
//   for(var i = 1; i < 4; i++){
//       var id = "P" + player + letter + (number + i);
//       document.getElementById(id).style.backgroundColor = "blue";
//     }
//     col.style.backgroundColor = "blue";
// }



function clickHandler (col) {
  console.log(col)
  var id = col.id;
  id = id.slice(1)
  var player = id.slice(0, 1)
  var letter = id.slice(1, 2)
  var number = id.slice(2, 3)
  console.log(player, letter, number, col.id)
  checkOccupied(col.id)
}








