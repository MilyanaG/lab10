var x = 5;
var userAgent = navigator.userAgent;
if(userAgent.indexOf('OPR') > -1){
var y = 3*x+5
} else if (userAgent.indexOf('Chrome') > -1){
var y = x/2+x/5;;
} else if (userAgent.indexOf('Firefox') > -1){
var y = x+5;
}
document.write('Результат: ' + y);