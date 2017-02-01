var TicTacToe = React.createClass({
  getInitialState: function () {
    return {
      coords: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, -1]
      ],
      winningCombination: [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],

        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],

        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
      ]
    };
  },

  calculateProbabilities: (state, winningCombination) => {
    const calculateProbability = (combination, state) => {
      return combination.reduce((acc, coord) => {
        return acc + state[coord[0]][coord[1]];
      }, 0);
    };

    return winningCombination.map((combination) => {
      return calculateProbability(combination, state);
    });
  },
  
  makeMove: function (combinationIndexes) {
  console.log(combinationIndexes)
    let combinationIndex = combinationIndexes[0];
    let moveMade = false;
    if(!this.state.winningCombination[combinationIndex]){
      return;
    }
    for(let i=0; i<this.state.winningCombination[combinationIndex].length; i++){
      let coord = this.state.winningCombination[combinationIndex][i];
      if (this.state.coords[coord[0]][coord[1]] === 0) {
        this.state.coords[coord[0]][coord[1]] = -1;
        moveMade = true;
        break;
      }
    }
    if (!moveMade && combinationIndexes && combinationIndexes.length) {
      combinationIndexes.shift();
      return this.makeMove(combinationIndexes);
    }
  },

  handleClick: function (row, column) {
    if (this.state.coords[row][column] !== 0) {
      return;
    }
    this.state.coords[row][column] = 1;
    
    let maxScore = 0;
    let combinationIndexes = [0,1,2,3,4,5,6,7];
    this.calculateProbabilities(this.state.coords, this.state.winningCombination).map((combinationScore, index)=>{
      if (combinationScore > maxScore) {
        maxScore = combinationScore;
        combinationIndexes.unshift(index);
      }
    });
    if (maxScore === 3) {
      alert('You win');
    }
    this.makeMove(combinationIndexes);
    this.setState(this.state.coords);
  },
  
  getPlayerIcon: function (num) {
    if (num === 1) {
      return 'X';
    } else if (num === -1) {
      return 'O';
    } else {
      return '.';
    }
  }, 

  render: function () {
    let pane = this.state.coords.map((row, index) => {
      return <div key={Math.random()}>
        <div className="cell" onClick={this.handleClick.bind(this, index, 0)}>{this.getPlayerIcon(row[0])}</div>
        <div className="cell" onClick={this.handleClick.bind(this, index, 1)}>{this.getPlayerIcon(row[1])}</div>
        <div className="cell" onClick={this.handleClick.bind(this, index, 2)}>{this.getPlayerIcon(row[2])}</div>
      </div>
    });

    return <div>
      {pane}
    </div>;
  }
});

React.render(<TicTacToe />, document.body);

