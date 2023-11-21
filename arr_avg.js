//배열의 평균 값 
function solution1(numbers){
  let sum = 0;
 for(elements of numbers){
  sum+= elements;
 }
 return sum/numbers.length;
}




//reduce이용 
function solution2(numbers){
  let sum=0;
 
  const answer = numbers.reduce((acc,curr_value)=>{
   return acc+curr_value;
     
  },0);

  sum+=answer;

  console.log(sum);



 

}

console.log(solution2([1,2,3,4,5,6,7,8,9,10]));