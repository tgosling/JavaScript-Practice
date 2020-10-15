const team = {
    _players: [{
      firstName: 'Lebron',
      lastName: 'James',
      age: 41
    },
    {
      firstName: 'Anthony',
      lastName: 'Davis',
      age: 27
    },
    {
      firstName: 'Kawhi',
      lastName: 'Leonard',
      age: 29
    }],
    _games: [{
      oppopnent: 'Heat',
      teamPoints: 112,
      opponentPoints: 98
    },
    {
      opponent: 'Celtics',
      teamPoints: 108,
      opponentPoints: 102
    },
    {
      opponent: 'Bucks',
      teamPoints: 98,
      opponentPoints: 104
    }],
  
    get games(){
      return this._games;
    },
  
    addPlayer(firstName, lastName, age){
        let player = {
          firstName: firstName,
          lastName: lastName,
          age: age
        };
  
        this._players.push(player);
    },
  
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
  
      this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Raptors', 102, 124);
  
  console.log(team._players);
  console.log(team._games);