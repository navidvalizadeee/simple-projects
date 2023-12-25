const team = {
    _players: [
     {
      firstName: 'navid',
      lastName: 'valizadeh',
      age: 1
    },
  {
      firstName: 'ahmad',
      lastName: 'pasandi',
      age: 2
    },
  {
      firstName: 'reza',
      lastName: 'akhoundi',
      age: 3
    }
    ],
    _games: [
      {
        opponent: 'arsenal',
        teamPoints: 1,
        opponentPoints : 2,
      },
          {
        opponent: 'mancity',
        teamPoints: 1,
        opponentPoints : 2,
      },
          {
        opponent: 'barca',
        teamPoints: 1,
        opponentPoints : 2,
      }
    ],
    get players() {
          return this._players
    },
    get games() {
      return this._games
    },
    addPlayer (newFirstName, newLastName, newAge){
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player);
    },
    addGame (newOpponent, newTeamPoints, newOpponentPoints){
       const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints, 
        opponentPoints: newOpponentPoints
       };
       this._games.push(game);
    }
  };
  team.addPlayer('hasan', 'maamd', 22);
  team.addGame('teractor', 22, 333);
  
    console.log(team._players)
    console.log(team._games)