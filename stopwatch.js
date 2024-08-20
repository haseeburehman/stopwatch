  var minutes=0;
  var seconds = 0; 
  var tens = 0; 
  var appendTens = document.querySelector("#tens")
  var appendSeconds = document.querySelector("#seconds")
  var appendMinutes = document.querySelector("#minutes")
  var buttonStart = document.querySelector('#button-start');
  var buttonStop = document.querySelector('#button-stop');
  var buttonReset = document.querySelector('#button-reset');
  var buttonStartStop = document.querySelector('#button-start-stop');
  var Interval;
  var startStop=0;
    // Time counter
  let startTimer = () => {
    tens++; 
    
    if(tens <= 9){
      appendTens.textContent = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.textContent = tens;
      
    } 
      // Converting milliSeconds to seconds
    if (tens > 99) {
      seconds++;
      appendSeconds.textContent = "0" + seconds;
      tens = 0;
      appendTens.textContent = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.textContent = seconds;
    }
      //Converting seconds to minutes
    if (seconds > 59) {
      minutes++;
      appendMinutes.textContent = "0" + minutes;
      seconds = 0;
      appendSeconds.textContent = "0" + 0;
    }
    
    if (minutes >9 ){
      appendMinutes.textContent = minutes;
    }
    
    if (minutes>50)
    {
      minutes="00";
      appendMinutes.textContent = minutes;

    }
  }
  // Start Button Event
  buttonStart.addEventListener("click",() => {
    
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  })

  // Stop Button Event

  buttonStop.addEventListener("click",()=> {
    clearInterval(Interval);
  })

  // Reset Button Event

  buttonReset.addEventListener("click",()=> {
  clearInterval(Interval);
  tens="00";
  seconds="00";
  minutes="00";
    appendTens.textContent = tens;
    appendSeconds.textContent = seconds;
    appendMinutes.textContent = minutes;
 })

  //Start/Stop Button
  buttonStartStop.addEventListener("click",() => {
    startStop++;
    if(startStop%2!==0){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    }
    else if(startStop%2==0){
        clearInterval(Interval);
    }
  })