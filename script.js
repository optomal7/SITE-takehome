//Global constants
const CLUE_HOLD_TIME = 1000;
const CLUE_PAUSE_TIME= 333; //how long to pause in between clues
const NEXT_CLUE_WAIT_TIME= 1000; //how long to wait before starting playback of the clue sequence

//Global variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var guessCounter = 0;
var tonePlaying = false;
var volume = 0.5;

for (let i = 0; i < 8; i++) {
  pattern.push(Math.floor(Math.random() * Math.floor(4)) + 1);
}

console.log("You shouldn't cheat, but if you have no honor the pattern is: " + pattern);

function startGame(){
  //initializes game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("welcomeMsg").classList.add("hidden");
  document.getElementById("gameplayMsg").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  //resets to base state
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("welcomeMsg").classList.remove("hidden");
  document.getElementById("gameplayMsg").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,CLUE_HOLD_TIME);
    setTimeout(clearButton,CLUE_HOLD_TIME,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = NEXT_CLUE_WAIT_TIME; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += CLUE_HOLD_TIME; 
    delay += CLUE_PAUSE_TIME;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over Bro. Ya lost. You're a loser!");
}

function winGame(){
  stopGame();
  alert("Against all discernable odds, you succeeded. Congratulations... for now.");
}

function guess(btn){
  console.log("user guessed: " + btn);

  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    //Correct guess checks the state
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        //turn progression
        progress += 1;
        playClueSequence();
      }
    }else{
      guessCounter += 1;
    }
  }else{
    //Bad guess is one that doesn't meet a true condition
    loseGame();
  }
}    

// Sound Synthesis Functions
// Copied from Codepath instructions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)