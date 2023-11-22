//짝수 홀수 개수 
function solution(num_list){
 const evenOdd_arr= num_list;
 let even = 0;
 let odd = 0 ;
 for(num of evenOdd_arr){
  if(num % 2 === 0){
    even++;
  }else if (num % 2 !==0){
    odd++;
  }
 }

 return [even,odd];
}

console.log(solution([1,3,5,7]));