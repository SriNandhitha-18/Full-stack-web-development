  const board = document.getElementById('board');
    const message = document.getElementById('message');

    let currentPlayer = 'X';
    let gameActive = true;
    const cells = Array(9).fill('');

    const winPatterns = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6]           
    ];

    function createBoard() {
      board.innerHTML = '';
      cells.forEach((val, idx) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = idx;
        cell.textContent = val;
        cell.addEventListener('click', onCellClick);
        board.appendChild(cell);
      });
    }

    function onCellClick(e) {
      const index = e.target.dataset.index;

      if (!gameActive || cells[index]) return;

      cells[index] = currentPlayer;
      e.target.textContent = currentPlayer;

      if (checkWin()) {
        message.textContent = `Congratulations! Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
      }

      if (cells.every(cell => cell !== '')) {
        message.textContent = "It's a draw! Try Again.";
        gameActive = false;
        return;
      }

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.textContent = `${currentPlayer}`;
    }

    function checkWin() {
      return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
      });
    }

    function resetGame() {
      cells.fill('');
      currentPlayer = '';
      gameActive = true;
      message.textContent = ` ${currentPlayer}`;
      createBoard();
    }

    createBoard();