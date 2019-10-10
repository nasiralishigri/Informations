function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  setInterval(function(){
    /// call your function here
    console.log(getRndInteger(50,1));
  }, 5000);
  