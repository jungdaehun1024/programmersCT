//배열 두배만들기
function solution(numbers){
 const answer = numbers.map((cur_val)=>{
  return cur_val *= 2;
 })
   return answer;
}
solution([1, 2, 100, -99, 1, 2, 3]);


