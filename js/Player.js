class Player {
  constructor(){
    this.index = null;
    this.distance = 500;
    this.Ydistance = 500;
    this.name = null;
    this.Score
    
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
      Ydistance: this.Ydistance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getScore(){
    var playerScoreRef = database.ref('score3');
    playerScoreRef.on("value",(data)=>{
      playerScore = data.val();
    })
  }

  updateScore(score){
    database.ref('/').update({
      playerScore: score3
    });
  }

}
