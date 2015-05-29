var seed = {
  name: 'Venis Fly Trap',
  stage: 'seed',
  height: 0,
//   antiFreeze: false,
  isPlant: true,
  isDead: true,
  feed: function(food){
    if(food === 'plantFood'){
      seed.height = seed.height+1;
      seed.isPlant = true;
  } else if(food === 'antiFreeze'){
      seed.isDead = true;
  } else {
      isPlant = false;
      isDead = false;
      }
    },
 water:function(){
   seed.height = seed.height+2;
   seed.isPlant = true;
    }
}
seed.feed('antiFreeze');
console.log(seed.isDead);
