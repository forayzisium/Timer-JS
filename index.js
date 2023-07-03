let timeStart = null;
let timeStoped =null;
let stopDuration = 0;
let startInterval;
let int = false;

const time = document.querySelector("#time")
const startBtn = document.querySelector("#start")
const resetBtn = document.querySelector("#reset")

let hour = document.querySelector("#hour")
let minute = document.querySelector("#minute")
let second = document.querySelector("#second")
let millisecond = document.querySelector("#millisecond")

startBtn.addEventListener('click',()=>{
  if(int == false){
    int = true;
    starttime()
    startBtn.innerHTML='Pause'
  }else{
    int= true;
    stoptime()
    startBtn.innerHTML ='Start'
  }
})

resetBtn.addEventListener('click',()=>{
  resettime()
  startBtn.innerHTML = 'Start'
})


const starttime = () =>{
  if(timeStart == null){
    timeStart = new Date()
  }
  if(timeStoped !== null){
    stopDuration += 1;
  }
  startInterval = setInterval(timeRunnig)
}
const resettime = () =>{
  clearInterval(startInterval);
   timeStart = null;
   timeStoped =null;
   stopDuration = 0;
   startInterval;
   int = false;
   hour.innerHTML = "00"
   minute.innerHTML = "00"
   second.innerHTML = "00"
   millisecond.innerHTML = "00"
}
  
const stoptime = () =>{
  clearInterval(startInterval)
  timeStoped = new Date()
}

const timeRunnig = ()=>{
  let currentTime = new Date()
  let TimeElapsed = new Date(currentTime - timeStart - stopDuration)

  let hours = TimeElapsed.getUTCHours()
  let mins = TimeElapsed.getUTCMinutes()
  let secs = TimeElapsed.getUTCSeconds()
  let ms = TimeElapsed.getUTCMilliseconds()

  ms = Math.floor(ms/10)
  hour.innerHTML=(hours = hours < 10 ? "0"+ hours : hours)
  minute.innerHTML = (mins = mins < 10 ? '0' + mins:mins)
  second.innerHTML = (secs = secs < 10 ? '0' + secs:secs)
  millisecond.innerHTML = (ms = ms < 10 ? '0' + ms:ms)

}