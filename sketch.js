var maxDrops = 100;

function preload(){
  canvas (600,600);  
}

function setup(){
   
    
}

function draw(){
    for(var i = 0; i < maxDrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }
}   

