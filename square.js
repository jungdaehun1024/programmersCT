//제곱수 판별하기
function solution(n){
 const answer = Math.sqrt(n);
 if( answer % 1 ===0){
  return 1;
 }else {
  return 2;
 }
}

console.log(solution(3));

