const TicTacToe = React.createClass({
  getInitialState: function () {
    return {
      coords: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
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

  makeMove: function (combinationIndexes, coords) {
    let combinationIndex = combinationIndexes[0];
    if (!this.state.winningCombination[combinationIndex]) {
      return;
    }
    for (let i = 0; i < this.state.winningCombination[combinationIndex].length; i++) {
      let coord = this.state.winningCombination[combinationIndex][i];
      if (coords[coord[0]][coord[1]] === 0) {
        coords[coord[0]][coord[1]] = -1;
        return coords;
      }
    }
    if (combinationIndexes.length) {
      combinationIndexes.shift();
      return this.makeMove(combinationIndexes, coords);
    }
  },

  checkResult: function () {
    this.calculateProbabilities(this.state.coords, this.state.winningCombination).map((combinationScore, index) => {
      if (combinationScore === -3) {
        alert('You lost');
        this.setState({ gameOver: true });
      } else if (combinationScore === 3) {
        alert('You win');
        this.setState({ gameOver: true });
      }
    });
  },

  handleClick: function (row, column) {
    if (this.state.coords[row][column] !== 0 || this.state.gameOver) {
      return;
    }
    this.state.coords[row][column] = 1;

    let maxScore = 0;
    let minScore = 0;
    let combinationIndexes = [...Array(this.state.winningCombination.length).keys()];
    let p = this.calculateProbabilities(this.state.coords, this.state.winningCombination);
    combinationIndexes.sort((a, b) => {
      return (p[a] > p[b]) ? -1 : 1;
    }).sort((a, b) => {
      return (p[a] === -2 || p[b] === -2) ? 1 : 0;
    })

    this.state.coords = this.makeMove(
      this.clone(combinationIndexes), 
      this.clone(this.state.coords)
    );
    this.setState(this.state.coords);
    this.checkResult();
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
  
  clone: function (obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  startAgain: function () {
    this.setState({
      gameOver: false,
      coords: this.clone(Array(3).fill([0, 0, 0]))
    });
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
      <div onClick={this.startAgain}>Start Again</div>
    </div>;
  }
});

React.render(<TicTacToe />, document.body);
