/** STARTS A NEW GAME **/
function newGame(){
  window.location.reload();
}

/** LOAD & PLAY SOUND **/
var soundID = "thunder";
function loadSound(){
  createjs.Sound.registerSound("thunder.mp3", soundID);
}
function playSound(){
  createjs.Sound.play(soundID);
}


/** DISPLAY GAME MESSAGES **/
function displayMessage(msg){
  var messageArea = $('#message');
  messageArea.html(msg);
}


/*****Set Ships to P1 & P2 Board*****/

/* constructor function */
function Ship(name, playerOwner){
  this.name = name;
  this.spaces = [];
  this.playerOwner = playerOwner;
//  this.hitSpaces =[];
//  this.gotHit = function (space) {
//    if (spaces === hitSpaces.length) {
//   };
//  }
}

var allShips = [];                      //stores all ships & info

var p1ships = [
  ["P1F8","P1G8","P1H8","P1I8","P1J8"], //aircraft
  ["P1A1","P1A2","P1A3","P1A4"],        //battleship
  ["P1C3","P1D3","P1E3"],               //destroyer
  ["P1H4","P1H5","P1H6"],               //submarine
  ["P1C9","P1D9"]                       //patrol boat
];

var p2ships = [
  ["P2J5","P2J6","P2J7","P2J8","P2J9"], //aircraft
  ["P2D3","P2E3","P2F3","P2G3"],        //battleship
  ["P2B6","P2B7","P2B8"],               //destroyer
  ["P2G7","P2G8","P2G9"],               //submarine
  ["P2I1","P2J1"]                       //patrol boat
];


 /** STORE SHIP INFO TO ALLSHIP ARRAY **/
function addToAllArray (playerShipArray, playerOwner) {
  var nameArray = ['Aircraft Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat']

  function addSpacesToShip(spacesArray){
    for (var i = 0; i < spacesArray.length; i++) {
      ship.spaces.push(spacesArray[i])
    }
  }

  for (var i = 0; i < playerShipArray.length; i++) {
    var ship = new Ship(nameArray[i], playerOwner)
    addSpacesToShip(playerShipArray[i])
    allShips.push(ship)
  };
}

addToAllArray(p1ships, 'P1')
addToAllArray(p2ships, 'P2')
/*function looks through p1/p2 ship array, makes a new ship (attaches name+playerowner), calls addSpacesToShip for that ship its creating...THEN it counts the length of that ship, and adds it to that ships info. Moves to next ship. */


/** CREATE PLAYER GRIDS **/
function createGrid(board){
  if (board === 'board1') {
    var prefix = 'P1'
  } else {
    var prefix = 'P2'
  }

  board = (document.getElementById(board));
  var letters = ['A', 'B', 'C','D','E','F','G','H','I','J'];
  var tbl = document.createElement('table');
  var tblBody = document.createElement('tbody');
                                                    //make the grid rows and columns
  for(var i = 0; i < 10; i++){
    var row = document.createElement('tr');
    for(var j = 0; j < 10; j++){
      var id  = prefix + letters[j] + (i + 1);
      var col = document.createElement('td');
      col.setAttribute('id', id);                   //make new ID for each box
      col.setAttribute('class', 'box');             //make class for each box
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


/** Adding a class to cells that contain ship part **/
function setBoard(shipArray) {
  for (i in shipArray) {
    for(j in shipArray[i]){
      $('#'+shipArray[i][j]).addClass('occupied')
    }
  }
}



var hitsOne = 0;
var hitsTwo = 0;
var shots = 0;

// function switchTurn(){
//   if (shots % 2 === 0){
//     displayMessage("Player 1's turn");
//     document.getElementById('board1').style.pointerEvents = 'none';
//     document.getElementById('board2').style.pointerEvents = 'auto'
//   } else {
//     displayMessage("Player 2's turn");
//     document.getElementById('board1').style.pointerEvents = 'auto';
//     document.getElementById('board2').style.pointerEvents = 'none';
//   }
// }


/** Checks if there is a ship part in that cell **/
function checkOccupied (id){
  var classList = $('#'+id).attr('class').split(/\s+/);   //splits the "box occupied" class
  var playerOne = id.slice(0,2);
  var red = "rgb(147, 32, 32)";

  if (classList[1] == 'occupied'){
      //console.log(event);
      if(((event.target.style.backgroundColor !== red) && (hitsOne == 16)) || ((event.target.style.backgroundColor !== "rgb(147, 32, 32)") && (hitsTwo == 16))){

        $('#'+id).css('background-color', red);
        $('#'+id).css('background-image','url(images/fire.png)');
        playSound("thunder");

          if(playerOne === 'P1'){
            hitsOne += 1;
            displayMessage("Congratulations! Player 1 WINS!");

          } else {
            hitsTwo += 1;
            displayMessage("Congratulations! Player 2 WINS!");
          }
      } else if (event.target.style.backgroundColor != red){
        $('#'+id).css('background-color', red);
        $('#'+id).css('background-image','url(images/fire.png)');
        playSound("thunder");
          if(playerOne === 'P1'){
            hitsOne += 1;
            displayMessage("You hit my ship!");
                                                        //call shipSunk function P1
          } else{
            hitsTwo += 1;
            displayMessage("You hit my ship!");
                                                        //call shipSunk function P2
          }
      } else{
        displayMessage("You've already sent a missile to this location. Please aim somewhere else!")
      }
  } else{
        console.log('miss!');
        $('#'+id).css('background-image','url(images/water.png)');
        displayMessage("You missed!");
      }
}


/** Rules Overlay Box **/
  $('#rulebutton').click(function(){
    $('#overlay').fadeIn('fast',function(){
      $('#rulebox').animate({'top':'160px'},500);
    });
  });
  $('#ruleclose').click(function(){
    $('#rulebox').animate({'top':'-200px'},500,function(){
      $('#overlay').fadeOut('fast');
    });
  });

/** Click Handler **/
function clickHandler (col) {
  checkOccupied(col.id)
}





/***********************************/
// UNUSED CODE FOR FUTURE ADDITIONS//
/***********************************/

/** GET PLAYER NAMES **/
// function getPlayerName(player){
//   var name = prompt("Please enter your player name: ");
//   if (name){
//     $('#'+player).html("Player: " + name);
//   } else {
//     getPlayerName(player);
//   }
// }
//getPlayerName('name1');
//getPlayerName('name2');

/** Hide or Show ships **/
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



