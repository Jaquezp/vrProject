var scene;

function start(){
  scene = $('a-scene')[0];
  console.log("starting Scene");
  
}

AFRAME.registerComponent("start-game", {
  init: start

})