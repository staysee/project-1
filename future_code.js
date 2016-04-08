/***********************************/
// UNUSED CODE FOR FUTURE ADDITIONS//
/***********************************/

/** GET PLAYER NAMES **/
function getPlayerName(player){
  var name = prompt("Please enter your player name: ");
  if (name){
    $('#'+player).html("Player: " + name);
  } else {
    getPlayerName(player);
  }
}
getPlayerName('name1');
getPlayerName('name2');

/** Hide or Show ships **/
$('.toggle').click(function(){
  $('.occupied').css('background','transparent');
  $(this).hide();
});




 /** STORE SHIP INFO TO ALLSHIP ARRAY **/

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




// // ------SHIP PLACEMENT--------//
function setupMouseEvent(col, prefix, letters, rowId, columnId){
  col.onmouseover = function(){
    if (prefix !== 'P1') {return};
    for(var i = 1; i < 4; i++){
      var id  = prefix + letters[columnId] + (rowId + i + 1);
      if (document.getElementById(id).style.backgroundColor !== "blue") {
        document.getElementById(id).style.backgroundColor = "white";
      }
    }
    if (document.getElementById(id).style.backgroundColor !== "blue") {
      col.style.backgroundColor = "white";
    }
  };
  col.onmouseout = function(){
    for(var i = 1; i < 4; i++){
      var id  = prefix + letters[columnId] + (rowId + i + 1);
      if (document.getElementById(id).style.backgroundColor !== "blue") {
        document.getElementById(id).style.backgroundColor = "transparent";
      }
    }
    if (document.getElementById(id).style.backgroundColor !== "blue") {
      col.style.backgroundColor = "transparent";
    }
  };
}

function placeShip (col, player, letter, number) {
  number = Number(number)
  for(var i = 1; i < 4; i++){
      var id = "P" + player + letter + (number + i);
      document.getElementById(id).style.backgroundColor = "blue";
    }
    col.style.backgroundColor = "blue";
}



