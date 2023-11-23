//자릿수 더하기
function solution(n){
   const num = n.toString(10).split("");
   let sum = 0 ;
   for(item of num){
    sum+=parseInt(item);
  }
  return sum;
}

solution(1234);


