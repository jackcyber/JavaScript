function myClock(){
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var sec = today.getSeconds();
  var time = "" + (hour > 12? "0" + (hour - 12): "0" + hour);
  if(time == 0) time = '12';
  time += (minute < 10? ":0" : ":") + minute;
  time += (sec < 10? ":0" : ":") + sec;
  time += (hour >= 12? " P.M" : " A.M")
  return time;
}

console.log(myClock());