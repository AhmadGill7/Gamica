const puzzle = document.getElementById('puzzle');
const shuffleBtn = document.getElementById('shuffleBtn');
const moveCountDisplay = document.getElementById('moveCount');
const timerDisplay = document.getElementById('timer');
const pieces = 9; // Number of puzzle pieces
const size = 100; // Size of each puzzle piece in pixels
let moveCount = 0;
let timerInterval;
let seconds = 0;
let minutes = 0;

// Create puzzle pieces
for (let i = 0; i < pieces; i++) {
  const piece = document.createElement('div');
  piece.classList.add('puzzle-piece');
  piece.style.backgroundImage = `url('puzzle_image.jpg')`; /* Replace with your puzzle image */
  piece.style.backgroundPosition = `-${(i % 3) * size}px -${Math.floor(i / 3) * size}px`;
  piece.style.left = `${(i % 3) * size}px`;
  piece.style.top = `${Math.floor(i / 3) * size}px`;
  piece.setAttribute('draggable', 'true');
  piece.addEventListener('dragstart', dragStart);
  piece.addEventListener('dragover', dragOver);
  piece.addEventListener('drop', dragDrop);
  puzzle.appendChild(piece);
}

// Shuffle puzzle pieces
shuffleBtn.addEventListener('click', shuffle);

function shuffle() {
  const piecesArr = Array.from(document.querySelectorAll('.puzzle-piece'));
  piecesArr.forEach(piece => {
    const randomPos = Math.floor(Math.random() * pieces);
    const tempStyle = {
      left: piece.style.left,
      top: piece.style.top
    };
    piece.style.left = piecesArr[randomPos].style.left;
    piece.style.top = piecesArr[randomPos].style.top;
    piecesArr[randomPos].style.left = tempStyle.left;
    piecesArr[randomPos].style.top = tempStyle.top;
  });
  moveCount = 0;
  updateMoveCount();
  resetTimer();
  startTimer();
}

// Drag and drop functions
function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const droppedElement = document.getElementById(data);
  const targetElement = e.target;
  swapElements(droppedElement, targetElement);
  moveCount++;
  updateMoveCount();
}

// Helper functions
function swapElements(element1, element2) {
  const tempStyle = {
    left: element1.style.left,
    top: element1.style.top
  };
  element1.style.left = element2.style.left;
  element1.style.top = element2.style.top;
  element2.style.left = tempStyle.left;
  element2.style.top = tempStyle.top;
}

function updateMoveCount() {
  moveCountDisplay
