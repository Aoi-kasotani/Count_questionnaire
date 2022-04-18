var title = document.getElementsByClassName("active")[0];
var count1 = 0
var count2 = 0
var count3 = 0
var count4 = 0
var count5 = 0
var count11 = 0
var count12 = 0
var count13 = 0
var count14 = 0
var count15 = 0
for(var i=3; i<20; i++) {
var x = title.getElementsByTagName("td")[i].innerHTML;
var titlename = String(x);
if(titlename.includes('難易度')) {
var alpha = i-3;
var beta = i-2;
break;}}
for(var i=1; i<1000; i++) {
try{
var member = document.getElementsByTagName("tr")[i];
var y = member.getElementsByTagName("td")[alpha].innerHTML;
var dif = String(y);
if(dif.includes('1')) {
count1 = count1 + 1;
}else if(dif.includes('2')) {
count2 = count2 + 1;
}else if(dif.includes('3')) {
count3 = count3 + 1;
}else if(dif.includes('4')) {
count4 = count4 + 1;
}else if(dif.includes('5')) {
count5 = count5 + 1;}
var z = member.getElementsByTagName("td")[beta].innerHTML;
var sat = String(z);
if(sat.includes('1')) {
count11 = count11 + 1;
}else if(sat.includes('2')) {
count12 = count12 + 1;
}else if(sat.includes('3')) {
count13 = count13 + 1;
}else if(sat.includes('4')) {
count14 = count14 + 1;
}else if(sat.includes('5')) {
count15 = count15 + 1;}
}catch (error) {
break;}}
alert(`難しい：${count5}\nやや難しい：${count4}\n適切：${count3}\nやや簡単：${count2}\n簡単：${count1}\n\n満足：${count15}\nやや満足：${count14}\n普通：${count13}\nやや不満：${count12}\n不満：${count11}`);
