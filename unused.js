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


