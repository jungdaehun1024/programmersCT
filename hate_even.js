//짝수는 싫어요 
function solution(n){
let arr = []
 for(let i = 0; i< n ;i++){
     arr[i] = i+1;
 }
 
 const answer = arr.map((v)=>{
  if(v % 2 !==0){
    return v;
  }
 }).filter(v=>{
  return v !== undefined;
 })
 
return answer;
}


solution(10);
