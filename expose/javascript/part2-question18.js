let d = new Date();
let time = d.toLocaleTimeString();
var intervalID = setInterval(printTime, 1000)
function printTime() {
  console.log(time);
}
