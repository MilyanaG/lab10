var x = 5;
var y;
var userAgent = navigator.userAgent;
if(userAgent.indexOf('OPR') > -1){
   y = 3*x+5;
} else if (userAgent.indexOf('Chrome') > -1){
   y = x/2+x/5;
} else if (userAgent.indexOf('Firefox') > -1){
   y = x+5;
}
document.write('Результат: ' + y);