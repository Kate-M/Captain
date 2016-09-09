
(function() {

var delay=10,i=0;


var startTimer=function(pixels){
	var elem=document.getElementById('jump');
var bottom=elem.offsetTop;
/*console.log(bottom);*/
if((pixels>0 && bottom>400)||(pixels<0 && bottom<50))
{
	clearInterval(timer);
	  timer=setInterval(function(){
	startTimer(pixels * -1);},delay);
	
	
}

elem.style.top=bottom+pixels+'px';

};
var timer=setInterval(function(){
startTimer(20);},delay);
console.log(timer);
})();