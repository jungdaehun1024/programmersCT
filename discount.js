function solution(price){
 const pay = price;
 if(pay < 100000){
  return pay;
 }else if ((pay>=100000)&&(pay<300000)){
  return Math.floor(pay-(pay * 0.05));
 }else if((pay>=300000)&&(pay<500000)){
  return Math.floor(pay-(pay* 0.1));
 }else if(pay>=500000){
  return Math.floor(pay-(pay* 0.2));
 }
}

console.log(solution(580000));