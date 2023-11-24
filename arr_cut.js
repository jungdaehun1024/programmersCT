//배열자르기
// function solution(numbers,num1,num2){
//   const answer = numbers.filter((cur_val,cur_idx)=>{
//     if(cur_idx >=num1 && cur_idx <=num2){
//       return cur_val;
//     }
   
//   })
//  return answer;
// }



function solution(numbers,num1,num2){
  const answer = numbers.filter((cur_val,cur_idx)=>{
    return cur_idx >=num1 && cur_idx <=num2 ;
  })

   return answer;
}
solution([1,2,3,4,5],1,3);