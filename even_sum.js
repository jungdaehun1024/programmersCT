//짝수의 합 
function solution1(num){
  let sum = 0 ;
  for(let i = 0; i<=num ; i++){
    if((i%2)===0){
      sum+=i;
    }
  }

  return sum;
}





function solution2(num){
  const half = Math.floor(num/2);// num이 10 인경우 ==> 짝수의 개수는 절반인 5개이다.
  return half*(1+half); // 등차 수열의 합 
  }

 console.log(solution2(10));