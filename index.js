// 1. When a user presses the record button, start recording actions
// 2. When recording, push an object with the important data to the array
//          - Clear the array before starting a new recording
// 3. Stop a recording by pressing the same button
//          - Print all of the position to the console using forEach: 123px 345px
// 4. Replay the recording by iterating through the Array and move a custom cursor to the position that was recorded

let isRecording = false
let mouseMoves = []
let count = 0 //for keeping track if we are starting or stopping a recording
const $startAndStop = document.getElementById('startAndStop')
const $replayRecording = document.getElementById('replayRecording')

window.addEventListener('mousemove', (event) => {
    if (isRecording) {
        let move = { x: event.clientX, y:event.clientY, t:event.timeStamp };
        mouseMoves.push(move);
    }
})

$startAndStop.addEventListener('click', (event) => {
    count++; //for keeping track if we are starting or stopping a recording
    if(count%2==1)
    {
    mouseMoves = [];
    isRecording = true;
   }
   else{
    mouseMoves.forEach(element => {
    console.log(element.x+'px ' +  element.y+'px');
    });
   }
})
